<?php

namespace App\Console\Commands;
use App\Models\User;
use App\Models\Attendance;
use Illuminate\Console\Command;


class DailyAttendance extends Command
{
    protected $signature = 'attendance:daily';
    protected $description = 'Update daily attendance';

    public function handle()
    {
        $users = User::where('role', 'student')->get();

        foreach ($users as $user) {
            Attendance::create([
                'student_id' => $user->id,
                'attendance_date' => now()->toDateString(),
                'is_present' => false,
            ]);
        }

        $this->info('Daily attendance recorded successfully.');
    }
}

