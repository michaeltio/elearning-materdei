<?php

namespace App\Http\Controllers;

use App\Models\ClassSubject;
use App\Models\Subject;
use Illuminate\Http\Request;

class AdminSubjectController extends Controller
{
<<<<<<< Updated upstream
    public function store(Request $request){
=======
    public function show(Request $request)
    {
        $subject_id = $request->input('subjectId');
        $subject = Subject::where('subjectId', $subject_id)->first();

        return response()->json($subject);
    }

    public function store(Request $request)
    {
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
        $classSubject = ClassSubject::find('classId', $request->input('subjectId'));
        $classSubject->classId = $request->input('classId');
        $classSubject->subjectId = $request->input('subjectId');
        $classSubject->save();
=======
        return response()->json(['msg' => "Succesfull"]);
        // $class_id = $request->input('classId');
        // $classSubject = ClassSubject::where('subjectId', $subject_id)->first();
        // $classSubject->classId = $request->input('classId');
        // $classSubject->save();
>>>>>>> Stashed changes
    }

    public function delete($subjectId){
        ClassSubject::destroy('subjectId', $subjectId);
        Subject::destroy($subjectId);
    }
}
