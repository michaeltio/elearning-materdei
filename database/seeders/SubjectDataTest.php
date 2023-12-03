<?php

namespace Database\Seeders;

use App\Models\SubjectData;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubjectDataTest extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SubjectData::create([
            'subjectId' => 'Mat01',
            'title' => 'Materi 1 mat01',
        ]);

        SubjectData::create([
            'subjectId' => 'Mat01',
            'title' => 'Materi 2 mat01',
        ]);

        SubjectData::create([
            'subjectId' => 'IPA02',
            'title' => 'materi 1 ipa02'
        ]);

        SubjectData::create([
            'subjectId' => 'IPA02',
            'title' => 'materi 2 ipa02'
        ]);

        SubjectData::create([
            'subjectId' => 'IPA06',
            'title' => 'materi 1 ipa06'
        ]);

        SubjectData::create([
            'subjectId' => 'IPA06',
            'title' => 'materi 2 ipa06'
        ]);

        SubjectData::create([
            'subjectId' => 'Mat03',
            'title' => 'materi 1 mat03'
        ]);

        SubjectData::create([
            'subjectId' => 'Mat03',
            'title' => 'materi 2 mat03'
        ]);
    }
}
