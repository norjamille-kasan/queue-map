<?php

namespace App\Models;

use App\Traits\Models\DestinationRelations;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    use HasFactory;
    use DestinationRelations;

    protected function casts()
    {
        return [
            'text_redirection' => 'array',
        ];
    }
}
