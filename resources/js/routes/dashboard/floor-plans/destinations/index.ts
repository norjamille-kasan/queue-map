import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::index
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:17
 * @route '/dashboard/floor-plans/{floor_plan}/destinations'
 */
export const index = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '/dashboard/floor-plans/{floor_plan}/destinations',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::index
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:17
 * @route '/dashboard/floor-plans/{floor_plan}/destinations'
 */
index.url = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { floor_plan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    floor_plan: args[0],
                }
    }

    const parsedArgs = {
                        floor_plan: args.floor_plan,
                }

    return index.definition.url
            .replace('{floor_plan}', parsedArgs.floor_plan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::index
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:17
 * @route '/dashboard/floor-plans/{floor_plan}/destinations'
 */
index.get = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::index
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:17
 * @route '/dashboard/floor-plans/{floor_plan}/destinations'
 */
index.head = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::create
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:29
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/create'
 */
export const create = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '/dashboard/floor-plans/{floor_plan}/destinations/create',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::create
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:29
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/create'
 */
create.url = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { floor_plan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    floor_plan: args[0],
                }
    }

    const parsedArgs = {
                        floor_plan: args.floor_plan,
                }

    return create.definition.url
            .replace('{floor_plan}', parsedArgs.floor_plan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::create
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:29
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/create'
 */
create.get = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::create
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:29
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/create'
 */
create.head = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::store
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:37
 * @route '/dashboard/floor-plans/{floor_plan}/destinations'
 */
export const store = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '/dashboard/floor-plans/{floor_plan}/destinations',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::store
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:37
 * @route '/dashboard/floor-plans/{floor_plan}/destinations'
 */
store.url = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { floor_plan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    floor_plan: args[0],
                }
    }

    const parsedArgs = {
                        floor_plan: args.floor_plan,
                }

    return store.definition.url
            .replace('{floor_plan}', parsedArgs.floor_plan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::store
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:37
 * @route '/dashboard/floor-plans/{floor_plan}/destinations'
 */
store.post = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::show
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:58
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}'
 */
export const show = (args: { floor_plan: string | number, destination: string | number } | [floor_plan: string | number, destination: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/dashboard/floor-plans/{floor_plan}/destinations/{destination}',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::show
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:58
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}'
 */
show.url = (args: { floor_plan: string | number, destination: string | number } | [floor_plan: string | number, destination: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
                    floor_plan: args[0],
                    destination: args[1],
                }
    }

    const parsedArgs = {
                        floor_plan: args.floor_plan,
                                destination: args.destination,
                }

    return show.definition.url
            .replace('{floor_plan}', parsedArgs.floor_plan.toString())
            .replace('{destination}', parsedArgs.destination.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::show
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:58
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}'
 */
show.get = (args: { floor_plan: string | number, destination: string | number } | [floor_plan: string | number, destination: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::show
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:58
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}'
 */
show.head = (args: { floor_plan: string | number, destination: string | number } | [floor_plan: string | number, destination: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::edit
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:66
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}/edit'
 */
export const edit = (args: { floor_plan: string | number, destination: number | { id: number } } | [floor_plan: string | number, destination: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/dashboard/floor-plans/{floor_plan}/destinations/{destination}/edit',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::edit
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:66
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}/edit'
 */
edit.url = (args: { floor_plan: string | number, destination: number | { id: number } } | [floor_plan: string | number, destination: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
                    floor_plan: args[0],
                    destination: args[1],
                }
    }

    const parsedArgs = {
                        floor_plan: args.floor_plan,
                                destination: typeof args.destination === 'object'
                ? args.destination.id
                : args.destination,
                }

    return edit.definition.url
            .replace('{floor_plan}', parsedArgs.floor_plan.toString())
            .replace('{destination}', parsedArgs.destination.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::edit
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:66
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}/edit'
 */
edit.get = (args: { floor_plan: string | number, destination: number | { id: number } } | [floor_plan: string | number, destination: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::edit
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:66
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}/edit'
 */
edit.head = (args: { floor_plan: string | number, destination: number | { id: number } } | [floor_plan: string | number, destination: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::update
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:77
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}'
 */
export const update = (args: { floor_plan: string | number, destination: number | { id: number } } | [floor_plan: string | number, destination: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/dashboard/floor-plans/{floor_plan}/destinations/{destination}',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::update
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:77
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}'
 */
update.url = (args: { floor_plan: string | number, destination: number | { id: number } } | [floor_plan: string | number, destination: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
                    floor_plan: args[0],
                    destination: args[1],
                }
    }

    const parsedArgs = {
                        floor_plan: args.floor_plan,
                                destination: typeof args.destination === 'object'
                ? args.destination.id
                : args.destination,
                }

    return update.definition.url
            .replace('{floor_plan}', parsedArgs.floor_plan.toString())
            .replace('{destination}', parsedArgs.destination.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::update
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:77
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}'
 */
update.put = (args: { floor_plan: string | number, destination: number | { id: number } } | [floor_plan: string | number, destination: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::update
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:77
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}'
 */
update.patch = (args: { floor_plan: string | number, destination: number | { id: number } } | [floor_plan: string | number, destination: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::destroy
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:95
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}'
 */
export const destroy = (args: { floor_plan: string | number, destination: number | { id: number } } | [floor_plan: string | number, destination: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/dashboard/floor-plans/{floor_plan}/destinations/{destination}',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::destroy
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:95
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}'
 */
destroy.url = (args: { floor_plan: string | number, destination: number | { id: number } } | [floor_plan: string | number, destination: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
                    floor_plan: args[0],
                    destination: args[1],
                }
    }

    const parsedArgs = {
                        floor_plan: args.floor_plan,
                                destination: typeof args.destination === 'object'
                ? args.destination.id
                : args.destination,
                }

    return destroy.definition.url
            .replace('{floor_plan}', parsedArgs.floor_plan.toString())
            .replace('{destination}', parsedArgs.destination.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationController::destroy
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationController.php:95
 * @route '/dashboard/floor-plans/{floor_plan}/destinations/{destination}'
 */
destroy.delete = (args: { floor_plan: string | number, destination: number | { id: number } } | [floor_plan: string | number, destination: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const destinations = {
    index,
create,
store,
show,
edit,
update,
destroy,
}

export default destinations