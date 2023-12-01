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
        $events = [
            [
                'classId' => '7a',
                'title' => 'Jadwal 7a (1)',
                'location' => 'Kelas 7a',
                'attendees' => '7a',
                'start_date' => '2023-12-01T08:00:00',
                'end_date' => '2023-12-01T10:00:00',
            ],
            [
                'classId' => '7a',
                'title' => 'Jadwal 7a (2)',
                'location' => 'Kelas 7a',
                'attendees' => '7a',
                'start_date' => '2023-12-01T10:00:00',
                'end_date' => '2023-12-01T12:00:00',
            ],
            [
                'classId' => '7a',
                'title' => 'Jadwal 7a (3)',
                'location' => 'Kelas 7a',
                'attendees' => '7a',
                'start_date' => '2023-12-01T13:00:00',
                'end_date' => '2023-12-01T15:00:00',
            ],
            [
                'classId' => '7b',
                'title' => 'Jadwal 7b (1)',
                'location' => 'Kelas 7b',
                'attendees' => '7b',
                'start_date' => '2023-12-01T07:00:00',
                'end_date' => '2023-12-01T09:00:00',
            ],
            [
                'classId' => '7b',
                'title' => 'Jadwal 7b (2)',
                'location' => 'Kelas 7b',
                'attendees' => '7b',
                'start_date' => '2023-12-01T09:00:00',
                'end_date' => '2023-12-01T11:00:00',
            ],
            [
                'classId' => '7b',
                'title' => 'Jadwal 7b (3)',
                'location' => 'Kelas 7b',
                'attendees' => '7b',
                'start_date' => '2023-12-01T12:00:00',
                'end_date' => '2023-12-01T14:00:00',
            ],
        ];

        foreach ($events as $eventData) {
            Event::create($eventData);
        }
    }
}
