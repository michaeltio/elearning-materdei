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
        $validatedData = $request->validate([
            'classId' => 'required|string',
            'title' => 'required|string',
            'location' => 'nullable|string',
            'attendees' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
        ]);

        $event = Event::create($validatedData);

        return response()->json(['message' => 'Event created successfully', 'event' => $event]);
    }

    // public function destroy($id, $calendarId)
    // {
    //     $event = Event::where('id', $id)->where('calendarId', $calendarId)->first();

    //     if ($event) {
    //         $event->delete();
    //         return response()->json(['message' => 'Event deleted successfully']);
    //     } else {
    //         return response()->json(['message' => 'Event not found'], 404);
    //     }
    // }
}
