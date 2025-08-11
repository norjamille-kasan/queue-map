import { queryParams, type QueryParams } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::index
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:16
 * @route '/dashboard/floor-plans'
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
    url: '/dashboard/floor-plans',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::index
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:16
 * @route '/dashboard/floor-plans'
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::index
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:16
 * @route '/dashboard/floor-plans'
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::index
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:16
 * @route '/dashboard/floor-plans'
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::create
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:28
 * @route '/dashboard/floor-plans/create'
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
    url: '/dashboard/floor-plans/create',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::create
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:28
 * @route '/dashboard/floor-plans/create'
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::create
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:28
 * @route '/dashboard/floor-plans/create'
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::create
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:28
 * @route '/dashboard/floor-plans/create'
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::store
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:36
 * @route '/dashboard/floor-plans'
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
    url: '/dashboard/floor-plans',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::store
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:36
 * @route '/dashboard/floor-plans'
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::store
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:36
 * @route '/dashboard/floor-plans'
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::show
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:58
 * @route '/dashboard/floor-plans/{floor_plan}'
 */
export const show = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/dashboard/floor-plans/{floor_plan}',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::show
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:58
 * @route '/dashboard/floor-plans/{floor_plan}'
 */
show.url = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show.definition.url
            .replace('{floor_plan}', parsedArgs.floor_plan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::show
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:58
 * @route '/dashboard/floor-plans/{floor_plan}'
 */
show.get = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::show
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:58
 * @route '/dashboard/floor-plans/{floor_plan}'
 */
show.head = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::edit
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:66
 * @route '/dashboard/floor-plans/{floor_plan}/edit'
 */
export const edit = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/dashboard/floor-plans/{floor_plan}/edit',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::edit
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:66
 * @route '/dashboard/floor-plans/{floor_plan}/edit'
 */
edit.url = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return edit.definition.url
            .replace('{floor_plan}', parsedArgs.floor_plan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::edit
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:66
 * @route '/dashboard/floor-plans/{floor_plan}/edit'
 */
edit.get = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::edit
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:66
 * @route '/dashboard/floor-plans/{floor_plan}/edit'
 */
edit.head = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::update
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:74
 * @route '/dashboard/floor-plans/{floor_plan}'
 */
export const update = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/dashboard/floor-plans/{floor_plan}',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::update
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:74
 * @route '/dashboard/floor-plans/{floor_plan}'
 */
update.url = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update.definition.url
            .replace('{floor_plan}', parsedArgs.floor_plan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::update
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:74
 * @route '/dashboard/floor-plans/{floor_plan}'
 */
update.put = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::update
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:74
 * @route '/dashboard/floor-plans/{floor_plan}'
 */
update.patch = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::destroy
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:82
 * @route '/dashboard/floor-plans/{floor_plan}'
 */
export const destroy = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/dashboard/floor-plans/{floor_plan}',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::destroy
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:82
 * @route '/dashboard/floor-plans/{floor_plan}'
 */
destroy.url = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy.definition.url
            .replace('{floor_plan}', parsedArgs.floor_plan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\FloorPlanController::destroy
 * @see app/Http/Controllers/Dashboard/FloorPlan/FloorPlanController.php:82
 * @route '/dashboard/floor-plans/{floor_plan}'
 */
destroy.delete = (args: { floor_plan: string | number } | [floor_plan: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const floorPlans = {
    index,
create,
store,
show,
edit,
update,
destroy,
}

export default floorPlans