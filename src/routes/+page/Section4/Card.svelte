<script lang="ts">
	import type { Component, Snippet } from 'svelte'

	type Props = {
		icon: Snippet | Component
		title: string
		content: string
	}

	let { icon, title, content }: Props = $props()
</script>

<div class="card">
	{@render icon()}

	<h3>{title}</h3>
	<p>{content}</p>
</div>

<style lang="scss">
  @use "$scss/mixins/scr";

	div {
		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 40px 20px;

		border: 1px solid #e5e7eb;
		border-radius: 14px;

		text-align: center;

    @include scr.mobile {
      padding: 20px;
    }
	}

	h3 {
		margin-top: 20px;
    margin-bottom: 0;

		font-size: 1.25em;
		font-weight: 600;
	}

	p {
		margin-top: 20px;
    margin-bottom: 0;

		color: var(--text-content-color);
		line-height: 1.5em;
	}
</style>
