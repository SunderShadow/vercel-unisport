<script lang="ts" module>
	import FilterChildren from "./Filter.svelte"
	import type {Props as FilterProps} from "./Filter.svelte"

	export type Props = {
		filters: Array<FilterProps>
		values?: Array<FilterProps['value']>
	}
</script>
<script lang="ts">
	let {
		filters,
		values = $bindable()
	}: Props = $props()
</script>

<div class="toggle-filters">
	{#each filters as filter}
		<FilterChildren {...filter} bind:_group={values}/>
	{/each}
</div>

<style lang="scss">
	.toggle-filters {
    display: flex;
    gap: 10px;
		padding: 20px 10px;
    margin-left: -10px;
    margin-right: -10px;

		overflow-x: auto;
	}
</style>