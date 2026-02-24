<script lang="ts">
	type Props = {
		checked?: boolean
	}

	let { checked = $bindable() }: Props = $props()
</script>

<button
	class:checked
	onclick={() => {
		checked = !checked
	}}>
	<div class="inner">
		<div class="round"></div>
	</div>
</button>

<style lang="scss">
	button {
		display: flex;
		background-color: #f2f2f2;
		border-radius: 10em;
		height: 30px;
		width: 66px;
		padding: 3px;

		border: none;
		transition-property: background-color;
		transition-duration: var(--transition-duration);
		outline: none;
	}

	.inner {
		position: relative;
		height: 100%;
		width: 100%;
	}

	.round {
		position: absolute;
		top: 0;
		left: 0;
		aspect-ratio: 1 / 1;
		height: 100%;

		border-radius: 10rem;
		box-shadow: -2px 1px 6px 0px #00000040;
		background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);

		transition-property: transform, left;
		transition-duration: var(--transition-duration);
	}

	button.checked {
		background-color: #f66d49;
		.round {
			transform: translateX(-100%);
			left: 100%;
		}
	}
</style>
