<script lang="scss">
	let { children, ...restProps } = $props()
</script>

<label {...restProps}>{@render children()}</label>

<style lang="scss">
	label {
		display: flex;
		gap: 10px;
		align-items: center;
		font-size: 14px;
		color: var(--text-color);
	}

	:global {
		label + .input,
		label + input {
			margin-top: 10px;
		}
	}
</style>
