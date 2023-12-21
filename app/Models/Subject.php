<?php

namespace App\Models;

use App\Models\ClassSubject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Subject extends Model
{
    use HasFactory;
    protected $primaryKey = 'subjectId';
    public $incrementing = false;
    public function classSubjects()
    {
        return $this->belongsTo(ClassSubject::class, 'subjectId', 'subjectId');
    }

    public function SubjectDatas()
    {
        return $this->hasMany(SubjectData::class, 'subjectId', 'subjectId');
    }
}
