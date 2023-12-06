<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminTeacherController extends Controller
{
    public function index()
    {
        $users = User::with('userDetails')->get();
        return response()->json($users);
    }
    public function show(Request $request)
    {
        $teacherId = $request->input('teacher_id');
        $teacher = User::with('userDetails')->find($teacherId);
        return response()->json($teacher);
    }
    public function store(Request $request)
    {
        $request->validate([
            'nis' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|min:6',
            'full_name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'birthdate' => 'required|date',

        ]);

        return DB::transaction(function () use ($request) {
            //bikin user detail dulu
            $userDetail = UserDetail::create([
                'userId' => $request->input('teacher_id'),
                'full_name' => $request->input('full_name'),
                'address' => $request->input('address'),
                'phone_number' => $request->input('phone_number'),
                'birthdate' => $request->input('birthdate'),
                // 'class' => $request->input('class'),
                'role' => "teacher",
            ]);

            //baru bikin referencenya
            $user = new User;
            $user->setAttribute('id', $userDetail->userId);
            $user->setAttribute('email', $request->input('email'));
            $user->setAttribute('password', bcrypt($request->input('password')));
            $user->save();

            return response()->json(['message' => 'User created successfully', 'user' => $user, 'user_detail' => $userDetail]);
        });
    }
    public function destroy(Request $request)
    {
        $teacherId = $request->input('teacher_id');

        return DB::transaction(function () use ($teacherId) {
            // Find the user by id
            $user = User::find($teacherId);

            if ($user) {
                // Find the user detail by userId
                $userDetail = UserDetail::where('userId', $teacherId);

                if ($userDetail) {
                    $user->delete();
                    $userDetail->delete();
                    // return response()->json("Berhasil bang");

                    return response()->json(['id' => $teacherId, 'msg' => 'Record deleted successfully']);
                } else {
                    return response()->json(['msg' => 'User detail not found'], 404);
                }
            } else {
                return response()->json(['msg' => 'User not found'], 404);
            }
        });
    }
    public function edit()
    {
        return response()->json("edit");
    }
}
