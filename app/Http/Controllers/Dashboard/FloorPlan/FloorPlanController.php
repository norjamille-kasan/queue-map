<?php

namespace App\Http\Controllers\Dashboard\FloorPlan;

use App\Http\Controllers\Controller;
use App\Models\FloorPlan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class FloorPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Inertia::render('dashboard/floor-plans/Index',[
            'floorPlans' => fn() => QueryBuilder::for(FloorPlan::class)
                        ->allowedFilters(['name'])
                        ->paginate(15),
            'filter' => $request->input('filter',[
                'name' => ''
            ]),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('dashboard/floor-plans/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $data = $request->validate([
            'name'=> ['required','max:50','unique:floor_plans,name'],
            'image' => ['required','image','mimes:jpeg,png,jpg','max:50000'],
        ]);

        $floorPlan = FloorPlan::create([
            'name' => $data['name']
        ]);

        $floorPlan->addMedia($data['image'])
            ->toMediaCollection('image');

        return to_route('dashboard.floor-plans.index')->toast('success','Floor plan created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FloorPlan $floorPlan)
    {
        return Inertia::render('dashboard/floor-plans/Edit',[
            'floorPlan' => $floorPlan,
            'floorPlan.image' => $floorPlan->getFirstMediaUrl('image')
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FloorPlan $floorPlan)
    {
        $data = $request->validate([
            'name'=> ['required','max:50','unique:floor_plans,name,'.$floorPlan->id],
            'image' => ['nullable','image','mimes:jpeg,png,jpg','max:50000'],
        ]);

        $floorPlan->update([
            'name' => $data['name']
        ]);

        if($data['image']){
            $floorPlan->addMedia($data['image'])
                ->toMediaCollection('image');
        }
        return back()->toast('success','Floor plan updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FloorPlan $floorPlan)
    {
        $floorPlan->destinations()->delete();
        $floorPlan->delete();
        return back()->toast('success','Floor plan deleted successfully');
    }
}
