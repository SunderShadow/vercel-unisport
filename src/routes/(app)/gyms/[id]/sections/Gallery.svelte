<script lang="ts">
	import galleryImg from '../assets/gallery.png'
</script>

<section id="gallery" class="box">
	<h2 class="block">Фотогалерея</h2>
	<div class="block content">
		<enhanced:img src={galleryImg} width="315" height="236" />
		<enhanced:img src={galleryImg} width="315" height="236" />
		<enhanced:img src={galleryImg} width="315" height="236" />
		<enhanced:img src={galleryImg} width="315" height="236" />
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
