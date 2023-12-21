<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Carbon\Carbon;

class Event extends Model
{
    use HasFactory;
    protected $fillable = [
        'class',
        'teacherId',
        'title',
        'location',
        'attendees',
        'start_date',
        'end_date'
    ];
}
