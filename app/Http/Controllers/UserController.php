<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show(){
        $subjectData = (Subject::where('subjectId', $subjectId)->first());
        $subjectData->subjectDatas;
        $userClass = optional(Auth::user()->userDetails)->class;
        if ($userClass !== $subjectData->classSubjects->classId) {
            abort(403, 'Unauthorized'); // or handle the case when the user is not in the correct class
        }
        return Inertia::render('Student/Subject', [
            'subjectId' => $subjectId,
            'subjectData' => $subjectData,
        ]);
    }

}
