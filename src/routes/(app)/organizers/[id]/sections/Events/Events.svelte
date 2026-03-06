<script lang="ts">
	import Event from './Event.svelte'
</script>

<section id="events" class="box">
	<h2 class="block">Предстоящие мероприятия организатора</h2>
	<div class="block content">
		{#each Array(5) as _}
			<Event />
		{/each}
	</div>
</section>

<style lang="scss">
	@use '$scss/mixins/scr';

	.content :global > * + * {
		margin-top: 20px;
	}
</style>
