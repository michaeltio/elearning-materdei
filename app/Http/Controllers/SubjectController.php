<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubjectController extends Controller
{
    public function show($subjectId){
        $subjectData = (Subject::where('subjectId', $subjectId)->first());
        $subjectData->subjectDatas;
        $userClass = optional(Auth::user()->userDetails)->class;
        if ($userClass !== $subjectData->classSubjects->classId) {
            abort(403, 'Unauthorized');
        }
        return Inertia::render('Student/Subject', [
            'subjectId' => $subjectId,
            'subjectData' => $subjectData,
        ]);
    }
}
