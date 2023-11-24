<?php

namespace App\Console\Commands;
use App\Models\User;
use App\Models\Attendance;
use Illuminate\Console\Command;


class DailyAttendance extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:daily-attendance';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $users = User::all();

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

