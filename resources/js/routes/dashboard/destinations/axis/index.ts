import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationAxisController::update
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationAxisController.php:15
 * @route '/dashboard/destinations/{destination}/axis'
 */
export const update = (args: { destination: number | { id: number } } | [destination: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put'],
    url: '/dashboard/destinations/{destination}/axis',
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationAxisController::update
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationAxisController.php:15
 * @route '/dashboard/destinations/{destination}/axis'
 */
update.url = (args: { destination: number | { id: number } } | [destination: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { destination: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { destination: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    destination: args[0],
                }
    }

    const parsedArgs = {
                        destination: typeof args.destination === 'object'
                ? args.destination.id
                : args.destination,
                }

    return update.definition.url
            .replace('{destination}', parsedArgs.destination.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FloorPlan\DestinationAxisController::update
 * @see app/Http/Controllers/Dashboard/FloorPlan/DestinationAxisController.php:15
 * @route '/dashboard/destinations/{destination}/axis'
 */
update.put = (args: { destination: number | { id: number } } | [destination: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})
const axis = {
    update,
}

export default axis