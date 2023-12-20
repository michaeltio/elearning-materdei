<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Attendance;

//model 
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AttendanceController extends Controller
{
    //untuk narik data tentang kehadiran user
    public function show(Request $request)
    {
        $studentId = $request->input('student_id');
        $date = $request->input('date');

        $attendanceRecord = Attendance::where('student_id', $studentId)
            ->where('attendance_date', $date)
            ->orderBy('created_at', 'desc')
            ->first();

        return response()->json($attendanceRecord);
    }

    //untuk update kehadiran user
    public function update(Request $request)
    {
        $studentId = $request->input('student_id');
        $date = $request->input('date');
        $isLate = $request->input('isLate');

        $attendanceRecord = Attendance::where('student_id', $studentId)
            ->where('attendance_date', $date)
            ->orderBy('created_at', 'desc')
            ->firstOrFail();

        $attendanceRecord->is_present = true;
        $attendanceRecord->is_late = $isLate;
        $attendanceRecord->save();

        return response()->json($attendanceRecord);
    }
}
