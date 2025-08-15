import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskStatusController::update
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskStatusController.php:14
 * @route '/dashboard/kiosks/{kiosk}/status'
 */
export const update = (args: { kiosk: number | { id: number } } | [kiosk: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put'],
    url: '/dashboard/kiosks/{kiosk}/status',
}

/**
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskStatusController::update
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskStatusController.php:14
 * @route '/dashboard/kiosks/{kiosk}/status'
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
* @see \App\Http\Controllers\Dashboard\Kiosk\KioskStatusController::update
 * @see app/Http/Controllers/Dashboard/Kiosk/KioskStatusController.php:14
 * @route '/dashboard/kiosks/{kiosk}/status'
 */
update.put = (args: { kiosk: number | { id: number } } | [kiosk: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})
const status = {
    update,
}

export default status