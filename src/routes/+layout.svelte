<script>
	import NavBar from '$lib/NavBar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<NavBar />
{@render children()}

<style>
	:global(body) {
		font-family: 'Roboto Mono', serif;
	}
</style>
