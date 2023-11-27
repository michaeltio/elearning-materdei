<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        optional(Auth::user()->userDetails);
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/student', function () {
        optional(Auth::user()->userDetails);
        return Inertia::render('Student/Home');
    })->name('studentHome');

    Route::get('/student/attendance', function () {
        optional(Auth::user()->userDetails);
        return Inertia::render('Student/Attendance');
    })->name('studentAttendance');

    Route::get('/student/subject', function () {
        optional(Auth::user()->userDetails);
        return Inertia::render('Student/Subject');
    })->name('studentSubject');
});

Route::get('/student/schedule', function () {
    return Inertia::render('Teacher/Schedule');
})->middleware(['auth', 'verified'])->name('studentSchedule');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
