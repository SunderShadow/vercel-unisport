<script lang="ts">
	import { scriptURL } from '$lib/YMaps/Ymap.svelte'
	import YMap from '$lib/YMaps/Ymap.svelte'

	let mapLoaded = $state(false)
</script>

<svelte:head>
	<script
		src={scriptURL}
		onload={() => {
			mapLoaded = true
		}}></script>
</svelte:head>

<section id="map_route" class="container">
	<div class="box">
		<h2 class="block">Как добратся</h2>
		<p class="block">
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M10.0733 17.9237L10.075 17.9229L10.0792 17.92L10.0917 17.9104L10.1408 17.875C10.1831 17.8442 10.2428 17.7992 10.32 17.74C10.4733 17.6225 10.6908 17.4496 10.9504 17.2275C11.6318 16.6451 12.269 16.0128 12.8567 15.3358C14.235 13.7417 15.6667 11.4667 15.6667 8.865C15.6667 7.31083 15.0525 5.81917 13.9592 4.71917C13.4188 4.17471 12.7761 3.74252 12.068 3.44747C11.3599 3.15242 10.6004 3.00035 9.83333 3C9.06626 3.00029 8.30683 3.1523 7.59874 3.44728C6.89066 3.74225 6.24791 4.17437 5.7075 4.71875C4.61321 5.82134 3.9994 7.31197 4 8.86542C4 11.4667 5.43167 13.7417 6.81 15.3358C7.39765 16.0128 8.03483 16.6451 8.71625 17.2275C8.97625 17.4496 9.19333 17.6225 9.34667 17.74C9.42189 17.7979 9.49787 17.8549 9.57458 17.9108L9.58792 17.92L9.59167 17.9229L9.59333 17.9237C9.73708 18.025 9.92958 18.025 10.0733 17.9237ZM11.9167 8.83333C11.9167 9.38587 11.6972 9.91577 11.3065 10.3065C10.9158 10.6972 10.3859 10.9167 9.83333 10.9167C9.2808 10.9167 8.7509 10.6972 8.36019 10.3065C7.96949 9.91577 7.75 9.38587 7.75 8.83333C7.75 8.2808 7.96949 7.7509 8.36019 7.36019C8.7509 6.96949 9.2808 6.75 9.83333 6.75C10.3859 6.75 10.9158 6.96949 11.3065 7.36019C11.6972 7.7509 11.9167 8.2808 11.9167 8.83333Z"
					fill="#272327" />
			</svg>
			<span>ул. Зорге, д. 33, 5 этаж</span>
		</p>

		<div id="map" class="block">
			{#if mapLoaded}
				<YMap
					--height="inherit"
					options={{
						location: {
							center: [37.588144, 55.733842],
							zoom: 16
						}
					}}>
				</YMap>
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	@use '$scss/mixins/scr';
	#map_route {
		margin-top: 20px;

		p {
			display: flex;
			gap: 10px;
			align-items: center;
		}
	}

	#map {
		width: 100%;
		height: 600px;
		border-radius: 14px;

		@include scr.tablet {
			height: 300px;
		}
	}
</style>
