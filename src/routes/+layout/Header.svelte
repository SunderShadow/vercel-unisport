<script lang="ts">
	import logo from '$lib/assets/img/logo.png?enhanced&format=webp'

	let nav = [
		{ href: '#', text: 'О проекте' },
		{ href: '#', text: 'Подписка' },
		{ href: '#', text: 'Единый абонемент' },
		{ href: '#', text: 'Стать партнером' }
	]
</script>

<header>
	<enhanced:img src={logo} width="168" height="37" alt="Юниспорт"/>

	<nav>
		{#each nav as link}
			<a href={link.href}>{link.text}</a>
		{/each}
	</nav>

	<div class="right">
		<button id="city-choose">
			<span>Ростов-на-Дону</span>

			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M5 7.5L10 12.5L15 7.5"
					stroke="#374151"
					stroke-width="1.33333"
					stroke-linecap="round"
					stroke-linejoin="round" />
			</svg>
		</button>

		<button>Вход</button>
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		height: var(--header-height);
		padding-left: 20px;
		padding-right: 20px;

		background: rgba(255, 255, 255, 0.6);
		border: 1px solid #e5e7eb;
		backdrop-filter: blur(8px);

		font-size: 0.775em;
		font-weight: 500;
	}

	nav {
		position: absolute;
		top: 50%;
		left: 50%;

		display: flex;
		gap: 30px;

		transform: translate(-50%, -50%);
	}

	.right {
		flex-shrink: 0;

		display: flex;
		gap: 35px;
	}

	button {
		height: 32px;
		width: 138px;
		padding: 0;
		cursor: pointer;
	}

	#city-choose {
		all: unset;

		display: flex;
		gap: 8px;
		align-items: center;

		cursor: pointer;
	}
</style>
