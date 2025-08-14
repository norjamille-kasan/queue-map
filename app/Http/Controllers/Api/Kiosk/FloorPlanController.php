<?php

namespace App\Http\Controllers\Api\Kiosk;

use App\Http\Controllers\Controller;
use App\Models\FloorPlan;
use App\Models\Kiosk;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class FloorPlanController extends Controller
{
    public function index(Request $request,Kiosk $kiosk)
    {
        $data = $kiosk->floorPlans()->with(['destinations','media'=> fn($query) => $query->where('collection_name', 'image')])->get();
        return response()->json($data);
    }
}
