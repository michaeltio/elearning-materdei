<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use Carbon\Carbon;

class EventController extends Controller
{
    /**
     * Display a listing of the events.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Retrieve all events
        $events = Event::all();

        // Return the events as JSON response
        return response()->json($events);
    }

    public function getEvents(Request $request, $class)
    {
        $events = Event::where('class', $class)->get();
        return response()->json($events);
    }

    /**
     * Store a newly created event in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'class' => 'required|string',
            'title' => 'required|string',
            'location' => 'nullable|string',
            'attendees' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
        ]);

        // Explode the comma-separated classId string into an array
        $classes = explode(',', $validatedData['class']);

        // Iterate through each classId and create a new event row
        foreach ($classes as $class) {
            $eventData = [
                'class' => trim($class), // Trim to remove extra spaces
                'title' => $validatedData['title'],
                'location' => $validatedData['location'],
                'attendees' => $validatedData['attendees'],
                'start_date' => Carbon::parse($validatedData['start_date']),
                'end_date' => Carbon::parse($validatedData['end_date']),
            ];

            $event = Event::create($eventData);
        }

        return response()->json(['message' => 'Events created successfully']);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'class' => 'required|string',
            'title' => 'required|string',
            'location' => 'nullable|string',
            'attendees' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
        ]);

        // Explode the comma-separated classId string into an array
        $classes = explode(',', $validatedData['class']);

        // Find the existing event
        $event = Event::find($id);

        if (!$event) {
            return response()->json(['error' => 'Event not found'], 404);
        }

        // Update the existing event
        $event->update([
            'title' => $validatedData['title'],
            'location' => $validatedData['location'],
            'attendees' => $validatedData['attendees'],
            'start_date' => Carbon::parse($validatedData['start_date']),
            'end_date' => Carbon::parse($validatedData['end_date']),
        ]);

        // Iterate through each additional classId
        foreach ($classes as $class) {
            $class = trim($class); // Trim to remove extra spaces

            // Skip creating a new event for the original classId being updated
            if ($class != $event->class) {
                Event::create([
                    'class' => $class,
                    'title' => $validatedData['title'],
                    'location' => $validatedData['location'],
                    'attendees' => $validatedData['attendees'],
                    'start_date' => Carbon::parse($validatedData['start_date']),
                    'end_date' => Carbon::parse($validatedData['end_date']),
                ]);
            }
        }

        return response()->json(['message' => 'Event updated successfully']);
    }

    public function destroy($id)
    {
        $event = Event::find($id);

        if (!$event) {
            return response()->json(['error' => 'Event not found'], 404);
        }

        $event->delete();

        return response()->json(['message' => 'Event deleted successfully']);
    }
}
