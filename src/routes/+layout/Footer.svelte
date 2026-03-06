<script lang="ts">
	import logo from '$lib/assets/img/logo.png?enhanced&format=webp'
	import fond_logo from '$lib/assets/img/fond_logo.png?enhanced&format=webp'

	import VkIcon from './assets/social/Vk.svelte'
	import TelegramIcon from './assets/social/Telegram.svelte'
	import EmailIcon from './assets/social/Email.svelte'
	import PhoneIcon from './assets/social/Phone.svelte'
</script>

<footer>
	<div class="col _1">
		<enhanced:img src={logo} width="168" height="37" alt="Юниспорт" />
		<div class="social">
			<VkIcon />
			<TelegramIcon />
			<EmailIcon />
			<PhoneIcon />
		</div>

		<p>Общество с ограниченной ответственностью «Инновиум»</p>

		<p>
			ИНН: 6168125402<br />
			ОГРН: 1256100023057
		</p>

		<p>
			34441, Ростовская обл.,<br />
			г. Ростов-на-Дону,<br />
			ул. Лобачевского, д. 49
		</p>
	</div>
	<div class="col _2">
		<div class="nav">
			<div>
				<span>Навигация</span>
				<a href="/">О проекте</a>
				<a href="/">Подписка</a>
				<a href="/">Единый абонемент</a>
				<a href="/">Выбор спорта</a>
			</div>
			<div>
				<span>Юридическая информация</span>
				<a href="/">Стать партнероме</a>
				<a href="/">Политика конфиденциальности</a>
				<a href="/">Пользовательское соглашение</a>
				<a href="/">Публичная оферта</a>
			</div>
		</div>
	</div>
	<div class="col _3">
		<div class="fond_logo">
			<enhanced:img src={fond_logo} width="212" height="121" alt="Фонд содействия инновациям" />
		</div>
		<p class="fond_text">
			проект реализован при поддержке Фонда содействия инновациям в рамках программы «Студенческий
			стартап» мероприятия «Платформа университетского технологического предпринимательства»
			федерального проекта «Технологии»
		</p>
	</div>

	<span class="copyright">© 2025 Юниспорт.</span>
</footer>

<style lang="scss">
	@use '$scss/mixins/scr';

	footer {
		position: relative;

		display: grid;
		grid-template-columns: repeat(18, 1fr);
		gap: 20px;
		background-color: var(--button-bg-color);

		padding: 58px 20px;

		font-size: 14px;

		color: #fff;

		@include scr.tablet {
			grid-template-columns: 1fr;
		}
	}

	.social {
		display: flex;
		gap: 15px;

		margin-top: 30px;
	}

	p {
		max-width: 245px;
	}

	.nav {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: space-between;

		& > div {
			display: flex;
			flex-direction: column;
		}

		a {
			color: #919191;
		}

		a + a {
			margin-top: 1rem;
		}

		span {
			font-size: 1rem;
			margin-bottom: 25px;

			@include scr.mobile {
				font-size: 1.15rem;
			}
		}
	}

	.fond_logo {
		width: fit-content;

		@include scr.desktop {
			margin-left: auto;
		}

		@include scr.tablet {
			width: 145px;
			height: 83px;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}

	.fond_text {
		margin: 0;
		max-width: 452px;

		@include scr.desktop {
			text-align: right;
			margin-left: auto;
		}
	}

	.copyright {
		position: absolute;
		left: 50%;
		bottom: 58px;
		transform: translateX(-50%);
		font-weight: 700;

		@include scr.tablet {
			bottom: 20px;
		}
	}

	@include scr.desktop {
		.col {
			&._1 {
				grid-column: span 5;
			}

			&._2 {
				grid-column: span 6;
			}

			&._3 {
				grid-column: 13 / 19;
			}
		}
	}
</style>
