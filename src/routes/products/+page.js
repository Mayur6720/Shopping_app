export async function load() {
	const api = import.meta.env.VITE_BACKEND_API_URL;
	const data = await fetch(`${api}`);
	const dataJson = await data.json();
	return await dataJson;
}
