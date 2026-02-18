<script lang="ts">
	import { type Options, Splide, SplideTrack } from '@splidejs/svelte-splide'
	import type { Snippet } from 'svelte'

	type Props = {
		slides: Snippet
	}

	let options: Options = {
		arrows: false,
		perPage: 4,
		gap: 20,
		padding: 10
	}

	let { slides } = $props()
</script>

<Splide hasTrack={false} {options}>
	<SplideTrack>
		{@render slides()}
	</SplideTrack>
</Splide>

<style lang="scss">
	:global {
		.splide {
			padding-bottom: 21px;
		}

		.splide__track {
			padding-top: 20px;
			padding-bottom: 20px;
		}

		.splide__pagination__page {
			background: #d1d5db;
		}

		.splide__pagination__page.is-active {
			background: linear-gradient(90deg, #f66d49 0%, #f43f5e 100%);
		}
	}
</style>
