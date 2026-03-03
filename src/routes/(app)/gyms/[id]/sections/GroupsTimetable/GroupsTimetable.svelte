<script lang="ts">
	import Lesson from './Lesson.svelte'
	import { DateTime } from '$lib/dateTime/date'

	const days = [
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
		'Воскресенье',
	]

	const lessons = [
		{
			name: 'Йога',
			instructor: 'Анна Смирнова'
		},
		{
			name: 'Силовая тренировка',
			instructor: 'Дмитрий Козлов'
		},
		{
			name: 'Стретчинг',
			instructor: 'Ольга Волкова'
		},
		{
			name: 'Йога',
			instructor: 'Анна Смирнова'
		},
		{
			name: 'Силовая тренировка',
			instructor: 'Дмитрий Козлов'
		},
	]
	for (let i = 0; i < 5; i++) {
		lessons[i].time = {
			start: (() => {
				const time = new DateTime()
				time.setHours(time.getHours() + i)
				return time
			})(),
			duration: 60
		}
	}

	const rowsCount = Math.ceil(lessons.length / 2)

	let selected = $state(0)
</script>

<section class="container">
	<div class="box">
		<h2 class="block">Расписание групповых занятий</h2>
		<div class="block days">
			{#each days as day, i (i)}
				<button
					class="day" class:selected={selected === i}
					onclick={() => {selected = i}}
				>{day}</button>
			{/each}
		</div>

		<div class="block lessons" style:--rows={rowsCount}>
			{#each lessons as lesson}
				<Lesson {...lesson}/>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	@use "$scss/mixins/scr";

	.days {
		width: 100%;
		overflow: auto;
    display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 5px;
		padding: 5px;
    border-radius: 14px;
    border: 1px solid #E5E7EB
	}

	.day {
    text-align: center;

    padding: 10px 20px;
    border-radius: 14px;

		border: none;
		background: none;
		font-size: 1em;
    font-weight: 400 !important;

		&.selected {
			background: #65656533;
		}
	}

	.lessons {
    display: grid;
    gap: 20px;

		@media (min-width: 1100px) {
      grid-auto-flow: column;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(var(--rows), 1fr);
		}

	}
</style>