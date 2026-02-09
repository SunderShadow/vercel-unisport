<script lang="ts">
  import Section1 from "./+page/Section1/Section1.svelte"
  import Section2 from "./+page/Section2/Section2.svelte"
  import Section3 from "./+page/Section3/Section3.svelte"
</script>

<Section1 />
<Section2 />
<Section3 />

<style lang="scss">
  :global {
    section.container {
      .badge {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        font-size: .75em;
      }

      h2 {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      .text-content {
        max-width: 890px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        color: var(--text-content-color);
      }
    }
  }
</style>