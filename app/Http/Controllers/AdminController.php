<?php

namespace App\Http\Controllers;

use App\Models\ClassSubject;
use Inertia\Inertia;
use App\Models\Subject;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function subjectsSeeder($class){
        $subjectsData = Subject::whereHas('classSubjects', function ($query) use ($class) {
            $query->where('classId', $class);
        })->with('subjectDatas')->get();
    
        return Inertia::render('Admin/SubjectListPreview', [
            'subjectsData' => $subjectsData,
        ]);
    }

    public function subjectSeeder($subjectId){
        $subjectData = (Subject::where('subjectId', $subjectId)->first());
        $subjectData->subjectDatas;
        return Inertia::render('Admin/Subject', [
            'subjectData' => $subjectData,
        ]);
    }
}
