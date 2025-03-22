import api from '$lib/Axios.interceptor.js';
import { userData } from '$lib/store.js';
// export let ssr = false;

export async function load({ params }) {
	const productId = params.id;
	// console.log('xxxxxxxxxx', productId);
	let userId = '';
	userData.subscribe((value) => (userId = value.uId));
	try {
		// paramsIdValue = params.id;
		const axioResponse = await api.get(
			import.meta.env.VITE_BACKEND_API_URL + `products/${productId}`,
			{
				params: { id: productId, userId }
			}
		);
		// console.log('data-->', data);
		const product = await axioResponse.data;
		console.log('data-->', product);
		return await { product };
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
	}
}
