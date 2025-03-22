<script>
	import api from '$lib/Axios.interceptor';
	import { userT } from '$lib/store';
	import NewRealaseProductCard from '../components/NewRealaseProductCard.svelte';
	import ProductCard from '../components/ProductCard.svelte';

	let perPage = 10;
	let currentPage = 1;
	let pageLength = 10;
	let products = [];
	let isLoader = false;

	const productApiCall = async () => {
		isLoader = true;
		try {
			// const token = $userT;

			const axiosResponse = await api.get(`${import.meta.env.VITE_BACKEND_API_URL}products`, {
				params: { perPage: 8, page: 3 }
			});

			const {
				products: newProducts,
				perPage: perPages,
				totalProducts,
				page
			} = (await axiosResponse).data;

			// console.log('axiosResponse', await axiosResponse.data);
			// pageLength = Math.ceil(totalProducts / perPage);
			products = [...newProducts];
			isLoader = false;
		} catch (error) {
			// Handle Axios errors
			if (error.response) {
				// Server responded with a status code outside the 2xx range
				console.warn('Server Error:', error.response.status, error.response.data);
				// alert(`Error: ${error.response.data.message || 'Something went wrong!'}`);
			} else if (error.request) {
				// Request was made but no response received
				console.warn('Network Error:', error.request);
				// alert('Network error! Please check your internet connection.');
			} else {
				// Something else caused the error
				console.warn('Unexpected Error:', error.message);
				// alert('Unexpected error occurred!');
			}
			isLoader = false;
		}
	};

	$: productApiCall(1, 5);
</script>

<!-- {JSON.stringify(products)} -->
{#if !isLoader}
	<div class="mx-auto grid w-11/12 grid-cols-12 gap-4">
		{#each products as item}
			<ProductCard data={item} className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12" />
		{/each}
	</div>
	<div class="my-7 flex w-full items-center justify-center">
		<a class="mx-auto w-2/3 sm:w-2/3 md:w-3/4 lg:w-1/3" href="/products"
			><span class="btn btn-primary !min-w-full rounded-full">See More</span></a
		>
	</div>
{:else}
	<div class="flex h-[35vh] w-full items-center justify-center">
		<span class="loading loading-spinner loading-lg text-info"></span>
	</div>
{/if}

<style>
</style>
