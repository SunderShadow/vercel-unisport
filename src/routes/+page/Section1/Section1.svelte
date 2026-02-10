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
		<div class="bg_img _3" style:--img={`url(${bg3.img.src})`}>
		</div>

		<div class="bg_img _4" style:--img={`url(${bg4.img.src})`}>
		</div>

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
	section {
		position: relative;
		margin-top: calc(var(--header-height) * -1);
		height: 710px;
		padding-top: var(--header-height);

		border-bottom-left-radius: 100px;
		border-bottom-right-radius: 100px;
		overflow: hidden;
	}

	.bg_img {
		position: absolute;

		z-index: -1;

    background-image: var(--img);
    background-size: 100%;

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
		}

		&._4 {
			bottom: -209px;
			right: 0;

      width: 241px;
      height: 241px;
		}
	}

	.head {
		position: relative;

		width: fit-content;

		margin-left: auto;
		margin-right: auto;
		margin-top: 158px;

		h1 {
			font-size: 4rem;
			letter-spacing: -3px;
			line-height: 1.3;
			margin: 0;
		}

		p {
			text-align: right;
		}
	}

	.register {
		position: absolute;
		bottom: 50px;
		left: 50%;
		transform: translateX(-50%);
		width: 370px;
	}
</style>
