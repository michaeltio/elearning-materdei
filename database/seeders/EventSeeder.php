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
    const MONDAY = Carbon::MONDAY;
    const TUESDAY = Carbon::TUESDAY;
    const WEDNESDAY = Carbon::WEDNESDAY;
    const THURSDAY = Carbon::THURSDAY;
    const FRIDAY = Carbon::FRIDAY;

    public function run(): void
    {
        $startDate = Carbon::parse('2024-01-15');
        $endDate = Carbon::parse('2024-05-17');

        $teacherId = '2000000001';

        // $startDate->addDays(7);

        $eventsDataBreak = [
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
        ];

        $currentDate = $startDate->copy();

        while ($currentDate->lessThanOrEqualTo($endDate)) {
            // Check if the current day is Monday to Friday
            if ($currentDate->dayOfWeek >= self::MONDAY && $currentDate->dayOfWeek <= self::FRIDAY) {
                foreach ($eventsDataBreak as $eventData) {
                    // Create events for each class
                    $this->createWeeklyEvents($currentDate, $eventData, $teacherId);

                    // Increment teacher ID for the next event
                    $teacherId = $this->getNextTeacherId($teacherId);
                }
            }

            // Move to the next day
            $currentDate->addDay();
        }

        $eventsDataMonday = [
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
                'end_time' => '10:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Bahasa Inggris',
                'location' => 'Kelas 9C',
                'attendees' => '9C',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],

            // second class
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
                'title' => 'IPA 7B',
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
                'start_time' => '10:00:00',
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

            // third class
            [
                'class' => '7A',
                'title' => 'IPA',
                'location' => 'Kelas 7A',
                'attendees' => '7A',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '7B',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '8F',
                'title' => 'Matematika',
                'location' => 'Kelas 8F',
                'attendees' => '8F',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '9A',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
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

        $eventsDataTuesday = [
            // start
            [
                'class' => '7A',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 7A',
                'attendees' => '7A',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],
            [
                'class' => '7B',
                'title' => 'IPA 7B',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],
            [
                'class' => '8F',
                'title' => 'Bahasa Inggris',
                'location' => 'Kelas 8F',
                'attendees' => '8F',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],
            [
                'class' => '9A',
                'title' => 'Matematika',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Matematika',
                'location' => 'Kelas 9C',
                'attendees' => '9C',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],

            // second class
            [
                'class' => '7A',
                'title' => 'IPA',
                'location' => 'Kelas 7A',
                'attendees' => '7A',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],
            [
                'class' => '7B',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],
            [
                'class' => '8F',
                'title' => 'Matematika',
                'location' => 'Kelas 8F',
                'attendees' => '8F',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],
            [
                'class' => '9A',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Bahasa Inggris',
                'location' => 'Kelas 9C',
                'attendees' => '9C',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],

            // third class
            [
                'class' => '7A',
                'title' => 'Matematika',
                'location' => 'Kelas 7A',
                'attendees' => '7A',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '7B',
                'title' => 'Matematika',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '8F',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 8F',
                'attendees' => '8F',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '9A',
                'title' => 'IPA',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
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

        $eventsDataWednesday = [
            // start
            [
                'class' => '7A',
                'title' => 'IPA',
                'location' => 'Kelas 7A',
                'attendees' => '7A',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],
            [
                'class' => '7B',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],
            [
                'class' => '8F',
                'title' => 'Matematika',
                'location' => 'Kelas 8F',
                'attendees' => '8F',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],
            [
                'class' => '9A',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Bahasa Inggris',
                'location' => 'Kelas 9C',
                'attendees' => '9C',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],

            // second class
            [
                'class' => '7A',
                'title' => 'Matematika',
                'location' => 'Kelas 7A',
                'attendees' => '7A',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],
            [
                'class' => '7B',
                'title' => 'Matematika',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],
            [
                'class' => '8F',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 8F',
                'attendees' => '8F',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],
            [
                'class' => '9A',
                'title' => 'IPA',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Bahasa Inggris',
                'location' => 'Kelas 9C',
                'attendees' => '9C',
                'start_time' => '10:00:00',
                'end_time' => '12:00:00',
            ],

            // third class
            [
                'class' => '7A',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 7A',
                'attendees' => '7A',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '7B',
                'title' => 'IPA 7B',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '8F',
                'title' => 'Bahasa Inggris',
                'location' => 'Kelas 8F',
                'attendees' => '8F',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '9A',
                'title' => 'Matematika',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Matematika',
                'location' => 'Kelas 9C',
                'attendees' => '9C',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
        ];

        $eventsDataThursday = [
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
                'end_time' => '10:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Bahasa Inggris',
                'location' => 'Kelas 9C',
                'attendees' => '9C',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],

            // second class
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
                'title' => 'IPA 7B',
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
                'start_time' => '10:00:00',
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

            // third class
            [
                'class' => '7A',
                'title' => 'IPA',
                'location' => 'Kelas 7A',
                'attendees' => '7A',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '7B',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '8F',
                'title' => 'Matematika',
                'location' => 'Kelas 8F',
                'attendees' => '8F',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '9A',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
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

        $eventsDataFriday = [
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
                'end_time' => '10:00:00',
            ],
            [
                'class' => '9C',
                'title' => 'Bahasa Inggris',
                'location' => 'Kelas 9C',
                'attendees' => '9C',
                'start_time' => '08:00:00',
                'end_time' => '10:00:00',
            ],

            // second class
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
                'title' => 'IPA 7B',
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
                'start_time' => '10:00:00',
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

            // third class
            [
                'class' => '7A',
                'title' => 'IPA',
                'location' => 'Kelas 7A',
                'attendees' => '7A',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '7B',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 7B',
                'attendees' => '7B',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '8F',
                'title' => 'Matematika',
                'location' => 'Kelas 8F',
                'attendees' => '8F',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
            ],
            [
                'class' => '9A',
                'title' => 'Bahasa Indonesia',
                'location' => 'Kelas 9A',
                'attendees' => '9A',
                'start_time' => '13:00:00',
                'end_time' => '15:00:00',
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

        $currentDate = $startDate->copy();

        while ($currentDate->lessThanOrEqualTo($endDate)) {
            // Check if the current day is Monday to Friday
            if ($currentDate->dayOfWeek == self::MONDAY) {
                $eventsData = $eventsDataMonday;
            } else if ($currentDate->dayOfWeek == self::TUESDAY) {
                $eventsData = $eventsDataTuesday;
            } else if ($currentDate->dayOfWeek == self::WEDNESDAY) {
                $eventsData = $eventsDataWednesday;
            } else if ($currentDate->dayOfWeek == self::THURSDAY) {
                $eventsData = $eventsDataThursday;
            } else if ($currentDate->dayOfWeek == self::FRIDAY) {
                $eventsData = $eventsDataFriday;
            }

            // Check if the current day is Monday to Friday
            if ($currentDate->dayOfWeek >= self::MONDAY && $currentDate->dayOfWeek <= self::FRIDAY) {
                foreach ($eventsData as $eventData) {
                    // Create events for each class
                    $this->createWeeklyEvents($currentDate, $eventData, $teacherId);

                    // Increment teacher ID for the next event
                    $teacherId = $this->getNextTeacherId($teacherId);
                }
            }

            // Move to the next day
            $currentDate->addDay();
        }
    }

    private function getNextTeacherId($currentTeacherId)
    {
        if ($currentTeacherId == '2000000001') {
            return '2000000002';
        } else if ($currentTeacherId == '2000000002') {
            return '2000000003';
        } else if ($currentTeacherId == '2000000003') {
            return '2000000004';
        } else if ($currentTeacherId == '2000000004') {
            return '2000000005';
        } else if ($currentTeacherId == '2000000005') {
            return '2000000001';
        }
    }

    private function createWeeklyEvents(Carbon $startDate, array $eventData, $teacherId): void
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

        // var_dump($event);

        Event::create($event);
    }
}
