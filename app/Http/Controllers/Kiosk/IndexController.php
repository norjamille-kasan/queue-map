<?php

namespace App\Http\Controllers\Kiosk;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $kiosk = $request->user()->kiosk;
        return Inertia::render('kiosk/Index',[
            'kiosk' => function() use($request,$kiosk){
                return [
                    'id' => $kiosk->id,
                    'located_at_floor_plan_id' => $kiosk->located_at_floor_plan_id,
                    'x_axis' => $kiosk->x_axis,
                    'y_axis' => $kiosk->y_axis,
                    'located_at_floor_plan' => $kiosk->floorPlan->load(['media'=> fn($query) => $query->where('collection_name', 'image')]),
                ];
            },
        ]);
    }
}
