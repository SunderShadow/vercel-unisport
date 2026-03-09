<script lang="ts">
	import galleryImg from '../assets/gallery.png'
	import FullscreenGallery from '$lib/components/FullscreenGallery/FullscreenGallery.svelte'

	let galleryVisible = $state(false)
</script>

<FullscreenGallery images={[galleryImg + '?0', galleryImg + '?1', galleryImg + '?2', galleryImg + '?3']} bind:visible={galleryVisible}/>

<section id="gallery" class="box">
	<h2 class="block">Фотогалерея</h2>
	<div class="block content">
		<enhanced:img src={galleryImg} width="315" height="236" onclick={() => {galleryVisible = true}}/>
		<enhanced:img src={galleryImg} width="315" height="236" onclick={() => {galleryVisible = true}} />
		<enhanced:img src={galleryImg} width="315" height="236" onclick={() => {galleryVisible = true}}/>
		<enhanced:img src={galleryImg} width="315" height="236" onclick={() => {galleryVisible = true}}/>
	</div>
</section>

<style lang="scss">
	@use '$scss/mixins/scr';

	#gallery {
		@include scr.higher_than_tablet {
			grid-column: 2;
			grid-row: 1 / 3;
		}

		.content {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 20px;

			@include scr.mobile {
				grid-template-columns: 1fr;
			}

			img {
				width: 100%;
				object-fit: cover;
				border-radius: 14px;
			}
		}
	}
</style>
