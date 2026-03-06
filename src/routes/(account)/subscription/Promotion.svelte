<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import Button from '$lib/components/Button/Button.svelte'

	let countdownTimestamp = $state(24 * 60 * 60 - 1)

	let hour = $derived(Math.floor(countdownTimestamp / 60 / 60))
	let minutes = $derived(Math.floor((countdownTimestamp % 3600) / 60))
	let seconds = $derived(countdownTimestamp % 60)

	let countdownDatetime = $derived(
		(hour < 10 ? '0' : '') +
			hour +
			':' +
			(minutes < 10 ? '0' : '') +
			minutes +
			':' +
			(seconds < 10 ? '0' : '') +
			seconds
	)

	let timestampCountdownInterval
	onMount(() => {
		timestampCountdownInterval = setInterval(() => {
			countdownTimestamp -= 1
		}, 1000)
	})

	onDestroy(() => {
		clearInterval(timestampCountdownInterval)
	})
</script>

<section class="box">
	<div class="title">
		<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M11.625 19.375L19.375 11.625"
				stroke="url(#paint0_linear_1671_9569)"
				stroke-width="2.58333"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M11.625 12.2708C11.625 12.4421 11.693 12.6064 11.8142 12.7275C11.9353 12.8486 12.0995 12.9167 12.2708 12.9167C12.4421 12.9167 12.6064 12.8486 12.7275 12.7275C12.8486 12.6064 12.9167 12.4421 12.9167 12.2708C12.9167 12.0995 12.8486 11.9353 12.7275 11.8142C12.6064 11.693 12.4421 11.625 12.2708 11.625C12.0995 11.625 11.9353 11.693 11.8142 11.8142C11.693 11.9353 11.625 12.0995 11.625 12.2708ZM18.0833 18.7292C18.0833 18.9005 18.1514 19.0647 18.2725 19.1858C18.3936 19.307 18.5579 19.375 18.7292 19.375C18.9005 19.375 19.0647 19.307 19.1858 19.1858C19.307 19.0647 19.375 18.9005 19.375 18.7292C19.375 18.5579 19.307 18.3936 19.1858 18.2725C19.0647 18.1514 18.9005 18.0833 18.7292 18.0833C18.5579 18.0833 18.3936 18.1514 18.2725 18.2725C18.1514 18.3936 18.0833 18.5579 18.0833 18.7292Z"
				fill="url(#paint1_linear_1671_9569)"
				stroke="url(#paint2_linear_1671_9569)"
				stroke-width="2.58333"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M3.875 15.5C3.875 17.0266 4.17569 18.5383 4.7599 19.9487C5.34411 21.3591 6.2004 22.6406 7.27988 23.7201C8.35936 24.7996 9.64089 25.6559 11.0513 26.2401C12.4617 26.8243 13.9734 27.125 15.5 27.125C17.0266 27.125 18.5383 26.8243 19.9487 26.2401C21.3591 25.6559 22.6406 24.7996 23.7201 23.7201C24.7996 22.6406 25.6559 21.3591 26.2401 19.9487C26.8243 18.5383 27.125 17.0266 27.125 15.5C27.125 13.9734 26.8243 12.4617 26.2401 11.0513C25.6559 9.64089 24.7996 8.35936 23.7201 7.27988C22.6406 6.2004 21.3591 5.34411 19.9487 4.7599C18.5383 4.17569 17.0266 3.875 15.5 3.875C13.9734 3.875 12.4617 4.17569 11.0513 4.7599C9.64089 5.34411 8.35936 6.2004 7.27988 7.27988C6.2004 8.35936 5.34411 9.64089 4.7599 11.0513C4.17569 12.4617 3.875 13.9734 3.875 15.5Z"
				stroke="url(#paint3_linear_1671_9569)"
				stroke-width="2.58333"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<defs>
				<linearGradient
					id="paint0_linear_1671_9569"
					x1="11.625"
					y1="15.5"
					x2="19.375"
					y2="15.5"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#F66D49" />
					<stop offset="1" stop-color="#F43F5E" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_1671_9569"
					x1="15.5"
					y1="11.625"
					x2="15.5"
					y2="19.375"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#F66D49" />
					<stop offset="1" stop-color="#F43F5E" />
				</linearGradient>
				<linearGradient
					id="paint2_linear_1671_9569"
					x1="15.5"
					y1="11.625"
					x2="15.5"
					y2="19.375"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#F66D49" />
					<stop offset="1" stop-color="#F43F5E" />
				</linearGradient>
				<linearGradient
					id="paint3_linear_1671_9569"
					x1="3.875"
					y1="15.5"
					x2="27.125"
					y2="15.5"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#F66D49" />
					<stop offset="1" stop-color="#F43F5E" />
				</linearGradient>
			</defs>
		</svg>
		<h2>Бесплатная подписка и скидка на год</h2>
	</div>
	<div class="promotion">
		<span>До конца акции</span>
		<time class="countdown" datetime={countdownDatetime}>{countdownDatetime}</time>
	</div>

	<div class="cost">
		<span class="old">1590 ₽</span>
		<span class="new">1199 ₽</span>
	</div>

	<div class="btn">
		<Button accent>Подключить подписку</Button>
	</div>
</section>

<style lang="scss">
	@use '$scss/mixins/bg';

	.title {
		display: flex;
		gap: 10px;
		align-items: center;

		h2 {
			font-size: 1.5em;
			font-weight: 600;
			margin: 0;
		}
	}

	h1 {
		margin: 0;
		text-align: center;
	}

	p {
		margin-top: 16px;
		margin-bottom: 0;

		text-align: center;
		color: var(--text-content-color);
	}

	.promotion {
		margin-top: 20px;
		display: flex;
		align-items: center;
		gap: 20px;

		font-size: 18px;

		color: var(--text-content-color);

		time {
			max-width: 140px;
			width: 100%;
			text-align: center;
			padding: 10px 25px;

			border-radius: 10em;
			font-weight: 600;
			font-size: 1.25rem;
			background: #f43f5e33;
			color: #f43f5e;
		}
	}

	.cost {
		display: flex;
		gap: 10px;
		align-items: center;
		margin-top: 20px;

		font-size: 1.5em;
		font-weight: 600;

		.old {
			color: #c9c9c9;
		}

		.new {
			@include bg.accent();
			font-size: 1.5em;

			-webkit-background-clip: text;
			background-clip: text;
			color: transparent;
		}
	}

	.btn {
		margin-top: 20px;

		:global button {
			width: 100%;
		}
	}
</style>
