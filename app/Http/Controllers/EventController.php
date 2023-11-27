<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        // Retrieve all events
        $events = Event::all();

        // return $events;

        return response()->json($events);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'location' => 'nullable',
            'attendees' => 'nullable',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
        ]);

        // Get the last event in the database
        $lastEvent = Event::latest('id')->first();

        // Increment the last calendarId to generate a new one
        $data['calendarId'] = 'cal' . ($lastEvent ? ($lastEvent->id + 1) : 1);

        $event = Event::create($data);

        return response()->json($event, 201);
    }

    public function destroy($id, $calendarId)
    {
        $event = Event::where('id', $id)->where('calendarId', $calendarId)->first();

        if ($event) {
            $event->delete();
            return response()->json(['message' => 'Event deleted successfully']);
        } else {
            return response()->json(['message' => 'Event not found'], 404);
        }
    }
}
