<script lang="ts">
	import { type Options, Splide, SplideTrack } from '@splidejs/svelte-splide'
	import type { Snippet } from 'svelte'

	type Props = {
		slides: Snippet
		options?: Options
	}

	let { slides, options = {} }: Props = $props()

	const defaultOptions: Options = $derived({
		type: 'loop',
		arrows: false,
		perPage: 4,
		gap: 20,
		padding: 10,
		breakpoints: {
			1024: {
				perPage: 3
			},
			768: {
				perPage: 2
			},
			425: {
				perPage: 1
			}
		},
		...options
	})
</script>

<div class="splide-wrapper">
	<Splide hasTrack={false} options={defaultOptions}>
		<SplideTrack>
			{@render slides()}
		</SplideTrack>
	</Splide>
</div>

<style lang="scss">
	.splide-wrapper {
		display: contents;

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
	}
</style>
