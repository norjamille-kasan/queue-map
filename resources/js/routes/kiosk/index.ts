import { queryParams, type QueryParams } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Kiosk\IndexController::index
 * @see app/Http/Controllers/Kiosk/IndexController.php:14
 * @route '/kiosk'
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
    url: '/kiosk',
}

/**
* @see \App\Http\Controllers\Kiosk\IndexController::index
 * @see app/Http/Controllers/Kiosk/IndexController.php:14
 * @route '/kiosk'
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Kiosk\IndexController::index
 * @see app/Http/Controllers/Kiosk/IndexController.php:14
 * @route '/kiosk'
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Kiosk\IndexController::index
 * @see app/Http/Controllers/Kiosk/IndexController.php:14
 * @route '/kiosk'
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})
const kiosk = {
    index,
}

export default kiosk