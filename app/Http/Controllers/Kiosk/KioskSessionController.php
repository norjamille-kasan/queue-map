<?php

namespace App\Http\Controllers\Kiosk;

use App\Http\Controllers\Controller;
use App\Models\Kiosk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

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

        if($kiosk->is_active === false){
            throw ValidationException::withMessages([
                'code' => 'Kiosk is not active'
            ]);
        }


        $user = $kiosk->user;


        Auth::login($user);
        return to_route('kiosk.index');
    }
}
