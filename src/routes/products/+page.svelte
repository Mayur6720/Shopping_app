<script>
	import ProductCard from '../../components/ProductCard.svelte';

	export let data;

	let { products } = data;
</script>

<div class="grid grid-cols-12 gap-3 gap-y-5 p-4">
	{#each products as item}
		<ProductCard data={item} className="col-span-3" />
	{/each}
</div>
