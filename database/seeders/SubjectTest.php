<?php

namespace Database\Seeders;

use App\Models\Subject;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubjectTest extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Subject::create([
            'subjectId' => 'Mat01',
            'subjectName' => 'Matematika 7A',
            'teacherId' => '2000000002'
        ]);

        Subject::create([
            'subjectId' => 'IPA02',
            'subjectName' => 'Ilmu Pengetahuan Alam 7A',
            'teacherId' => '2000000001'
        ]);

        Subject::create([
            'subjectId' => 'IPA06',
            'subjectName' => 'Ilmu Pengetahuan Alam 9C',
            'teacherId' => '2000000001'
        ]);

        Subject::create([
            'subjectId' => 'Mat03',
            'subjectName' => 'Matematika 9C',
            'teacherId' => '2000000002'
        ]);
    }
}
