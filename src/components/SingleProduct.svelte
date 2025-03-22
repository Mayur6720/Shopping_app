<script>
	import { goto } from '$app/navigation';
	import api from '$lib/Axios.interceptor';
	import { isToastShow, userData } from '$lib/store';

	export let product;

	const addToCart = async (productId) => {
		try {
			const axiosResponse = await api.post(`${import.meta.env.VITE_BACKEND_API_URL}cart`, {
				userId: $userData.uId,
				productId: productId,
				action: 'increase'
			});

			let data = await axiosResponse.data;
			product.isProductInCart = true;
			$isToastShow = {
				isShow: true,
				toastIcon: 'info',
				toastText: data.msg,
				toastType: 'info'
			};
		} catch (error) {
			console.warn('we have error' + error);
		}
	};
</script>

<div class="mx-auto my-5 grid h-[85vh] w-1/2 grid-cols-12 gap-1 shadow-xl">
	<div class="col-span-7 rounded-md">
		<img
			class="h-[85vh] w-full rounded-md bg-top object-cover"
			src={product?.productImgUrl}
			alt={product.productName}
		/>
	</div>
	<div class="col-span-5 mx-auto flex w-11/12 flex-col justify-between gap-3 rounded-md">
		<div>
			<div class="text-xl font-semibold">{product.productName}</div>
			<div>{product.productCategory}</div>
			<div class="my-3 text-lg font-semibold">MRP: ${product.productPrice}</div>
			<div class="text-base text-secondary">
				<div>Inclusive of all taxes</div>
				<div>(Also includes all applicable duties)</div>
			</div>
			<div class="my-1 flex justify-start gap-2">
				<div class="text-base font-semibold text-primary">Availble Quantity:</div>
				<div class="text-base font-bold">{product.productAvailableQuan}</div>
			</div>
		</div>
		<div class="m-2 flex flex-col justify-between gap-2">
			{#if !product.isProductInCart}
				<button
					class="btn btn-primary w-full rounded-full"
					on:click={() => {
						addToCart(product.productId);
					}}>Add To Cart</button
				>
			{:else}
				<button
					class="btn btn-primary w-full rounded-full"
					on:click={() => {
						goto('/cart');
					}}>Go To Cart</button
				>
			{/if}
		</div>
	</div>
</div>
