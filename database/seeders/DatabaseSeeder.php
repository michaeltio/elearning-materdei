<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
    
        $this->call(UserTest::class);
        $this->call(SubjectSeeder::class);
        $this->call(MeetingSeeder::class);
        $this->call(ContentSeeder::class);
        $this->call(StudentSeeder::class);

        $this->command->info('User table seeded!');
    }
}
