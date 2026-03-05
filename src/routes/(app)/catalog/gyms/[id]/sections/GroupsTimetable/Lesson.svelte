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

	let { name, instructor, time }: Props = $props()
</script>

<article>
	<time>
		<span
			>{time.start.getHours()}:{time.start.getMinutes() < 10
				? '0'
				: ''}{time.start.getMinutes()}</span>
		<span>{time.duration} мин</span>
	</time>

	<div>
		<h3>{name}</h3>
		<p class="instructor">{instructor}</p>
	</div>

	<div class="book">
		<Button accent>Записаться</Button>
		<Button accent round>
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M6.75 13.5L11.25 9L6.75 4.5"
					stroke="white"
					stroke-linecap="round"
					stroke-linejoin="round" />
			</svg>
		</Button>
	</div>
</article>

<style lang="scss">
	@use '$scss/mixins/scr';

	article {
		display: flex;
		gap: 20px;
		padding: 20px;
		align-items: center;

		@include scr.tablet {
			padding: 20px 10px;
		}

		border-radius: 14px;
		border: 1px solid #e5e7eb;
	}

	time {
		text-align: center;
		font-style: normal;

		> span:first-child {
			display: block;
			font-size: 2.25em;
			color: var(--text-color);
			font-weight: 600;

			@include scr.tablet {
				font-size: 1.125em;
			}
		}

		> span:last-child {
			display: block;
			margin-top: 5px;
			color: var(--text-content-color);

			@include scr.tablet {
				font-size: 0.625em;
			}
		}
	}

	h3 {
		font-size: 1.25em;
		margin: 0;

		@include scr.tablet {
			font-size: 1em;
		}
	}

	.instructor {
		color: var(--text-content-color);
		margin: 20px 0 0;
		@include scr.tablet {
			margin-top: 5px;
			font-size: 0.65em;
		}
	}

	.book {
		margin-left: auto;

		:global {
			> button:last-child {
				width: 36px;
				height: 36px;
			}

			@include scr.higher_than_tablet {
				> button:last-child {
					display: none;
				}
			}

			@include scr.tablet {
				> button:first-child {
					display: none;
				}
			}
		}
	}
</style>
