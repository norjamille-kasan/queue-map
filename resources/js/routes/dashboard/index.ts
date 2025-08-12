import { queryParams, type QueryParams } from './../../wayfinder'
import profile from './profile'
import password from './password'
import kiosks from './kiosks'
import floorPlans from './floor-plans'
import destinations from './destinations'
/**
* @see \App\Http\Controllers\Dashboard\IndexController::index
 * @see app/Http/Controllers/Dashboard/IndexController.php:14
 * @route '/dashboard'
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
    url: '/dashboard',
}

/**
* @see \App\Http\Controllers\Dashboard\IndexController::index
 * @see app/Http/Controllers/Dashboard/IndexController.php:14
 * @route '/dashboard'
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\IndexController::index
 * @see app/Http/Controllers/Dashboard/IndexController.php:14
 * @route '/dashboard'
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\IndexController::index
 * @see app/Http/Controllers/Dashboard/IndexController.php:14
 * @route '/dashboard'
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:29
 * @route '/dashboard/settings/appearance'
 */
export const appearance = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: appearance.url(options),
    method: 'get',
})

appearance.definition = {
    methods: ['get','head'],
    url: '/dashboard/settings/appearance',
}

/**
 * @see routes/web.php:29
 * @route '/dashboard/settings/appearance'
 */
appearance.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return appearance.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:29
 * @route '/dashboard/settings/appearance'
 */
appearance.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: appearance.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:29
 * @route '/dashboard/settings/appearance'
 */
appearance.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: appearance.url(options),
    method: 'head',
})
const dashboard = {
    index,
profile,
password,
appearance,
kiosks,
floorPlans,
destinations,
}

export default dashboard