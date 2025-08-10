<?php

namespace Database\Seeders;

use App\Enums\UserRole;
use App\Models\KioskSetting;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KioskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::where('role', UserRole::KIOSK)->get();

        foreach ($users as $user) {
            KioskSetting::create([
                'user_id' => $user->id,
                'name' => $user->name,
                'x_axis' => 0,
                'y_axis' => 0
            ]);
        }
    }
}
