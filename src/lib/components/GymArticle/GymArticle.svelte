<script lang="ts">
	import GallerySlider from '$lib/components/Slider/Gallery.svelte'
	import { SplideSlide } from '@splidejs/svelte-splide'
	import Rating from '$lib/components/Rating/Rating.svelte'
	import Button from '$lib/components/Button/Button.svelte'
	import MagnifierIcon from '$lib/components/icons/Magnifier.svelte'
	import Facilities from '$lib/components/Facilities/Facilities.svelte'

	let {
		images,
		thumb
	} = $props()
</script>

<article class="box">
	<div class="inner-wrapper">
		<div class="badge">
			от 1500₽
		</div>

		<div class="gallery">
			<GallerySlider options={{perPage: 1}}>
				{#snippet slides()}
					{#each images as img}
						<SplideSlide>
							<img src={img} alt="" width="260" height="260">
						</SplideSlide>
					{/each}
				{/snippet}
			</GallerySlider>
		</div>

		<div class="content">
			<div>
				<div class="type">Фитнес-клуб</div>
				<h3>West Gym</h3>
			</div>

			<Rating value="4,0"/>
			<div class="address">
				<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M8.2413 17.4237L8.24297 17.4229L8.24714 17.42L8.25964 17.4104L8.3088 17.375C8.35103 17.3442 8.41075 17.2992 8.48797 17.24C8.6413 17.1225 8.8588 16.9496 9.11839 16.7275C9.79981 16.1451 10.437 15.5128 11.0246 14.8358C12.403 13.2417 13.8346 10.9667 13.8346 8.365C13.8346 6.81083 13.2205 5.31917 12.1271 4.21917C11.5868 3.67471 10.944 3.24252 10.2359 2.94747C9.52785 2.65242 8.7684 2.50035 8.0013 2.5C7.23423 2.50029 6.4748 2.6523 5.76671 2.94728C5.05863 3.24225 4.41588 3.67437 3.87547 4.21875C2.78118 5.32134 2.16737 6.81197 2.16797 8.36542C2.16797 10.9667 3.59964 13.2417 4.97797 14.8358C5.56562 15.5128 6.20279 16.1451 6.88422 16.7275C7.14422 16.9496 7.3613 17.1225 7.51464 17.24C7.58986 17.2979 7.66583 17.3549 7.74255 17.4108L7.75589 17.42L7.75964 17.4229L7.7613 17.4237C7.90505 17.525 8.09755 17.525 8.2413 17.4237ZM10.0846 8.33333C10.0846 8.88587 9.86514 9.41577 9.47444 9.80647C9.08374 10.1972 8.55384 10.4167 8.0013 10.4167C7.44877 10.4167 6.91886 10.1972 6.52816 9.80647C6.13746 9.41577 5.91797 8.88587 5.91797 8.33333C5.91797 7.7808 6.13746 7.2509 6.52816 6.86019C6.91886 6.46949 7.44877 6.25 8.0013 6.25C8.55384 6.25 9.08374 6.46949 9.47444 6.86019C9.86514 7.2509 10.0846 7.7808 10.0846 8.33333Z" fill="#656565"/>
				</svg>

				<span>ул. Зорге, д. 33</span>
			</div>

			<div class="facilities">
				<Facilities />
			</div>

			<div class="more">
				<Button accent fullWidth href="/catalog/gyms/2">
					<MagnifierIcon />

					Узнать подробнее
				</Button>
			</div>
		</div>
	</div>
</article>

<style lang="scss">
	.inner-wrapper {
    position: relative;
    display: flex;
		flex-wrap: wrap;
    gap: 20px;
	}

  .badge {
    position: absolute;
    top: 10px;
    left: 20px;
		z-index: 1;

    background: linear-gradient(90deg, rgba(246, 109, 73, 0.8) 0%, rgba(244, 63, 94, 0.8) 100%);
    border: none;
    color: #fff;
    font-weight: 700;
		font-size: .75em;
  }

  .gallery {
    display: flex;
		flex-shrink: 0;

		max-height: 260px;
		width: 100%;

    @media (min-width: 1236px) {
      width: 260px;
    }

		:global {
			.splide {
				height: 100%;
			}
		}
	}

	.facilities {
    margin-bottom: 25px;

    :global svg {
      *[fill] {
        fill: var(--text-color);
      }
    }
  }

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
    border-radius: 14px;
	}

	.type {
		font-size: 1.1em;
		color: var(--text-content-color);
	}

	h3 {
    margin-top: 15px;
    margin-bottom: 0;
		font-size: 2rem;
	}

	.content {
    display: flex;
		flex-direction: column;
		gap: 10px;
		flex-grow: 1;
	}

	.address {
    display: flex;
		align-items: center;
		gap: 10px;
	}

	.more {
    margin-top: auto;
	}
</style>