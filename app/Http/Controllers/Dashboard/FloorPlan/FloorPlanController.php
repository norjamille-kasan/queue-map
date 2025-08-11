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
    public function index()
    {
        return Inertia::render('dashboard/floor-plans/Index',[
            'floorPlans' => fn() => QueryBuilder::for(FloorPlan::class)
                        ->allowedFilters(['name'])
                        ->paginate(15)
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

        return to_route('dashboard.floor-plans.index')->with('success','Floor plan created successfully');

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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
