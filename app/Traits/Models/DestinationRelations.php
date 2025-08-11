<?php

namespace App\Traits\Models;

use App\Models\FloorPlan;
use App\Models\Kiosk;

trait DestinationRelations
{
    public function floorPlan()
    {
        return $this->belongsTo(FloorPlan::class);
    }
}
