<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware(['auth:sanctum','kiosk.only'])->group(function () {
    Route::get('/kiosks/{kiosk}/floor-plans',[\App\Http\Controllers\Api\Kiosk\FloorPlanController::class,'index']);
});
