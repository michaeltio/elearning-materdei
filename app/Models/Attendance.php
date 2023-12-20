<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Carbon\Carbon;

class Attendance extends Model
{
    use HasFactory;
    protected $fillable = [
        'student_id',
        'student_name',
        'class',
        'attendance_date',
        'is_present',
        'is_late',
    ];
}
