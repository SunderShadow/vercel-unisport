<script lang="ts">
	import headerBG from './assets/head.png?enhanced&format=webp'
	import { browser } from '$app/environment'
	import Button from '$lib/components/Button/Button.svelte'
	import organizerEnhanced from "./assets/organizer.png?enhanced&format=webp"

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
	<link rel="preload" as="image" href={headerBG.img.src} fetchpriority="high"/>
</svelte:head>

<header class:show_img={showImg} style:background-image={`url("${headerBG.img.src}")`}>
	<div class="container">
		<div class="content">
			<div class="main_info">
				<div class="userinfo">
					<enhanced:img src={organizerEnhanced} />
					<div>
						<p class="subtitle">Организатор</p>
						<h1>Иван Иванов</h1>
						<p class="subtitle">Организатор с большим опытом работы</p>
					</div>
				</div>

				<div class="actions">
					<Button accent>
						<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.752 3.9707C18.1371 3.9707 20.0811 5.91448 20.0811 8.32812C20.081 9.35965 19.9162 10.3103 19.6309 11.1924L19.6289 11.1982C18.9434 13.3674 17.5319 15.134 15.9834 16.4648C14.4305 17.7995 12.7973 18.6464 11.7695 18.9961L11.7588 19C11.7361 19.008 11.6412 19.0293 11.4971 19.0293C11.3538 19.0293 11.2595 19.0081 11.2363 19L11.2256 18.9961L10.8125 18.8418C9.79019 18.4272 8.37039 17.6325 7.01172 16.4648C5.46317 15.134 4.05169 13.3675 3.36621 11.1982L3.36426 11.1924L3.2627 10.8584C3.03999 10.0714 2.91409 9.23085 2.91406 8.32812C2.91406 5.91455 4.85715 3.97082 7.24219 3.9707C8.64693 3.9707 9.90823 4.65373 10.6963 5.70703L11.4971 6.77734L12.2979 5.70703C13.0858 4.6538 14.3474 3.97085 15.752 3.9707Z" stroke="white" stroke-width="2"/>
						</svg>
						<span>Подписаться</span>
					</Button>
					<div class="info">
						<Button accent>
							<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14.375 9.58333L13.4301 9.42617C13.4073 9.56339 13.4146 9.70394 13.4516 9.83805C13.4886 9.97216 13.5543 10.0966 13.6442 10.2028C13.7341 10.3089 13.8461 10.3942 13.9723 10.4527C14.0985 10.5113 14.2359 10.5416 14.375 10.5417V9.58333ZM3.83333 9.58333V8.625C3.57917 8.625 3.33541 8.72597 3.15569 8.90569C2.97597 9.08541 2.875 9.32917 2.875 9.58333H3.83333ZM5.75 20.125H16.6367V18.2083H5.75V20.125ZM17.7867 8.625H14.375V10.5417H17.7867V8.625ZM15.3209 9.7405L16.0923 5.10696L14.2025 4.79167L13.4301 9.42617L15.3209 9.7405ZM14.2025 2.875H13.9974V4.79167H14.2025V2.875ZM10.8071 4.58179L8.39787 8.19854L9.99254 9.26229L12.4037 5.64554L10.8071 4.58179ZM7.59958 8.625H3.83333V10.5417H7.59958V8.625ZM2.875 9.58333V17.25H4.79167V9.58333H2.875ZM19.4561 17.8135L20.6061 12.0635L18.7278 11.6878L17.5777 17.4378L19.4561 17.8135ZM8.39787 8.19854C8.31033 8.32975 8.1908 8.43733 8.05171 8.51172C7.91262 8.58611 7.75732 8.62502 7.59958 8.625V10.5417C8.07287 10.5416 8.53883 10.4248 8.95611 10.2014C9.37338 9.97806 9.72907 9.65514 9.99158 9.26133L8.39787 8.19854ZM16.0923 5.10696C16.1381 4.83243 16.1236 4.55123 16.0497 4.2829C15.9758 4.01456 15.8444 3.76554 15.6645 3.55313C15.4847 3.34073 15.2607 3.17004 15.0083 3.05293C14.7558 2.93582 14.4808 2.8751 14.2025 2.875V4.79167L16.0923 5.10696ZM17.7867 10.5417C17.9285 10.5416 18.0685 10.573 18.1967 10.6336C18.3249 10.6943 18.4381 10.7826 18.528 10.8922C18.6179 11.0019 18.6824 11.1301 18.7168 11.2677C18.7512 11.4053 18.7555 11.5488 18.7278 11.6878L20.6061 12.0635C20.6894 11.6465 20.6792 11.2162 20.5762 10.8036C20.4732 10.391 20.2799 10.0063 20.0103 9.67745C19.7408 9.34855 19.4016 9.08356 19.0172 8.90157C18.6328 8.71957 18.2129 8.62511 17.7876 8.625L17.7867 10.5417ZM16.6367 20.125C17.3014 20.125 17.9456 19.8947 18.4596 19.4733C18.9737 19.0519 19.3258 18.4653 19.4561 17.8135L17.5777 17.4378C17.5343 17.6553 17.4167 17.851 17.2451 17.9915C17.0735 18.132 16.8585 18.2086 16.6367 18.2083V20.125ZM13.9974 2.875C13.3664 2.87501 12.7451 3.0308 12.1888 3.32854C11.6324 3.62628 11.1572 4.05677 10.8071 4.58179L12.4037 5.64554C12.5787 5.38294 12.8148 5.16761 13.093 5.01865C13.3712 4.86969 13.6819 4.79172 13.9974 4.79167V2.875ZM5.75 18.2083C5.49583 18.2083 5.25208 18.1074 5.07236 17.9276C4.89263 17.7479 4.79167 17.5042 4.79167 17.25H2.875C2.875 18.0125 3.1779 18.7438 3.71707 19.2829C4.25624 19.8221 4.9875 20.125 5.75 20.125V18.2083Z" fill="white"/>
								<path d="M7.66406 9.5835V19.1668" stroke="white" stroke-width="1.75"/>
							</svg>
							<span>Проверенный исполнитель</span>
						</Button>
					</div>
				</div>
			</div>
			<div class="rating">
				<h2>Рейтинг</h2>
				<p>4.5</p>
				<div class="info"><Button accent>Все отзывы</Button></div>
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	@use '$scss/mixins/scr';

	.userinfo {
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

	.subtitle {
		font-size: 1.1rem;

		@include scr.mobile {
			font-size: 1rem;
		}
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

	.info :global button {
		background: #ffffff26;
		border: 1px solid #ffffff;
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
			color: #01b306;
			margin-top: 10px;
		}
	}
</style>
