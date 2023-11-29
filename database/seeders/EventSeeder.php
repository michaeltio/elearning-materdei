<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Event;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Event::create([
            'classId' => '7c',
            'title' => 'event',
            'location' => 'UMN',
            'attendees' => '7',
            'start_date' => '2023-11-26T09:00:00',
            'end_date' => '2023-11-26T12:00:00',
        ]);
    }
}
