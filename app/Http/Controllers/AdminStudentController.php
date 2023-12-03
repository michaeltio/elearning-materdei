<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminStudentController extends Controller
{
    public function index()
    {
        $users = User::with('userDetails')->get();
        return response()->json($users);
    }
}
