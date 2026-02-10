<script lang="ts">
</script>

<section class="container">
	<div class="about badge">Большой каталог спорта</div>
	<h2>Выбор спорта на твой вкус</h2>
	<p class="text-content">
    Выбирай то что ближе по душе
	</p>

  <div class="categories">
    <article class="category">
      <enhanced:img src="./assets/card1.png?format=webp" width="335" height="335" loading="lazy"/>
      <h3>Фитнес</h3>
      <a href="#"></a>
    </article>
    <article class="category">
      <enhanced:img src="./assets/card2.png?format=webp" width="335" height="335" loading="lazy" />
      <h3>Йога</h3>
      <a href="#"></a>
    </article>
    <article class="category">
      <enhanced:img src="./assets/card3.png?format=webp" width="335" height="335" loading="lazy" />
      <h3>Футбольчик</h3>
      <a href="#"></a>
    </article>
    <article class="category">
      <enhanced:img src="./assets/card3.png?format=webp" width="335" height="335" loading="lazy" />
      <h3>Футбольчик</h3>
      <a href="#"></a>
    </article>
  </div>
</section>

<style lang="scss">
	p {
		color: var(--text-content-color);
		margin-bottom: 20px;
	}

	.categories {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
	}

  .category {
    position: relative;
    background: gray;

    border-radius: 10px;
    overflow: hidden;

    h3 {
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 0 0 20px 20px;
      color: #FFF;
    }

    a::before {
      content: '';
      position: absolute;
      top: 0; left: 0; bottom: 0; right: 0;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  button.more {
    width: 370px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;

    font-weight: 600;
  }
</style>
