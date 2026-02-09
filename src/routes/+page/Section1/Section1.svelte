<script lang="ts">
  import bg3 from "./assets/bg3.png?enhanced&format=webp"
  import bg4 from "./assets/bg4.png?enhanced&format=webp"

  import BgImg1 from "./BgImg1.svelte"
  import BgImg2 from "./BgImg2.svelte"
</script>

<svelte:head>
  <link rel="preload" as="image" href={bg3.img.src} >
  <link rel="preload" as="image" href={bg4.img.src} >
</svelte:head>
<section>
  <div class="bg_img _1">
    <BgImg1 />
  </div>
  <div class="bg_img _2">
    <BgImg2 />
  </div>

  <div class="head">
    <div class="bg_img _3">
      <enhanced:img src={bg3} width="165" height="165"/>
    </div>

    <div class="bg_img _4">
      <enhanced:img src={bg4} width="241" height="241"/>
    </div>

    <h1>
      Юниспорт —<br>
      твой помощник в мире спорта
    </h1>
    <p>Идеально подходит для новичков, активных людей и семьнинов</p>
  </div>

  <button class="register">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.6263 3.8335H18.2096V17.2502C18.2096 17.7585 18.0077 18.246 17.6483 18.6055C17.2888 18.9649 16.8013 19.1668 16.293 19.1668H8.6263M11.5013 14.3752L14.3763 11.5002M14.3763 11.5002L11.5013 8.62516M14.3763 11.5002H4.79297" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    Зарегестрироваться
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
    }

    &._4 {
      bottom: -209px;
      right: 0;
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