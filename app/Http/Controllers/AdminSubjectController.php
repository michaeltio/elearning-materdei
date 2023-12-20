<?php

namespace App\Http\Controllers;

use App\Models\ClassSubject;
use App\Models\Subject;
use Illuminate\Http\Request;

class AdminSubjectController extends Controller
{
    public function store(Request $request){
        $subject = new Subject;
        $subject->subjectId = $request->input('subjectId');
        $subject->subjectName = $request->input('subjectName');
        $subject->teacherId = $request->input('teacherId');
        $subject->save();

        $classSubject = new ClassSubject;
        $classSubject->classId = $request->input('classId');
        $classSubject->subjectId = $request->input('subjectId');
        $classSubject->save();
    }

    public function edit(Request $request){
        $subject = Subject::find($request->input('subjectId'));
        $subject->subjectId = $request->input('subjectId');
        $subject->subjectName = $request->input('subjectName');
        $subject->teacherId = $request->input('teacherId');
        $subject->save();

        $classSubject = ClassSubject::find('classId', $request->input('subjectId'));
        $classSubject->classId = $request->input('classId');
        $classSubject->subjectId = $request->input('subjectId');
        $classSubject->save();
    }

    public function delete($subjectId){
        ClassSubject::destroy('subjectId', $subjectId);
        Subject::destroy($subjectId);
    }
}
