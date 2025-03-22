import axios from 'axios';
import { userT } from './store.js';
import { redirect } from '@sveltejs/kit';

const api = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_API_URL,
	headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(
	(config) => {
		let token = '';
		userT.subscribe((value) => (token = value));

		if (token) {
			config.headers.Authorization = `${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response && error.response.status === 401) {
			console.warn('Unauthorized! Logging out...');
			userT.set(''); // Clear token on 401
			redirect(307, '/product');
		}
		return Promise.reject(error);
	}
);

export default api;
