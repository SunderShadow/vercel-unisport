<script lang="ts">
  import {slide} from "svelte/transition"

  let visible = $state(false)

  function toggle() {
    visible = !visible
  }
</script>

<article>
  <h1>
    <button onclick={toggle}>
      Что такое юниспорт?

      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.667969 0.666687L4.66797 4.66669L8.66797 0.666687" stroke="#636363" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </h1>
  {#if visible}
    <p transition:slide>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, cum delectus deleniti dolores eaque error harum id iste laboriosam mollitia odio odit, omnis, reprehenderit sequi tenetur totam veniam voluptate? A, exercitationem nulla? Alias asperiores dicta eos ex expedita fugit ipsum nemo nihil nobis non placeat praesentium provident, quas quasi quod sapiente sed suscipit veritatis voluptas voluptates. At, aut corporis explicabo inventore iusto praesentium quisquam vero! Debitis ducimus ex exercitationem expedita facilis id impedit, molestias, necessitatibus non, numquam placeat quae quos temporibus. Accusantium ad alias consectetur culpa dolore, earum est, expedita ipsum non omnis optio possimus quaerat quam quis reprehenderit sequi!
    </p>
  {/if}
</article>

<style lang="scss">
  button {
    all: unset;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    padding: 20px;

    box-sizing: border-box;

    svg {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
  }

  p {
    margin: 0;
    padding: 0 20px 20px;
    color: var(--text-content-color);
  }

  article {
    border: 1px solid #E5E7EB;
    border-radius: 16px;
  }

  h1 {
    font-size: .85em;
    font-weight: 500;

    margin: 0 !important;
    text-align: left !important;
  }
</style>