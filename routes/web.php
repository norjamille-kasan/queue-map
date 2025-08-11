<?php

use App\Http\Controllers\Dashboard\Settings\PasswordController;
use App\Http\Controllers\Dashboard\Settings\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::redirect('redirect', '/dashboard')->middleware(['auth', 'verified'])->name('redirect');


Route::prefix('dashboard')->name('dashboard.')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/',App\Http\Controllers\Dashboard\IndexController::class)->name('index');
    Route::redirect('settings', '/settings/profile');

    Route::get('settings/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('settings/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('settings/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('settings/password', [PasswordController::class, 'edit'])->name('password.edit');

    Route::put('settings/password', [PasswordController::class, 'update'])
        ->middleware('throttle:6,1')
        ->name('password.update');

    Route::get('settings/appearance', function () {
        return Inertia::render('dashboard/settings/Appearance');
    })->name('appearance');

    // --------------------
    Route::resource('kiosks', App\Http\Controllers\Dashboard\Kiosk\KioskController::class);
    Route::resource('floor-plans', App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::class)
        ->parameters(['floor-plan' => 'floorPlan']);
});

require __DIR__.'/auth.php';
