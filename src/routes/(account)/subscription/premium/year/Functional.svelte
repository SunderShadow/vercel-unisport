<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte'
	import listTypeImg from './list-type.svg?no-inline'
	import listTypeCheckImg from './list-type-check.svg?no-inline'

	const items = [
		{ active: true, title: 'Умные ИИ уведомлениях о мероприятиях' },
		{ active: true, title: 'Расширенная аналитика' },
		{ active: true, title: 'Офлайн—доступ к картам' },
		{ active: true, title: 'Создание своих статей в блоге' },
		{ active: true, title: 'Приоритетная клиентская поддержка' },
		{ active: true, title: 'Можно добавлять близких в свою подписку' }
	]
</script>

<div class="box">
	<p class="block subtitle">В базовой подписке нету таких функций!</p>
	<h2 class="block">Премиум функции с подпиской</h2>

	<ul
		class="block"
		style:--type-img={`url("${listTypeImg}")`}
		style:--type-check-img={`url("${listTypeCheckImg}")`}>
		{#each items as { active, title }}
			<li class:check={active}>{title}</li>
		{/each}
	</ul>

	<p class="block">Чтобы получить доступ ко всем премиум функциям — подключите подписку на год</p>

	<div class="block btn">
		<Button accent fullWidth>Подключить подписку</Button>
	</div>
</div>

<style lang="scss">
	.subtitle {
		margin: 0;

		font-weight: 400;
		font-size: 18px;
		color: var(--text-content-color);
	}

	h2 {
		font-size: 1.5em;
		font-weight: 600;
		margin: 0;
	}

	.btn {
		font-size: 18px;

		:global button {
			font-weight: 600;
		}
	}

	ul {
		padding-left: calc(3em - 5px);
		margin-top: 26px;
	}

	li {
		position: relative;
		list-style: none;
		font-weight: 500;

		&::before {
			content: '';

			position: absolute;
			top: 50%;
			right: calc(100% + 7px);
			transform: translateY(-35%);

			background-image: var(--type-img);
			background-size: 100% 100%;
			background-position: center;

			width: 3em;
			height: 3em;
		}

		&.check::before {
			background-image: var(--type-check-img);
		}
	}

	li + li {
		margin-top: 30px;
	}
</style>
