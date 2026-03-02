<script lang="ts">
	import Header from './Header.svelte'
	import FastInfo from './FastInfo.svelte'
	import galleryImg from "./assets/gallery.png?enhanced&format=webp"
	import Button from '$lib/components/Button/Button.svelte'
	import organizerEnhanced from "./assets/organizer.png?enhanced&format=webp"

	import '@splidejs/svelte-splide/css'

	import { onDestroy, onMount } from 'svelte'
	import { initMapWithMarker, scriptHTML } from '$lib/map'
	import type { YMap } from '@yandex/ymaps3-types'
	import Review from '$lib/components/Review/Review.svelte'
	import img2 from '../../+page/Section7/assets/img_2.png'
	import img3 from '../../+page/Section7/assets/img_3.png'
	import Slider from '$lib/components/Slider/Slider.svelte'
	import { SplideSlide } from '@splidejs/svelte-splide'
	import FastArticle from '$lib/components/FastArticle/FastArticle.svelte'

	let mapEl: HTMLElement = $state()
	let map: YMap = null
	onMount(async () => {
		map = await initMapWithMarker(mapEl, {
			text: 'Ростов-На-Дону, ул. Зорге, д. 33, 5 этаж'
		})
	})

	onDestroy(() => {
		map?.destroy()
	})
</script>

<svelte:head>
	{@html scriptHTML}
</svelte:head>

<Header />
<main>
	<FastInfo />

	<div class="container section-group">
		<section id="about" class="box">
			<h2 class="block">О мероприятии</h2>
			<p class="block">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
				standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
				a type specimen book. It has survived not only five centuries, but also
			</p>
		</section>

		<section id="gallery" class="box">
			<h2 class="block">Фотогалерея</h2>
			<div class="block content">
				<enhanced:img src={galleryImg} width="315" height="236"/>
				<enhanced:img src={galleryImg} width="315" height="236"/>
				<enhanced:img src={galleryImg} width="315" height="236"/>
				<enhanced:img src={galleryImg} width="315" height="236"/>
			</div>
		</section>

		<section id="contacts" class="box">
			<h2 class="block">Контакты организатора</h2>
			<div class="block">
				<div class="item">
					<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5859 20.6125L11.5878 20.6115L11.5926 20.6082L11.607 20.5972L11.6635 20.5564C11.7121 20.521 11.7808 20.4692 11.8696 20.4012C12.0459 20.2661 12.296 20.0672 12.5945 19.8118C13.3782 19.142 14.1109 18.4149 14.7867 17.6364C16.3718 15.8031 18.0182 13.1869 18.0182 10.1949C18.0182 8.40765 17.3119 6.69224 16.0546 5.42724C15.4332 4.80111 14.694 4.30409 13.8797 3.96478C13.0654 3.62548 12.1921 3.45059 11.3099 3.4502C10.4278 3.45053 9.55442 3.62534 8.74012 3.96456C7.92582 4.30378 7.18666 4.80072 6.56519 5.42676C5.30675 6.69474 4.60087 8.40897 4.60156 10.1954C4.60156 13.1869 6.24798 15.8031 7.83306 17.6364C8.50886 18.4149 9.24161 19.142 10.0253 19.8118C10.3243 20.0672 10.5739 20.2661 10.7502 20.4012C10.8367 20.4678 10.9241 20.5333 11.0123 20.5977L11.0277 20.6082L11.032 20.6115L11.0339 20.6125C11.1992 20.7289 11.4206 20.7289 11.5859 20.6125ZM13.7057 10.1585C13.7057 10.7939 13.4533 11.4033 13.004 11.8526C12.5547 12.3019 11.9453 12.5544 11.3099 12.5544C10.6745 12.5544 10.0651 12.3019 9.61579 11.8526C9.16648 11.4033 8.91406 10.7939 8.91406 10.1585C8.91406 9.52311 9.16648 8.91372 9.61579 8.46442C10.0651 8.01511 10.6745 7.7627 11.3099 7.7627C11.9453 7.7627 12.5547 8.01511 13.004 8.46442C13.4533 8.91372 13.7057 9.52311 13.7057 10.1585Z" fill="#F43F5E"/>
					</svg>
					<address>
						<h3>Адрес</h3>
						<p>ул. Зорге, д. 33</p>
					</address>
				</div>
				<div class="item">
					<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.34417 10.3404C7.72417 13.0525 9.9475 15.2662 12.6596 16.6558L14.7679 14.5475C15.0267 14.2887 15.41 14.2025 15.7454 14.3175C16.8188 14.6721 17.9783 14.8637 19.1667 14.8637C19.6938 14.8637 20.125 15.295 20.125 15.8221V19.1667C20.125 19.6938 19.6938 20.125 19.1667 20.125C10.1679 20.125 2.875 12.8321 2.875 3.83333C2.875 3.30625 3.30625 2.875 3.83333 2.875H7.1875C7.71458 2.875 8.14583 3.30625 8.14583 3.83333C8.14583 5.03125 8.3375 6.18125 8.69208 7.25458C8.7975 7.59 8.72083 7.96375 8.4525 8.23208L6.34417 10.3404Z" fill="#F43F5E"/>
					</svg>
					<div>
						<h3>Рабочий телефон</h3>
						<p>+7 (495) 123-45-67</p>
					</div>
				</div>
				<div class="item">
					<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.0825 4.0825C2.875 5.3015 2.875 7.25075 2.875 11.155V11.845C2.875 15.7435 2.875 17.6927 4.0825 18.9175C5.3015 20.125 7.25075 20.125 11.155 20.125H11.845C15.7435 20.125 17.6927 20.125 18.9175 18.9175C20.125 17.6985 20.125 15.7492 20.125 11.845V11.155C20.125 7.2565 20.125 5.30725 18.9175 4.0825C17.6985 2.875 15.7492 2.875 11.845 2.875H11.155C7.2565 2.875 5.30725 2.875 4.0825 4.0825ZM5.7845 8.12475H7.7625C7.82575 11.4137 9.27475 12.8052 10.4248 13.0927V8.12475H12.282V10.9595C13.4148 10.8387 14.6108 9.545 15.0133 8.119H16.8647C16.7137 8.85712 16.4121 9.55618 15.9787 10.1725C15.5454 10.7889 14.9897 11.3093 14.3462 11.7013C15.0645 12.0586 15.6987 12.5642 16.2072 13.1846C16.7156 13.8051 17.0868 14.5263 17.296 15.3007H15.2548C14.8177 13.938 13.7253 12.88 12.282 12.7362V15.3007H12.052C8.119 15.3007 5.8765 12.6097 5.7845 8.12475Z" fill="#F43F5E"/>
					</svg>
					<div>
						<h3>Группа Вконтакте</h3>
						<p>vk.com</p>
					</div>
				</div>
			</div>

			<Button fullWidth>Проложить маршрут</Button>
		</section>
	</div>

	<section id="map_route" class="container">
		<div class="box">
			<h2 class="block">Как добратся</h2>
			<p class="block">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0733 17.9237L10.075 17.9229L10.0792 17.92L10.0917 17.9104L10.1408 17.875C10.1831 17.8442 10.2428 17.7992 10.32 17.74C10.4733 17.6225 10.6908 17.4496 10.9504 17.2275C11.6318 16.6451 12.269 16.0128 12.8567 15.3358C14.235 13.7417 15.6667 11.4667 15.6667 8.865C15.6667 7.31083 15.0525 5.81917 13.9592 4.71917C13.4188 4.17471 12.7761 3.74252 12.068 3.44747C11.3599 3.15242 10.6004 3.00035 9.83333 3C9.06626 3.00029 8.30683 3.1523 7.59874 3.44728C6.89066 3.74225 6.24791 4.17437 5.7075 4.71875C4.61321 5.82134 3.9994 7.31197 4 8.86542C4 11.4667 5.43167 13.7417 6.81 15.3358C7.39765 16.0128 8.03483 16.6451 8.71625 17.2275C8.97625 17.4496 9.19333 17.6225 9.34667 17.74C9.42189 17.7979 9.49787 17.8549 9.57458 17.9108L9.58792 17.92L9.59167 17.9229L9.59333 17.9237C9.73708 18.025 9.92958 18.025 10.0733 17.9237ZM11.9167 8.83333C11.9167 9.38587 11.6972 9.91577 11.3065 10.3065C10.9158 10.6972 10.3859 10.9167 9.83333 10.9167C9.2808 10.9167 8.7509 10.6972 8.36019 10.3065C7.96949 9.91577 7.75 9.38587 7.75 8.83333C7.75 8.2808 7.96949 7.7509 8.36019 7.36019C8.7509 6.96949 9.2808 6.75 9.83333 6.75C10.3859 6.75 10.9158 6.96949 11.3065 7.36019C11.6972 7.7509 11.9167 8.2808 11.9167 8.83333Z" fill="#272327"/>
				</svg>
				<span>ул. Зорге, д. 33, 5 этаж</span>
			</p>

			<div id="map" class="block" bind:this={mapEl}></div>
		</div>
	</section>

	<section id="organizer" class="container">
		<h2>Организатор</h2>
		<a href="">
			<enhanced:img src={organizerEnhanced} width="53" height="53"/>
			<span>Иван Иванов</span>
			<span class="rating">4.5</span>
		</a>
	</section>

	<section id="reviews" class="container">
		<h2>Отзывы и оценки</h2>
		<div class="write_review">
			<Button fullWidth>Написать отзыв</Button>
		</div>
		<Review thumb={organizerEnhanced.img.src} username="Иван Иванов" date={new Date()}
						text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, at deserunt enim eum fuga
						 itaque nostrum, optio perspiciatis quae reiciendis, sint ut vitae voluptate. Aperiam commodi
						  consectetur consequuntur corporis cumque eaque enim, exercitationem ipsa, modi necessitatibus,
						   quisquam temporibus ullam. Aliquid animi atque aut eius, error incidunt nihil saepe sed tempore."
		/>
		<Review thumb={organizerEnhanced.img.src} username="Иван Иванов" date={new Date()}
						text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, at deserunt enim eum fuga
						 itaque nostrum, optio perspiciatis quae reiciendis, sint ut vitae voluptate. Aperiam commodi
						  consectetur consequuntur corporis cumque eaque enim, exercitationem ipsa, modi necessitatibus,
						   quisquam temporibus ullam. Aliquid animi atque aut eius, error incidunt nihil saepe sed tempore."
		/>
		<Review thumb={organizerEnhanced.img.src} username="Иван Иванов" date={new Date()}
						text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, at deserunt enim eum fuga
						 itaque nostrum, optio perspiciatis quae reiciendis, sint ut vitae voluptate. Aperiam commodi
						  consectetur consequuntur corporis cumque eaque enim, exercitationem ipsa, modi necessitatibus,
						   quisquam temporibus ullam. Aliquid animi atque aut eius, error incidunt nihil saepe sed tempore."
		/>

		<Button bg="white">
			Посмотреть еще
		</Button>
	</section>

	<section class="container">
		<h2>Смотерть похожие</h2>

		<Slider>
			{#snippet slides()}
				{#each Array(3) as _}
					<SplideSlide>
						<FastArticle
							badge="от 500₽"
							img={img2}
							title="Первый триатлон в Ростове-на-Дорну"
							date="27.12.2024" />
					</SplideSlide>
					<SplideSlide>
						<FastArticle
							badge="Бесплатно"
							img={img2}
							title="Ростовский городской зимний забег"
							date="27.12.2024" />
					</SplideSlide>
					<SplideSlide>
						<FastArticle
							badge="от 1500₽"
							img={img3}
							title="Мастер-класс по глиномесенью"
							date="27.12.2024" />
					</SplideSlide>
					<SplideSlide>
						<FastArticle
							badge="от 1500₽"
							img={img3}
							title="Бесплатная тренировнка по Йоге"
							date="27.12.2024" />
					</SplideSlide>
				{/each}
			{/snippet}
		</Slider>
	</section>
</main>

<style lang="scss">
	@use "$scss/mixins/scr";

  .section-group + section,
  .section-group + .section-group,
	section + section {
    margin-top: 50px;
	}

	section:last-of-type {
    margin-bottom: 50px;
	}

	.section-group {
		display: grid;

    @include scr.higher_than_tablet {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 2fr;

			> section {
        margin-top: 0;
        margin-bottom: 0;
			}
		}

		gap: 20px;
  }

	.box:focus {
		border: 2px solid #000;
	}

	#map_route {
    margin-top: 20px;

		p {
      display: flex;
			gap: 10px;
			align-items: center;
		}
	}

	#gallery {
		@include scr.higher_than_tablet {
      grid-column: 2;
      grid-row: 1 / 3;
		}

		.content {
			width: 100%;
      display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 20px;

			@include scr.mobile {
				grid-template-columns: 1fr;
			}

			img {
				width: 100%;
				object-fit: cover;
				border-radius: 14px;
			}
		}
	}

	#contacts {
    display: flex;
		flex-direction: column;
		gap: 20px;

		.item + .item {
      margin-top: 15px;
		}

		.item {
      display: flex;
			align-items: start;
			gap: 10px;

			h3 {
        margin: 0;
				font-weight: 600;
				color: var(--text-color);
			}

      address, p {
				font-style: normal;
				margin-top: 5px;
        margin-bottom: 0;
				color: var(--text-content-color);
			}
		}

		:global button {
      margin-top: auto;
		}
	}

	#map {
		width: 100%;
		height: 600px;
		border-radius: 14px;

    @include scr.tablet {
      height: 300px;
    }
	}

	#organizer {
		img {
			border-radius: 10em;
		}

		:global button {
			padding: 12px 50px;
			gap: 15px;
		}

    a {
			width: fit-content;
      display: flex;
      gap: 15px;
      align-items: center;
			background-color: #FFFFFF;
			padding: 12px 50px;
			border-radius: 10em;

      box-shadow: 0 4px 6px -4px #0000001A, 0 10px 15px -3px #0000001A, 0 -10px 15px -3px #0000001A;

      span:last-child {
        background: #01B306;
        padding: 4.5px 10px;
        border-radius: 10em;
        color: #fff;
        font-weight: 400;
        font-size: 16px;
			}
    }
	}

	.write_review {
		max-width: 370px;
		width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
	}
</style>