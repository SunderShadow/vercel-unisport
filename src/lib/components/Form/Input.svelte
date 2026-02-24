<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'

	type Props = HTMLInputAttributes & {
		pre?: Snippet
		post?: Snippet
	}

	let { pre, post, ...restProps }: Props = $props()
</script>

<div class="input">
	{@render pre?.()}
	<input {...restProps} />
	{@render post?.()}
</div>

<style lang="scss">
	input {
		all: unset;

		color: inherit;
		width: 100%;
	}

	div {
		display: flex;
		align-items: center;
		padding: 20px 25px;
		gap: 20px;
		border-radius: 14px;
		border: 1px solid #d8dadc;
	}
</style>
