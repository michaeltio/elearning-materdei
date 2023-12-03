<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(SubjectTest::class);
        $this->call(ClassesTest::class);
        $this->call(ClassSubjectTest::class);
        $this->call(UserDetailTest::class);
        $this->call(UserTest::class);
        $this->call(SubjectDataTest::class);
    }
}
