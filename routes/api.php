<?php

use App\Http\Controllers\EventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::get('api/scheduleEvent', [EventController::class,'index']);
Route::post('/scheduleEvent', [EventController::class, 'store']);
Route::get('/showEvent/{classId}', [EventController::class, 'getEvents']);
// Route::get('/showEvent', [EventController::class, 'getEvents']);

Route::post('/updateEvent/{id}/{classId}', [EventController::class, 'update']);
Route::delete('/deleteEvent/{id}', [EventController::class, 'destroy']);

// Route::delete('/api/scheduleEvent/{id}/{calendarId}', [EventController::class, 'destroy']);
// get
// delete
// patch
// post, buat nambah data
