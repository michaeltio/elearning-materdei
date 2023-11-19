<?php

namespace Database\Seeders;
use App\Models\Subject;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subjects = [
            [
                'subject_id' => 'C101-7A',
                'subject_name' => 'mathematics',
                'class' => '7A',
                'teacher' => 'Ibu Patricia',
            ],
            [
                'subject_id' => 'C101-7C',
                'subject_name' => 'mathematics',
                'class' => '7C',
                'teacher' => 'Ibu Patricia',
            ],
          
            [
                'subject_id' => 'C102-7A',
                'subject_name' => 'history',
                'class' => '7A',
                'teacher' => 'Pak Hydayanto',
            ],
            [
                'subject_id' => 'C102-7C',
                'subject_name' => 'history',
                'class' => '7C',
                'teacher' => 'Pak Hydayanto',
            ],
         
        ];

        Subject::insert($subjects);
    }
}
