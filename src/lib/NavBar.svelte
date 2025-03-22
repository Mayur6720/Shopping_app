<script>
	import { LayoutGroupContext } from 'svelte-motion';
	import { isToastShow, userData, userT } from './store';
	import { goto } from '$app/navigation';
	import Toast from '../components/Toast.svelte';
	import { redirect } from '@sveltejs/kit';

	let isShowMobileMenu = false;

	const navigation = [
		{ path: '/about', name: 'About' },
		{ path: '/newrelease', name: 'New Release' },
		{ path: '/products', name: 'Products' }
	];

	const logOut = () => {
		// remove the credential and rediresct to the /login page
		$userData = {
			email: '',
			uId: ''
		};
		$userT = '';
		goto('/login');
	};

	let screenWidth;

	$: if (screenWidth > 1024) {
		isShowMobileMenu = false;
	}
</script>

<svelte:window bind:innerWidth={screenWidth} />

<nav data-sveltekit-preload-data="false" class="navbar mx-auto justify-between">
	<div
		class="text-lg font-bold text-blue-800"
		on:click={() => {
			goto('/');
		}}
	>
		Shopplers
	</div>

	<!-- lg screen design -->
	<div
		class="mr-3 hidden w-1/4 items-center justify-between gap-3 text-lg font-medium capitalize lg:flex"
	>
		<span><a href="/newrelease">New Release</a></span>
		<span><a href="/products">Products</a></span>
		<span><a href="/about">about</a></span>
	</div>
	<div class="hidden lg:block">
		{#if $userData.email}
			<div class="flex items-center justify-center gap-2">
				<abbr title="log out" class="no-underline">
					<button class="flex items-center justify-center rounded-full border bg-base-200 p-3"
						><a href="/cart">
							<span class="material-symbols-outlined flex text-lg !leading-none">
								shopping_bag
							</span>
						</a></button
					>
				</abbr>
				<abbr title="log out" class="no-underline">
					<button
						class="flex items-center justify-center rounded-full border bg-base-200 p-3"
						on:click={() => {
							$userData = {
								userId: '',
								email: ''
							};
							$userT = '';
							$isToastShow = {
								isShow: true,
								toastIcon: 'info',
								toastText: 'Log out successfully',
								toastType: 'info'
							};
						}}
						><a href="/login">
							<span class="material-symbols-outlined flex text-lg !leading-none"> logout </span>
						</a></button
					>
				</abbr>
			</div>
		{:else}
			<div class="flex items-center justify-center gap-2">
				<abbr title="log in" class="no-underline">
					<button class="flex items-center justify-center rounded-full border bg-base-200 p-3"
						><a href="/login">
							<span class="material-symbols-outlined flex text-lg !leading-none"> login </span>
						</a></button
					>
				</abbr>
				<!-- <button class="btn !py-2"><a href="/registration">Registration</a></button> -->
			</div>
		{/if}
	</div>

	<!-- menu icon except the lg screen   -->
	<div class="inline-block lg:hidden">
		<span
			class="material-symbols-outlined"
			on:click={() => {
				isShowMobileMenu = true;
			}}
		>
			menu
		</span>
	</div>

	{#if isShowMobileMenu}
		<div class="modal modal-open !bg-gray-500/20 backdrop-blur-sm lg:hidden">
			<div class="fixed right-[1.25rem] top-3 flex items-center justify-center">
				<div class="flex flex-col items-center justify-between gap-2">
					<span
						><div class="flex items-center justify-center gap-2">
							<abbr title="log out" class="no-underline">
								<button
									class="flex items-center justify-center rounded-full border bg-base-100 p-3"
									on:click={() => {
										isShowMobileMenu = false;
									}}
								>
									<span class="material-symbols-outlined flex text-lg !leading-none">
										close
									</span></button
								>
							</abbr>
						</div></span
					>
					<span>
						{#if $userData.email}
							<div class="flex items-center justify-center gap-2">
								<abbr title="log out" class="no-underline">
									<button
										class="flex items-center justify-center rounded-full border bg-base-100 p-3"
										on:click={() => {
											$userData = {
												userId: '',
												email: ''
											};
											$userT = '';
											$isToastShow = {
												isShow: true,
												toastIcon: 'info',
												toastText: 'Log out successfully',
												toastType: 'info'
											};
										}}
										><a href="/login">
											<span class="material-symbols-outlined flex text-lg !leading-none">
												logout
											</span>
										</a></button
									>
								</abbr>
							</div>
						{:else}
							<div class="flex items-center justify-center gap-2">
								<abbr title="log in" class="no-underline">
									<button
										class="flex items-center justify-center rounded-full border bg-base-100 p-3"
										><a href="/login">
											<span class="material-symbols-outlined flex text-lg !leading-none">
												login
											</span>
										</a></button
									>
								</abbr>
							</div>
						{/if}
					</span>
				</div>
			</div>
			<div class="flex flex-col justify-between gap-8">
				{#each navigation as menu}
					<div class="text-lg font-semibold">
						<a
							href={menu.path}
							on:click={() => {
								isShowMobileMenu = false;
							}}>{menu.name}</a
						>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</nav>

{#if $isToastShow.isShow}
	<Toast />
{/if}
