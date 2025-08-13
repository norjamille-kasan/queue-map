<?php

namespace App\Traits\Models;

use App\Models\Destination;
use App\Models\Kiosk;

trait FloorPlanRelations
{
    public function kiosks()
    {
        return $this->belongsToMany(Kiosk::class);
    }

    public function destinations()
    {
        return $this->hasMany(Destination::class);
    }

    public function locatedKiosks()
    {
        return $this->belongsToMany(Kiosk::class,'located_floor_plan_id');
    }
}
