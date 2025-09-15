<?php

namespace App\Http\Controllers\Dashboard\FloorPlan;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use App\Models\FloorPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DestinationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(FloorPlan $floorPlan)
    {
        return Inertia::render('dashboard/floor-plans/destinations/Index',[
            'floorPlan' => $floorPlan,
            'floorPlan.image' => $floorPlan->getFirstMediaUrl('image'),
            'destinations' => fn() => $floorPlan->destinations()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request,FloorPlan $floorPlan)
    {
        $data = $request->validate([
            'name'=> ['required','max:50'],
            'x_axis' => ['required'],
            'y_axis' => ['required'],
            'text_redirection' => ['nullable','array'],
        ]);

        $floorPlan->destinations()->create($data);

        $floorPlan->kiosks()->update([
            'version' => DB::raw('version + 1')
        ]);

        return back()->toast('success','Destination created successfully');
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
    public function edit(FloorPlan $floorPlan, Destination $destination)
    {
        return Inertia::render('dashboard/floor-plans/destinations/Edit',[
            'floorPlan' => $floorPlan,
            'destination' => $destination
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FloorPlan $floorPlan,Destination $destination)
    {
        $data = $request->validate([
            'name'=> ['required','max:50'],
            'text_redirection' => ['nullable','array'],
        ]);

        $destination->update($data);
        $floorPlan->kiosks()->update([
            'version' => DB::raw('version + 1')
        ]);

        return back()->toast('success','Destination updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FloorPlan $floorPlan,Destination $destination)
    {
        abort_unless($destination->floorPlan()->is($floorPlan), 403);

        $destination->delete();

        $floorPlan->kiosks()->update([
            'version' => DB::raw('version + 1')
        ]);

        return back()->toast('success','Destination deleted successfully');
    }
}
