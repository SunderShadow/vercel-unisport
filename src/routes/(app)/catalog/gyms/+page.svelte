<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte'
	import mapEnhanced from './assets/map.png?enhanced&format=webp'

	import fitnessEnhanced from "./assets/fitness.png?enhanced&format=webp"
	import swimmingEnhanced from "./assets/swimming.png?enhanced&format=webp"
	import yogaEnhanced from "./assets/yoga.png?enhanced&format=webp"
	import danceEnhanced from "./assets/dance.png?enhanced&format=webp"
	import cyclingEnhanced from "./assets/cycling.png?enhanced&format=webp"
	import pilatesEnhanced from "./assets/pilates.png?enhanced&format=webp"
</script>

<svelte:head>
	<link rel="preload" as="image" href={mapEnhanced.img.src} />
</svelte:head>

<main>
	<div class="container">
		<h1 id="page_title">Большой выбор спорта</h1>
		<p id="page_subtitle">Выбирай то что ближе по душе</p>

		<div id="to_map" class="container box" style:--bg-img="url({mapEnhanced.img.src})">
			<div>
				<Button href="/map" fullWidth accent>
					<svg
						width="23"
						height="23"
						viewBox="0 0 23 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M14.8542 13.4167H14.0971L13.8288 13.1579C14.8005 12.031 15.3345 10.5922 15.3333 9.10417C15.3333 7.87216 14.968 6.66781 14.2835 5.64343C13.5991 4.61905 12.6262 3.82064 11.488 3.34917C10.3497 2.8777 9.09726 2.75434 7.88892 2.99469C6.68058 3.23505 5.57065 3.82832 4.69948 4.69948C3.82832 5.57065 3.23505 6.68058 2.99469 7.88892C2.75434 9.09726 2.8777 10.3497 3.34917 11.488C3.82064 12.6262 4.61905 13.5991 5.64343 14.2835C6.66781 14.968 7.87216 15.3333 9.10417 15.3333C10.6471 15.3333 12.0654 14.7679 13.1579 13.8288L13.4167 14.0971V14.8542L18.2083 19.6363L19.6363 18.2083L14.8542 13.4167ZM9.10417 13.4167C6.71792 13.4167 4.79167 11.4904 4.79167 9.10417C4.79167 6.71792 6.71792 4.79167 9.10417 4.79167C11.4904 4.79167 13.4167 6.71792 13.4167 9.10417C13.4167 11.4904 11.4904 13.4167 9.10417 13.4167Z"
							fill="white" />
					</svg>

					<span>Найти на карте</span>
				</Button>
			</div>
		</div>
	</div>

	<div id="categories" class="container">
		<article class="category">
			<enhanced:img src={fitnessEnhanced} />
			<div>
				<h2><a href="" class="title">Фитнес</a></h2>
			</div>
		</article>
		<article class="category">
			<enhanced:img src={swimmingEnhanced} />
			<div>
				<h2><a href="" class="title">Плавание</a></h2>
			</div>
		</article>
		<article class="category">
			<enhanced:img src={danceEnhanced} />
			<div>
				<h2><a href="" class="title">Танцы</a></h2>
			</div>
		</article>
		<article class="category">
			<enhanced:img src={yogaEnhanced} />
			<div>
				<h2><a href="" class="title">Йога</a></h2>
			</div>
		</article>
		<article class="category">
			<enhanced:img src={pilatesEnhanced} />
			<div>
				<h2><a href="" class="title">Пилатес</a></h2>
			</div>
		</article>
		<article class="category">
			<enhanced:img src={cyclingEnhanced} />
			<div>
				<h2><a href="" class="title">Сайклинг</a></h2>
			</div>
		</article>
	</div>
</main>

<style lang="scss">
	main {
		padding-top: var(--header-height);
	}

	#page_title,
	#page_subtitle {
		text-align: center;
	}

	#to_map {
		padding: 20px;
		margin: 50px auto;

		> div {
			padding: 52px;
			border-radius: 14px;

			background-image: var(--bg-img);
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;
		}

		:global .button {
			max-width: 370px;
			margin-left: auto;
			margin-right: auto;
		}
	}

  .category {
		position: relative;
		--padding: 20px;

    padding: var(--padding);
    grid-column: span 2;
    grid-row: span 2;

		border-radius: 14px;
		overflow: hidden;

		img {
			position: absolute;
			top: 0; left: 0; bottom: 0; right: 0;
			object-fit: cover;
			max-width: 100%;
			max-height: 100%;
			border-radius: 14px;

      transition: transform var(--transition-duration);
			z-index: 0;
		}

    &:hover img {
			transform: scale(1.1);
		}

		&::before {
			content: '';
      position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;

			background-color: rgba(0, 0, 0, 0.2);
			z-index: 1;
      border-radius: 14px;
		}

		h2 {
      margin-top: auto;
      margin-bottom: 0;
      color: #fff;

			z-index: 2;

			a {
				color: inherit;

				&::before {
					content: '';
          position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					margin: calc(0 - var(--padding));
				}
			}
		}

    & > div {
      display: flex;
			height: 100%;
			width: 100%;
    }

    &:nth-child(1),
    &:nth-child(4) {
      grid-row: span 4;
      background-size: auto 100%;

      &:hover {background-size: auto 110%}
    }

    &:nth-child(2),
    &:nth-child(6) {
      grid-row: span 2;
      background-size: 100% 100%;

      &:hover {background-size: 110% 110%}
    }

    &:nth-child(3),
    &:nth-child(5) {
			grid-row: span 3;
      background-size: 130%;
      &:hover {background-size: 140%}
		}
  }

	#categories {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
		gap: 25px;

		height: 750px;

		margin-top: 50px;
		margin-bottom: 50px;
	}
</style>
