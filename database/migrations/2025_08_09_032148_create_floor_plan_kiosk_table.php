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
        Schema::create('floor_plan_kiosk', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('floor_plan_id');
            $table->unsignedBigInteger('kiosk_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('floor_plan_kiosk');
    }
};
