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
Route::get('/showStudentDetails', [AdminStudentController::class, 'show']);
Route::post('/addNewStudent', [AdminStudentController::class, 'store']);
Route::delete('/deleteStudent', [AdminStudentController::class, 'destroy']);
Route::post('/editStudent', [AdminStudentController::class, 'edit']);

//admin teacher
Route::get('/showAllTeachers', [AdminTeacherController::class, 'index']);
Route::get('/showTeacherDetails', [AdminTeacherController::class, 'show']);
Route::post('/addNewTeacher', [AdminTeacherController::class, 'store']);
Route::delete('/deleteTeacher', [AdminTeacherController::class, 'destroy']);
Route::post('/editTeacher', [AdminTeacherController::class, 'edit']);

//admin attendance
Route::get('/showAttendanceByClass', [HistoryAttendanceController::class, 'index']);
