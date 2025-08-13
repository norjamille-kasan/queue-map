<?php

namespace App\Traits\Models;

use App\Models\Kiosk;
use App\Models\KioskSetting;

trait UserRelations
{
    public function kiosk()
    {
        return $this->hasOne(Kiosk::class);
    }
}
