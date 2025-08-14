<?php

namespace App\Http\Controllers\Dashboard\Kiosk;

use App\Enums\UserRole;
use App\Http\Controllers\Controller;
use App\Models\FloorPlan;
use App\Models\Kiosk;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;
use Str;

class KioskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
           return Inertia::render('dashboard/kiosks/Index',[
            'kiosks' => fn() => QueryBuilder::for(Kiosk::class)
                        ->with('user')
                        ->allowedFilters(['name'])
                        ->paginate(15)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('dashboard/kiosks/Create',[
            'floorPlans'=> fn() => FloorPlan::with([
                'media'=> fn($query) => $query->where('collection_name', 'image')
            ])->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'=> ['required','max:50','unique:kiosks,name'],
            'code' => ['required','unique:kiosks,code'],
            'x_axis' => ['required'],
            'y_axis' => ['required'],
            'located_at_floor_plan_id' => ['required'],
            'floor_plan_ids' => ['required','array','min:1'],
        ]);

        $user = User::create([
            'name'=> $data['name'],
            'email'=> strtolower(Str::ulid())."@gmail.com",
            'password'=> Hash::make('password'),
            'role'=> UserRole::KIOSK
        ]);

        $kiosk = Kiosk::create([
            'user_id'=>$user->id,
            'code'=> $data['code'] ?? date('YmdHis'),
            'name' => $data['name'],
            'x_axis' => $data['x_axis'],
            'y_axis' => $data['y_axis'],
            'is_active' => false,
            'located_at_floor_plan_id' => $data['located_at_floor_plan_id'],
        ]);

        $kiosk->floorPlans()->attach($data['floor_plan_ids']);


        return to_route('dashboard.kiosks.index')->toast('success','Kiosk created successfully');
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
    public function edit(Kiosk $kiosk)
    {
        return Inertia::render('dashboard/kiosks/Edit',[
            'kiosk' => fn() => $kiosk->load('floorPlans'),
             'floorPlans'=> fn() => FloorPlan::with([
                'media'=> fn($query) => $query->where('collection_name', 'image')
            ])->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kiosk $kiosk)
    {
        $data = $request->validate([
            'name'=> ['required','max:50','unique:kiosks,name,'.$kiosk->id],
            'code' => ['required','unique:kiosks,code,'.$kiosk->id],
            'x_axis' => ['required'],
            'y_axis' => ['required'],
            'located_at_floor_plan_id' => ['required'],
            'floor_plan_ids' => ['required','array','min:1'],
        ]);

        $kiosk->update([
            'name' => $data['name'],
            'x_axis' => $data['x_axis'],
            'y_axis' => $data['y_axis'],
            'code'=> $data['code'] ?? date('YmdHis'),
            'located_at_floor_plan_id'=> $data['located_at_floor_plan_id'],
            'version' => DB::raw('version + 1')
        ]);

        $kiosk->floorPlans()->sync($data['floor_plan_ids']);

        return back()->toast('success','Kiosk updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kiosk $kiosk)
    {
        $user = $kiosk->user;
        $kiosk->delete();
        $user->delete();
        return back()->toast('success','Kiosk deleted successfully');
    }
}
