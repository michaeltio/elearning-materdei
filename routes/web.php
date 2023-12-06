<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubjectController;

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

Route::middleware('redirectToLogin')->get('/', function () {
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

    //student
    Route::middleware(['auth', 'verified', 'student'])->group(function () {
        Route::get('/student', function () {
            optional(optional(optional(Auth::user()->userDetails)->classes)->classSubjects)->load('subjectDetails');
            return Inertia::render('Student/Home');
        })->name('studentHome');

        Route::get('/student/attendance', function () {
            optional(Auth::user()->userDetails);
            return Inertia::render('Student/Attendance');
        })->name('studentAttendance');

        Route::get(
            '/student/subject/{subjectId}',
            [SubjectController::class, 'show']
        )->name('studentSubject');

        Route::get('/student/schedule', function () {
            optional(Auth::user()->userDetails);
            return Inertia::render('Student/Schedule');
        })->name('studentSchedule');
    });
    //teacher
    Route::middleware(['auth', 'verified', 'teacher'])->group(function () {
        Route::get('/teacher', [UserController::class, 'homeseed'])->name('teacherHome');

        Route::get(
            '/teacher/subject/{subjectId}',
            [UserController::class, 'show']
        )->name('teacherSubject');

        Route::get('/teacher/schedule', function () {
            optional(Auth::user()->userDetails);
            return Inertia::render('Teacher/Schedule');
        })->name('teacherSchedule');
    });
    //admin
    Route::middleware(['auth', 'verified', 'admin'])->group(function () {
        Route::get('/admin', function () {
            optional(Auth::user()->userDetails);
            return Inertia::render('Admin/Home');
        })->name('adminHome');
        Route::get('/admin/student-list', function () {
            optional(Auth::user()->userDetails);
            return Inertia::render('Admin/StudentList');
        })->name('adminStudentList');
        Route::get('/admin/teacher-list', function () {
            optional(Auth::user()->userDetails);
            return Inertia::render('Admin/TeacherList');
        })->name('adminTeacherList');
        Route::get('/admin/schedule', function () {
            optional(Auth::user()->userDetails);
            return Inertia::render('Admin/Schedule');
        })->name('adminSchedule');
        Route::get('/admin/history-attendance', function () {
            optional(Auth::user()->userDetails);
            return Inertia::render('Admin/HistoryAttendance');
        })->name('adminHistoryAttendance');
        Route::get('/admin/subject-list', function () {
            optional(Auth::user()->userDetails);
            return Inertia::render('Admin/SubjectList');
        })->name('adminSubjectList');
        Route::get('/admin/student-list/{classTitle}', function ($classTitle) {
            optional(Auth::user()->userDetails);
            return Inertia::render('Admin/HistoryAttendancePreview', ['classTitle' => $classTitle]);
        })->name('adminAttendancePreview');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
