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
    public function editAttendance(Request $request)
    {
        $student_id = $request->input('student_id');
        $date = $request->input('date');
        $type = $request->input('type');
        $record = Attendance::where('student_id', $student_id)
            ->where('attendance_date', $date)
            ->first();
        if ($type == 'is_present') {
            $record->is_present = !$record->is_present;
        } else if ($type == 'is_late') {
            $record->is_late = !$record->is_late;
        }
        $record->save();
        return response()->json(['msg' => $student_id]);
    }
}
