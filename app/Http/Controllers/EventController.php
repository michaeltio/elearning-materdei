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

    public function getEvents(Request $request, $classId)
    {
        $events = Event::where('classId', $classId)->get();
        return response()->json($events);
    }

    // public function getEvents(Request $request)
    // {
    //     // Get the authenticated user
    //     $user = auth()->user();

    //     // Check if the user is authenticated
    //     if ($user) {
    //         // User is authenticated, fetch events based on the user's classId
    //         $classId = $user->classId;
    //         $events = Event::where('classId', $classId)->get();
    //         return response()->json($events);
    //     } else {
    //         // User is not authenticated, return an appropriate response or handle accordingly
    //         return response()->json(['error' => 'User not authenticated'], 401);
    //     }
    // }

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

        // Explode the comma-separated classId string into an array
        $classIds = explode(',', $validatedData['classId']);

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
        foreach ($classIds as $classId) {
            $classId = trim($classId); // Trim to remove extra spaces

            // Skip creating a new event for the original classId being updated
            if ($classId != $event->classId) {
                Event::create([
                    'classId' => $classId,
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
