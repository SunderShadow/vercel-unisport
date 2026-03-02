<script>
	import '@splidejs/svelte-splide/css'

	import Input from '$lib/components/Form/Input.svelte'
	import Button from '$lib/components/Button/Button.svelte'
	import Timetable from '$lib/components/Timetable/Timetable.svelte'

	import img2 from '../+page/Section7/assets/img_2.png'
	import img3 from '../+page/Section7/assets/img_3.png'
	import FastArticle from '$lib/components/FastArticle/FastArticle.svelte'
	import { SplideSlide } from '@splidejs/svelte-splide'
	import Slider from '$lib/components/Slider/Slider.svelte'
</script>

<main>
	<div class="container title">
		<h1>Ближайшие спортивные мероприятия в Ростове-на-Дону</h1>
		<p>Выбирай то что ближе по душе</p>
	</div>

	<div class="container search">
		<Input placeholder="Найти мероприятие" />
		<Button round accent>
			<svg
				width="23"
				height="23"
				viewBox="0 0 23 23"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M14.8542 13.4167H14.0971L13.8288 13.1579C14.8005 12.031 15.3345 10.5922 15.3333 9.10417C15.3333 7.87216 14.968 6.66781 14.2835 5.64343C13.5991 4.61905 12.6262 3.82064 11.488 3.34917C10.3497 2.8777 9.09726 2.75434 7.88892 2.99469C6.68058 3.23505 5.57065 3.82832 4.69948 4.69948C3.82832 5.57065 3.23505 6.68058 2.99469 7.88892C2.75434 9.09726 2.8777 10.3497 3.34917 11.488C3.82064 12.6262 4.61905 13.5991 5.64343 14.2835C6.66781 14.968 7.87216 15.3333 9.10417 15.3333C10.6471 15.3333 12.0654 14.7679 13.1579 13.8288L13.4167 14.0971V14.8542L18.2083 19.6363L19.6363 18.2083L14.8542 13.4167ZM9.10417 13.4167C6.71792 13.4167 4.79167 11.4904 4.79167 9.10417C4.79167 6.71792 6.71792 4.79167 9.10417 4.79167C11.4904 4.79167 13.4167 6.71792 13.4167 9.10417C13.4167 11.4904 11.4904 13.4167 9.10417 13.4167Z"
					fill="white" />
			</svg>
		</Button>
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
							href="/events/1" />
					</SplideSlide>
					<SplideSlide>
						<FastArticle
							badge="Бесплатно"
							img={img2}
							title="Ростовский городской зимний забег"
							date="27.12.2024"
							href="/events/2" />
					</SplideSlide>
					<SplideSlide>
						<FastArticle
							badge="от 1500₽"
							img={img3}
							title="Мастер-класс по глиномесенью"
							date="27.12.2024"
							href="/events/3"/>
					</SplideSlide>
					<SplideSlide>
						<FastArticle
							badge="от 1500₽"
							img={img3}
							title="Бесплатная тренировнка по Йоге"
							date="27.12.2024"
							href="/events/4"/>
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
					href="/events/1"/>
				<FastArticle
					badge="Бесплатно"
					img={img2}
					title="Ростовский городской зимний забег"
					date="27.12.2024"
					href="/events/2" />
				<FastArticle
					badge="от 1500₽"
					img={img3}
					title="Мастер-класс по глиномесенью"
					date="27.12.2024"
					href="/events/3"/>
				<FastArticle
					badge="от 1500₽"
					img={img3}
					title="Бесплатная тренировнка по Йоге"
					date="27.12.2024"
					href="/events/4"/>
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
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

	.search {
		display: flex;
		gap: 20px;
		margin-top: 50px;
		margin-bottom: 50px;
		max-width: 560px;

		:global .input {
			flex-grow: 1;
			border-radius: 10em;
			box-shadow:
				0 4px 6px -4px #0000001a,
				0 10px 15px -3px #0000001a;
			border: none;
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
		}
	}
</style>
