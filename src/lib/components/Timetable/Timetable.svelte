<script lang="ts">
	import { DateTime } from '$lib/dateTime/date'
	import { onMount } from 'svelte'

	type Props = {
		currentDate?: DateTime
	}

	let { currentDate = $bindable() }: Props = $props()

	let ready = $state(false)
	let containerWidth = $state()
	let totalViewCount = $derived.by(() => {
		let canContain = Math.floor(containerWidth / 52)
		if (isNaN(canContain)) {
			canContain = 1
		}

		return canContain
	})

	onMount(() => {
		ready = true
	})

	if (!currentDate) {
		currentDate = new DateTime()
	}

	let settings = $derived.by(() => {
		let daysBeforeCount = 3
		let daysAfterCount = currentDate.maxMonthDay - currentDate.getDate() + 1

		daysAfterCount = Math.min(7, daysAfterCount)

		if (daysBeforeCount + daysAfterCount + 1 < totalViewCount) {
			daysBeforeCount = totalViewCount - daysAfterCount - 1
		}

		let before = []
		let after = []

		for (let i = 0; i < daysBeforeCount; i++) {
			before.push(
				new DateTime(
					currentDate.getFullYear(),
					currentDate.getMonth(),
					currentDate.getDate() - daysBeforeCount + i
				)
			)
		}

		for (let i = 0; i < daysAfterCount; i++) {
			after.push(
				new DateTime(
					currentDate.getFullYear(),
					currentDate.getMonth(),
					currentDate.getDate() + i + 1
				)
			)
		}

		return {
			before,
			after
		}
	})

	function setCurrentDate(date: DateTime) {
		currentDate = date
	}

	function toNextMonth() {
		currentDate = new DateTime(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
	}
</script>

<div class="timetable" class:ready>
	<div class="title">{currentDate.month.fullName} {currentDate.getFullYear()}</div>
	<div class="data">
		<div
			class="dates"
			bind:clientWidth={containerWidth}
			style:grid-template-columns="repeat({totalViewCount}, 1fr)">
			{#each settings.before as date}
				<button
					onclick={() => {
						setCurrentDate(date)
					}}>
					<div>{date.getDate()}</div>
					<div>{date.weekDay.shortName}</div>
				</button>
			{/each}

			<button class="current">
				<div>{currentDate.getDate()}</div>
				<div>{currentDate.weekDay.shortName}</div>
			</button>

			{#each settings.after as date}
				<button
					onclick={() => {
						setCurrentDate(date)
					}}>
					<div>{date.getDate()}</div>
					<div>{date.weekDay.shortName}</div>
				</button>
			{/each}
		</div>

		<button class="next_day" onclick={toNextMonth}>
			<svg
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M11.25 22.5L18.75 15L11.25 7.5"
					stroke="#272327"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round" />
			</svg>
		</button>
	</div>
</div>

<style lang="scss">
	.timetable {
		&:not(.ready) {
			opacity: 0;
		}

		.title {
			margin-bottom: 10px;
			color: var(--text-color);
		}

		.data {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 20px;
		}

		.dates {
			display: grid;
			flex-grow: 1;

			> button {
				width: 52px;
				height: 52px;
				background: none;
				border: none;
				outline: none;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				&.current {
					background-color: #f2f2f2;
					border-radius: 10px;
				}

				> *:first-child {
					font-weight: 600;
					font-size: 1.5em;
				}

				> *:last-child {
					font-weight: 400;
					color: var(--text-content-color);
					text-transform: uppercase;
				}
			}
		}
	}
	.next_day {
		background: none;
		outline: none;
		border: none;
	}
</style>
