<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Subject;
use App\Models\UserDetail;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserDetailTest extends Seeder
{
    /**
     * Run the database seeds.
     */
    
    public function run(): void
    {
        UserDetail::create([
            'userId' => '0000000001',
            'full_name' => 'Admin User',
            'role' => 'admin',
            'birthdate' => now()->subYears(30)->subDays(15),
        ]);

        UserDetail::create([
            'userId' => '1000000001',
            'full_name' => 'Student 1',
            'address' => 'Jl. Apalah No. 123',
            'phone_number' => '021774400',
            'role' => 'student',
            'class' => '7A',
            'birthdate' => now()->subYears(14)->subDays(30),
        ]);

        UserDetail::create([
            'userId' => '1000000002',
            'full_name' => 'Student 2',
            'address' => 'Jl. Gatau No. 456',
            'phone_number' => '02132432',
            'role' => 'student',
            'class' => '9C',
            'birthdate' => now()->subYears(16)->subDays(20),
        ]);

        UserDetail::create([
            'userId' => '2000000001',
            'full_name' => 'Teacher 1',
            'role' => 'teacher',
            'address' => 'Jl. Guru No. 789',
            'phone_number' => '0215551234',
            'birthdate' => now()->subYears(35)->subDays(10),
        ]);

        UserDetail::create([
            'userId' => '2000000002',
            'full_name' => 'Teacher 2',
            'role' => 'teacher',
            'address' => 'Jl. Pendidikan No. 567',
            'phone_number' => '0219876543',
            'birthdate' => now()->subYears(40)->subDays(5),
        ]);
    }
}
