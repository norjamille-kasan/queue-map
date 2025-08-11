<?php

namespace App\Models;

use App\Traits\Models\FloorPlanRelations;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
class FloorPlan extends Model  implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use FloorPlanRelations;
    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('image')
            ->singleFile();
    }
}
