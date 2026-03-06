<script lang="ts">
	import '@splidejs/svelte-splide/css'

	import Header from './Header.svelte'

	import FastInfoSection from './sections/FastInfo.svelte'
	import AboutSection from './sections/About.svelte'
	import GallerySection from './sections/Gallery.svelte'
	import ContactsSection from './sections/Contacts.svelte'
	import MapRouteSection from './sections/MapRoute.svelte'
	import ReviewsSection from './sections/Reviews.svelte'
	import OrganizerSection from './sections/Organizer.svelte'
	import SimilarSection from './sections/Similar.svelte'
</script>

<Header />

<main>
	<FastInfoSection />

	<div class="container section-group">
		<AboutSection />
		<GallerySection />
		<ContactsSection />
	</div>

	<MapRouteSection />

	<ReviewsSection />
	<OrganizerSection />
	<SimilarSection />
</main>

<style lang="scss">
	@use '$scss/mixins/scr';

	main {
		:global {
			.section-group + section,
			.section-group + .section-group,
			section + section {
				margin-top: 50px;

				@include scr.tablet {
					margin-top: 20px;
				}
			}
			> section:last-of-type {
				margin-bottom: 50px;
			}

			.section-group {
				display: grid;

				@include scr.higher_than_tablet {
					grid-template-columns: 1fr 1fr;
					grid-template-rows: 1fr 2fr;
					gap: 20px;

					> section {
						margin-top: 0;
						margin-bottom: 0;
					}
				}
			}
		}
	}
</style>
