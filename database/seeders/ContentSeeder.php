<?php

namespace Database\Seeders;
use App\Models\Content;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $contents = [
            [
                'meeting_id' => 1,
                'content_title' => 'materi pertemuan 1',
                'content_body' => 'ke donlot pdf',
            ],
            [
                'meeting_id' => 2,
                'content_title' => 'materi pertemuan 2',
                'content_body' => 'ke donlot pdf',
            ],
            [
                'meeting_id' => 3,
                'content_title' => 'materi pertemuan 1',
                'content_body' => 'ke donlot pdf',
            ],
            [
                'meeting_id' => 4,
                'content_title' => 'materi pertemuan 2',
                'content_body' => 'ke donlot pdf',
            ],
         
        ];

        Content::insert($contents);
    }
}
