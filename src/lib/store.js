import { writable } from '@macfja/svelte-persistent-store';
import { writable as Swritable } from 'svelte/store';

export const isFooterShow = Swritable(true);

//toast global
export const isToastShow = Swritable({
	isShow: false,
	toastText: '',
	toastIcon: '',
	toastType: ''
});

export const userT = writable('userT', '');

// User Details
export const userData = writable('userData', {
	uId: '',
	email: ''
});
