<script lang="ts">
	import Card from './Card.svelte'
	import BrainIcon from './assets/Brain.svelte'
	import MapIcon from './assets/Map.svelte'
	import TicketIcon from './assets/Ticket.svelte'
	import HeartIcon from './assets/Heart.svelte'
</script>

<section class="container">
	<h2>Фишки проекта</h2>
	<p class="text-content">Почему юниспорт уникален</p>

	<div class="cards">
		<Card
			icon={BrainIcon}
			title="ИИ-рекомендации"
			content="Персонализированные предложения на основе ваших интересов и активности" />
		<Card
			icon={MapIcon}
			title="Все в одном месте"
			content="Все спортивные площадки и мероприятия вашего города в одном приложении" />
		<Card
			icon={TicketIcon}
			title="Единый абонемент"
			content="В одном месте можно купить и собрать несколько спортивных абонементов" />
		<Card
			icon={HeartIcon}
			title="Большое сообщество"
			content="Ты и еще тысячи спортсменов от мало до велико по всей Росссии в одном месте" />
	</div>
</section>

<style lang="scss">
	@use '$scss/mixins/scr';

	p {
		color: var(--text-content-color);
		margin-bottom: 20px;
	}

	.cards {
    margin-top: 50px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;

		@include scr.laptop {
			grid-template-columns: repeat(2, 1fr);
		}

		@include scr.mobile {
			grid-template-columns: 1fr;
		}
	}
</style>
