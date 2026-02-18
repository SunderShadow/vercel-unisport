<script lang="ts">
	import Card from './Card.svelte'
	import SearchIcon from './assets/Search.svelte'
	import MoneyIcon from './assets/Money.svelte'
	import QRIcon from './assets/QR.svelte'
	import WalkIcon from './assets/Walk.svelte'
	import MagnifierIcon from '$lib/components/icons/Magnifier.svelte'
</script>

<section class="container">
	<div class="about badge">Единый абонемент</div>
	<h2>Как работает единый абонемент</h2>
	<p class="text-content">
		Вы можете в одном месте купить и собрать несколько спортивных абонементов наших партнеров и
		удобно им пользоваться. Приходя на тренировку, достаточно показать QR-код абонемента и заниматься
	</p>

	<div class="cards">
		<Card
			icon={SearchIcon}
			title="Выбирайте"
			content="Добаляете один или несколько абонементов партнеров себе в конструктор" />
		<Card icon={MoneyIcon} title="Оплачивайте" content="Оплачиваете любым удобным способом" />
		<Card
			icon={QRIcon}
			title="Показывайте QR-код"
			content="Приходите на тренировку и показываете администратору QR-код вашего абонемента" />
		<Card
			icon={WalkIcon}
			title="Тренируйтесь"
			content="У вас списывается с баланса 1 занятие и вы спокойно занимаетесь спортом" />
	</div>

	<button class="more accent">
		<MagnifierIcon />

		Узнать подробнее
	</button>
</section>

<style lang="scss">
	@use "$scss/mixins/scr";

	p {
		color: var(--text-content-color);
		margin-bottom: 20px;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;

    @include scr.tablet {
      grid-template-columns: 1fr 1fr;
    }

		@include scr.mobile {
			grid-template-columns: 1fr;
		}
	}

	button.more {
		max-width: 370px;
		margin-top: 20px;
		margin-left: auto;
		margin-right: auto;

		font-weight: 600;
	}
</style>
