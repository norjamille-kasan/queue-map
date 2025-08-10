<?php

namespace App\Traits\Models;

use App\Models\KioskSetting;

trait UserRelations
{
    public function kioskSettings()
    {
        return $this->hasMany(KioskSetting::class);
    }
}
