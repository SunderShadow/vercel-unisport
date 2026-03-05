<script lang="ts">
	import headerBG from './assets/head.png?enhanced&format=webp'
	import gymEnhanced from './assets/gym.png?enhanced&format=webp'
	import { browser } from '$app/environment'
	import Button from '$lib/components/Button/Button.svelte'

	let showImg = $state(false)
	if (browser) {
		const bgImg = new Image()
		const eLst = () => {
			showImg = true
			bgImg.removeEventListener('load', eLst)
		}

		bgImg.addEventListener('load', eLst)

		bgImg.src = headerBG.img.src
	}
</script>

<svelte:head>
	<link rel="preload" as="image" href={headerBG.img.src} fetchpriority="high" />
</svelte:head>

<header class:show_img={showImg} style:background-image={`url("${headerBG.img.src}")`}>
	<div class="container">
		<div class="content">
			<div class="main_info">
				<div class="gym_info">
					<enhanced:img src={gymEnhanced} width="100" height="100" />
					<div>
						<p class="subtitle">Фитнес-клуб</p>
						<div class="title">
							<h1>West Gym</h1>
							<div class="to-favorite">
								<Button round>
									<svg
										width="35"
										height="35"
										viewBox="0 0 35 35"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M23.9727 5.521C27.8927 5.52114 31.0811 8.71478 31.0811 12.6733C31.081 14.2997 30.8214 15.7999 30.3711 17.1919L30.3691 17.1987C29.2887 20.618 27.0707 23.3833 24.6641 25.4517C22.253 27.5238 19.7093 28.8462 18.0791 29.4009L18.0684 29.4048C17.9607 29.4427 17.7535 29.479 17.4971 29.479C17.2406 29.479 17.0333 29.4427 16.9258 29.4048L16.915 29.4019L16.5996 29.2886C14.9681 28.6787 12.5916 27.3944 10.3311 25.4517C7.92438 23.3833 5.70646 20.618 4.62598 17.1987L4.62402 17.1919L4.46387 16.6655C4.11245 15.4234 3.91409 14.0967 3.91406 12.6733C3.91406 8.7147 7.10233 5.521 11.0225 5.521C13.3322 5.52102 15.4032 6.64424 16.6963 8.37256L17.4971 9.44287L18.2979 8.37256C19.5909 6.64422 21.6629 5.521 23.9727 5.521Z"
											stroke="#272327"
											stroke-width="2" />
									</svg>
								</Button>
							</div>
						</div>
						<p class="subtitle">
							Современный фитнес-клуб с профессиональным оборудованием и квалифицированными
							тренерами
						</p>
					</div>
				</div>

				<div class="actions">
					<Button accent>Купить абонемент</Button>
					<div class="info"><Button accent>Бесплатное занятие</Button></div>
				</div>
			</div>
			<div class="rating">
				<h2>Рейтинг</h2>
				<p class="rating-4-and-less">4.0</p>
				<div class="info"><Button accent href="#reviews">Все отзывы</Button></div>
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	@use '$scss/mixins/scr';
	@use '$scss/mixins/rating';

	.gym_info {
		display: flex;
		gap: 10px;
		align-items: start;

		img {
			border-radius: 10rem;
		}
	}

	header {
		position: relative;
		width: 100%;
		height: 600px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center top;

		> .container {
			display: flex;
			height: 100%;
			padding: 50px 20px;
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			z-index: 0;
			background-color: #000;

			transition: background-color var(--transition-duration);
		}

		&.show_img::before {
			background: #000000b2;
		}
	}

	@include scr.mobile {
		.main_info {
			width: 100%;
		}
	}

	.content {
		width: 100%;
		display: flex;
		gap: 20px;

		margin-top: auto;
		position: relative;
		color: #fff;
		z-index: 1;
	}

	p {
		margin: 20px 0;

		@include scr.mobile {
			margin: 10px 0;
		}
	}

	h1 {
		font-size: 3rem;
		margin: 0;

		@include scr.mobile {
			font-size: 1.75rem;
		}
	}

	h1:first-child,
	p:first-child {
		margin-top: 0;
	}

	h1:last-child,
	p:last-child {
		margin-bottom: 0;
	}

	.title {
		display: flex;
		align-items: center;
		gap: 20px;

		:global {
			button {
				flex-shrink: 0;
				&.round:not(.accent) {
					background: #ffffff;
				}
			}
		}
	}

	.subtitle {
		font-size: 1.1rem;

		max-width: 484px;
		@include scr.mobile {
			font-size: 1rem;
		}
	}

	.title + p {
		font-size: 18px;
	}

	.actions {
		width: 100%;
		margin-top: 50px;
		display: flex;
		gap: 20px;

		font-size: 1.1em;

		:global button {
			font-weight: 600;
		}

		@include scr.mobile {
			margin-top: 30px;
			flex-direction: column;

			:global button {
				width: 100%;
			}
		}
	}

	.info :global {
		button,
		.button {
			background: #ffffff26;
			border: 1px solid #ffffff;
		}
	}

	@include scr.tablet {
		.rating,
		.to-favorite {
			display: none;
		}
	}

	.rating {
		flex-shrink: 0;
		margin-top: auto;
		margin-left: auto;

		h2 {
			font-size: 18px;
			margin-top: 0;
			margin-bottom: 0;
			font-weight: 400;
		}

		p {
			font-size: 3rem;
			font-weight: 700;
			margin-top: 10px;

			@include rating.text;
		}
	}
</style>
