<script lang="ts">
	import '@splidejs/svelte-splide/css'

	import Input from '$lib/components/Form/Input.svelte'
	import Button from '$lib/components/Button/Button.svelte'
	import Timetable from '$lib/components/Timetable/Timetable.svelte'

	import img2 from '../../+page/Section7/assets/img_2.png'
	import img3 from '../../+page/Section7/assets/img_3.png'

	import FastArticle from '$lib/components/FastArticle/FastArticle.svelte'
	import { SplideSlide } from '@splidejs/svelte-splide'
	import Slider from '$lib/components/Slider/Slider.svelte'
	import Search from '$lib/components/Search/Search.svelte'
</script>

<main>
	<div class="container title">
		<h1>Ближайшие спортивные мероприятия в Ростове-на-Дону</h1>
		<p>Выбирай то что ближе по душе</p>
	</div>

	<div id="search" class="container">
		<Search placeholder="Найти мероприятие" />
	</div>

	<div class="container timetable">
		<Timetable />
	</div>

	<section class="container">
		<h2>По вашим интересам</h2>
		<Slider options={{ perPage: 3 }}>
			{#snippet slides()}
				{#each Array(3) as _}
					<SplideSlide>
						<FastArticle
							badge="от 500₽"
							img={img2}
							title="Первый триатлон в Ростове-на-Дорну"
							date="27.12.2024"
							href="/catalog/events/1" />
					</SplideSlide>
					<SplideSlide>
						<FastArticle
							badge="Бесплатно"
							img={img2}
							title="Ростовский городской зимний забег"
							date="27.12.2024"
							href="/catalog/events/2" />
					</SplideSlide>
					<SplideSlide>
						<FastArticle
							badge="от 1500₽"
							img={img3}
							title="Мастер-класс по глиномесенью"
							date="27.12.2024"
							href="/catalog/events/3" />
					</SplideSlide>
					<SplideSlide>
						<FastArticle
							badge="от 1500₽"
							img={img3}
							title="Бесплатная тренировнка по Йоге"
							date="27.12.2024"
							href="/catalog/events/4" />
					</SplideSlide>
				{/each}
			{/snippet}
		</Slider>
	</section>

	<section id="all_events" class="container">
		<h2>Все мероприятия</h2>
		<div class="articles">
			{#each Array(3) as _}
				<FastArticle
					badge="от 500₽"
					img={img2}
					title="Первый триатлон в Ростове-на-Дорну"
					date="27.12.2024"
					href="/catalog/events/1" />
				<FastArticle
					badge="Бесплатно"
					img={img2}
					title="Ростовский городской зимний забег"
					date="27.12.2024"
					href="/catalog/events/2" />
				<FastArticle
					badge="от 1500₽"
					img={img3}
					title="Мастер-класс по глиномесенью"
					date="27.12.2024"
					href="/catalog/events/3" />
				<FastArticle
					badge="от 1500₽"
					img={img3}
					title="Бесплатная тренировнка по Йоге"
					date="27.12.2024"
					href="/catalog/events/4" />
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	@use "$scss/mixins/scr";

	main {
		margin-top: var(--header-height);
		padding-top: 50px;
		padding-bottom: 50px;
	}

	section h2 {
		font-size: 2rem;
		margin-top: 0;
		margin-bottom: 20px;
	}

	#search :global .search {
    margin-left: auto;
    margin-right: auto;
	}

	.title {
		text-align: center;

		h1 {
			font-size: 2rem;
			margin: 0;
		}

		p {
			margin-top: 15px;

			font-size: 1.1em;
			color: var(--text-content-color);
		}
	}

	.timetable {
		margin-bottom: 50px;
	}

	#all_events {
		.articles {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 20px;

			@include scr.tablet {
        grid-template-columns: 1fr 1fr;
			}
			
      @include scr.mobile {
        grid-template-columns: 1fr;
      }
		}
	}
</style>
