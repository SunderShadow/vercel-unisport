<script lang="ts">
	import '../+layout/layout.scss'
	import 'normalize.css'

	import favicon from '$lib/assets/favicon.svg'
	import Header from '../+layout/Header.svelte'
	import Footer from '../+layout/Footer.svelte'
	import { page } from "$app/state"

	let { children, data } = $props()

	const hideFooterOn = [
		'/map'
	]

	let footerVisible = true

	for (let i = 0; i < hideFooterOn.length; i++) {
		if (page.url.pathname.startsWith(hideFooterOn[i])) {
			footerVisible = false
			break
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Юниспорт — твой помощник в мире спорта</title>
</svelte:head>

<div class="header">
	<Header user={data.user} />
</div>

{@render children()}

{#if footerVisible}
	<Footer />
{/if}

<style lang="scss">
	.header {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 2;
	}
</style>
