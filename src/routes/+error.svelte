<script>
	import { page } from '$app/state';
	import { isFooterShow } from '$lib/store';
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';

	$isFooterShow = false;

	function goHome() {
		goto('/');
	}

	onDestroy(() => {
		$isFooterShow = true;
	});
</script>

<div class="flex h-[91vh] flex-col items-center justify-center bg-gray-100">
	<div class="text-center">
		<h1 class="text-6xl font-bold text-red-500">404 - {page.error.message}</h1>
		<p class="mt-4 text-xl text-gray-700">Oops! The page you're looking for doesn't exist.</p>
		<p class="mt-2 text-gray-500">It might have been moved or deleted.</p>

		<button
			on:click={goHome}
			class="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white transition-all hover:bg-blue-700"
		>
			Go Home
		</button>
	</div>
</div>
