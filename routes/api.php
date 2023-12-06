<?php

use App\Http\Controllers\EventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//model
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\AdminStudentController;
use App\Http\Controllers\AdminTeacherController;
use App\Http\Controllers\HistoryAttendanceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Schedule
Route::post('/scheduleEvent', [EventController::class, 'store']);
Route::get('/showEvent/{class}', [EventController::class, 'getEvents']);
// Route::get('/showEventTeacher/{role}', [EventController::class, 'getEventsTeacher']);

Route::post('/updateEvent/{id}/{class}', [EventController::class, 'update']);
Route::delete('/deleteEvent/{id}', [EventController::class, 'destroy']);
// Schedule

Route::get('/showAttendance', [AttendanceController::class, 'show']);
Route::post('/updateAttendance', [AttendanceController::class, 'update']);

//admin student
Route::get('/showAllStudents', [AdminStudentController::class, 'index']);

//admin teacher
Route::get('/showAllTeachers', [AdminTeacherController::class, 'index']);

//admin attendance
Route::get('/showAttendanceByClass', [HistoryAttendanceController::class, 'index']);
