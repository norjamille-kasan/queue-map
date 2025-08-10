<?php

namespace App\Models;

use App\Traits\Models\KioskSettingRelations;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class KioskSetting extends Model implements HasMedia
{
    use InteractsWithMedia;
    use KioskSettingRelations;

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('floor_plan')
            ->singleFile();
    }
}
