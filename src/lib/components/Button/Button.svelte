<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
		accent?: boolean
		round?: boolean
		rounded?: boolean
		disabled?: boolean
		fullWidth?: boolean
		bg?: 'default' | 'white'
	}

	let {
		children,
		accent = false,
		round = false,
		rounded = false,
		disabled = false,
		fullWidth = false,
		bg = 'default',
		...restProps
	}: Props = $props()
</script>

<button
	{...restProps}
	class:accent
	class:rounded
	class:round
	{disabled}
	class:full-width={fullWidth}
	class={`bg-${bg}`}>
	{@render children()}
</button>

<style lang="scss">
	@use '$scss/mixins/bg';

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		width: fit-content;

		&.full-width {
			width: 100%;
		}

		color: var(--button-text-color);
		background-color: var(--button-bg-color);

		border: none;
		border-radius: 0.71em;

		padding: 1em 2em;

		font-weight: 500;

		&:not([disabled]) {
			cursor: pointer;
		}

		box-shadow:
			0 4px 6px -4px #0000001a,
			0 10px 15px -3px #0000001a;

		&.bg-white {
			background: #fff;
			color: var(--text-color);
			border: 1px solid #e5e7eb;
		}

		&.rounded {
			border-radius: 10em;
		}

		&.icon {
			display: flex;
			background: none;
			border: 1px solid #e5e7eb;
			box-shadow: 0 1px 2px 0 #0000000d;
			border-radius: 10em;

			> * {
				margin: auto;
			}
		}

		&.round {
			width: 56px;
			height: 56px;
			border-radius: 10em;
			padding: 0;
		}

		&.accent {
			@include bg.accent;
		}
	}
</style>
