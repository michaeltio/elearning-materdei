<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function homeseed(){
        $userId = optional(Auth::user()->userDetails)->userId;
        $subjectsData = Subject::where('teacherId', $userId)->get();
        foreach ($subjectsData as $subjectData) {
            $subjectData->subjectDatas; 
        }
        return Inertia::render('Teacher/Home', [
            'subjectsData' => $subjectsData,
        ]);
    }

    public function show($subjectId){
        $subjectData = (Subject::where('subjectId', $subjectId)->first());
        $subjectData->subjectDatas;
        $userId = optional(Auth::user()->userDetails)->userId;
        if ($userId !== $subjectData->teacherId) {
            abort(403, 'Unauthorized');
        }
        return Inertia::render('Teacher/Subject', [
            'subjectId' => $subjectId,
            'subjectData' => $subjectData,
        ]);
    }

}
