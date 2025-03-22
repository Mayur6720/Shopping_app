export const ssr = false; // Ensures this page loads only on the client side

import api from '$lib/Axios.interceptor.js';
import { userData } from '$lib/store.js';

export async function load() {
	let userId = '';
	userData.subscribe((currentValue) => {
		userId = currentValue.uId;
	});
	console.log('userif', userId);
	const response = await api.get(import.meta.env.VITE_BACKEND_API_URL + `cart`, {
		params: { userId: userId }
	});
	const data = await response.data;
	console.log('userrrrr', data);
	return data;
}
