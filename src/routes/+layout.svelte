<script lang="ts">
	import './layout.scss'
	import 'normalize.css'

	import favicon from '$lib/assets/favicon.svg'
	import Header from './+layout/Header.svelte'
	import Footer from './+layout/Footer.svelte'

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Юниспорт — твой помощник в мире спорта</title>
</svelte:head>

<div class="header">
	<Header />
</div>

<main>
	{@render children()}
</main>

<!--<Footer />-->

<style lang="scss">
	.header {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 2;
	}

	main {
		margin-top: var(--header-height);
	}
</style>
