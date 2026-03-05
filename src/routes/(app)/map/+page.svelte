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
		<div class="facilities">
			<div>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M15.625 1.875H5.625C5.12772 1.875 4.65081 2.07254 4.29917 2.42417C3.94754 2.77581 3.75 3.25272 3.75 3.75V16.875C3.75 17.2065 3.8817 17.5245 4.11612 17.7589C4.35054 17.9933 4.66848 18.125 5 18.125H13.75C14.0815 18.125 14.3995 17.9933 14.6339 17.7589C14.8683 17.5245 15 17.2065 15 16.875V3.75C15 3.58424 15.0658 3.42527 15.1831 3.30806C15.3003 3.19085 15.4592 3.125 15.625 3.125C15.7908 3.125 15.9497 3.19085 16.0669 3.30806C16.1842 3.42527 16.25 3.58424 16.25 3.75V11.875C16.25 12.0408 16.3158 12.1997 16.4331 12.3169C16.5503 12.4342 16.7092 12.5 16.875 12.5C17.0408 12.5 17.1997 12.4342 17.3169 12.3169C17.4342 12.1997 17.5 12.0408 17.5 11.875V3.75C17.5 3.25272 17.3025 2.77581 16.9508 2.42417C16.5992 2.07254 16.1223 1.875 15.625 1.875ZM5.625 3.125H13.857C13.7858 3.32567 13.7496 3.53708 13.75 3.75V14.375H5V3.75C5 3.58424 5.06585 3.42527 5.18306 3.30806C5.30027 3.19085 5.45924 3.125 5.625 3.125ZM5 16.875V15.625H13.75V16.875H5Z"
						fill="#F66D49" />
				</svg>
				<span class="tooltip">Полотенце</span>
			</div>
			<div>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10.3451 3.044C10.9253 2.41238 11.7127 2.00961 12.5644 1.9087C13.4161 1.8078 14.2758 2.01545 14.9876 2.494L15.1375 2.60066L15.4067 2.80233C15.7739 3.07764 16.0768 3.42969 16.2941 3.83395C16.5114 4.23822 16.638 4.68499 16.6651 5.14316L16.6701 5.329V17.4998C16.6698 17.7122 16.5885 17.9165 16.4427 18.071C16.2969 18.2254 16.0976 18.3184 15.8856 18.3308C15.6735 18.3433 15.4647 18.2743 15.3019 18.1379C15.139 18.0016 15.0343 17.8082 15.0092 17.5973L15.0034 17.4998V5.329C15.0029 5.12116 14.9593 4.91569 14.8752 4.72561C14.7911 4.53554 14.6685 4.365 14.515 4.22483L14.4067 4.13566L14.1376 3.934C13.8303 3.70293 13.4607 3.56959 13.0767 3.55131C12.6927 3.53303 12.312 3.63066 11.9842 3.8315L11.8567 3.91733L12.4884 4.28233C13.2275 4.70895 13.7748 5.4028 14.0176 6.22091C14.2604 7.03903 14.1801 7.91911 13.7934 8.67983L13.7084 8.83566L13.2917 9.55733C13.1896 9.73397 13.0262 9.86701 12.8325 9.93121C12.6388 9.99541 12.4283 9.98632 12.2409 9.90566L12.1534 9.86233L4.93672 5.69566C4.75987 5.59351 4.6267 5.42997 4.56249 5.23609C4.49827 5.04222 4.50749 4.83152 4.58838 4.644L4.63172 4.55733L5.04838 3.83566C5.47501 3.09657 6.16885 2.54926 6.98697 2.30647C7.80509 2.06369 8.68516 2.14393 9.44588 2.53066L9.60172 2.61566L10.3451 3.044ZM5.62838 12.8307C5.81978 12.9412 5.95943 13.1232 6.01663 13.3367C6.07383 13.5501 6.04389 13.7776 5.93338 13.969L5.51672 14.6907C5.4624 14.7862 5.38972 14.8701 5.30286 14.9374C5.21601 15.0047 5.11669 15.0542 5.01063 15.083C4.90457 15.1118 4.79386 15.1193 4.68487 15.1052C4.57589 15.091 4.47079 15.0554 4.37561 15.0005C4.28044 14.9455 4.19707 14.8723 4.13031 14.785C4.06355 14.6977 4.01473 14.598 3.98663 14.4918C3.95854 14.3855 3.95175 14.2748 3.96664 14.1659C3.98152 14.057 4.0178 13.9521 4.07338 13.8573L4.49005 13.1357C4.60056 12.9443 4.78257 12.8046 4.99605 12.7474C5.20953 12.6902 5.43698 12.7202 5.62838 12.8307ZM7.48838 12.9423C7.594 12.7568 7.76678 12.6189 7.97108 12.5571C8.17538 12.4952 8.39563 12.5141 8.58641 12.6099C8.77719 12.7056 8.92394 12.871 8.99641 13.0717C9.06888 13.2725 9.06153 13.4935 8.97588 13.689L8.93172 13.7757L8.51505 14.4973C8.4085 14.681 8.23586 14.817 8.0324 14.8777C7.82893 14.9384 7.60998 14.9191 7.42024 14.8238C7.23051 14.7285 7.0843 14.5644 7.01148 14.365C6.93865 14.1655 6.9447 13.9458 7.02838 13.7507L7.07172 13.664L7.48838 12.9423ZM4.29672 10.1373C4.48811 10.2478 4.62777 10.4299 4.68497 10.6433C4.74216 10.8568 4.71222 11.0843 4.60172 11.2757L4.18505 11.9973C4.07376 12.1872 3.8919 12.3253 3.67915 12.3815C3.4664 12.4378 3.24004 12.4076 3.04947 12.2976C2.8589 12.1875 2.71958 12.0066 2.66193 11.7942C2.60427 11.5818 2.63295 11.3553 2.74172 11.164L3.15838 10.4423C3.26889 10.2509 3.45091 10.1113 3.66438 10.0541C3.87786 9.99688 4.10532 10.0268 4.29672 10.1373ZM7.29505 9.944C7.48644 10.0545 7.6261 10.2365 7.6833 10.45C7.7405 10.6635 7.71055 10.8909 7.60005 11.0823L7.18338 11.804C7.12907 11.8995 7.05639 11.9834 6.96953 12.0507C6.88267 12.1181 6.78336 12.1675 6.67729 12.1963C6.57123 12.2251 6.46052 12.2327 6.35154 12.2185C6.24256 12.2043 6.13745 12.1688 6.04228 12.1138C5.9471 12.0588 5.86374 11.9856 5.79698 11.8983C5.73022 11.811 5.68139 11.7114 5.6533 11.6051C5.62521 11.4989 5.61841 11.3881 5.6333 11.2792C5.64819 11.1703 5.68447 11.0655 5.74005 10.9707L6.15672 10.249C6.26723 10.0576 6.44924 9.91795 6.66272 9.86075C6.8762 9.80355 7.10365 9.83349 7.29505 9.944ZM9.15505 10.0557C9.26105 9.87106 9.43368 9.73403 9.63751 9.67267C9.84135 9.61131 10.0609 9.63029 10.2512 9.7257C10.4415 9.82111 10.5881 9.98572 10.6608 10.1858C10.7336 10.3858 10.7271 10.6061 10.6426 10.8015L10.5984 10.889L10.1817 11.6107C10.0752 11.7943 9.90253 11.9304 9.69906 11.991C9.4956 12.0517 9.27664 12.0324 9.08691 11.9371C8.89718 11.8418 8.75097 11.6777 8.67814 11.4783C8.60532 11.2788 8.61137 11.0591 8.69505 10.864L8.73838 10.7773L9.15505 10.0557ZM5.96338 7.24983C6.15478 7.36034 6.29443 7.54235 6.35163 7.75583C6.40883 7.96931 6.37889 8.19676 6.26838 8.38816L5.85172 9.10983C5.74042 9.29967 5.55856 9.43778 5.34582 9.49403C5.13307 9.55027 4.90671 9.52009 4.71614 9.41006C4.52557 9.30003 4.38625 9.11909 4.32859 8.90672C4.27094 8.69435 4.29962 8.46779 4.40838 8.2765L4.82505 7.55483C4.93556 7.36344 5.11757 7.22378 5.33105 7.16658C5.54453 7.10938 5.77198 7.13933 5.96338 7.24983ZM6.49172 4.66816L12.265 8.0015C12.4861 7.6187 12.5459 7.16379 12.4315 6.73683C12.3172 6.30988 12.0378 5.94585 11.6551 5.72483L8.76838 4.05816C8.38559 3.83716 7.93067 3.77727 7.50372 3.89166C7.07676 4.00606 6.71274 4.28538 6.49172 4.66816Z"
						fill="#F66D49" />
				</svg>
				<span class="tooltip">Душ</span>
			</div>
			<div>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4.74805 6.979C5.45638 6.604 6.18916 6.31928 6.94638 6.12484C7.7036 5.93039 8.47777 5.83317 9.26888 5.83317C9.68555 5.83317 10.0989 5.86095 10.5089 5.9165C10.9189 5.97206 11.325 6.05539 11.7272 6.1665C12.4217 6.36095 12.953 6.49289 13.3214 6.56234C13.6897 6.63178 14.0819 6.6665 14.498 6.6665H15.2689L15.623 3.33317H4.37305L4.74805 6.979ZM5.81055 18.3332C5.37999 18.3332 5.0086 18.1943 4.69638 17.9165C4.38416 17.6387 4.20694 17.2846 4.16471 16.854L2.72721 3.729C2.65777 3.17345 2.81055 2.69095 3.18555 2.2815C3.56055 1.87206 4.02582 1.66706 4.58138 1.6665H15.4147C15.9703 1.6665 16.4355 1.8715 16.8105 2.2815C17.1855 2.6915 17.3383 3.174 17.2689 3.729L15.8314 16.854C15.7897 17.2846 15.6125 17.6387 15.2997 17.9165C14.9869 18.1943 14.6155 18.3332 14.1855 18.3332H5.81055Z"
						fill="#F66D49" />
				</svg>
				<span class="tooltip">Вода</span>
			</div>
			<div>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4.35223 0.826948C4.09246 0.830386 3.81707 0.869448 3.52559 0.947573C0.102738 1.86476 0.480433 9.64882 3.16243 13.0954L3.1625 13.0953L7.04973 12.0537C6.92188 10.664 7.04985 9.08343 7.80414 7.60269C7.9059 4.08824 6.86293 0.793706 4.35227 0.826909L4.35223 0.826948ZM15.8514 0.826948C13.3408 0.793667 12.2979 4.0882 12.3995 7.60273C13.1538 9.08339 13.2818 10.664 13.1539 12.0537L17.0412 13.0953L17.0413 13.0954C19.7232 9.64882 20.1009 1.86472 16.6781 0.947573C16.3866 0.869448 16.1112 0.830386 15.8515 0.826948H15.8514ZM7.37434 13.674L3.41887 14.7337C3.63352 22.2297 11.2513 18.8013 7.37434 13.674ZM12.8294 13.674C8.95247 18.8013 16.5703 22.2297 16.785 14.7337L12.8294 13.674Z"
						fill="#F66D49" />
				</svg>
				<span class="tooltip">Сменная обувь</span>
			</div>
		</div>
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

		.facilities {
			display: flex;
			gap: 15px;

			> div {
				position: relative;

				&:hover .tooltip {
					transform: scale(1) translateX(-50%);
				}

				.tooltip {
					position: absolute;
					top: calc(100% + 5px);
					left: 50%;
					font-size: 12px;
					text-wrap: nowrap;

					padding: 7px 15px;
					border-radius: 10em;
					color: #fff;
					background: #27232780;

					transition: transform var(--transition-duration);
					transform: scale(0) translateX(-50%);
					transform-origin: left;
				}
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
