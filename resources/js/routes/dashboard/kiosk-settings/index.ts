import { queryParams, type QueryParams } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::index
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:16
 * @route '/dashboard/kiosk-settings'
 */
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '/dashboard/kiosk-settings',
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::index
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:16
 * @route '/dashboard/kiosk-settings'
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::index
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:16
 * @route '/dashboard/kiosk-settings'
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::index
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:16
 * @route '/dashboard/kiosk-settings'
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::create
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:29
 * @route '/dashboard/kiosk-settings/create'
 */
export const create = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '/dashboard/kiosk-settings/create',
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::create
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:29
 * @route '/dashboard/kiosk-settings/create'
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::create
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:29
 * @route '/dashboard/kiosk-settings/create'
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::create
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:29
 * @route '/dashboard/kiosk-settings/create'
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::store
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:37
 * @route '/dashboard/kiosk-settings'
 */
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '/dashboard/kiosk-settings',
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::store
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:37
 * @route '/dashboard/kiosk-settings'
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::store
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:37
 * @route '/dashboard/kiosk-settings'
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::show
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:45
 * @route '/dashboard/kiosk-settings/{kiosk_setting}'
 */
export const show = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/dashboard/kiosk-settings/{kiosk_setting}',
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::show
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:45
 * @route '/dashboard/kiosk-settings/{kiosk_setting}'
 */
show.url = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kiosk_setting: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kiosk_setting: args[0],
                }
    }

    const parsedArgs = {
                        kiosk_setting: args.kiosk_setting,
                }

    return show.definition.url
            .replace('{kiosk_setting}', parsedArgs.kiosk_setting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::show
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:45
 * @route '/dashboard/kiosk-settings/{kiosk_setting}'
 */
show.get = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::show
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:45
 * @route '/dashboard/kiosk-settings/{kiosk_setting}'
 */
show.head = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::edit
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:53
 * @route '/dashboard/kiosk-settings/{kiosk_setting}/edit'
 */
export const edit = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/dashboard/kiosk-settings/{kiosk_setting}/edit',
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::edit
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:53
 * @route '/dashboard/kiosk-settings/{kiosk_setting}/edit'
 */
edit.url = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kiosk_setting: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kiosk_setting: args[0],
                }
    }

    const parsedArgs = {
                        kiosk_setting: args.kiosk_setting,
                }

    return edit.definition.url
            .replace('{kiosk_setting}', parsedArgs.kiosk_setting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::edit
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:53
 * @route '/dashboard/kiosk-settings/{kiosk_setting}/edit'
 */
edit.get = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::edit
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:53
 * @route '/dashboard/kiosk-settings/{kiosk_setting}/edit'
 */
edit.head = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::update
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:61
 * @route '/dashboard/kiosk-settings/{kiosk_setting}'
 */
export const update = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/dashboard/kiosk-settings/{kiosk_setting}',
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::update
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:61
 * @route '/dashboard/kiosk-settings/{kiosk_setting}'
 */
update.url = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kiosk_setting: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kiosk_setting: args[0],
                }
    }

    const parsedArgs = {
                        kiosk_setting: args.kiosk_setting,
                }

    return update.definition.url
            .replace('{kiosk_setting}', parsedArgs.kiosk_setting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::update
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:61
 * @route '/dashboard/kiosk-settings/{kiosk_setting}'
 */
update.put = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::update
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:61
 * @route '/dashboard/kiosk-settings/{kiosk_setting}'
 */
update.patch = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::destroy
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:69
 * @route '/dashboard/kiosk-settings/{kiosk_setting}'
 */
export const destroy = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/dashboard/kiosk-settings/{kiosk_setting}',
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::destroy
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:69
 * @route '/dashboard/kiosk-settings/{kiosk_setting}'
 */
destroy.url = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kiosk_setting: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kiosk_setting: args[0],
                }
    }

    const parsedArgs = {
                        kiosk_setting: args.kiosk_setting,
                }

    return destroy.definition.url
            .replace('{kiosk_setting}', parsedArgs.kiosk_setting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\KioskSettingController::destroy
 * @see app/Http/Controllers/Dashboard/KioskSettingController.php:69
 * @route '/dashboard/kiosk-settings/{kiosk_setting}'
 */
destroy.delete = (args: { kiosk_setting: string | number } | [kiosk_setting: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const kioskSettings = {
    index,
create,
store,
show,
edit,
update,
destroy,
}

export default kioskSettings