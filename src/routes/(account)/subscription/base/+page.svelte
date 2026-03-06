<script>
	import Promotion from '../Promotion.svelte'
	import About from './About.svelte'
	import Referal from './Referal.svelte'
	import Functional from './Functional.svelte'
	import Oferta from './Oferta.svelte'
</script>

<main class="container">
	<h1>Базовая подписка</h1>
	<p>
		Наша подписка открывает вам путь мире большого спорта и дает доступ к преимум функциям сервиса
	</p>

	<div class="boxes">
		<Promotion />
		<About />
		<Referal />
		<Functional />
		<Oferta />
	</div>
</main>

<style lang="scss">
	main {
		position: relative;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	h1,
	p {
		text-align: center;
		margin: 0;
	}

	p {
		color: var(--text-content-color);
		font-size: 18px;
		margin-top: 15px;
	}

	.boxes {
		margin-top: 50px;
		max-width: 690px;

		margin-left: auto;
		margin-right: auto;

		:global > * + * {
			margin-top: 30px;
		}
	}
</style>
