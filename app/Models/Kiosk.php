<?php

namespace App\Models;

use App\Traits\Models\KioskRelations;
use Illuminate\Database\Eloquent\Model;


class Kiosk extends Model
{

    use KioskRelations;

    protected function casts()
    {
        return [
            'is_active' => 'boolean',
        ];
    }

}
