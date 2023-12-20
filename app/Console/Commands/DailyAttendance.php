<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Models\UserDetail;
use App\Models\Attendance;
use Illuminate\Console\Command;

class DailyAttendance extends Command
{
    protected $signature = 'attendance:daily';
    protected $description = 'Update daily attendance';

    public function handle()
    {
        $users = UserDetail::where('role', 'student')->get();

        foreach ($users as $user) {
            Attendance::create([
                'student_id' => $user->userId,
                'student_name' => $user->full_name,
                'class' => $user->class,
                'attendance_date' => now()->toDateString(),
                'is_present' => false,
                'is_late' => false,
            ]);
        }

        $this->info('Daily attendance recorded successfully.');
    }
}
