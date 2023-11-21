<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Student;
use App\Models\Attendance;
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
        //perlu diganti
        $students = Student::all();

        foreach ($students as $student) {
            Attendance::create([
                'student_id' => $student->nis,
                'attendance_date' => now()->toDateString(),
                'is_present' => false,
            ]);
        }

        $this->info('Daily attendance recorded successfully.');
    }
}
