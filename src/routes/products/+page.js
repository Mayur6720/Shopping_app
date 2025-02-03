import axios from 'axios';

export async function load() {
	const api = import.meta.env.VITE_BACKEND_API_URL;
	const response = await axios.get(`${api}products`, { params: { perPage: 10, page: 1 } });
	const products = await response.data.products;
	return await { products };
}
