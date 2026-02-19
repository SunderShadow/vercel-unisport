<script lang="ts">
	import './layout.scss'
	import { page } from '$app/state'

	let { data, children } = $props()

	let user = $derived(data.user)
	let subscription = $derived(data.user.subscription)

	let pages = [{ name: 'Промокод', href: '' }]

	for (let page of pages) {
		page.href = '/account' + page.href
	}
</script>

<main class="container">
	<section class="header">
		<div id="account-credentials" class="box">
			<div class="thumb">
				<img src={user.imgUrl} alt="" />
				<svg
					width="100"
					height="100"
					viewBox="0 0 100 100"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M100 50.0001C100 77.6144 77.6142 100 50 100C22.3858 100 0 77.6144 0 50.0001C0 22.3859 22.3858 0.00012207 50 0.00012207C77.6142 0.00012207 100 22.3859 100 50.0001ZM7.35402 50.0001C7.35402 73.5528 26.4473 92.6461 50 92.6461C73.5527 92.6461 92.646 73.5528 92.646 50.0001C92.646 26.4474 73.5527 7.35414 50 7.35414C26.4473 7.35414 7.35402 26.4474 7.35402 50.0001Z"
						fill="#ECECEC" />
					<path
						d="M92.2571 68.978C94.1096 69.81 96.2996 68.9862 96.9933 67.0776C100.817 56.5573 101.01 45.0182 97.4784 34.3219C93.5606 22.4579 85.3431 12.4905 74.4437 6.38243C63.5444 0.274346 50.7532 -1.53178 38.5888 1.31969C27.6217 3.8905 17.8806 10.0792 10.9032 18.832C9.63738 20.42 10.078 22.7179 11.7546 23.8637C13.4313 25.0095 15.7075 24.5672 16.9934 22.9954C22.9191 15.7524 31.0898 10.6309 40.2671 8.47963C50.6424 6.04755 61.5523 7.58803 70.8485 12.7977C80.1448 18.0074 87.1537 26.5088 90.4952 36.6279C93.4509 45.5786 93.3477 55.2212 90.263 64.0563C89.5936 65.9736 90.4046 68.146 92.2571 68.978Z"
						fill="url(#paint0_linear_1769_3289)" />
					<defs>
						<linearGradient
							id="paint0_linear_1769_3289"
							x1="50"
							y1="0.00012207"
							x2="50"
							y2="100"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#F66D49" />
							<stop offset="1" stop-color="#F43F5E" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div class="info">
				<span>{user.name}</span>
				<span>ID{user.id}</span>
			</div>
		</div>
	</section>
	<section id="subscription" class="box">
		<div class="status">
			<h1>Статус подписки</h1>
			<div class="badge">
				{#if subscription.active}
					Следующее списание {subscription.nextPayment.toLocaleDateString()}
				{:else}
					Не активна
				{/if}
			</div>
		</div>
		{#if subscription.active}
			<div class="go-to">
				<div class="type">
					<div>Активна</div>
					<div>/{subscription.type}</div>
				</div>

				<button class="button accent to-subscription" aria-label="К подписке">
					<svg
						width="23"
						height="23"
						viewBox="0 0 23 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.625 17.25L14.375 11.5L8.625 5.75"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
				</button>
			</div>
		{:else}
			<button class="button accent activate">Активировать</button>
		{/if}
	</section>

	<section class="box" id="nav">
		<div class="nav">
			{#each pages as navPage}
				<a href={navPage.href} class:active={navPage.href === page.url.pathname}>
					<span>{navPage.name}</span>
					<svg
						width="6"
						height="10"
						viewBox="0 0 6 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0.75 8.75L4.75 4.75L0.75 0.75"
							stroke="#272327"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
				</a>
			{/each}
		</div>
		<button id="tg-notifications" class="button">
			<svg
				width="23"
				height="23"
				viewBox="0 0 23 23"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M11.5013 1.91663C6.2113 1.91663 1.91797 6.20996 1.91797 11.5C1.91797 16.79 6.2113 21.0833 11.5013 21.0833C16.7913 21.0833 21.0846 16.79 21.0846 11.5C21.0846 6.20996 16.7913 1.91663 11.5013 1.91663ZM15.948 8.43329C15.8042 9.94746 15.1813 13.6275 14.8651 15.3237C14.7309 16.0425 14.4626 16.282 14.2134 16.3108C13.6576 16.3587 13.2359 15.9466 12.6992 15.592C11.8559 15.0362 11.3767 14.6912 10.5621 14.1545C9.61339 13.5316 10.2267 13.1866 10.773 12.6308C10.9167 12.487 13.3701 10.2541 13.418 10.0529C13.4246 10.0224 13.4237 9.99075 13.4154 9.96069C13.407 9.93063 13.3915 9.90306 13.3701 9.88038C13.3126 9.83246 13.2359 9.85163 13.1688 9.86121C13.0826 9.88038 11.7409 10.7716 9.12464 12.535C8.7413 12.7937 8.3963 12.9279 8.08963 12.9183C7.74464 12.9087 7.09297 12.7266 6.60422 12.5637C6.00047 12.372 5.53089 12.2666 5.56922 11.9312C5.58839 11.7587 5.82797 11.5862 6.27839 11.4041C9.07672 10.187 10.9359 9.38204 11.8655 8.99871C14.5296 7.88704 15.0759 7.69538 15.4401 7.69538C15.5167 7.69538 15.6988 7.71454 15.8138 7.81038C15.9096 7.88704 15.9384 7.99246 15.948 8.06913C15.9384 8.12663 15.9576 8.29913 15.948 8.43329Z"
					fill="white" />
			</svg>
			Уведомления в телеграм
		</button>
	</section>

	<section id="main" class="box">
		{@render children()}
	</section>
</main>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 20px;
		margin-top: 50px;
	}

	#account-credentials {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.thumb {
		position: relative;
		display: flex;

		width: 100px;
		height: 100px;

		svg {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
		}

		img {
			display: block;
			margin: auto;
			width: 72px;
			height: 72px;
			border-radius: 10em;
		}
	}

	.info {
		span {
			display: block;
		}

		span:last-child {
			margin-top: 5px;
			font-size: 0.75em;
			color: var(--text-content-color);
		}
	}

	#subscription {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.status {
			.badge {
				font-size: 0.75em;
				width: fit-content;
				padding: 2px 10px;
				background: #f2f2f2;
				margin-top: 10px;
			}
		}

		.type {
			text-align: right;

			div:first-child {
				background: linear-gradient(90deg, #f66d49 0%, #f43f5e 100%);
				-webkit-background-clip: text;
				background-clip: text;

				color: transparent;
				font-size: 1.85rem;
				font-weight: 600;
			}

			div:last-child {
				font-size: 0.85em;
				color: var(--text-content-color);
			}
		}

		.go-to {
			display: flex;
			gap: 20px;

			.to-subscription {
				width: 56px;
				height: 56px;
				border-radius: 10em;
				padding: 0;
			}
		}

		.activate {
			font-size: 1.15em;
			font-weight: 600;
		}
	}

	#nav {
		.nav {
			a {
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-radius: 10px;
				height: 56px;
				padding: 20px;
			}

			a.active {
				background: #f2f2f2;
			}

			a + a {
				margin-top: 5px;
			}
		}
	}

	#tg-notifications {
		width: 100%;
		margin-top: 20px;
	}

	#main {
		display: flex;
		flex-direction: column;
		gap: 20px;
		color: var(--text-content-color);
	}
</style>
