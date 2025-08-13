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
        Schema::create('kiosks', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
             $table->foreignId('user_id')->references('id')->on('users');
            $table->string('code')->unique();
            $table->string('name');
            $table->string('x_axis');
            $table->string('y_axis');
            $table->boolean('is_active');
            $table->boolean('located_at_floor_plan_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kiosks');
    }
};
