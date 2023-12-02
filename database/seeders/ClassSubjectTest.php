<?php

namespace Database\Seeders;

use App\Models\ClassSubject;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClassSubjectTest extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ClassSubject::create([
            'classId' => '7A',
            'subjectId' => 'Mat01',
        ]);

        ClassSubject::create([
            'classId' => '7A',
            'subjectId' => 'IPA02',
        ]);

        ClassSubject::create([
            'classId' => '9C',
            'subjectId' => 'IPA06',
        ]);

        ClassSubject::create([
            'subjectId' => 'Mat03',
            'classId' => '9C',
        ]);
    }
}
