<script lang="ts">
	import '@splidejs/svelte-splide/css'

	import { fade } from 'svelte/transition'

	import { scriptURL } from '$lib/YMaps/Ymap.svelte'

	import { onMount } from 'svelte'
	import YMap from '$lib/YMaps/Ymap.svelte'
	import Input from '$lib/components/Form/Input.svelte'
	import Button from '$lib/components/Button/Button.svelte'
	import MagnifierIcon from '$lib/components/icons/Magnifier.svelte'
	import gymEnhanced from './assets/gym.png?enhanced&format=webp'
	import galleryEnhanced from './assets/gallery.png?enhanced&format=webp'

	import Rating from '$lib/components/Rating/Rating.svelte'
	import { SplideSlide } from '@splidejs/svelte-splide'
	import GallerySlider from '$lib/components/Slider/Gallery.svelte'
	import Facilities from '$lib/components/Facilities/Facilities.svelte'
	import GymMarker from '$lib/YMaps/GymMarker.svelte'

	let filtersSectionEl = $state()
	let filterHeight = $state(730)

	let articleFound = $state(false)

	let filtersVisible = $state(true)

	let mapLoaded = $state(false)

	let placeId = $state(-1)
	onMount(async () => {
		filterHeight = filtersSectionEl.clientHeight
	})
</script>

<svelte:head>
	<title>Найти место тренировки</title>
	<script
		src={scriptURL}
		onload={() => {
			mapLoaded = true
		}}></script>
</svelte:head>

{#if mapLoaded}
	<YMap
		--height="100dvh"
		--width="100%"
		options={{
			location: {
				center: [37.588144, 55.733842],
				zoom: 16
			}
		}}>
		<GymMarker
			coordinates={[37.588144, 55.733842]}
			title="Fitness Gym"
			type="fitness"
			active={placeId === 1}
			onclick={() => {
				placeId = 1
				articleFound = true
			}} />

		<GymMarker
			coordinates={[37.588241, 55.734841]}
			title="Бассеин волна"
			type="swimming"
			active={placeId === 2}
			onclick={() => {
				placeId = 2
				articleFound = true
			}} />
	</YMap>
{/if}
<form id="search" action="">
	<div class="open-filters" class:active={filtersVisible}>
		<Button
			round
			bg="white"
			onclick={() => {
				filtersVisible = !filtersVisible
			}}>
			<svg
				width="23"
				height="23"
				viewBox="0 0 23 23"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M6.5 17.5V5.5M6.5 17.5L3.5 12.8846M6.5 17.5L9.5 12.8846"
					stroke="#272327"
					stroke-width="2"
					stroke-linecap="round" />
				<path
					d="M16.5 5.5V17.5M16.5 5.5L13.5 10.1154M16.5 5.5L19.5 10.1154"
					stroke="#272327"
					stroke-width="2"
					stroke-linecap="round" />
			</svg>
		</Button>
	</div>

	<Input placeholder="Найти место тренировки" />
	<Button round accent>
		<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M14.8542 13.4167H14.0971L13.8288 13.1579C14.8005 12.031 15.3345 10.5922 15.3333 9.10417C15.3333 7.87216 14.968 6.66781 14.2835 5.64343C13.5991 4.61905 12.6262 3.82064 11.488 3.34917C10.3497 2.8777 9.09726 2.75434 7.88892 2.99469C6.68058 3.23505 5.57065 3.82832 4.69948 4.69948C3.82832 5.57065 3.23505 6.68058 2.99469 7.88892C2.75434 9.09726 2.8777 10.3497 3.34917 11.488C3.82064 12.6262 4.61905 13.5991 5.64343 14.2835C6.66781 14.968 7.87216 15.3333 9.10417 15.3333C10.6471 15.3333 12.0654 14.7679 13.1579 13.8288L13.4167 14.0971V14.8542L18.2083 19.6363L19.6363 18.2083L14.8542 13.4167ZM9.10417 13.4167C6.71792 13.4167 4.79167 11.4904 4.79167 9.10417C4.79167 6.71792 6.71792 4.79167 9.10417 4.79167C11.4904 4.79167 13.4167 6.71792 13.4167 9.10417C13.4167 11.4904 11.4904 13.4167 9.10417 13.4167Z"
				fill="white" />
		</svg>
	</Button>
</form>

<section id="filters" bind:this={filtersSectionEl} class:visible={filtersVisible}>
	<h2>Фильтры</h2>
	<form action="">
		<div class="form_filters">
			<div class="filter">
				<h3>Тип комплекса</h3>
				<label>
					<input type="checkbox" name="type" value="swim-pool" />
					<span>Бассейн</span>
				</label>
				<label>
					<input type="checkbox" name="type" value="fitness" />
					<span>Фитнес-клуб</span>
				</label>
				<label>
					<input type="checkbox" name="type" value="dance" />
					<span>Студия танцев</span>
				</label>
				<label>
					<input type="checkbox" name="type" value="yoga" />
					<span>Студия йоги</span>
				</label>
				<label>
					<input type="checkbox" name="type" value="pilates" />
					<span>Пилатес</span>
				</label>
				<label>
					<input type="checkbox" name="type" value="stretching" />
					<span>Стретчинг</span>
				</label>
			</div>
			<div class="filter">
				<h3>Основные фильтры</h3>
				<label>
					<input type="checkbox" name="main" value="close_to_me" />
					<span>Близко ко мне</span>
				</label>
				<label>
					<input type="checkbox" name="main" value="trial_lesson" />
					<span>Пробное занятие</span>
				</label>
				<label>
					<input type="checkbox" name="main" value="group_lesson" />
					<span>Групповые занятия</span>
				</label>
			</div>
			<div class="filter">
				<h3>Дополнительные фильтры</h3>
				<label>
					<input type="checkbox" name="additional" value="before_16" />
					<span>Можно до 16 лет</span>
				</label>
				<label>
					<input type="checkbox" name="additional" value="parking" />
					<span>Есть парковка</span>
				</label>
				<label>
					<input type="checkbox" name="additional" value="wifi" />
					<span>Есть точка Wi-Fi</span>
				</label>
				<label>
					<input type="checkbox" name="additional" value="woman_only" />
					<span>Вход только девушкам</span>
				</label>
				<label>
					<input type="checkbox" name="additional" value="man_only" />
					<span>Вход только мужчинам</span>
				</label>
				<label>
					<input type="checkbox" name="additional" value="shower" />
					<span>Есть душ</span>
				</label>
			</div>
		</div>

		<Button accent fullWidth>
			<MagnifierIcon />

			<span>Найти</span>
		</Button>
	</form>
</section>

{#if articleFound}
	<article
		id="info"
		style:--desktop-height={filterHeight + 'px'}
		transition:fade={{ duration: 300 }}>
		<div class="presentation">
			<div>
				<p class="type">Фитнес-клуб</p>
				<h2>West Gym</h2>
			</div>
			<div>
				<enhanced:img src={gymEnhanced} width="70" height="70" />
			</div>
		</div>
		<div class="rating_and_cost">
			<div class="rating"><Rating value="4.0" /></div>
			<div class="cost"><span>от 1500 ₽</span></div>
		</div>
		<div id="gallery">
			<GallerySlider options={{ perPage: 1 }}>
				{#snippet slides()}
					{#each Array(3) as _}
						<SplideSlide>
							<img src={galleryEnhanced.img.src} alt="" />
						</SplideSlide>
						<SplideSlide>
							<img src={galleryEnhanced.img.src} alt="" />
						</SplideSlide>
						<SplideSlide>
							<img src={galleryEnhanced.img.src} alt="" />
						</SplideSlide>
						<SplideSlide>
							<img src={galleryEnhanced.img.src} alt="" />
						</SplideSlide>
					{/each}
				{/snippet}
			</GallerySlider>
		</div>
		<div class="facilities"><Facilities /></div>
		<section class="description">
			<h4>Описание</h4>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard
			</p>
		</section>

		<Button accent fullWidth>
			<MagnifierIcon />

			<span>Узнать подробнее</span>
		</Button>
	</article>
{/if}

<style lang="scss">
	@use '$scss/mixins/bg';
	@use '$scss/mixins/scr';

	.map {
		height: 100dvh;
		width: 100%;
	}

	#search {
		position: fixed;
		top: calc(var(--header-height) + 20px);
		left: 50%;

		display: flex;
		gap: 20px;
		max-width: 560px;
		width: 100%;

		transform: translateX(-50%);
		padding: 0 20px;

		.open-filters.active {
			:global {
				button {
					@include bg.accent;
				}

				svg {
					*[fill] {
						fill: #fff;
					}
					*[stroke] {
						stroke: #fff;
					}
				}
			}
		}

		:global .input {
			flex-grow: 1;
			border-radius: 10em;
			box-shadow:
				0 4px 6px -4px #0000001a,
				0 10px 15px -3px #0000001a;
			border: none;
		}
	}

	#filters {
		--hidden: 1;

		position: fixed;
		top: max(50%, calc(var(--header-height) + 20px));
		left: 0;
		padding: 50px 20px;
		transform: translateY(-50%) translateX(calc(-100% * var(--hidden)));

		background: #fff;
		border-top-right-radius: 40px;
		border-bottom-right-radius: 40px;

		transition: transform var(--transition-duration);

		&.visible {
			--hidden: 0;
		}

		@include scr.tablet {
			top: auto;
			bottom: 0;
			height: 75dvh;
			overflow-y: auto;
			transform: translateY(100%);
			width: 100%;
			border-radius: 40px 40px 0 0;

			&.visible {
				transform: translateY(0);
			}
		}

		h2 {
			font-size: 2rem;
			margin: 0 0 20px;
		}

		h3 {
			font-weight: 400;
			font-size: 14px;
			margin-bottom: 20px;
			margin-top: 0;
			color: var(--text-content-color);
		}

		.filter {
			label + label {
				margin-top: 10px;
			}

			label {
				font-size: 14px;
				width: fit-content;
				position: relative;
				display: block;
				user-select: none;
				cursor: pointer;

				&::after,
				&::before {
					position: relative;
					top: 5px;

					display: inline-block;
					content: '';
					width: 20px;
					height: 20px;
					background-color: #ebeaed;
					border-radius: 10em;
					margin-right: 5px;

					transition-duration: var(--transition-duration);
				}

				&::before {
					transition-property: background-color;
				}

				&::after {
					position: absolute;
					left: 5px;
					top: 10px;
					width: 10px;
					height: 10px;
					background-color: #ffffff;
					transform: scale(0);

					transition-property: transform;
				}

				&:has(input:checked) {
					&::before {
						background-color: #f66d49;
					}

					&::after {
						transform: scale(1);
					}
				}
			}

			input {
				border-radius: 10em;
				display: none;
			}
		}

		.form_filters {
			display: grid;
			gap: 20px;
			grid-template-columns: 1fr 1fr;
		}

		form {
			display: flex;
			flex-direction: column;

			:global {
				button {
					margin-top: 50px;
				}
			}
		}
	}

	#gallery {
		margin-top: 20px;
		margin-bottom: 20px;

		img {
			width: 100%;
			border-radius: 14px;
		}
	}

	#info {
		position: fixed;
		top: max(50%, calc(var(--header-height) + 20px));
		right: 0;
		padding: 50px 20px;
		transform: translateY(-50%);

		height: var(--desktop-height);

		display: flex;
		flex-direction: column;
		background: #fff;
		border-top-left-radius: 40px;
		border-bottom-left-radius: 40px;

		max-width: 410px;
		width: 100%;

		@include scr.tablet {
			top: auto;
			bottom: 0;
			height: 75dvh;
			overflow-y: auto;
			transform: none;
			width: 100%;
			max-width: none;
			border-radius: 40px 40px 0 0;

			transition: transform var(--transition-duration);

			&.visible {
				transform: translateY(0);
			}
		}

		.type {
			color: var(--text-content-color);
			font-size: 1.1em;
			margin: 0;
		}

		h2 {
			font-size: 2rem;
			margin: 15px 0 10px;
		}

		.presentation {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.rating_and_cost {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 15px;
		}

		.rating :global span {
			font-size: 1.285em;
		}

		.cost {
			display: flex;
			width: 112px;
			height: 20px;
			padding: 2px 5px;
			color: #ffffff;

			background: linear-gradient(90deg, rgba(246, 109, 73, 0.8) 0%, rgba(244, 63, 94, 0.8) 100%);
			text-align: center;

			border-radius: 10em;

			span {
				font-size: 0.75em;
				margin: auto;
			}
		}

		.description {
			margin-top: 25px;
			h4 {
				margin: 0;
			}
			p {
				margin: 15px 0 0;
			}
		}

		:global > button {
			margin-top: auto;
		}
	}
</style>
