<script lang="ts" module>
	import type { Props as YmapProps } from '$lib/YMaps/Ymap.svelte'
	export type Props = YmapProps & {
		type: 'fitness' | 'swimming'
		title: string
		onclick: Function
	}
</script>

<script lang="ts">
	import YMapMarker from '$lib/YMaps/YMapMarker.svelte'

	let { type, active, title, coordinates, ...restProps } = $props()
</script>

<YMapMarker {coordinates}>
	<button class="marker" {...restProps} class:active>
		<div class="icon">
			{#if type === 'swimming'}
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M33.7525 20.005C35.1346 20.005 36.255 18.8846 36.255 17.5025C36.255 16.1204 35.1346 15 33.7525 15C32.3704 15 31.25 16.1204 31.25 17.5025C31.25 18.8846 32.3704 20.005 33.7525 20.005Z"
						fill="#272327" />
					<path
						d="M33.5938 26.5236C32.885 27.0898 32.3713 27.4998 31.2463 27.4998C30.1213 27.4998 29.6362 27.1111 28.9013 26.5236C28.0513 25.8448 26.995 24.9998 24.9925 24.9998C22.99 24.9998 21.9362 25.8448 21.0875 26.5236C20.3525 27.1111 19.8687 27.4998 18.7437 27.4998C17.6212 27.4998 17.1363 27.1111 16.4025 26.5248C15.5538 25.8448 14.5 24.9998 12.5 24.9998V27.4998C13.6213 27.4998 14.1062 27.8886 14.84 28.4748C15.6888 29.1548 16.7437 29.9998 18.7437 29.9998C20.7437 29.9998 21.8012 29.1548 22.65 28.4748C23.3837 27.8873 23.87 27.4998 24.9925 27.4998C26.1175 27.4998 26.6312 27.9098 27.34 28.4761C28.1887 29.1548 29.245 29.9998 31.2463 29.9998C33.2487 29.9998 34.305 29.1548 35.155 28.4761C35.89 27.8886 36.3762 27.4998 37.5 27.4998V24.9998C35.4988 24.9998 34.4425 25.8448 33.5938 26.5236ZM31.2463 33.7498C30.1225 33.7498 29.6362 33.3611 28.9013 32.7736C28.0513 32.0948 26.995 31.2498 24.9925 31.2498C22.99 31.2498 21.9362 32.0948 21.0875 32.7736C20.3525 33.3611 19.8687 33.7498 18.7437 33.7498C17.6212 33.7498 17.1363 33.3611 16.4025 32.7748C15.5538 32.0948 14.5 31.2498 12.5 31.2498V33.7498C13.6213 33.7498 14.1062 34.1386 14.84 34.7248C15.6888 35.4048 16.7437 36.2498 18.7437 36.2498C20.7437 36.2498 21.8012 35.4048 22.65 34.7248C23.3837 34.1373 23.87 33.7498 24.9925 33.7498C26.1175 33.7498 26.6312 34.1598 27.34 34.7261C28.1887 35.4048 29.245 36.2498 31.2463 36.2498C33.2487 36.2498 34.305 35.4048 35.155 34.7261C35.89 34.1386 36.3762 33.7498 37.5 33.7498V31.2498C35.4988 31.2498 34.4425 32.0948 33.5938 32.7736C32.885 33.3398 32.3713 33.7498 31.2463 33.7498ZM23.75 16.7736L26.38 19.4036L23.8088 22.6161C24.1663 22.5461 24.5538 22.4998 24.9925 22.4998C26.995 22.4998 28.0513 23.3448 28.9013 24.0236C29.6362 24.6111 30.1225 24.9998 31.2463 24.9998C32.3713 24.9998 32.885 24.5898 33.5938 24.0236C33.7588 23.8923 33.9363 23.7523 34.1225 23.6161L31.5025 21.0036L31.5088 20.9973L24.6337 14.1223C24.3993 13.888 24.0815 13.7563 23.75 13.7563C23.4185 13.7563 23.1007 13.888 22.8663 14.1223L17.8663 19.1223L19.6337 20.8898L23.75 16.7736Z"
						fill="#272327" />
				</svg>
			{:else}
				<svg
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_1724_6779)">
						<path
							d="M9.25 8.75H5.75C5.55109 8.75 5.36032 8.82902 5.21967 8.96967C5.07902 9.11032 5 9.30109 5 9.5V20.5C5 20.5985 5.0194 20.696 5.05709 20.787C5.09478 20.878 5.15003 20.9607 5.21967 21.0303C5.28931 21.1 5.37199 21.1552 5.46299 21.1929C5.55398 21.2306 5.65151 21.25 5.75 21.25H9.25C9.34849 21.25 9.44602 21.2306 9.53701 21.1929C9.62801 21.1552 9.71069 21.1 9.78033 21.0303C9.84997 20.9607 9.90522 20.878 9.94291 20.787C9.9806 20.696 10 20.5985 10 20.5V9.5C10 9.30109 9.92098 9.11032 9.78033 8.96967C9.63968 8.82902 9.44891 8.75 9.25 8.75ZM24.25 8.75H20.75C20.5511 8.75 20.3603 8.82902 20.2197 8.96967C20.079 9.11032 20 9.30109 20 9.5V20.5C20 20.5985 20.0194 20.696 20.0571 20.787C20.0948 20.878 20.15 20.9607 20.2197 21.0303C20.2893 21.1 20.372 21.1552 20.463 21.1929C20.554 21.2306 20.6515 21.25 20.75 21.25H24.25C24.3485 21.25 24.446 21.2306 24.537 21.1929C24.628 21.1552 24.7107 21.1 24.7803 21.0303C24.85 20.9607 24.9052 20.878 24.9429 20.787C24.9806 20.696 25 20.5985 25 20.5V9.5C25 9.30109 24.921 9.11032 24.7803 8.96967C24.6397 8.82902 24.4489 8.75 24.25 8.75Z"
							stroke="white"
							stroke-width="1.5625"
							stroke-linecap="round"
							stroke-linejoin="round" />
						<path
							d="M10 15H20M1.25 18V12C1.25 11.8011 1.32902 11.6103 1.46967 11.4697C1.61032 11.329 1.80109 11.25 2 11.25H4.25C4.44891 11.25 4.63968 11.329 4.78033 11.4697C4.92098 11.6103 5 11.8011 5 12V18C5 18.1989 4.92098 18.3897 4.78033 18.5303C4.63968 18.671 4.44891 18.75 4.25 18.75H2C1.80109 18.75 1.61032 18.671 1.46967 18.5303C1.32902 18.3897 1.25 18.1989 1.25 18ZM28.75 18V12C28.75 11.8011 28.671 11.6103 28.5303 11.4697C28.3897 11.329 28.1989 11.25 28 11.25H25.75C25.5511 11.25 25.3603 11.329 25.2197 11.4697C25.079 11.6103 25 11.8011 25 12V18C25 18.1989 25.079 18.3897 25.2197 18.5303C25.3603 18.671 25.5511 18.75 25.75 18.75H28C28.1989 18.75 28.3897 18.671 28.5303 18.5303C28.671 18.3897 28.75 18.1989 28.75 18Z"
							stroke="white"
							stroke-width="1.5625"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</g>
					<defs>
						<clipPath id="clip0_1724_6779">
							<rect width="30" height="30" fill="white" />
						</clipPath>
					</defs>
				</svg>
			{/if}
		</div>
		<span>{title}</span>
	</button>
</YMapMarker>

<style lang="scss">
	@use '$scss/mixins/scr';
	@use '$scss/mixins/bg';

	button {
		all: unset;
	}

	.marker {
		--name-visible: 0;

		cursor: pointer;
		position: relative;

		transition-property: transform;
		transition-duration: var(--transition-duration);

		&:hover {
			--name-visible: 1;
		}

		@include scr.tablet {
			--name-visible: 1;
		}

		&.active {
			--name-visible: 1;

			transform: translate(-5px, 5px);

			.icon {
				width: 70px;
				height: 50px;
				background: transparent;

				:global svg {
					*[fill] {
						fill: #fff;
					}
					*[stroke] {
						stroke: #fff;
					}
				}

				&::before {
					opacity: 1;
				}
			}
		}

		.icon {
			display: flex;
			width: 60px;
			height: 60px;
			background: #fff;
			border-radius: 10em;

			transition-property: background-color, width, height, transform;
			transition-duration: var(--transition-duration);

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				background: linear-gradient(90deg, #f66d49 0%, #f43f5e 100%);
				z-index: -1;
				border-radius: 10em;
				opacity: 0;

				transition-property: opacity;
				transition-duration: var(--transition-duration);
			}

			:global svg {
				margin: auto;

				*[fill] {
					fill: var(--text-color);
					transition: fill var(--transition-duration);
				}
				*[stroke] {
					stroke: var(--text-color);
					transition: stroke var(--transition-duration);
				}
			}
		}

		&:not(.active) .icon:hover {
			background: rgba(255, 255, 255, 0.75);
			&::before {
				opacity: 0.5;
			}
			:global svg {
				*[fill] {
					fill: var(--color-accent-1);
				}
				*[stroke] {
					stroke: var(--color-accent-1);
				}
			}
		}

		span {
			background: #fff;
			text-wrap: nowrap;
			position: absolute;
			top: calc(100% + 5px);
			left: 50%;
			transform: translateX(-50%) scale(var(--name-visible));

			padding: 10px 20px;
			border-radius: 10em;

			transition: transform var(--transition-duration);
		}
	}
</style>
