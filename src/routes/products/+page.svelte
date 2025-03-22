<script>
	import axios, { AxiosHeaders } from 'axios';

	import Pagination from '../../components/Pagination.svelte';
	import ProductCard from '../../components/ProductCard.svelte';
	import api from '$lib/Axios.interceptor';
	import { isToastShow, userT } from '$lib/store';
	import { onMount } from 'svelte';

	export let data;
	let perPage = 10;
	let currentPage = 1;
	let pageLength = 10;
	let { products } = data;
	let isLoader = false;

	//API call page change

	const productApiCall = async (currentPage, perPage) => {
		isLoader = true;
		try {
			const token = $userT;

			const axiosResponse = api.get(`${import.meta.env.VITE_BACKEND_API_URL}products`, {
				params: { perPage, page: currentPage }
			});

			// console.log('axiosResponse', await axiosResponse.data);

			const {
				products: newProducts,
				perPage: perPages,
				totalProducts,
				page
			} = (await axiosResponse).data;

			pageLength = Math.ceil(totalProducts / perPage);
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
	onMount(() => {
		if (!$userT) {
			$isToastShow = {
				isShow: true,
				toastText: 'Please sign in to enter',
				toastType: 'info',
				toastIcon: 'info'
			};
			redirect(307, '/login'); // 307 preserves method (GET/POST)
		}
	});
	$: productApiCall(currentPage, perPage);
</script>

{#if !isLoader}
	<div class="grid grid-cols-12 gap-3 gap-y-5 p-4">
		{#each products as item}
			<ProductCard data={item} className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12" />
		{/each}
	</div>

	<Pagination bind:currentPage bind:pageLength />
{:else}
	<div class=" flex h-[60vh] items-center justify-center">
		<span class="loading loading-spinner loading-lg text-blue-600"></span>
	</div>
{/if}
