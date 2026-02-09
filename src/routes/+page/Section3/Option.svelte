<script lang="ts">
  import listTypeImg from "./assets/list-type.svg?no-inline"
  import type {Snippet} from "svelte"

  type Props = {
    premium?: boolean,
    title: string,
    cost: string,
    period: string,
    button: Snippet,
    content: Snippet,
    advantages: Array<string>
  }

  let {
    premium = false,
    title,
    cost,
    period,
    content,
    button,
    advantages
  }: Props = $props()
</script>

<article class:premium>
  <h3>{title}</h3>
  <p><span class="cost">{cost}</span> / {period}</p>
  <p class="content">{@render content()}</p>

  <button>
    {@render button()}
  </button>

  <ul style:--type-img={`url(${listTypeImg})`}>
    {#each advantages as li}
      <li>{li}</li>
    {/each}
  </ul>
</article>

<style lang="scss">
  article {
    padding: 40px 20px;
    border-radius: 14px;
    border: 1px solid #E5E7EB;
  }

  h3 {
    margin-top: 0;
    font-weight: 600;
    font-size: 1.25em;
    color: var(--text-content-color);
  }

  p {
    color: var(--text-content-color);
  }

  p.content {
    line-height: 1.3em;
  }

  .cost {
    font-size: 2.25em;
    font-weight: 600;
    color: var(--text-color);
  }

  button {
    margin-top: 20px;
    font-weight: 600;
    font-size: 1.125em;
  }

  ul {
    padding-left: 42px;
    margin-top: 26px;
  }

  li {
    position: relative;
    list-style: none;
    font-weight: 500;

    &::before {
      content: '';

      position: absolute;
      top: 50%;
      right: calc(100% + 10px);
      transform: translateY(-55%);

      background-image: var(--type-img);
      background-size: 100% 100%;
      background-position: center;

      width: 2em;
      height: 2em;
    }
  }

  li + li {
    margin-top: 30px;
  }

  article.premium {
    background: linear-gradient(204.62deg, rgba(246, 109, 73, 0.5) 0%, rgba(255, 255, 255, 0.5) 49.91%);

    .cost {
      background: linear-gradient(90deg, #F66D49 0%, #F43F5E 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    button {
      background: linear-gradient(90deg, #F66D49 0%, #F43F5E 100%);
    }
  }
</style>