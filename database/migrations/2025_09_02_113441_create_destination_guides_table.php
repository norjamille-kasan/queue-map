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
        Schema::create('destination_guides', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('destination_id')->references('id')->on('destinations');
            $table->foreignId('from_kiosk_id')->references('id')->on('kiosks');
            $table->text('instructions');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('destination_guides');
    }
};
