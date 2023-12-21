<?php

namespace Database\Seeders;

use App\Models\Classe;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClassesTest extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 6; $i++) {
            Classe::create([
                'classId' => '7' . chr(64 + $i),
            ]);
        }
        
        for ($i = 1; $i <= 6; $i++) {
            Classe::create([
                'classId' => '8' . chr(64 + $i),
            ]);
        }
        
        for ($i = 1; $i <= 6; $i++) {
            Classe::create([
                'classId' => '9' . chr(64 + $i),
            ]);
        }
    }
}
