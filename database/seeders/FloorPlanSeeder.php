<?php

namespace Database\Seeders;

use App\Models\Destination;
use App\Models\FloorPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FloorPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $floorPlan = FloorPlan::create([
            'name' => '1st Floor'
        ]);
        $floorPlan->addMedia(storage_path('test/megamall.png'))
            ->preservingOriginal()
            ->toMediaCollection('image');
        Destination::factory(10)->create([
            'floor_plan_id' => $floorPlan->id
        ]);
        $floorPlan = FloorPlan::create([
            'name' => '2nd Floor'
        ]);
        $floorPlan->addMedia(storage_path('test/test-fp.png'))
            ->preservingOriginal()
            ->toMediaCollection('image');
        Destination::factory(10)->create([
            'floor_plan_id' => $floorPlan->id,
        ]);
    }
}
