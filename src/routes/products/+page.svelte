<script>
	import axios from 'axios';
	import Pagination from '../../components/Pagination.svelte';
	import ProductCard from '../../components/ProductCard.svelte';

	export let data;
	let perPage = 10;
	let currentPage = 1;
	let pageLength = 10;
	let { products } = data;

	//API call page change

	const productApiCall = async (currentPage, perPage) => {
		const axiosResponse = axios.get(`${import.meta.env.VITE_BACKEND_API_URL}products`, {
			params: { perPage, page: currentPage }
		});

		const {
			products: newProducts,
			perPage: perPages,
			totalProducts,
			page
		} = (await axiosResponse).data;
		pageLength = Math.ceil(totalProducts / perPage);
		products = [...newProducts];

		console.log('apiData', (await axiosResponse).data);
	};

	$: currentPage, productApiCall(currentPage, perPage);
</script>

<div class="grid grid-cols-12 gap-3 gap-y-5 p-4">
	{#each products as item}
		<ProductCard data={item} className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12" />
	{/each}
</div>

<Pagination bind:currentPage bind:pageLength />
