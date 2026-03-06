<script>
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte'
	import Card from './Card.svelte'
	import cardEnhanced from './card.png?enhanced&format=webp'
</script>

<div class="title">
	<h1>Избранное</h1>
	<p>Добавляйте спортивные комлексы и мероприятия в избранные, чтобы не терять их</p>
</div>

<div class="filters">
	<Dropdown
		title="Тип спортивного комплекса"
		options={[
			{ _v: '+', _t: 'Прикольный' },
			{ _v: '-', _t: 'Не прикольный' }
		]} />
	<Dropdown
		title="Тип спортивного комплекса"
		options={[
			{ _v: '+', _t: 'Прикольный' },
			{ _v: '-', _t: 'Не прикольный' }
		]} />
</div>

<Card
	imgSrc={cardEnhanced.img.src}
	title="West Gym"
	type="Фитнес-клуб"
	address="ул. Зорге, д. 33" />
<Card
	imgSrc={cardEnhanced.img.src}
	title="Январский забег"
	type="Забег"
	address="ул. Зорге, д. 33" />
<Card
	imgSrc={cardEnhanced.img.src}
	title="Кулинария"
	type="Мастер-класс"
	address="ул. Зорге, д. 33" />

<style lang="scss">
	.filters {
		display: flex;
		gap: 20px;
	}
</style>
