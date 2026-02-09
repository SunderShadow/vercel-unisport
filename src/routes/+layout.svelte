<script lang="ts">
	import favicon from '$lib/assets/favicon.svg'

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Юниспорт — твой помощник в мире спорта</title>
</svelte:head>

<header></header>

{@render children()}
