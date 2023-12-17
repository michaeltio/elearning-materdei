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
            'id' => '0000000001',
            'email' => 'admin@sch.id',
            'password' => Hash::make('password'),
        ]);

        for($i = 1; $i <= 5; $i++){
            User::create([
                'id' => "100000000$i",
                'email' => "$i@student.sch.id",
                'password' => Hash::make("password"),
            ]);
        }

        for($i = 1; $i <= 5; $i++){
            User::create([
                'id' => "200000000$i",
                'email' => "$i@teacher.sch.id",
                'password' => Hash::make("password"),
            ]);
        }
    }
}
