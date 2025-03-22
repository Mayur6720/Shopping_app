<script>
	import { onDestroy, onMount } from 'svelte';
	import { isFooterShow } from '../../lib/store.js';
	import { fade } from 'svelte/transition';
	import axios from 'axios';

	onMount(() => {
		$isFooterShow = false; // Hide footer when login page is mounted
	});

	onDestroy(() => {
		$isFooterShow = true; // Show footer again when leaving login page
	});

	let emailId = '';
	let newPassword = '';
	let confirmPassWord = '';
	let msg = '';
	let regex = /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	let showErr = false;
	let crmShowErr = false;

	const validateEmail = (email) => {
		return regex.test(email);
	};
	const validatePassword = (password) => {
		const passwordRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,10}$/;
		return passwordRegex.test(password);
	};
	const signUpApi = async () => {
		console.log({ email: emailId, password: confirmPassWord });
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_BACKEND_API_URL}user`,
				{
					email: emailId,
					password: confirmPassWord
				},
				{
					headers: { 'Content-Type': 'application/json' }
				}
			);

			const data = await response.data;

			if (data.status === 201) {
				emailId = '';
				newPassword = '';
				confirmPassWord = '';
			} else {
				console.error('Error', data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	$: validateEmail(emailId);
</script>

<!-- <div class="relative"> -->
<!-- </div> -->
{#if msg}
	<div in:fly={{ duration: 2000, x: 1000 }} class="toast toast-end toast-top top-[2rem] z-20">
		<div class=" rounded-lg border bg-red-500 p-3">
			<span class="flex items-center gap-3"
				><span class="material-symbols-outlined animate-pulse"> info </span> {msg}</span
			>
		</div>
	</div>
{/if}

<div class=" my-auto flex h-[82vh] items-center justify-center px-6 lg:px-8">
	<div
		class="animate-border box relative z-10 flex w-[80%] flex-col justify-between gap-2 rounded-lg border-[3px] bg-white p-4 shadow-xl sm:mx-auto sm:w-full sm:max-w-sm"
	>
		<div class="">
			<label
				for="email"
				class="flex items-center justify-between gap-2 text-sm/6 font-medium text-gray-900"
			>
				Email address
				<div class="tooltip tooltip-primary" data-tip="eg. abc@gmail.com">
					<span class="material-symbols-outlined animate-pulse text-base"> info </span>
				</div>
			</label>
			<div class="mt-2">
				<input
					type="email"
					name="email"
					id="email"
					autocomplete="email"
					bind:value={emailId}
					required
					class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
				/>
			</div>
		</div>

		<div>
			<div class="flex items-center justify-between">
				<label for="password" class="block text-sm/6 font-medium text-gray-900">
					New Password
				</label>
			</div>
			<div class="mt-2">
				<input
					on:focus={() => {
						showErr = true;
					}}
					type="password"
					name="newPassword"
					id="newPassword"
					autocomplete="current-password"
					required
					on:click={(showErr = true)}
					bind:value={newPassword}
					class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
				/>
			</div>
			{#if showErr}
				<div class="text-red-400">
					{#if !newPassword}
						<div>* Field should not be empty</div>
					{:else if !validatePassword(newPassword) && newPassword}
						<div>* Not a strong password</div>
					{/if}
				</div>
			{/if}
		</div>
		<div>
			<div class="flex items-center justify-between">
				<label for="password" class="block text-sm/6 font-medium text-gray-900">
					Confirm Password
				</label>
			</div>
			<div class="mt-2" on:click={(crmShowErr = true)}>
				<input
					on:focus={() => {
						crmShowErr = true;
					}}
					type="password"
					name="confirmPassWord"
					id="confirmPassWord"
					autocomplete="current-password"
					required
					bind:value={confirmPassWord}
					class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
				/>
			</div>

			{#if crmShowErr}
				<div class="text-red-400">
					{#if !confirmPassWord}
						<div>* Field should not be empty</div>
					{:else if !newPassword && confirmPassWord}
						<div>* Enter new passWord</div>
					{:else if newPassword && confirmPassWord && newPassword !== confirmPassWord}
						<div>* Enter same passWord</div>
					{:else if newPassword && confirmPassWord && newPassword === confirmPassWord}
						<div class="text-success">Password matched</div>
					{/if}
				</div>
			{/if}
		</div>

		<div>
			<button
				type="submit"
				class="flex w-full justify-center rounded-md {!(
					emailId &&
					validateEmail(emailId) &&
					confirmPassWord &&
					newPassword &&
					confirmPassWord === newPassword
				)
					? 'pointer-events-none bg-secondary'
					: 'bg-indigo-600'} px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				on:click={() => {
					signUpApi();
				}}
			>
				Sign up
			</button>
		</div>

		<p class="mt-5 text-center text-sm/6 text-gray-500">
			Already a member?
			<a href="/login" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign in</a>
		</p>
	</div>
	<div
		class="box1 absolute h-[360px] w-[72%] rounded-lg bg-pink-600 sm:w-[55%] md:w-[43%] lg:w-96"
	></div>
	<div
		class="box2 absolute h-[360px] w-[72%] rounded-lg bg-blue-600 sm:w-[55%] md:w-[43%] lg:w-96"
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
