import '@yandex/ymaps3-default-ui-theme/dist/esm/index.css'
import { PUBLIC_YMAPS_KEY } from '$env/static/public'
import type { SearchParams } from '@yandex/ymaps3-default-ui-theme'
import type { LngLat } from '@yandex/ymaps3-types'

// export const scriptHTML = `<script src="https://api-maps.yandex.ru/2.1/?apikey=${PUBLIC_YMAPS_KEY}&lang=ru_RU" type="text/javascript"></script>`
export const scriptHTML = `<script src="https://api-maps.yandex.ru/v3/?apikey=${PUBLIC_YMAPS_KEY}&lang=ru_RU"></script>`

export async function initMapWithMarker(el: HTMLElement, searchParams: SearchParams) {
	// Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
	await ymaps3.ready

	let { YMapDefaultMarker } = await import('@yandex/ymaps3-default-ui-theme')
	let { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3

	let location = {
		center: [37.588144, 55.733842],
		zoom: 14
	}

	let markerCoordinates: LngLat = [37.588144, 55.733842]

	const searchAddress = await ymaps3.search(searchParams)
	if (searchAddress.length) {
		location.center = searchAddress[0].geometry.coordinates
		markerCoordinates = searchAddress[0].geometry.coordinates
	} else {
		return false
	}

	return new YMap(el, { location }, [
		new YMapDefaultSchemeLayer(),
		new YMapDefaultFeaturesLayer(),
		new YMapDefaultMarker({
			coordinates: markerCoordinates,
			size: 'normal',
			iconName: 'fallback'
		})
	])
}