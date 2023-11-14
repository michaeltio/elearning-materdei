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

Route::get('/siswa', function(){
    return Inertia::render('Student/Beranda', [
        'title' => 'Beranda Siswa',
        'description' => 'Daftar Mata Pelajaran'
    ]);
});

Route::get('/guru', function(){
    return Inertia::render('Guru/Beranda', [
        'title' => 'Beranda Guru',
        'description' => 'Daftar Mata Pelajaran'
    ]);
});

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
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

Route::get('/absensi', function () {
    return Inertia::render('Guru/Absensi');
});

Route::get('/averifikasi', function () {
    return Inertia::render('Guru/AVerifikasi');
});

require __DIR__.'/auth.php';
