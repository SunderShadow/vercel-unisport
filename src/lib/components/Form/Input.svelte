<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'

	type Props = HTMLInputAttributes & {
		pre?: Snippet
		post?: Snippet
	}

	let { pre, post, ...restProps }: Props = $props()

	let inputEl = $state()
</script>

<div
	class="input"
	onclick={() => {
		inputEl.focus()
	}}>
	{@render pre?.()}
	<input {...restProps} bind:this={inputEl} />
	{@render post?.()}
</div>

<style lang="scss">
	input {
		all: unset;

		color: inherit;
		width: 100%;
	}

	.input {
		cursor: text;
	}

	div {
		display: flex;
		align-items: center;
		padding: 20px 25px;
		gap: 20px;
		border-radius: 14px;
		border: 1px solid #d8dadc;
		background: #fff;
	}
</style>
