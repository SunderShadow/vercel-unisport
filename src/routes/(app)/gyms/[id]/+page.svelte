<script lang="ts">
	import '@splidejs/svelte-splide/css'

	import Header from './Header.svelte'

	import FastInfoSection from './sections/FastInfo.svelte'
	import AboutSection from './sections/About.svelte'
	import GallerySection from './sections/Gallery.svelte'
	import ContactsSection from './sections/Contacts.svelte'
	import MapRouteSection from './sections/MapRoute.svelte'
	import ReviewsSection from './sections/Reviews.svelte'
	import SimilarSection from './sections/Similar.svelte'
	import OpportunitiesSection from './sections/Opportunities.svelte'
	import MembershipSection from './sections/Membership.svelte'
	import TrialLessonSection from './sections/TrialLesson.svelte'
	import GroupsTimetableSection from './sections/GroupsTimetable/GroupsTimetable.svelte'

</script>

<Header />

<main>
	<FastInfoSection />

	<div class="container section-group">
		<div>
			<AboutSection />
			<OpportunitiesSection />
			<GallerySection />
		</div>

		<div>
			<MembershipSection />
			<ContactsSection />
			<TrialLessonSection />
		</div>
	</div>

	<GroupsTimetableSection />

	<MapRouteSection />

	<ReviewsSection />
	<SimilarSection />
</main>

<style lang="scss">
	@use '$scss/mixins/scr';

	.section-group {
    > div {
      display: flex;
      flex-direction: column;
		}

		@include scr.tablet {
			> div + div {
        margin-top: 20px;
			}
		}
	}

	main {
		:global {
			.section-group + section,
			.section-group + .section-group,
			section + section {
        margin-top: 20px;
			}
			> section:last-of-type {
        margin-bottom: 50px;
      }

      .section-group {
        display: grid;

        @include scr.higher_than_tablet {
          grid-template-columns: 1fr 1fr;
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
