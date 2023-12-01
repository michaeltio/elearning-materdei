<?php

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use App\Models\Event;
// use Carbon\Carbon;

// class EventController extends Controller
// {
//     //
//     public function index()
//     {
//         // Retrieve all events
//         $events = Event::all();

//         // return $events;

//         return response()->json($events);
//     }

//     public function store(Request $request)
//     {
//         $validatedData = $request->validate([
//             'classId' => 'required|string',
//             'title' => 'required|string',
//             'location' => 'nullable|string',
//             'attendees' => 'nullable|string',
//             'start_date' => 'required|date',
//             'end_date' => 'required|date',
//         ]);

//         $event = Event::create($validatedData);

//         return response()->json(['message' => 'Event created successfully', 'event' => $event]);
//     }
// }

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

    public function getEvents(Request $request, $classId)
    {
        $events = Event::where('classId', $classId)->get();
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
            'classId' => 'required|string',
            'title' => 'required|string',
            'location' => 'nullable|string',
            'attendees' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
        ]);

        // Explode the comma-separated classId string into an array
        $classIds = explode(',', $validatedData['classId']);

        // Iterate through each classId and create a new event row
        foreach ($classIds as $classId) {
            $eventData = [
                'classId' => trim($classId), // Trim to remove extra spaces
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
            'classId' => 'required|string',
            'title' => 'required|string',
            'location' => 'nullable|string',
            'attendees' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
        ]);

        $event = Event::find($id);

        if (!$event) {
            return response()->json(['error' => 'Event not found'], 404);
        }

        $event->update([
            'classId' => $validatedData['classId'],
            'title' => $validatedData['title'],
            'location' => $validatedData['location'],
            'attendees' => $validatedData['attendees'],
            'start_date' => Carbon::parse($validatedData['start_date']),
            'end_date' => Carbon::parse($validatedData['end_date']),
        ]);

        return response()->json(['message' => 'Event updated successfully']);
    }
}
