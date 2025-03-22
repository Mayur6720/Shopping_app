<script>
	import api from '$lib/Axios.interceptor';
	import CartProductCard from '../../components/CartProductCard.svelte';
	import { userData } from '$lib/store';
	export let data;
	let { cart, totalPrice, subTotal, deliveryCharge } = data;

	const updateCart = async () => {
		try {
			const axiosResponse = await api.get(import.meta.env.VITE_BACKEND_API_URL + `cart`, {
				params: { userId: $userData.uId }
			});

			const {
				cart: cartNew,
				totalPrice: totalPriceNew,
				subTotal: subTotalNew,
				deliveryCharge: deliveryChargeNew
			} = await axiosResponse.data;

			cart = { ...cartNew };
			totalPrice = totalPriceNew;
			subTotal = subTotalNew;
			deliveryCharge = deliveryChargeNew;
		} catch (error) {
			console.log('Error::', error);
		}
	};
</script>

<div class="mx-auto mb-5 grid h-screen max-h-[90vh] w-8/12 grid-cols-9 place-content-center gap-8">
	<div class="col-span-6">
		<div class="pb-4 text-2xl font-semibold">Bag</div>
		{#if cart?.cartProducts?.length}
			<div class="flex h-[80vh] flex-col gap-5 overflow-y-auto px-2">
				{#each cart.cartProducts as product, index}
					<CartProductCard {product} {updateCart} />
				{/each}
			</div>
		{:else}
			<div>There are no items in your bag.</div>
		{/if}
	</div>
	<div class="col-span-3 flex h-fit flex-col justify-between gap-4">
		<div class="pb-4 text-2xl font-semibold">Summary</div>
		<div class="flex flex-col justify-between gap-2">
			<div class="flex justify-between">
				<div>Subtotal</div>
				<div>${subTotal ? subTotal : 0}</div>
			</div>
			<div class="flex justify-between">
				<div>Estimated Delivery & Handling</div>
				<div>{deliveryCharge ? `$${deliveryCharge}` : 'free'}</div>
			</div>
			<div class="flex justify-between border-b border-t border-secondary py-2">
				<div>Total</div>
				<div>${totalPrice ? totalPrice : 0}</div>
			</div>
		</div>
		<div class="flex flex-col justify-between gap-2">
			<button class="btn btn-secondary w-full rounded-full bg-secondary">Checkout</button>
			<button class="btn btn-secondary w-full rounded-full bg-secondary">Discard cart</button>
		</div>
	</div>
</div>
