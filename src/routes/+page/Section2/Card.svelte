<script lang="ts">
	import type { Component, Snippet } from 'svelte'

	type Props = { icon: Snippet | Component; title: string; content: string }

	let { icon, title, content } = $props()
</script>

<div class="card">
	{@render icon()}

	<h3>{title}</h3>
	<p>{content}</p>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: 40px 20px;

		border: 1px solid #e5e7eb;
		border-radius: 14px;

		text-align: center;
	}

	h3 {
		margin-top: 20px;
		font-size: 1.25em;
		font-weight: 600;
	}

	p {
		margin-top: 20px;
		color: var(--text-content-color);

		line-height: 1.5em;
	}
</style>
