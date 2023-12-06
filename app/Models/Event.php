<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Carbon\Carbon;

class Event extends Model
{
    use HasFactory;
    protected $fillable = [
        'classId',
        'title',
        'location',
        'attendees',
        'start_date',
        'end_date'
    ];

    /*
    'student_id',
        'class',
        'attendance_date',
        'is_present',
        'is_late',
    */
}
