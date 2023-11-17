<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/student', function(){
    return Inertia::render('Student/Home', [
        'title' => 'Beranda Siswa',
        'description' => 'Daftar Mata Pelajaran'
    ]);
});

Route::get('/teacher', function(){
    return Inertia::render('Teacher/Home', [
        'title' => 'Beranda Guru',
        'description' => 'Daftar Mata Pelajaran'
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/teacher/attendance', function () {
    return Inertia::render('Teacher/Attendance');
});

Route::get('/averifikasi', function () {
    return Inertia::render('Teacher/AVerifikasi');
});

Route::get('/student/timeline', function () {
    return Inertia::render('Student/Timeline');
});

Route::get('/teacher/timeline', function () {
    return Inertia::render('Teacher/Timeline');
});

Route::get('/teacher/subject/score', function () {
    return Inertia::render('Teacher/TimelineInput');
});

Route::get('/history-presensi', function () {
    return Inertia::render('Student/HistoryPresensi');
});



Route::get('/student/subject', function () {
    return Inertia::render('Student/Subject');
});
Route::get('/teacher/subject', function () {
    return Inertia::render('Student/Subject');
});

Route::get('/murid', function() {
    return inertia::render('Admin/Murid');
});

Route::get('/guru', function() {
    return inertia::render('Admin/Guru');
});

Route::get('/mapel', function() {
    return inertia::render('Admin/MataPelajaran');
});

require __DIR__.'/auth.php';
