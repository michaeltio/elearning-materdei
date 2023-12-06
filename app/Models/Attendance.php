<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Carbon\Carbon;

class Event extends Model
{
    use HasFactory;
    protected $fillable = [
        'student_id',
        'class',
        'attendance_date',
        'is_present',
        'is_late',
    ];
}
