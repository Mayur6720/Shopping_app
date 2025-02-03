import axios from 'axios';

export async function load({ params }) {
	const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}cart`);
	const data = await response.data;
	return data;
}
