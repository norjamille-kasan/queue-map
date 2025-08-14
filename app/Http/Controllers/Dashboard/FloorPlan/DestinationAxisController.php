<?php

namespace App\Http\Controllers\Dashboard\FloorPlan;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DestinationAxisController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request,Destination $destination)
    {
        $data = $request->validate([
            'x_axis' => ['required'],
            'y_axis' => ['required'],
        ]);

        $destination->update($data);

        $floorPlan = $destination->floorPlan;
        $floorPlan->kiosks()->update([
            'version' => DB::raw('version + 1')
        ]);
        return back();
    }
}
