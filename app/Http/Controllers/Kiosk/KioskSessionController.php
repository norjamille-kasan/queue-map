<?php

namespace App\Http\Controllers\Kiosk;

use App\Http\Controllers\Controller;
use App\Models\Kiosk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class KioskSessionController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = $request->validate([
            'code' => ['required','exists:kiosks,code'],
        ],[
            'code.exists' => 'Kiosk not found'
        ]);

        $kiosk = Kiosk::whereCode($data['code'])->first();


        $user = $kiosk->user;


        Auth::login($user);
        return to_route('kiosk.index');
    }
}
