<script>
	import { isToastShow } from '$lib/store';
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	const toastTimer = setTimeout(() => {
		$isToastShow = {
			isShow: false,
			toastIcon: '',
			toastType: '',
			toastText: ''
		};
	}, 2000);

	onDestroy(() => {
		clearTimeout(() => {
			toastTimer;
		});
		console.log('HERE destroy');
	});
</script>

{#if $isToastShow.isShow}
	<div
		class="absolute right-2 top-2 flex h-[4rem] min-w-[20rem] items-center rounded-md border border-secondary bg-blue-100 shadow-lg"
		class:border-blue-800={$isToastShow.toastType === 'info'}
		class:border-yellow-800={$isToastShow.toastType === 'warning'}
		class:border-green-800={$isToastShow.toastType === 'success'}
		class:border-red-800={$isToastShow.toastType === 'error'}
		class:bg-blue-100={$isToastShow.toastType === 'info'}
		class:bg-yellow-100={$isToastShow.toastType === 'warning'}
		class:bg-green-100={$isToastShow.toastType === 'success'}
		class:bg-red-100={$isToastShow.toastType === 'error'}
		class:transitionIn={$isToastShow.isShow}
	>
		<div class="flex w-full !items-center justify-between px-3">
			<div class="flex !items-center gap-2">
				<span
					class="material-symbols-outlined fle pt-[1px] font-medium !leading-none"
					class:text-blue-800={$isToastShow.toastType === 'info'}
					class:text-yellow-800={$isToastShow.toastType === 'warning'}
					class:text-green-800={$isToastShow.toastType === 'success'}
					class:text-red-800={$isToastShow.toastType === 'error'}
				>
					{$isToastShow.toastIcon}
				</span>
				<span
					class=""
					class:text-blue-800={$isToastShow.toastType === 'info'}
					class:text-yellow-800={$isToastShow.toastType === 'warning'}
					class:text-green-800={$isToastShow.toastType === 'success'}
					class:text-red-800={$isToastShow.toastType === 'error'}
					><span class="font-semibold capitalize">{$isToastShow.toastType}</span>:
					<span>{$isToastShow.toastText}</span></span
				>
			</div>
			<span
				class="material-symbols-outlined flex text-secondary"
				on:keypress
				tabindex="0"
				role="button"
				on:click={() => {
					// closeToast
					$isToastShow = {
						isShow: false,
						toastIcon: '',
						toastType: '',
						toastText: ''
					};
				}}
			>
				close
			</span>
		</div>
	</div>
{/if}

<style>
</style>
