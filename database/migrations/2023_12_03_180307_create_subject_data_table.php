<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('subject_data', function (Blueprint $table) {
            $table->id();
            $table->string('subjectId');
            $table->foreign('subjectId')->references('subjectId')->on('subjects')->onDelete('cascade');
            $table->string('title');
            $table->string('filePath')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subject_data');
    }
};
