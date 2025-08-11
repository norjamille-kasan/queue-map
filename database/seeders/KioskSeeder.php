<?php

namespace Database\Seeders;

use App\Enums\UserRole;
use App\Models\Destination;
use App\Models\FloorPlan;
use App\Models\Kiosk;
use App\Models\KioskSetting;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Str;

class KioskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::where('role', UserRole::KIOSK)->get();

        $floorPlans = FloorPlan::get()->pluck('id')->toArray();
        foreach ($users as $user) {
            $kiosk = Kiosk::create([
                'user_id' => $user->id,
                'name' => $user->name,
                'x_axis' => "78.83",
                'y_axis' => "20.79",
                'code' => Str::ulid(),
                'is_active' => false
            ]);
            $kiosk->floorPlans()->attach($floorPlans);
        }
    }
}
