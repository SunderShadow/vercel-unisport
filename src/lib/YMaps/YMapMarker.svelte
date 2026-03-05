<script lang="ts" module>
	import type { YMapMarkerProps } from '@yandex/ymaps3-types/imperative/YMapMarker'
	import type { Snippet } from 'svelte'

	export type Props = YMapMarkerProps & {
		children: Snippet
	}
</script>

<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'
	import { type YMap } from '@yandex/ymaps3-types'

	const context: {
		map: YMap
	} = getContext('y-map-el')

	new ymaps3.YMapMarker()
	const map: YMap = context.map

	let el: HTMLElement = $state()

	let { children, coordinates }: Props = $props()

	onMount(() => {
		el.remove()
		map.addChild(new ymaps3.YMapMarker({ coordinates }, el))
	})

	onDestroy(() => {
		el.remove()
	})
</script>

<div style="display: contents" bind:this={el}>
	{@render children?.()}
</div>
