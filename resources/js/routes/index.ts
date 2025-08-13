import { queryParams, type QueryParams } from './../wayfinder'
/**
 * @see routes/web.php:8
 * @route '/'
 */
export const home = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ['get','head'],
    url: '/',
}

/**
 * @see routes/web.php:8
 * @route '/'
 */
home.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:8
 * @route '/'
 */
home.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:8
 * @route '/'
 */
home.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::redirect
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/redirect'
 */
export const redirect = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: redirect.url(options),
    method: 'get',
})

redirect.definition = {
    methods: ['get','head','post','put','patch','delete','options'],
    url: '/redirect',
}

/**
* @see \Illuminate\Routing\RedirectController::redirect
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/redirect'
 */
redirect.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return redirect.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::redirect
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/redirect'
 */
redirect.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: redirect.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::redirect
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/redirect'
 */
redirect.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: redirect.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::redirect
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/redirect'
 */
redirect.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: redirect.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::redirect
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/redirect'
 */
redirect.put = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: redirect.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::redirect
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/redirect'
 */
redirect.patch = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: redirect.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::redirect
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/redirect'
 */
redirect.delete = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: redirect.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::redirect
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/redirect'
 */
redirect.options = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'options',
} => ({
    url: redirect.url(options),
    method: 'options',
})

/**
* @see \App\Http\Controllers\Kiosk\KioskSessionController::openKiosk
 * @see app/Http/Controllers/Kiosk/KioskSessionController.php:15
 * @route '/open-kiosk'
 */
export const openKiosk = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: openKiosk.url(options),
    method: 'post',
})

openKiosk.definition = {
    methods: ['post'],
    url: '/open-kiosk',
}

/**
* @see \App\Http\Controllers\Kiosk\KioskSessionController::openKiosk
 * @see app/Http/Controllers/Kiosk/KioskSessionController.php:15
 * @route '/open-kiosk'
 */
openKiosk.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return openKiosk.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Kiosk\KioskSessionController::openKiosk
 * @see app/Http/Controllers/Kiosk/KioskSessionController.php:15
 * @route '/open-kiosk'
 */
openKiosk.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: openKiosk.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::register
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/register'
 */
export const register = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ['get','head','post','put','patch','delete','options'],
    url: '/register',
}

/**
* @see \Illuminate\Routing\RedirectController::register
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/register'
 */
register.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::register
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/register'
 */
register.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::register
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/register'
 */
register.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: register.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::register
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/register'
 */
register.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: register.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::register
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/register'
 */
register.put = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: register.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::register
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/register'
 */
register.patch = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: register.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::register
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/register'
 */
register.delete = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: register.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::register
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/register'
 */
register.options = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'options',
} => ({
    url: register.url(options),
    method: 'options',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
export const login = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ['get','head'],
    url: '/login',
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
export const logout = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ['post'],
    url: '/logout',
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
logout.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
logout.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: logout.url(options),
    method: 'post',
})