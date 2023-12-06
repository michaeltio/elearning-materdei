<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\User;
use Illuminate\Http\Request;

class HistoryAttendanceController extends Controller
{
    public function index()
    {
        $users = Attendance::all();
        return response()->json($users);
    }
}
