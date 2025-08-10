<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\KioskSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class KioskSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('dashboard/kiosk-settings/Index',[
            'kioskSettings' => fn() => QueryBuilder::for(KioskSetting::class)
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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
