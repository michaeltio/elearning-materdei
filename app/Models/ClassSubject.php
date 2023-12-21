<?php

namespace App\Models;

use App\Models\Classe;
use App\Models\Subject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ClassSubject extends Model
{
    use HasFactory;
   
    public function subjectDetails()
    {
        return $this->hasOne(Subject::class, 'subjectId', 'subjectId');
    }

    public function classes()
    {
        return $this->hasOne(Classe::class, 'classId', 'classId');
    }
}
