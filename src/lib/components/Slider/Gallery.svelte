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
		perPage: 1,
		gap: 20,
		padding: 10,
		...options
	})
</script>

<div class="splide-gallery-wrapper">
	<Splide hasTrack={false} options={defaultOptions}>
		<SplideTrack>
			{@render slides()}
		</SplideTrack>
	</Splide>
</div>

<style lang="scss">
	.splide-gallery-wrapper {
		display: contents;

		:global {
			.splide__track {
				height: 100%;
			}

			.splide__pagination {
				bottom: 10px;
			}

			.splide__pagination__page {
				background: none;
				border: 1px solid #ffffff;
			}

			.splide__pagination__page.is-active {
				background: #ffffff;
				opacity: 1;
			}
		}
	}
</style>
