<?php

use App\Enums\UserRole;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $users = [
            [
                'name' => 'Super Admin',
                'email' => 'super@admin.com',
                'password' => Hash::make('password'),
                'role' => UserRole::SUPER_ADMIN->value,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'KIOSK 1',
                'email' => 'kiosk1@test.com',
                'password' => Hash::make('password'),
                'role' => UserRole::KIOSK->value,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'KIOSK 2',
                'email' => 'kiosk2@test.com',
                'password' => Hash::make('password'),
                'role' => UserRole::KIOSK->value,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('users')->insert($users);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
