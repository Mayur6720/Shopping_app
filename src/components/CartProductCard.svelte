<script>
	import api from '$lib/Axios.interceptor';
	import { userData } from '$lib/store';
	export let product;
	export let updateCart = () => {};
	const updateProductQuantity = async (productId, action) => {
		try {
			const axiosResponse = await api.post(import.meta.env.VITE_BACKEND_API_URL + `cart`, {
				userId: $userData.uId ?? '',
				productId,
				action
			});

			let data = await axiosResponse.data;
			updateCart();
			console.log('data', data);
		} catch (error) {
			console.log('Error:::', error);
		}
	};
</script>

<div class="flex h-fit w-full justify-start gap-2">
	<div class="flex w-1/2 flex-col justify-between gap-2">
		<div class="flex h-fit items-center justify-center overflow-hidden rounded-lg bg-secondary/30">
			<figure class="w-full">
				<img
					class="h-1/4 w-full object-cover"
					src={product.productImgUrl}
					alt={product.productName}
				/>
			</figure>
		</div>
		<div class="flex w-3/4 items-center justify-around rounded-full border border-secondary p-2">
			{#if product.productCartQuantity === 1}
				<span
					class="material-symbols-outlined"
					on:keypress
					role="button"
					tabindex="0"
					on:click={() => {
						updateProductQuantity(product.productId, 'decrease');
					}}
				>
					delete
				</span>
			{:else}
				<span
					class="material-symbols-outlined"
					on:keypress
					role="button"
					tabindex="0"
					on:click={() => {
						updateProductQuantity(product.productId, 'decrease');
					}}
				>
					remove
				</span>
			{/if}
			<span class="text-lg">{product.productCartQuantity}</span>
			<span
				class="material-symbols-outlined"
				on:keypress
				role="button"
				tabindex="0"
				on:click={() => {
					updateProductQuantity(product.productId, 'increase');
				}}
			>
				add
			</span>
		</div>
	</div>
	<div class="flex w-full flex-col justify-start gap-1">
		<div class="flex w-full justify-between text-base font-semibold">
			<div>{product.productName}</div>
			<div>MRP: ${product.productPrice}</div>
		</div>
		<div>{product.productCategory}</div>
		<div>{product.productDescription}</div>
	</div>
</div>
