<script lang="ts" module>
	import type { YMap, YMapProps } from '@yandex/ymaps3-types'
	import type { Snippet } from 'svelte'

	export type Props = {
		options: YMapProps,
		children?: Snippet
	}

	export let map: YMap
</script>

<script lang="ts">
	import {onMount, setContext} from 'svelte'
	import {browser} from '$app/environment'

	let el: HTMLElement = $state()!

	async function initMap() {
		await ymaps3.ready

		return new ymaps3.YMap(el, options, [
			new ymaps3.YMapDefaultSchemeLayer(),
			new ymaps3.YMapDefaultFeaturesLayer(),
		])
	}

	let mapContext = $state({
		map
	})

	setContext('y-map-el', mapContext)

	onMount(async () => {
		mapContext.map = await initMap()
		mapInitialized = true
	})

	let mapInitialized = $state(false)
	let {
		options,
		children
	}: Props = $props()
</script>

{#if browser}
	<div bind:this={el}>
		{#if mapInitialized}
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