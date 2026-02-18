<script lang="ts">
  // Для Section7 & Section8
  import '@splidejs/svelte-splide/css'

	import Section1 from './+page/Section1/Section1.svelte'
	import Section2 from './+page/Section2/Section2.svelte'
	import Section3 from './+page/Section3/Section3.svelte'
	import Section4 from './+page/Section4/Section4.svelte'
	import Section5 from './+page/Section5/Section5.svelte'
  import Section7 from "./+page/Section7/Section7.svelte"
  import Section8 from "./+page/Section8/Section8.svelte"
  import Section9 from "./+page/Section9/Section9.svelte"
</script>

<Section1 />
<Section2 />
<Section3 />
<Section4 />
<Section5 />
<Section7 />
<Section8 />
<Section9 />

<style lang="scss">
	@use "$scss/mixins/scr";

	:global {
		section.container {
			.badge {
				width: fit-content;
				margin-left: auto;
				margin-right: auto;
				font-size: .75em;

        @include scr.mobile {
          font-size: .85em;
        }
			}

			h2 {
				text-align: center;
				margin-top: 20px;
				margin-bottom: 20px;

        @include scr.mobile {
          font-size: 1.5715em;
        }
			}

			.text-content {
				max-width: 890px;
				text-align: center;
				margin-left: auto;
				margin-right: auto;

				color: var(--text-content-color);

				@include scr.desktop {
          font-size: 18px;
				}
			}
		}
	}
</style>
