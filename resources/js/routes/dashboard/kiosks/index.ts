import { queryParams, type QueryParams } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::index
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:22
 * @route '/dashboard/kiosks'
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
    url: '/dashboard/kiosks',
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::index
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:22
 * @route '/dashboard/kiosks'
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::index
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:22
 * @route '/dashboard/kiosks'
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::index
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:22
 * @route '/dashboard/kiosks'
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::create
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:35
 * @route '/dashboard/kiosks/create'
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
    url: '/dashboard/kiosks/create',
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::create
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:35
 * @route '/dashboard/kiosks/create'
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::create
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:35
 * @route '/dashboard/kiosks/create'
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::create
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:35
 * @route '/dashboard/kiosks/create'
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::store
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:47
 * @route '/dashboard/kiosks'
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
    url: '/dashboard/kiosks',
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::store
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:47
 * @route '/dashboard/kiosks'
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::store
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:47
 * @route '/dashboard/kiosks'
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::show
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:84
 * @route '/dashboard/kiosks/{kiosk}'
 */
export const show = (args: { kiosk: string | number } | [kiosk: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/dashboard/kiosks/{kiosk}',
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::show
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:84
 * @route '/dashboard/kiosks/{kiosk}'
 */
show.url = (args: { kiosk: string | number } | [kiosk: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kiosk: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kiosk: args[0],
                }
    }

    const parsedArgs = {
                        kiosk: args.kiosk,
                }

    return show.definition.url
            .replace('{kiosk}', parsedArgs.kiosk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::show
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:84
 * @route '/dashboard/kiosks/{kiosk}'
 */
show.get = (args: { kiosk: string | number } | [kiosk: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::show
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:84
 * @route '/dashboard/kiosks/{kiosk}'
 */
show.head = (args: { kiosk: string | number } | [kiosk: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::edit
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:92
 * @route '/dashboard/kiosks/{kiosk}/edit'
 */
export const edit = (args: { kiosk: number | { id: number } } | [kiosk: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/dashboard/kiosks/{kiosk}/edit',
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::edit
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:92
 * @route '/dashboard/kiosks/{kiosk}/edit'
 */
edit.url = (args: { kiosk: number | { id: number } } | [kiosk: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kiosk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kiosk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kiosk: args[0],
                }
    }

    const parsedArgs = {
                        kiosk: typeof args.kiosk === 'object'
                ? args.kiosk.id
                : args.kiosk,
                }

    return edit.definition.url
            .replace('{kiosk}', parsedArgs.kiosk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::edit
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:92
 * @route '/dashboard/kiosks/{kiosk}/edit'
 */
edit.get = (args: { kiosk: number | { id: number } } | [kiosk: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::edit
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:92
 * @route '/dashboard/kiosks/{kiosk}/edit'
 */
edit.head = (args: { kiosk: number | { id: number } } | [kiosk: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::update
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:105
 * @route '/dashboard/kiosks/{kiosk}'
 */
export const update = (args: { kiosk: number | { id: number } } | [kiosk: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/dashboard/kiosks/{kiosk}',
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::update
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:105
 * @route '/dashboard/kiosks/{kiosk}'
 */
update.url = (args: { kiosk: number | { id: number } } | [kiosk: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kiosk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kiosk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kiosk: args[0],
                }
    }

    const parsedArgs = {
                        kiosk: typeof args.kiosk === 'object'
                ? args.kiosk.id
                : args.kiosk,
                }

    return update.definition.url
            .replace('{kiosk}', parsedArgs.kiosk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::update
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:105
 * @route '/dashboard/kiosks/{kiosk}'
 */
update.put = (args: { kiosk: number | { id: number } } | [kiosk: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::update
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:105
 * @route '/dashboard/kiosks/{kiosk}'
 */
update.patch = (args: { kiosk: number | { id: number } } | [kiosk: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::destroy
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:133
 * @route '/dashboard/kiosks/{kiosk}'
 */
export const destroy = (args: { kiosk: number | { id: number } } | [kiosk: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/dashboard/kiosks/{kiosk}',
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::destroy
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:133
 * @route '/dashboard/kiosks/{kiosk}'
 */
destroy.url = (args: { kiosk: number | { id: number } } | [kiosk: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kiosk: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kiosk: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kiosk: args[0],
                }
    }

    const parsedArgs = {
                        kiosk: typeof args.kiosk === 'object'
                ? args.kiosk.id
                : args.kiosk,
                }

    return destroy.definition.url
            .replace('{kiosk}', parsedArgs.kiosk.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskController::destroy
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskController.php:133
 * @route '/dashboard/kiosks/{kiosk}'
 */
destroy.delete = (args: { kiosk: number | { id: number } } | [kiosk: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const kiosks = {
    index,
create,
store,
show,
edit,
update,
destroy,
}

export default kiosks