<?php

namespace App\Providers;

use App\Enums\UserRole;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureDatabase();
        $this->configureModel();
        $this->configureUrlSchema();
        $this->configureTelescope();
        $this->configureToaster();
        $this->configureApiResponse();
    }


    public function configureDatabase()
    {
        DB::prohibitDestructiveCommands(app()->isProduction());
    }

    public function configureModel()
    {
        Model::unguard();
        Model::shouldBeStrict();
    }

    public function configureUrlSchema()
    {
        URL::forceHttps(app()->isProduction());
    }

    public function configureTelescope()
    {

    }

    public function configureToaster()
    {
        \Illuminate\Http\RedirectResponse::macro('toast', function (string $type, string $message, ?string $title = null) {
            $fallbackTitle = match ($type) {
                'success' => 'Success',
                'error' => 'Failed',
                'info' => 'Info',
                'warning' => 'Warning',
            };

            return $this->with('toast', [
                'type' => $type,
                'title' => $title ?? $fallbackTitle,
                'message' => $message,
            ]);
        });
    }

    public function configureApiResponse()
    {
        JsonResource::withoutWrapping();
        JsonResponse::macro('format', function ($data, $message = null) {
            return $this->json([
                'message' => $message,
                'data' => $data,
            ]);
        });
    }

    public function configureGates()
    {
        Gate::define('viewDashboard', function ($user) {
            return $user->role !== UserRole::KIOSK;
        });
    }
}
