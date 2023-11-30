<?php

namespace App\Models;

use App\Models\UserDetail;
use App\Models\ClassSubject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Classe extends Model
{
    use HasFactory;

    public function userDetails(){
        return $this->belongsToMany(UserDetail::class, 'class', 'classId');
    }

    public function classSubjects(){
        return $this->hasMany(ClassSubject::class, 'classId', 'classId');
    }
}
