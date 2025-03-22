// import { redirect } from '@sveltejs/kit';
// import { userT, isToastShow } from '$lib/store';

// export async function load() {
// 	let token = '';
// 	// console.log('localstorage', localStorage.getItem('userToken'));
// 	userT.subscribe((value) => {
// 		token = value;
// 	});

// 	if (!token) {
// 		isToastShow.update((currentValue) => {
// 			return {
// 				...currentValue,
// 				isShow: true,
// 				toastText: 'Please sign in to enter',
// 				toastType: 'info',
// 				toastIcon: 'info'
// 			};
// 		});
// 		redirect(307, '/login'); // 307 preserves method (GET/POST)
// 	}

// 	// return {}; // Return empty or fetch user data
// }
