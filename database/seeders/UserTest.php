<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTest extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'email' => 'admin@sch.id',
            'password' => Hash::make('password'),
            'role' => 'admin',
        ]);

        for($i = 1; $i <= 2; $i++){
            User::create([
                'email' => "$i@student.sch.id",
                'password' => Hash::make("password"),
                'role' => 'student'
            ]);
        }

        for($i = 1; $i <= 2; $i++){
            User::create([
                'email' => "$i@teacher.sch.id",
                'password' => Hash::make("password"),
                'role' => 'teacher',
            ]);
        }
    }
}
