<script>
	import SingleProduct from '../../../components/SingleProduct.svelte';
	import { page } from '$app/stores';
	export let data;
	let { product } = data;
	$: console.log('dataaaaaaaa', product);
</script>

<div class="flex items-center justify-center">
	<SingleProduct {product} />
</div>
