import axios from 'axios';

export async function load({ params }) {
	const productId = params.id;
	const response = await axios.get(import.meta.env.VITE_BACKEND_API_URL + `products/${productId}`, {
		params: { id: productId }
	});
	// console.log('data-->', data);
	const product = await response.data;
	console.log('data-->', product);
	return await product;
}
