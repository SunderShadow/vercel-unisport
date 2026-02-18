<script lang="ts">
	import Accordion from '$lib/components/Accordion/Accordion.svelte'
</script>

<section class="container">
	<div class="about badge">Частые вопросы</div>
	<h2>Часто задаваемые вопросы</h2>
	<p class="text-content">Ответы на самые популярные вопросы</p>

	<div class="accordions">
		{#each Array(6) as _}
			<Accordion />
		{/each}
	</div>
</section>

<style lang="scss">
	.accordions {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 690px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
