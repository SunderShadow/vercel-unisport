<script>
  import Slider from "$lib/components/Slider/Slider.svelte"
  import {SplideSlide} from "@splidejs/svelte-splide"
  import FastArticle from "$lib/components/FastArticle/FastArticle.svelte"

  import img2 from './assets/img_2.png?enhanced&format=webp'
  import img3 from './assets/img_3.png?enhanced&format=webp'
</script>

<section class="container">
	<div class="about badge">Большой каталог мероприятий</div>
	<h2>Ближайшие спортивные мероприятия</h2>
  <Slider>
    {#snippet slides()}
      {#each Array(3) as _}
        <SplideSlide>
          <FastArticle badge="от 500₽" img={img2} title="Первый триатлон в Ростове-на-Дорну" date="27.12.2024"/>
        </SplideSlide>
        <SplideSlide>
          <FastArticle badge="Бесплатно" img={img2} title="Ростовский городской зимний забег" date="27.12.2024"/>
        </SplideSlide>
        <SplideSlide>
          <FastArticle badge="от 1500₽" img={img3} title="Мастер-класс по глиномесенью" date="27.12.2024"/>
        </SplideSlide>
        <SplideSlide>
          <FastArticle badge="от 1500₽" img={img3} title="Бесплатная тренировнка по Йоге" date="27.12.2024"/>
        </SplideSlide>
      {/each}
    {/snippet}
  </Slider>

  <button class="more accent">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M14.8542 13.4167H14.0971L13.8288 13.1579C14.8005 12.031 15.3345 10.5922 15.3333 9.10417C15.3333 7.87216 14.968 6.66781 14.2835 5.64343C13.5991 4.61905 12.6262 3.82064 11.488 3.34917C10.3497 2.8777 9.09726 2.75434 7.88892 2.99469C6.68058 3.23505 5.57065 3.82832 4.69948 4.69948C3.82832 5.57065 3.23505 6.68058 2.99469 7.88892C2.75434 9.09726 2.8777 10.3497 3.34917 11.488C3.82064 12.6262 4.61905 13.5991 5.64343 14.2835C6.66781 14.968 7.87216 15.3333 9.10417 15.3333C10.6471 15.3333 12.0654 14.7679 13.1579 13.8288L13.4167 14.0971V14.8542L18.2083 19.6363L19.6363 18.2083L14.8542 13.4167ZM9.10417 13.4167C6.71792 13.4167 4.79167 11.4904 4.79167 9.10417C4.79167 6.71792 6.71792 4.79167 9.10417 4.79167C11.4904 4.79167 13.4167 6.71792 13.4167 9.10417C13.4167 11.4904 11.4904 13.4167 9.10417 13.4167Z"
          fill="white" />
    </svg>

    Узнать подробнее
  </button>
</section>

<style lang="scss">
  button.more {
    width: 370px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;

    font-weight: 600;
  }
</style>
