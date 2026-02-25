<script lang="ts">
	import About from './About.svelte'
	import Referal from './Referal.svelte'
	import Functional from './Functional.svelte'
	import Oferta from './Oferta.svelte'
	import Disable from './Disable.svelte'
</script>

<main class="container">
	<h1>Юниспорт премиум</h1>
	<p>Подзравляем! Вы обладатель нашей премиум подписки</p>

	<div class="boxes">
		<About />
		<Referal />
		<Functional />
		<Oferta />
		<Disable />
	</div>
</main>

<style lang="scss">
	main {
		position: relative;
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
