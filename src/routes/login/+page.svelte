<script>
	import { onDestroy, onMount } from 'svelte';
	import { isFooterShow, isToastShow, userData, userT } from '../../lib/store.js';
	import axios from 'axios';
	import { goto } from '$app/navigation';

	onMount(() => {
		$isFooterShow = false; // Hide footer when login page is mounted
	});

	onDestroy(() => {
		$isFooterShow = true; // Show footer again when leaving login page
	});

	let email = '';
	let password = '';
	let regex = /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const validateEmail = (email) => {
		return regex.test(email);
	};

	const userLogin = async () => {
		const response = await axios.post(
			`${import.meta.env.VITE_BACKEND_API_URL}user/login`,
			{
				email: email,
				password: password
			},
			{
				headers: { 'Content-Type': 'application/json' }
			}
		);

		const loginData = await response.data;
		// console.log('userData', userData);
		if (loginData.status === 200) {
			email = '';
			password = '';
			$userT = loginData.token;
			$userData = {
				uId: loginData.userData.uId,
				email: loginData.userData.email
			};
			goto('/');
			$isToastShow = {
				isShow: true,
				toastIcon: 'info',
				toastType: 'info',
				toastText: `${loginData.msg}`
			};
		} else {
			$isToastShow = {
				isShow: true,
				toastIcon: 'warning',
				toastType: 'warning',
				toastText: `${loginData.msg}`
			};
		}

		console.log('user data', loginData);
	};

	$: validateEmail(email);
</script>

<div class="mx-auto my-auto flex h-[82vh] items-center justify-center px-6 md:w-8/12 lg:px-8">
	<div
		class="animate-border box relative z-10 mx-auto flex w-4/6 flex-col justify-between gap-2 rounded-lg border-[3px] bg-white p-4 shadow-xl sm:w-[50%] md:w-[66%] lg:w-96"
	>
		<div>
			<label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
			<div class="mt-2">
				<input
					type="email"
					name="email"
					id="email"
					autocomplete="email"
					required
					bind:value={email}
					class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
				/>
			</div>
		</div>

		<div>
			<div class="flex items-center justify-between">
				<label for="password" class="block text-sm/6 font-medium text-gray-900"
					>Confirm Password</label
				>
			</div>
			<div class="mb-2 pb-2">
				<input
					type="password"
					name="password"
					id="password"
					bind:value={password}
					autocomplete="current-password"
					required
					class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
				/>
			</div>
		</div>

		<div>
			<button
				type="submit"
				class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 {!email ||
				!password ||
				!validateEmail(email)
					? 'pointer-events-none bg-secondary'
					: 'bg-indigo-600'}"
				on:click={() => {
					userLogin();
				}}>Sign in</button
			>
		</div>

		<p class="mt-5 text-center text-sm/6 text-gray-500">
			Not a member?
			<a href="/registration" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign Up</a
			>
		</p>
	</div>
	<div
		class="box1 absolute h-[300px] w-[60%] rounded-lg bg-pink-600 sm:w-[50%] md:w-[41%] lg:w-96"
	></div>
	<div
		class="box2 absolute h-[300px] w-[60%] rounded-lg bg-blue-600 sm:w-[50%] md:w-[41%] lg:w-96"
	></div>
</div>

<style>
	.box1 {
		border-radius: 10px;
		transform: rotate(353deg);
		transition: 0.5s all;
	}
	.box2 {
		border-radius: 10px;
		transform: rotate(185deg);
		transition: 0.5s all;
	}
	.box:hover + .box1 {
		transform: rotate(365.25deg);
	}
	.box:hover ~ .box2 {
		transform: rotate(172.25deg);
	}
</style>
