<?php

namespace App\Traits\Models;

use App\Models\User;

trait KioskSettingRelations
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}