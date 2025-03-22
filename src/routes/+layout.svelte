<script>
	import NavBar from '$lib/NavBar.svelte';
	import { isFooterShow } from '$lib/store';
	import { onDestroy } from 'svelte';
	import '../app.css';
	import Footer from '../section/Footer.svelte';
	let { children } = $props();

	// let unsubscribe = isFooterShow.subscribe((value) => {
	// 	console.log('Footer visibility:', value);
	// });

	// onDestroy(() => unsubscribe());
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<NavBar />

{@render children()}

{#if $isFooterShow}
	<Footer />
{/if}
