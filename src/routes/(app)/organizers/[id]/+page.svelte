<script lang="ts">
	import '@splidejs/svelte-splide/css'

	import Header from './Header.svelte'

	import FastInfoSection from './sections/FastInfo.svelte'
	import AboutSection from './sections/About.svelte'
	import EventsSection from './sections/Events/Events.svelte'
	import ContactsSection from './sections/Contacts.svelte'
	import ReviewsSection from './sections/Reviews.svelte'
	import SimilarSection from './sections/Similar.svelte'
</script>

<Header />

<main>
	<FastInfoSection />

	<div class="container section-group">
		<EventsSection />
		<div>
			<AboutSection />
			<ContactsSection />
		</div>
	</div>

	<SimilarSection />
	<ReviewsSection />
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
				gap: 20px;

				> div > section + section {
					margin-top: 20px;
				}

				@include scr.tablet {
					> :first-child {
						grid-row: 2;
					}

					> :last-child {
						grid-row: 1;
					}
				}
				@include scr.higher_than_tablet {
					grid-template-columns: 1fr 1fr;

					> section {
						margin-top: 0;
						margin-bottom: 0;
					}
				}
			}
		}
	}
</style>
