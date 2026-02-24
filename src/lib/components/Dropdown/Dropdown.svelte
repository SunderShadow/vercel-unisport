<script lang="ts">
	import { slide } from 'svelte/transition'
	type Props = {
		title: string
		visible?: boolean
		value?: any
		options: Array<{
			_v: any
			_t: string
		}>
	}

	let { title, visible = $bindable(), value = $bindable(null), options }: Props = $props()

	const baseTitle = title

	function toggle(e) {
		e.preventDefault()
		e.stopPropagation()

		visible = !visible

		if (visible) {
			let listener = () => {
				visible = false
				document.removeEventListener('click', listener)
			}
			document.addEventListener('click', listener)
		}
	}
</script>

<div class="wrapper">
	<button class="toggler" onclick={toggle}>
		<span>{baseTitle}{value === null ? '' : ': ' + title}</span>
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M6 12L10 8L6 4" stroke="#272327" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>

	{#if visible}
		<div class="options" transition:slide>
			{#each options as { _v, _t }}
				<button
					class="option"
					onclick={() => {
						value = _v
						title = _t
					}}><span>{_t}</span></button>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.wrapper {
		position: relative;
	}

	.toggler {
		display: flex;
		gap: 10px;
		padding: 10px 20px;

		background: none;
		border-radius: 30px;
		border: 1px solid #e5e7eb;
		text-align: left;
		color: var(--text-color);
	}

	.options {
		position: absolute;
		top: 100%;
		left: 50%;
		min-width: 100%;
		transform: translateX(-50%);
		background: #fff;
		padding: 20px;
		box-shadow: 0 1px 2px 0 #0000000d;
	}

	.option {
		width: 100%;
		background-color: transparent;
		text-align: left;
		border: none;
		outline: none;
		padding: 10px;

		transition: background-color var(--transition-duration);

		span {
			display: block;
			width: max-content;
		}
		&:hover {
			background-color: #f2f2f2;
		}
	}
</style>
