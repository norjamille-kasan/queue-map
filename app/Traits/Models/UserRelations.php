<?php

namespace App\Traits\Models;

use App\Models\Kiosk;
use App\Models\KioskSetting;

trait UserRelations
{
    public function kiosks()
    {
        return $this->hasMany(Kiosk::class);
    }
}
