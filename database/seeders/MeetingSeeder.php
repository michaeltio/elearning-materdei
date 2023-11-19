<?php

namespace Database\Seeders;
use App\Models\Meeting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MeetingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    
        $meetings = [
            [
                'subject_id' => 'C101-7A',
                'meeting_title' => 'Pertemuan 1',
            ],
            [
                'subject_id' => 'C101-7A',
                'meeting_title' => 'Pertemuan 2',
            ],
            [
                'subject_id' => 'C102-7A',
                'meeting_title' => 'Pertemuan 1',
            ],
            [
                'subject_id' => 'C102-7A',
                'meeting_title' => 'Pertemuan 2',
            ],
         
        ];

        Meeting::insert($meetings);
    }
}
