<script>
	import SingleProduct from '../../../components/SingleProduct.svelte';
	export let data;
	console.log('dataaaaaaaa', data);
	let { product } = data;
</script>

<SingleProduct {product} />
