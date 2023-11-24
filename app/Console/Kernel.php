<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // $schedule->command('inspire')->hourly();
        // $schedule->command('attendance:daily')->daily();
        $schedule->command('app:daily-attendance')
        ->dailyAt('07:30')
        ->timezone('Asia/Jakarta')
        ->unless(function () {
            return now()->isWeekend();
        });
        // $schedule->command('app:daily-attendance')->everyMinute();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
