<?php

namespace Database\Seeders;
use App\Models\Student;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $student = [
            [
                'nis' => '0000001',
                'student_name' => 'Budiarto Herman',
            ],
            [
                'nis' => '0000002',
                'student_name' => 'Gunawan Agus',
            ],
            [
                'nis' => '0000003',
                'student_name' => 'Anggriawan Judi',
            ],
            [
                'nis' => '0000004',
                'student_name' => 'Febby Amur',
            ],
         
        ];

        Student::insert($student);
    }
}
