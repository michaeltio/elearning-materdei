<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Event;
use Carbon\Carbon;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $startDate = Carbon::parse('2024-01-15');
        $endDate = Carbon::parse('2024-05-17');

        $teacherId = '2000000001';

        $eventsData = [
            // break
            [
                'class' => '7A',
                'title' => 'Istirahat',
                'location' => 'Kelas 7A',
                'attendees' => '7A',
                'start_time' => '12:00:00',
                'end_time' => '13:00:00',
            ],
            [
                'class' => '7B',
                'title' => 'Istirahat',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '12:00:00',
                'end_time' => '13:00:00',
            ],
            [
                'class' => '8F',
                'title' => 'Istirahat',
                'location' => 'Kelas 8F',
                'attendees' => '8F',
                'start_time' => '12:00:00',
                'end_time' => '13:00:00',
            ],
            [
                'class' => '9A',
                'title' => 'Istirahat',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '12:00:00',
                'end_time' => '13:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Istirahat',
                'location' => 'Kelas 9C',
                'attendees' => '9C',
                'start_time' => '12:00:00',
                'end_time' => '13:00:00',
            ],

            // start
            [
                'class' => '7A',
                'title' => 'Matematika',
                'location' => 'Kelas 7A',
                'attendees' => '7A',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],
            [
                'class' => '7B',
                'title' => 'Matematika',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],
            [
                'class' => '8F',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 8F',
                'attendees' => '8F',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],
            [
                'class' => '9A',
                'title' => 'IPA',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '08:00:00',
                'end_time' => '11:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Bahasa Inggris',
                'location' => 'Kelas 9C',
                'attendees' => '9C',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],

            [
                'class' => '7A',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 7A',
                'attendees' => '7A',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],
            [
                'class' => '7B',
                'title' => 'IPA',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],
            [
                'class' => '8F',
                'title' => 'Bahasa Inggris',
                'location' => 'Kelas 8F',
                'attendees' => '8F',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],
            [
                'class' => '9A',
                'title' => 'Matematika',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '11:00:00',
                'end_time' => '12:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Matematika',
                'location' => 'Kelas 9C',
                'attendees' => '9C',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],

            [
                'class' => '7A',
                'title' => 'IPA',
                'location' => 'Kelas 7A',
                'attendees' => '7A',
                'start_time' => '13:00:00',
                'end_time' => '16:00:00',
            ],

            // double because 3 jam
            [
                'class' => '7B',
                'title' => 'IPA',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '13:00:00',
                'end_time' => '14:00:00',
            ],
            [
                'class' => '7B',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '14:00:00',
                'end_time' => '16:00:00',
            ],

            [
                'class' => '8F',
                'title' => 'Matematike',
                'location' => 'Kelas 8F',
                'attendees' => '8F',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],

            // 9A
            [
                'class' => '9A',
                'title' => 'Matematika',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '13:00:00',
                'end_time' => '14:00:00',
            ],
            [
                'class' => '9A',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '14:00:00',
                'end_time' => '16:00:00',
            ],

            [
                'class' => '9C',
                'title' => 'Bahasa Inggris',
                'location' => 'Kelas 9C',
                'attendees' => '9C',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
        ];

        foreach ($eventsData as $eventData) {
            $this->createWeeklyEvents($startDate, $endDate, $eventData, $teacherId);
        }
    }

    private function createWeeklyEvents(Carbon $startDate, Carbon $endDate, array $eventData, $teacherId): void
    {
        $event = [
            'class' => $eventData['class'],
            'title' => $eventData['title'],
            'teacherId' => $teacherId,
            'location' => $eventData['location'],
            'attendees' => $eventData['attendees'],
            'start_date' => $startDate->copy()->setTimeFromTimeString($eventData['start_time'])->toDateTimeString(),
            'end_date' => $startDate->copy()->setTimeFromTimeString($eventData['end_time'])->toDateTimeString(),
        ];

        Event::create($event);

        // Increment teacher ID for the next event
        if ($teacherId == '2000000001') {
            $teacherId = '2000000002';
        } else if ($teacherId == '2000000002') {
            $teacherId = '2000000003';
        } else if ($teacherId == '2000000003') {
            $teacherId = '2000000004';
        } else if ($teacherId == '2000000004') {
            $teacherId = '2000000005';
        } else if ($teacherId == '2000000005') {
            $teacherId = '2000000001';
        }
    }
}
