<script lang="ts">
	import Search from '$lib/components/Search/Search.svelte'
	import GymArticle from '$lib/components/GymArticle/GymArticle.svelte'

	import g1Enhanced from './assets/1.png?enhanced&format=webp'
	import g2Enhanced from './assets/2.png?enhanced&format=webp'
	import gymEnhanced from './assets/gym.png?enhanced&format=webp'

	import '@splidejs/svelte-splide/css'

	const slides1 = Array(5).fill(g1Enhanced.img.src)
	const slides2 = Array(5).fill(g2Enhanced.img.src)
</script>

<svelte:head></svelte:head>

<main>
	<div class="container">
		<h1 id="page_title">Фитнес в Ростове-на-Дону</h1>
		<p id="page_subtitle">Выбирай то что ближе по душе</p>
	</div>
	<div id="search" class="container"><Search placeholder="Найти комплекс" /></div>

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
