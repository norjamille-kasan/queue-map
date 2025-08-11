<?php

namespace App\Traits\Models;

use App\Models\Destination;
use App\Models\FloorPlan;
use App\Models\User;

trait KioskRelations
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function floorPlans()
    {
        return $this->belongsToMany(FloorPlan::class);
    }

    public function floorPlan()
    {
        return $this->belongsTo(FloorPlan::class);
    }
}
