<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubjectData extends Model
{
    use HasFactory;

    public function Subjects(){
        return $this->belongsTo(Subject::class, 'subjectId', 'subjectId');
    }
}
