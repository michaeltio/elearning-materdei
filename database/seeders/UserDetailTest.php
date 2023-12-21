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
            'userId' => '1000000003',
            'full_name' => 'Student 3',
            'address' => 'Jl. IDK No. 888',
            'phone_number' => '00182984',
            'role' => 'student',
            'class' => '8F',
            'birthdate' => now()->subYears(12)->subDays(4),
        ]);

        UserDetail::create([
            'userId' => '1000000004',
            'full_name' => 'Student 4',
            'address' => 'Jl. LOL No. 900',
            'phone_number' => '9834567',
            'role' => 'student',
            'class' => '7B',
            'birthdate' => now()->subYears(8)->subDays(7),
        ]);

        UserDetail::create([
            'userId' => '1000000005',
            'full_name' => 'Student 5',
            'address' => 'Jl. WELL No. 012',
            'phone_number' => '97347014',
            'role' => 'student',
            'class' => '9A',
            'birthdate' => now()->subYears(20)->subDays(25),
        ]);

        UserDetail::create([
            'userId' => '2000000001',
            'full_name' => 'Teacher 7A',
            'role' => 'teacher',
            'address' => 'Jl. Guru No. 789',
            'phone_number' => '0215551234',
            'birthdate' => now()->subYears(35)->subDays(10),
        ]);        

        UserDetail::create([
            'userId' => '2000000002',
            'full_name' => 'Teacher 9C',
            'role' => 'teacher',
            'address' => 'Jl. Pendidikan No. 567',
            'phone_number' => '0219876543',
            'birthdate' => now()->subYears(40)->subDays(5),
        ]);

        UserDetail::create([
            'userId' => '2000000003',
            'full_name' => 'Teacher 8F',
            'role' => 'teacher',
            'address' => 'Jl. POLL No. 123',
            'phone_number' => '067948192',
            'birthdate' => now()->subYears(48)->subDays(12),
        ]);

        UserDetail::create([
            'userId' => '2000000004',
            'full_name' => 'Teacher 7B',
            'role' => 'teacher',
            'address' => 'Jl. ALICE No. 145',
            'phone_number' => '9149413442',
            'birthdate' => now()->subYears(35)->subDays(20),
        ]);

        UserDetail::create([
            'userId' => '2000000005',
            'full_name' => 'Teacher 9A',
            'role' => 'teacher',
            'address' => 'Jl. WEW No. 922',
            'phone_number' => '6724563456',
            'birthdate' => now()->subYears(42)->subDays(17),
        ]);
    }
}
