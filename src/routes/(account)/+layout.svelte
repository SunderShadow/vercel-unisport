<script lang="ts">
	import '../+layout/layout.scss'
	import 'normalize.css'

	import favicon from '$lib/assets/favicon.svg'
	import Header from '../+layout/Header/Header.svelte'

	let { children, data } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Юниспорт — твой помощник в мире спорта</title>
</svelte:head>

<div class="header">
	<Header user={data.user} />
</div>

<div class="page-wrapper">
	{@render children()}
</div>

<style lang="scss">
	.header {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 2;
	}

	.page-wrapper {
		padding-top: var(--header-height);
	}
</style>
