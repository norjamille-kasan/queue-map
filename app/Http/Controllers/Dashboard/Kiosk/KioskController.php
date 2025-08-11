<?php

namespace App\Http\Controllers\Dashboard\Kiosk;

use App\Enums\UserRole;
use App\Http\Controllers\Controller;
use App\Models\Kiosk;
use App\Models\User;
use Illuminate\Http\Request;
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
        return Inertia::render('dashboard/kiosks/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'=> ['required','max:50','unique:kiosks,name'],
            'x_axis' => ['required'],
            'y_axis' => ['required'],
        ]);

        $user = User::create([
            'name'=> $data['name'],
            'email'=> strtolower(Str::ulid())."@gmail.com",
            'password'=> Hash::make('password'),
            'role'=> UserRole::KIOSK
        ]);

        $kiosk = Kiosk::create([
            'user_id'=>$user->id,
            'code'=> date('YmdHis'),
            'name' => $data['name'],
            'x_axis' => $data['x_axis'],
            'y_axis' => $data['y_axis'],
            'is_active' => false
        ]);


        return to_route('dashboard.kiosks.edit',['kiosk' => $kiosk])->toast('success','Kiosk created successfully','Please add destination to complate kiosk setup');
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
            'kiosk' => fn() => $kiosk,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kiosk $kiosk)
    {
        $data = $request->validate([
            'name'=> ['required','max:50'],
            'x_axis' => ['required'],
            'y_axis' => ['required'],
        ]);

        $kiosk->update([
            'name' => $data['name'],
            'x_axis' => $data['x_axis'],
            'y_axis' => $data['y_axis']
        ]);

        return back()->toast('success','Kiosk updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
