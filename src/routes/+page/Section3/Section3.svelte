<script lang="ts">
	import Option from './Option.svelte'
	import EnterIcon from '$lib/components/icons/Enter.svelte'
</script>

<section class="container">
	<div class="badge">Подписка</div>
	<h2>Подписка на спорт</h2>
	<p class="text-content">
		Наша подписка открывает вам путь мире большого спорта и дает доступ к преимум функциям сервиса
	</p>

	<div class="options">
		<Option
			title="Базовый"
			cost="О ₽"
			period="в месяц"
			advantages={[
				'Поиск и запись на мероприятия',
				'Поиск спортивных комплексов',
				'Формирование единного абонемента',
				'Создание и поиск сообщества',
				'Клиентская поддержка'
			]}>
			{#snippet content()}
				Бесплатный доступ к базовым функциям<br /> нашего сервиса. Достаточно просто зарегестрироваться
			{/snippet}
			{#snippet button()}
				<EnterIcon />
				Зарегестрироваться
			{/snippet}
		</Option>

		<Option
			premium
			title="Премиум на год"
			cost="Бесплатно"
			period="на 2 месяца"
			advantages={[
				'Умные ИИ уведомлениях о мероприятиях',
				'Расширенная аналитика активности',
				'Офлайн—доступ к картам',
				'Создание своих статей в блоге',
				'Приоритетная клиентская поддержка',
				'Можно добавлять близких в свою подписку'
			]}>
			{#snippet content()}
				Первые 2 месяца бесплатно, далее 1590₽/год. Подписка дает вам доступ к премиум<br /> функциям
				нашего сервиса
			{/snippet}
			{#snippet button()}
				Получить бесплатно
			{/snippet}
		</Option>
		<Option
			title="Премиум на месяц"
			cost="159 ₽"
			period="в месяц"
			advantages={[
				'Умные ИИ уведомлениях о мероприятиях',
				'Расширенная аналитика',
				'Офлайн—доступ к картам',
				'Создание своих статей в блоге',
				'Приоритетная клиентская поддержка'
			]}>
			{#snippet content()}
				Стандартный вариант подписки на месяц.<br /> Подписка дает вам доступ к премиум<br /> функциям
				нашего сервиса
			{/snippet}
			{#snippet button()}
				Получить
			{/snippet}
		</Option>
	</div>
</section>

<style lang="scss">
	.options {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		:global > article:not(.premium) {
			height: calc(100% - 52px);
		}
	}
</style>
