<script lang="ts">
	import img2 from '../../../+page/Section7/assets/img_2.png'
	import img3 from '../../../+page/Section7/assets/img_3.png'
	import Slider from '$lib/components/Slider/Slider.svelte'
	import { SplideSlide } from '@splidejs/svelte-splide'
	import FastArticle from '$lib/components/FastArticle/FastArticle.svelte'
</script>

<section id="similar" class="container">
	<h2>Прошедшие мероприятия</h2>

	<Slider options={{ perPage: 3 }}>
		{#snippet slides()}
			{#each Array(3) as _}
				<SplideSlide>
					<FastArticle
						badge="от 500₽"
						img={img2}
						title="Первый триатлон в Ростове-на-Дорну"
						date="сегодня, 1 января, ул. Пушкинская, д. 131" />
				</SplideSlide>
				<SplideSlide>
					<FastArticle
						badge="Бесплатно"
						img={img2}
						title="Ростовский городской зимний забег"
						date="5 января, ул. Пушкинская, д. 131" />
				</SplideSlide>
				<SplideSlide>
					<FastArticle
						badge="от 1500₽"
						img={img3}
						title="Мастер-класс по глиномесенью"
						date="5 января, ул. Пушкинская, д. 131" />
				</SplideSlide>
				<SplideSlide>
					<FastArticle
						badge="от 1500₽"
						img={img3}
						title="Бесплатная тренировнка по Йоге"
						date="5 января, ул. Пушкинская, д. 131" />
				</SplideSlide>
			{/each}
		{/snippet}
	</Slider>
</section>
