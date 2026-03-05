<script lang="ts" module>
	import type { YMap, YMapProps } from '@yandex/ymaps3-types'
	import type { Snippet } from 'svelte'
	import { PUBLIC_YMAPS_KEY } from '$env/static/public'

	export const scriptURL = `https://api-maps.yandex.ru/v3/?apikey=${PUBLIC_YMAPS_KEY}&lang=ru_RU`

	export type Props = {
		map?: YMap,
		options: YMapProps,
		children?: Snippet
	}
</script>

<script lang="ts">
	import { onDestroy, onMount, setContext } from 'svelte'
	import {browser} from '$app/environment'

	let el: HTMLElement = $state()!

	let {
		map = $bindable(null),
		options,
		children
	}: Props = $props()

	let mapContext = $state({
		map
	})

	let ready = $state(false)

	setContext('y-map-el', mapContext)

	async function initMap() {
		await ymaps3.ready

		return new ymaps3.YMap(el, options, [
			new ymaps3.YMapDefaultSchemeLayer(),
			new ymaps3.YMapDefaultFeaturesLayer(),
		])
	}

	onMount(async () => {
		mapContext.map = await initMap()
		ready = true
	})

	onDestroy(() => {
		map?.destroy()
	})
</script>

{#if browser}
	<div bind:this={el}>
		{#if ready}
			{@render children?.()}
		{/if}
	</div>
{/if}

<style lang="scss">
	div {
		width: var(--width, 100%);
		height: var(--height, 100%);
	}
</style>