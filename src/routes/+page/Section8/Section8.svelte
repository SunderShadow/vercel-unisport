<script lang="ts">
  import img2 from './assets/img_2.png?enhanced&format=webp'
  import img3 from './assets/img_3.png?enhanced&format=webp'

  import Slider from "$lib/components/Slider/Slider.svelte"
  import {SplideSlide} from "@splidejs/svelte-splide"
  import FastArticle from "$lib/components/FastArticle/FastArticle.svelte"

  import MagnifierIcon from "$lib/components/icons/Magnifier.svelte"
</script>

<section class="container">
	<div class="about badge">Инфополе о спорте</div>
	<h2>Спортивный блог</h2>
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
    <MagnifierIcon />

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
