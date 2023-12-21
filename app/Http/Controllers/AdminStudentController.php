<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserDetail;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminStudentController extends Controller
{
    public function index()
    {
        $users = User::with('userDetails')->get();
        return response()->json($users);
    }

    // public function index()
    // {
    //     $users = User::with('userDetails')->get();
    //     return Inertia::render('Admin/StudentList',['filteredData' => $users]);
    // }

    public function show(Request $request)
    {
        $studentId = $request->input('student_id');
        $student = User::with('userDetails')->find($studentId);
        return response()->json($student);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nis' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6',
            'full_name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'birthdate' => 'required|date',
            'class' => 'required|string|max:255',
        ]);

        return DB::transaction(function () use ($request) {
            //bikin user detail dulu
            $userDetail = UserDetail::create([
                'userId' => $request->input('nis'),
                'full_name' => $request->input('full_name'),
                'address' => $request->input('address'),
                'phone_number' => $request->input('phone_number'),
                'birthdate' => $request->input('birthdate'),
                'class' => $request->input('class'),
                'role' => "student",
            ]);
            //baru bikin referencenya
            $user = new User;
            $user->setAttribute('id', $userDetail->userId);
            $user->setAttribute('email', $request->input('email'));
            $user->setAttribute('password', bcrypt($request->input('password')));
            $user->save();
            // return response()->json(['msg' => $request->input('nis')]);

            return response()->json(['message' => 'User created successfully', 'user' => $user, 'user_detail' => $userDetail]);
        });
    }

    public function destroy(Request $request)
    {
        $nis = $request->input('nis');

        return DB::transaction(function () use ($nis) {
            // Find the user by id
            $user = User::find($nis);

            if ($user) {
                // Find the user detail by userId
                $userDetail = UserDetail::where('userId', $nis);

                if ($userDetail) {
                    $user->delete();
                    $userDetail->delete();
                    // return response()->json("Berhasil bang");

                    return response()->json(['id' => $nis, 'msg' => 'Record deleted successfully']);
                } else {
                    return response()->json(['msg' => 'User detail not found'], 404);
                }
            } else {
                return response()->json(['msg' => 'User not found'], 404);
            }
        });
    }

    public function edit(Request $request)
    {
        $request->validate([
            'nis' => 'required|string',
            'email' => 'required|email',
            'full_name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'birthdate' => 'required|date',
            'class' => 'required|string|max:255',
        ]);

        return DB::transaction(function () use ($request) {
            // Find the UserDetail by id
            $userDetail = UserDetail::where('userId', $request->input('nis'));

            // Check if the UserDetail exists
            if (!$userDetail) {
                return response()->json(['message' => 'UserDetail not found'], 404);
            }

            // Update the UserDetail
            $userDetail->update([
                'full_name' => $request->input('full_name'),
                'address' => $request->input('address'),
                'phone_number' => $request->input('phone_number'),
                'birthdate' => $request->input('birthdate'),
                'class' => $request->input('class'),
            ]);

            // Find the User by id
            $user = User::find($request->input('nis'));

            // Check if the User exists
            if (!$user) {
                return response()->json(['message' => 'User not found'], 404);
            }

            // Update the User
            $user->update([
                'email' => $request->input('email'),
            ]);

            return response()->json(['message' => 'User details updated successfully', 'user' => $user, 'user_detail' => $userDetail]);
        });
    }
}
