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
	import YMapMarker from '$lib/YMaps/YMapMarker.svelte'
	import Facilities from '$lib/components/Facilities/Facilities.svelte'

	let filtersSectionEl = $state()
	let filterHeight = $state(730)

	let articleFound = $state(false)

	let filtersVisible = $state(false)

	let mapLoaded = $state(false)

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
		<YMapMarker coordinates={[37.588144, 55.733842]}>
			<div
				class="marker"
				onclick={() => {
					articleFound = !articleFound
				}}>
				<svg
					width="70"
					height="50"
					viewBox="0 0 70 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<rect width="70" height="50" rx="25" fill="url(#paint0_linear_1724_6778)" />
					<g clip-path="url(#clip0_1724_6778)">
						<path
							d="M29.25 18.75H25.75C25.5511 18.75 25.3603 18.829 25.2197 18.9697C25.079 19.1103 25 19.3011 25 19.5V30.5C25 30.5985 25.0194 30.696 25.0571 30.787C25.0948 30.878 25.15 30.9607 25.2197 31.0303C25.2893 31.1 25.372 31.1552 25.463 31.1929C25.554 31.2306 25.6515 31.25 25.75 31.25H29.25C29.3485 31.25 29.446 31.2306 29.537 31.1929C29.628 31.1552 29.7107 31.1 29.7803 31.0303C29.85 30.9607 29.9052 30.878 29.9429 30.787C29.9806 30.696 30 30.5985 30 30.5V19.5C30 19.3011 29.921 19.1103 29.7803 18.9697C29.6397 18.829 29.4489 18.75 29.25 18.75ZM44.25 18.75H40.75C40.5511 18.75 40.3603 18.829 40.2197 18.9697C40.079 19.1103 40 19.3011 40 19.5V30.5C40 30.5985 40.0194 30.696 40.0571 30.787C40.0948 30.878 40.15 30.9607 40.2197 31.0303C40.2893 31.1 40.372 31.1552 40.463 31.1929C40.554 31.2306 40.6515 31.25 40.75 31.25H44.25C44.3485 31.25 44.446 31.2306 44.537 31.1929C44.628 31.1552 44.7107 31.1 44.7803 31.0303C44.85 30.9607 44.9052 30.878 44.9429 30.787C44.9806 30.696 45 30.5985 45 30.5V19.5C45 19.3011 44.921 19.1103 44.7803 18.9697C44.6397 18.829 44.4489 18.75 44.25 18.75Z"
							stroke="white"
							stroke-width="1.5625"
							stroke-linecap="round"
							stroke-linejoin="round" />
						<path
							d="M30 25H40M21.25 28V22C21.25 21.8011 21.329 21.6103 21.4697 21.4697C21.6103 21.329 21.8011 21.25 22 21.25H24.25C24.4489 21.25 24.6397 21.329 24.7803 21.4697C24.921 21.6103 25 21.8011 25 22V28C25 28.1989 24.921 28.3897 24.7803 28.5303C24.6397 28.671 24.4489 28.75 24.25 28.75H22C21.8011 28.75 21.6103 28.671 21.4697 28.5303C21.329 28.3897 21.25 28.1989 21.25 28ZM48.75 28V22C48.75 21.8011 48.671 21.6103 48.5303 21.4697C48.3897 21.329 48.1989 21.25 48 21.25H45.75C45.5511 21.25 45.3603 21.329 45.2197 21.4697C45.079 21.6103 45 21.8011 45 22V28C45 28.1989 45.079 28.3897 45.2197 28.5303C45.3603 28.671 45.5511 28.75 45.75 28.75H48C48.1989 28.75 48.3897 28.671 48.5303 28.5303C48.671 28.3897 48.75 28.1989 48.75 28Z"
							stroke="white"
							stroke-width="1.5625"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</g>
					<defs>
						<linearGradient
							id="paint0_linear_1724_6778"
							x1="0"
							y1="25"
							x2="70"
							y2="25"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#F66D49" />
							<stop offset="1" stop-color="#F43F5E" />
						</linearGradient>
						<clipPath id="clip0_1724_6778">
							<rect width="30" height="30" fill="white" transform="translate(20 10)" />
						</clipPath>
					</defs>
				</svg>
				<span>Фитнес-клуб West Gym</span>
			</div>
		</YMapMarker>

		<YMapMarker coordinates={[37.588241, 55.734841]}>
			<div
				class="marker"
				onclick={() => {
					articleFound = !articleFound
				}}>
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<circle cx="25" cy="25" r="25" fill="white" />
					<path
						d="M33.7525 20.005C35.1346 20.005 36.255 18.8846 36.255 17.5025C36.255 16.1204 35.1346 15 33.7525 15C32.3704 15 31.25 16.1204 31.25 17.5025C31.25 18.8846 32.3704 20.005 33.7525 20.005Z"
						fill="#272327" />
					<path
						d="M33.5938 26.5236C32.885 27.0898 32.3713 27.4998 31.2463 27.4998C30.1213 27.4998 29.6362 27.1111 28.9013 26.5236C28.0513 25.8448 26.995 24.9998 24.9925 24.9998C22.99 24.9998 21.9362 25.8448 21.0875 26.5236C20.3525 27.1111 19.8687 27.4998 18.7437 27.4998C17.6212 27.4998 17.1363 27.1111 16.4025 26.5248C15.5538 25.8448 14.5 24.9998 12.5 24.9998V27.4998C13.6213 27.4998 14.1062 27.8886 14.84 28.4748C15.6888 29.1548 16.7437 29.9998 18.7437 29.9998C20.7437 29.9998 21.8012 29.1548 22.65 28.4748C23.3837 27.8873 23.87 27.4998 24.9925 27.4998C26.1175 27.4998 26.6312 27.9098 27.34 28.4761C28.1887 29.1548 29.245 29.9998 31.2463 29.9998C33.2487 29.9998 34.305 29.1548 35.155 28.4761C35.89 27.8886 36.3762 27.4998 37.5 27.4998V24.9998C35.4988 24.9998 34.4425 25.8448 33.5938 26.5236ZM31.2463 33.7498C30.1225 33.7498 29.6362 33.3611 28.9013 32.7736C28.0513 32.0948 26.995 31.2498 24.9925 31.2498C22.99 31.2498 21.9362 32.0948 21.0875 32.7736C20.3525 33.3611 19.8687 33.7498 18.7437 33.7498C17.6212 33.7498 17.1363 33.3611 16.4025 32.7748C15.5538 32.0948 14.5 31.2498 12.5 31.2498V33.7498C13.6213 33.7498 14.1062 34.1386 14.84 34.7248C15.6888 35.4048 16.7437 36.2498 18.7437 36.2498C20.7437 36.2498 21.8012 35.4048 22.65 34.7248C23.3837 34.1373 23.87 33.7498 24.9925 33.7498C26.1175 33.7498 26.6312 34.1598 27.34 34.7261C28.1887 35.4048 29.245 36.2498 31.2463 36.2498C33.2487 36.2498 34.305 35.4048 35.155 34.7261C35.89 34.1386 36.3762 33.7498 37.5 33.7498V31.2498C35.4988 31.2498 34.4425 32.0948 33.5938 32.7736C32.885 33.3398 32.3713 33.7498 31.2463 33.7498ZM23.75 16.7736L26.38 19.4036L23.8088 22.6161C24.1663 22.5461 24.5538 22.4998 24.9925 22.4998C26.995 22.4998 28.0513 23.3448 28.9013 24.0236C29.6362 24.6111 30.1225 24.9998 31.2463 24.9998C32.3713 24.9998 32.885 24.5898 33.5938 24.0236C33.7588 23.8923 33.9363 23.7523 34.1225 23.6161L31.5025 21.0036L31.5088 20.9973L24.6337 14.1223C24.3993 13.888 24.0815 13.7563 23.75 13.7563C23.4185 13.7563 23.1007 13.888 22.8663 14.1223L17.8663 19.1223L19.6337 20.8898L23.75 16.7736Z"
						fill="#272327" />
				</svg>

				<span>Бассеин волна</span>
			</div>
		</YMapMarker>
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

	.marker {
		--name-visible: 0;

		cursor: pointer;
		position: relative;

		&:hover {
			--name-visible: 1;
		}

		@include scr.tablet {
			--name-visible: 1;
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
