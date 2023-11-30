<?php

namespace App\Models;

use App\Models\User;
use App\Models\Classe;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserDetail extends Model
{
    use HasFactory;

    public function users(){
        return $this->belongsTo(User::class, 'id', 'userId');
    }

    public function classes(){
        return $this->hasOne(Classe::class, 'classId', 'class');
    }
}
