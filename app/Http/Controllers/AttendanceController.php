<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//model 
use App\Models\Attendance;

class AttendanceController extends Controller
{
    //untuk narik data tentang kehadiran user
    public function show(Request $request){
        $studentId = $request->input('student_id');
        $date = $request->input('date');

        $attendanceRecord = Attendance::where('student_id', $studentId)
        ->where('attendance_date', $date)
        ->first();


        return response()->json(['student' => $attendanceRecord]);
        
    }

    //untuk update kehadiran user
    public function update(){

    }
}
