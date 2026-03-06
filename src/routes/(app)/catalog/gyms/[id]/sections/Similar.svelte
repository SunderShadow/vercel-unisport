<script lang="ts">
	import img2 from '$lib/../routes/(app)/+page/Section7/assets/img_2.png'
	import img3 from '$lib/../routes/(app)/+page/Section7/assets/img_3.png'
	import Slider from '$lib/components/Slider/Slider.svelte'
	import { SplideSlide } from '@splidejs/svelte-splide'
	import FastArticle from '$lib/components/FastArticle/FastArticle.svelte'
</script>

<section id="similar" class="container">
	<h2>Смотерть похожие</h2>

	<Slider>
		{#snippet slides()}
			{#each Array(3) as _}
				<SplideSlide>
					<FastArticle
						badge="от 500₽"
						img={img2}
						title="Первый триатлон в Ростове-на-Дорну"
						date="27.12.2024" />
				</SplideSlide>
				<SplideSlide>
					<FastArticle
						badge="Бесплатно"
						img={img2}
						title="Ростовский городской зимний забег"
						date="27.12.2024" />
				</SplideSlide>
				<SplideSlide>
					<FastArticle
						badge="от 1500₽"
						img={img3}
						title="Мастер-класс по глиномесенью"
						date="27.12.2024" />
				</SplideSlide>
				<SplideSlide>
					<FastArticle
						badge="от 1500₽"
						img={img3}
						title="Бесплатная тренировнка по Йоге"
						date="27.12.2024" />
				</SplideSlide>
			{/each}
		{/snippet}
	</Slider>
</section>
