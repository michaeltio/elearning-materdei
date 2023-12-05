<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function seedTeacherHome(){
        $userId = optional(Auth::user()->userDetails)->userId;
        $subjectsData = Subject::where('teacherId', $userId)->get();
        foreach ($subjectsData as $subjectData) {
            $subjectData->subjectDatas; 
        }
        return Inertia::render('Teacher/Home', [
            'subjectsData' => $subjectsData,
        ]);
    }

    public function seedTeacherSubject($subjectId){
        $subjectData = (Subject::where('subjectId', $subjectId)->first());
        $subjectData->subjectDatas;
        $userId = optional(Auth::user()->userDetails)->userId;
        if ($userId !== $subjectData->teacherId) {
            abort(403, 'Unauthorized');
        }
        return Inertia::render('Teacher/Subject', [
            'subjectData' => $subjectData,
        ]);
    }

    public function seedTeacherSubjectAdd($subjectId){
        $subjectData = (Subject::where('subjectId', $subjectId)->first());
        $subjectData->subjectDatas;
        $userId = optional(Auth::user()->userDetails)->userId;
        if ($userId !== $subjectData->teacherId) {
            abort(403, 'Unauthorized');
        }
        return Inertia::render('Teacher/AddMaterial', [
            'subjectData' => $subjectData,
        ]);
    }

    public function seedTeacherSubjectEdit($subjectId, $id){
        $subjectData = (Subject::where('subjectId', $subjectId)->first());
        $subjectData->subjectDatas;
        $userId = optional(Auth::user()->userDetails)->userId;
        if ($userId !== $subjectData->teacherId) {
            abort(403, 'Unauthorized');
        }
        $subjectDetails = $subjectData->subjectDatas->firstWhere('id', $id);
        return Inertia::render('Teacher/EditMaterial', [
            'subjectId' => $id,
            'subjectDetails' => $subjectDetails,
        ]);
    }

}
