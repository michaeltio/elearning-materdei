<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\UserDetail;

class UserDetailTest extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserDetail::create([
            'userId' => '0000000001',
            'full_name' => 'Admin',
            'role' => 'admin',
        ]);

        UserDetail::create([
            'userId' => '1000000001',
            'full_name' => 'Michael Tio',
            'address' => 'Jl.apalah',
            'phone_number' => '021774400',
            'role' => 'student',
            'class' => '7A'
        ]);

        UserDetail::create([
            'userId' => '1000000002',
            'full_name' => 'Abigael Xyla',
            'address' => 'Jl.gatau',
            'phone_number' => '02132432',
            'role' => 'student',
            'class' => '9C'
        ]);

        UserDetail::create([
            'userId' => '2000000001',
            'full_name' => 'Ms. Santi',
            'role' => 'teacher',
        ]);

        UserDetail::create([
            'userId' => '2000000002',
            'full_name' => 'Mr. Santo',
            'role' => 'teacher',
        ]);
    }
}
