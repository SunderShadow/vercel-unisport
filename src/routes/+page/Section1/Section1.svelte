<script lang="ts">
	import bg3 from './assets/bg3.png?enhanced&format=webp'
	import bg4 from './assets/bg4.png?enhanced&format=webp'

	import BgImg1 from './BgImg1.svelte'
	import BgImg2 from './BgImg2.svelte'
	import EnterIcon from '$lib/components/icons/Enter.svelte'
</script>

<svelte:head>
	<link rel="preload" as="image" href={bg3.img.src} />
	<link rel="preload" as="image" href={bg4.img.src} />
</svelte:head>

<section>
	<div class="bg_img _1">
		<BgImg1 />
	</div>
	<div class="bg_img _2">
		<BgImg2 />
	</div>

	<div class="head">
		<div class="bg_img _3" style:--img={`url(${bg3.img.src})`}></div>

		<div class="bg_img _4" style:--img={`url(${bg4.img.src})`}></div>

		<h1>
			Юниспорт —<br />
			твой помощник в мире спорта
		</h1>
		<p>Идеально подходит для новичков, активных людей и семьянинов</p>
	</div>

	<button class="register">
		<EnterIcon />

		Зарегистрироваться
	</button>
</section>

<style lang="scss">
	@use '$scss/mixins/scr';

	section {
		position: relative;
		margin-top: calc(var(--header-height) * -1);
		height: 710px;
		padding: var(--header-height) 30px 30px;

		border-bottom-left-radius: 100px;
		border-bottom-right-radius: 100px;

		overflow: hidden;

		@include scr.mobile {
			border-bottom-left-radius: 40px;
			border-bottom-right-radius: 40px;
		}
	}

	.bg_img {
		position: absolute;

		z-index: -1;

		background-image: var(--img);
		background-size: 100%;

		:global {
			svg {
				width: 100%;
				height: 100%;
			}
		}

		&._1 {
			top: 0;
			right: 0;
		}

		&._2 {
			bottom: 0;
			left: 0;
		}

		&._3 {
			left: 69px;
			top: -142px;

			width: 165px;
			height: 165px;

			@include scr.mobile {
				left: -60px;
				top: -129px;

				width: 120px;
				height: 120px;
			}
		}

		&._4 {
			bottom: -209px;
			right: 0;

			width: 241px;
			height: 241px;

			@include scr.mobile {
				bottom: -129px;
				right: -50px;

				width: 120px;
				height: 120px;
			}
		}
	}

	.head {
		position: relative;

		width: fit-content;

		margin-left: auto;
		margin-right: auto;
		margin-top: 158px;

		@include scr.mobile {
			max-width: 258px;
		}

		h1 {
			font-size: 4rem;
			letter-spacing: -3px;
			line-height: 1.3;
			margin: 0;

			@include scr.tablet {
				font-size: 3rem;
			}

			@include scr.mobile {
				font-size: 2rem;
				letter-spacing: -1px;
			}
		}

		p {
			text-align: right;
			@include scr.mobile {
				line-height: 28px;
			}
		}
	}

	.register {
		margin-left: auto;
		margin-right: auto;
		max-width: 370px;

		margin-top: 116px;

		@include scr.mobile {
			margin-top: 153px;
		}
	}
</style>
