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

        return view('events.index', compact('events'));
    }

    public function create()
    {
        // Return the view for creating a new event
        return view('events.create');
    }

    public function store(Request $request)
    {
        // Validate and store the new event
        $request->validate([
            'title' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            // Add other validation rules as needed
        ]);

        Event::create($request->all());

        return redirect()->route('events.index');
    }
}
