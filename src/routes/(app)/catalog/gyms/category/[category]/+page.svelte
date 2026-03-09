<script lang="ts">
	import Search from '$lib/components/Search/Search.svelte'
	import GymArticle from '$lib/components/GymArticle/GymArticle.svelte'

	import g1Enhanced from './assets/1.png?enhanced&format=webp'
	import g2Enhanced from './assets/2.png?enhanced&format=webp'

	import '@splidejs/svelte-splide/css'
	import ToggleFilters from '$lib/components/ToggleableFilters/ToggleableFilters.svelte'
	import type {Props as Filter} from '$lib/components/ToggleableFilters/Filter.svelte'
	import Button from '$lib/components/Button/Button.svelte'

	const slides1 = Array(5).fill(g1Enhanced.img.src)
	const slides2 = Array(5).fill(g2Enhanced.img.src)

	const topFilters: Array<Filter> = [
		{
			name: 'Близко ко мне',
			value: 'master'
		},
		{
			name: 'Пробное занятие',
			value: 'sport'
		},
		{
			name: 'Групповые занятия',
			value: 'active'
		},
	]

	let topFiltersValues = $state([])

	const bottomFilters: Array<Filter> = [
		{
			name: 'Можно до 16 лет',
			value: '16-'
		},
		{
			name: 'Есть парковка',
			value: 'parking'
		},
		{
			name: 'Есть точка Wi-Fi',
			value: 'wifi'
		},
		{
			name: 'Вход только девушкам',
			value: 'woman_only'
		},
		{
			name: 'Вход только мужчинам',
			value: 'man_only'
		},
		{
			name: 'Есть душ',
			value: 'shower'
		},
	]

	let bottomFiltersValues = $state([])

</script>

<main>
	<div class="container">
		<h1 id="page_title">Фитнес в Ростове-на-Дону</h1>
		<p id="page_subtitle">Выбирай то что ближе по душе</p>
	</div>

	<div id="search" class="container"><Search placeholder="Найти комплекс" /></div>

	<div id="top-filters" class="filters container">
		<div class="filters-title">Основные фильтры</div>
		<div class="filters-container">
			<ToggleFilters bind:values={topFiltersValues} filters={topFilters}/>
			<div class="to_map">
				<Button rounded accent href="/map">
					<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.5563 18.1781L7.875 16.5375L3.80625 18.1125C3.66042 18.1708 3.51808 18.1892 3.37925 18.1676C3.24042 18.146 3.11296 18.0985 2.99687 18.025C2.88079 17.9515 2.78979 17.8532 2.72387 17.7301C2.65796 17.607 2.625 17.4647 2.625 17.3031V5.03125C2.625 4.84167 2.67983 4.67396 2.7895 4.52813C2.89917 4.38229 3.0485 4.27292 3.2375 4.2L7.30625 2.82187C7.39375 2.79271 7.48504 2.77083 7.58012 2.75625C7.67521 2.74167 7.7735 2.73437 7.875 2.73438C7.9765 2.73438 8.07508 2.74167 8.17075 2.75625C8.26642 2.77083 8.35742 2.79271 8.44375 2.82187L13.125 4.4625L17.1937 2.8875C17.3396 2.82917 17.4819 2.81108 17.6208 2.83325C17.7596 2.85542 17.887 2.90267 18.0031 2.975C18.1192 3.04733 18.2105 3.14592 18.277 3.27075C18.3435 3.39558 18.3762 3.53762 18.375 3.69687V15.9688C18.375 16.1583 18.3205 16.326 18.2114 16.4719C18.1023 16.6177 17.9527 16.7271 17.7625 16.8L13.6937 18.1781C13.6062 18.2073 13.5153 18.2292 13.4208 18.2438C13.3263 18.2583 13.2277 18.2656 13.125 18.2656C13.0223 18.2656 12.924 18.2583 12.8301 18.2438C12.7362 18.2292 12.6449 18.2073 12.5563 18.1781ZM12.25 16.2312V5.99375L8.75 4.76875V15.0062L12.25 16.2312ZM14 16.2312L16.625 15.3562V4.9875L14 5.99375V16.2312ZM4.375 16.0125L7 15.0062V4.76875L4.375 5.64375V16.0125Z" fill="white"/>
					</svg>
					<span>Показать на карте</span>
				</Button>
			</div>
		</div>
	</div>

	<div class="filters container">
		<div class="filters-title">Дополнительные фильтры</div>
		<ToggleFilters bind:values={bottomFiltersValues} filters={bottomFilters}/>
	</div>

	<section class="container">
		<h2>Больше всего совпадений</h2>

		<div class="grid">
			<GymArticle images={slides1} />
			<GymArticle images={slides2} />
		</div>
	</section>

	<section class="container">
		<h2>Весь список</h2>

		<div class="grid">
			<GymArticle images={slides1} />
			<GymArticle images={slides2} />
			<GymArticle images={slides1} />
			<GymArticle images={slides2} />
		</div>
	</section>
</main>

<style lang="scss">
	@use '$scss/mixins/scr';

	main {
		padding-top: var(--header-height);
		padding-bottom: 50px;
	}

	.filters {
		&-title {
			color: var(--text-content-color);
		}
	}

	#top-filters {
    .filters-container {
      display: flex;
      gap: 3px 20px;
      flex-wrap: wrap;

      margin-bottom: 35px;
		}

		:global {
			.toggle-filters {
        margin-right: auto;
			}
		}
		.to_map {
      display: flex;

			:global .button {
        margin: auto;
			}
		}
	}

	#bottom-filters {
    margin-bottom: 35px;
	}
	#search :global > .search {
		margin-left: auto;
		margin-right: auto;
	}

	#page_title,
	#page_subtitle {
		text-align: center;
	}

	section + section {
		margin-top: 50px;
	}

	h2 {
		font-size: 2rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;

		@include scr.tablet {
			grid-template-columns: 1fr;
		}
	}
</style>
