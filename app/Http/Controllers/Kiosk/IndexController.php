<?php

namespace App\Http\Controllers\Kiosk;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use App\Models\FloorPlan;
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
            // -------------------------------------------
            'kioskVersionKey' => $kiosk->id."-".$kiosk->version,
            'kiosk' => fn() => $kiosk->except('code'),
            //  -------------------------------------------
            'currentFloorPlan' => function() use($kiosk,$request){
                if($request->has('floorPlanId') && $request->input('floorPlanId') != $kiosk->located_at_floor_plan_id){
                    return FloorPlan::find($request->input('floorPlanId'))->load(['media'=> fn($query) => $query->where('collection_name', 'image')]);
                }
                return $kiosk->floorPlan->load(['media'=> fn($query) => $query->where('collection_name', 'image')]);
            },
        ]);
    }
}
