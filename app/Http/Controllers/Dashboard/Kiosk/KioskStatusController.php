<?php

namespace App\Http\Controllers\Dashboard\Kiosk;

use App\Http\Controllers\Controller;
use App\Models\Kiosk;
use Illuminate\Http\Request;

class KioskStatusController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request,Kiosk $kiosk)
    {
        $kiosk->update([
            'is_active' => !$kiosk->is_active
        ]);
        return back();
    }
}
