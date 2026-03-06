<script lang="ts">
	import type { Component, Snippet } from 'svelte'

	type Props = {
		complete?: boolean
		icon?: Snippet | Component
		period: [Date, Date]
		trainer?: string
	}

	function getFormatTime(time): string {
		return time.getHours() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
	}

	let { complete = false, icon, period, trainer }: Props = $props()
</script>

<article class:complete>
	<div class="time">
		<time>{getFormatTime(period[0])}</time>
		<div>2 часа 55 мин</div>
		<time>{getFormatTime(period[1])}</time>
	</div>
	<div class="hr"></div>
	<div class="content">
		<h2>Первый триатлон в Ростове-на-Дону</h2>
		<div class="type">Забег</div>
		<div class="location">
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M9.06756 16.1313L9.06906 16.1306L9.07281 16.128L9.08406 16.1193L9.12831 16.0875C9.16631 16.0597 9.22006 16.0192 9.28956 15.966C9.42756 15.8602 9.62331 15.7046 9.85694 15.5047C10.4702 14.9805 11.0437 14.4114 11.5726 13.8022C12.8131 12.3675 14.1016 10.32 14.1016 7.97845C14.1016 6.5797 13.5488 5.2372 12.5648 4.2472C12.0785 3.75719 11.5 3.36821 10.8627 3.10267C10.2255 2.83713 9.54195 2.70026 8.85156 2.69995C8.1612 2.70021 7.47771 2.83702 6.84043 3.1025C6.20316 3.36798 5.62468 3.75688 5.13831 4.24683C4.15345 5.23916 3.60102 6.58073 3.60156 7.97883C3.60156 10.32 4.89006 12.3675 6.13056 13.8022C6.65945 14.4114 7.23291 14.9805 7.84619 15.5047C8.08019 15.7046 8.27556 15.8602 8.41356 15.966C8.48126 16.0181 8.54964 16.0694 8.61869 16.1197L8.63069 16.128L8.63406 16.1306L8.63556 16.1313C8.76494 16.2225 8.93819 16.2225 9.06756 16.1313ZM10.7266 7.94995C10.7266 8.44723 10.529 8.92415 10.1774 9.27578C9.82576 9.62741 9.34884 9.82495 8.85156 9.82495C8.35428 9.82495 7.87737 9.62741 7.52574 9.27578C7.17411 8.92415 6.97656 8.44723 6.97656 7.94995C6.97656 7.45267 7.17411 6.97576 7.52574 6.62413C7.87737 6.2725 8.35428 6.07495 8.85156 6.07495C9.34884 6.07495 9.82576 6.2725 10.1774 6.62413C10.529 6.97576 10.7266 7.45267 10.7266 7.94995Z"
					fill="#F43F5E" />
			</svg>
			<span>ул. Пушкинская, д. 131</span>
		</div>
	</div>

	<button class="button round" class:accent={!complete}>
		{#if complete}
			<svg
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M11.9387 18.9375L22.5325 8.34375C22.7825 8.09375 23.0741 7.96875 23.4075 7.96875C23.7408 7.96875 24.0325 8.09375 24.2825 8.34375C24.5325 8.59375 24.6575 8.89083 24.6575 9.235C24.6575 9.57917 24.5325 9.87583 24.2825 10.125L12.8137 21.625C12.5637 21.875 12.272 22 11.9387 22C11.6054 22 11.3137 21.875 11.0637 21.625L5.6887 16.25C5.4387 16 5.3187 15.7033 5.3287 15.36C5.3387 15.0167 5.46912 14.7196 5.71995 14.4688C5.97078 14.2179 6.26787 14.0929 6.6112 14.0937C6.95454 14.0946 7.2512 14.2196 7.5012 14.4688L11.9387 18.9375Z"
					fill="#272327" />
			</svg>
		{:else}
			{@render icon?.()}
		{/if}
	</button>
</article>

<style lang="scss">
	article {
		display: flex;
		gap: 20px;

		padding: 20px;
		border-radius: 14px;
		border: 1px solid #e5e7eb;

		&.complete {
			background: #f2f2f2;
		}
	}

	.time {
		margin: auto 0;
		text-align: center;

		* + * {
			margin-top: 5px;
		}

		time {
			display: block;
			color: var(--text-color);
			font-weight: 600;
		}

		div {
			font-size: 0.75em;
		}
	}

	h2 {
		font-size: 18px;
		font-weight: 600;
		color: var(--text-color);
		margin: 0;
	}

	.type {
		margin-top: 5px;
		font-size: 0.75em;
	}

	.content {
		padding: 9px 0;

		> * + * {
			margin-top: 5px;
		}
	}

	.location {
		display: flex;
		gap: 10px;
		font-size: 0.85em;
	}

	.hr {
		width: 2px;
		margin: 0;
		background: #e5e7eb;
	}

	article button:not(.accent) {
		background: #fff;
	}

	article button {
		margin: auto 0 auto auto;
	}
</style>
