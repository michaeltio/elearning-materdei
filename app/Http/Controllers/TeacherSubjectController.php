<?php

namespace App\Http\Controllers;

use App\Models\SubjectData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeacherSubjectController extends Controller
{
    public function store(Request $request){
        $subjectDetail = new SubjectData;
        $subjectDetail->subjectId = $request->input('subjectId');
        $subjectDetail->title = $request->input('title');
        $subjectDetail->desc = $request->input('desc');
        if($request->hasFile('file')){
            $originalFilename = $request->file('file')->getClientOriginalName();
            $request->file('file')->storeAs('public/uploadedfile', $originalFilename);
            $subjectDetail->file = $originalFilename;
        }
        $subjectDetail->save();
    }

    public function edit(Request $request){
        $subjectDetail = SubjectData::find($request->input('id'));
        $subjectDetail->title = $request->input('title');
        $subjectDetail->desc = $request->input('desc');
        if($request->hasFile('file')){
            $originalFilename = $request->file('file')->getClientOriginalName();
            $request->file('file')->storeAs('public/uploadedfile', $originalFilename);
            $subjectDetail->file = $originalFilename;
        }
        $subjectDetail->save();
    }

    public function delete($id){
        SubjectData::destroy($id);
    }
}
