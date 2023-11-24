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
            'id' => '0000000001',
            'full_name' => 'Admin',
        ]);

        UserDetail::create([
            'id' => '1000000001',
            'full_name' => 'Michael Tio',
        ]);

        UserDetail::create([
            'id' => '1000000002',
            'full_name' => 'Abigael Xyla',
        ]);

        UserDetail::create([
            'id' => '2000000001',
            'full_name' => 'Ms. Santi',
        ]);

        UserDetail::create([
            'id' => '2000000002',
            'full_name' => 'Mr. Santo',
        ]);
    }
}
