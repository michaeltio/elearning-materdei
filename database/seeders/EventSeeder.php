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
                'class' => '7A',
                'title' => 'Jadwal 7a (1)',
                'location' => 'Kelas 7a',
                'attendees' => '7a',
                'start_date' => '2023-12-01T08:00:00',
                'end_date' => '2023-12-01T10:00:00',
            ],
            [
                'class' => '7A',
                'title' => 'Jadwal 7a (2)',
                'location' => 'Kelas 7a',
                'attendees' => '7a',
                'start_date' => '2023-12-01T10:00:00',
                'end_date' => '2023-12-01T12:00:00',
            ],
            [
                'class' => '7A',
                'title' => 'Jadwal 7a (3)',
                'location' => 'Kelas 7a',
                'attendees' => '7a',
                'start_date' => '2023-12-01T13:00:00',
                'end_date' => '2023-12-01T15:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Jadwal 9C (1)',
                'location' => 'Kelas 9C',
                'attendees' => '9C',
                'start_date' => '2023-12-01T07:00:00',
                'end_date' => '2023-12-01T09:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Jadwal9C (2)',
                'location' => 'Kelas9C',
                'attendees' => '7b',
                'start_date' => '2023-12-01T09:00:00',
                'end_date' => '2023-12-01T11:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Jadwal9C (3)',
                'location' => 'Kelas9C',
                'attendees' => '7b',
                'start_date' => '2023-12-01T12:00:00',
                'end_date' => '2023-12-01T14:00:00',
            ],
            [
                'class' => 'teacher',
                'title' => 'Jadwal Guru (1)',
                'location' => 'Kelas 7a',
                'attendees' => '7a',
                'start_date' => '2023-12-06T08:00:00',
                'end_date' => '2023-12-06T10:00:00',
            ],
            [
                'class' => 'teacher',
                'title' => 'Jadwal Guru (2)',
                'location' => 'Kelas 8b',
                'attendees' => '8b',
                'start_date' => '2023-12-06T10:00:00',
                'end_date' => '2023-12-06T12:00:00',
            ],
            [
                'class' => 'teacher',
                'title' => 'Jadwal Guru (3)',
                'location' => 'Kelas 8f',
                'attendees' => '8f',
                'start_date' => '2023-12-06T13:00:00',
                'end_date' => '2023-12-06T15:00:00',
            ],
        ];

        foreach ($events as $eventData) {
            Event::create($eventData);
        }
    }
}
