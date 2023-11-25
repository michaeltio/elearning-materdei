<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
   
    protected function schedule(Schedule $schedule): void
    {
        // $schedule->command('attendance:daily')->daily();
        // $schedule->command('attendance:daily')
        // ->dailyAt('07:30')
        // ->timezone('Asia/Jakarta')
        // ->unless(function () {
        //     return now()->isWeekend();
        // });
        $schedule->command('attendance:daily')->everyMinute();
    }

    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
