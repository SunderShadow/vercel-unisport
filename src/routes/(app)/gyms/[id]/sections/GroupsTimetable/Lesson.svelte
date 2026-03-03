<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte'
	import type { DateTime } from '$lib/dateTime/date'

	type Props = {
		name: string
		instructor: string
		time: {
			start: DateTime
			duration: number // minutes
		}
	}

	let {
		name,
		instructor,
		time
	}: Props = $props()

</script>

<article>
	<time>
		<span>{time.start.getHours()}:{time.start.getMinutes() < 10 ? '0' : ''}{time.start.getMinutes()}</span>
		<span>{time.duration} мин</span>
	</time>

	<div>
		<h3>{name}</h3>
		<p class="instructor">{instructor}</p>
	</div>

	<div class="book"><Button accent>Записаться</Button></div>
</article>

<style lang="scss">
	article {
    display: flex;
    gap: 20px;
		padding: 20px;
		align-items: center;

		border-radius: 14px;
    border: 1px solid #E5E7EB;
	}

	time {
		text-align: center;
		font-style: normal;

		> span:first-child {
      display: block;
      font-size: 2.25em;
			color: var(--text-color);
			font-weight: 600;
		}

    > span:last-child {
      display: block;
      margin-top: 5px;
			color: var(--text-content-color);
		}
	}

	h3 {
		font-size: 1.25em;
	}

	.instructor {
		color: var(--text-content-color);
    margin-top: 20px;
	}

	.book {
    margin-left: auto;
	}
</style>