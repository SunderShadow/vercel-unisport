<script lang="ts" module>
	export type Props = {
		name: string
		value: any
		_group?: Array<Props['value']>
	}
</script>
<script lang="ts">
	let {
		name, value, _group = $bindable([])
	}: Props = $props()

	function toggle() {
		if (active) {
			_group = _group.filter(v => v !== value)
		} else {
			_group.push(value)
		}
	}

	let active = $derived(_group.includes(value))
</script>

<button class:active onclick={toggle}>{name}</button>

<style lang="scss">
	button {
		all: unset;
		flex-shrink: 0;

    --shadow-color: #0000001A;

    box-shadow: 0 4px 6px -4px var(--shadow-color),
			0 10px 15px -3px var(--shadow-color),
			0 -10px 15px -3px var(--shadow-color);
    padding: 12px 25px;
    border-radius: 10em;

    background-color: #FFF;
		cursor: pointer;

		transition-property: background-color, color, box-shadow;
		transition-duration: 300ms;
  }

	.active {
    --shadow-color: #9F9F9F52;
    background-color: #9F9F9F;
		color: #fff;
	}
</style>