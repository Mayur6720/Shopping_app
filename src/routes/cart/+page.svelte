<script>
	import CartProductCard from '../../components/CartProductCard.svelte';

	export let data;
</script>

<div class="mx-auto grid h-[51vh] w-11/12 grid-cols-9 place-content-center gap-2">
	<div class="col-span-6">
		<div class="py-2 text-xl font-semibold">Bag</div>
		{#if data.products.length}
			<div class="flex h-[45vh] flex-col justify-between gap-2 overflow-y-auto px-2">
				{#each data.products as product, index}
					<CartProductCard {product} />
				{/each}
			</div>
		{:else}
			<div>There are no items in your bag.</div>
		{/if}
	</div>
	<div class="col-span-3 flex flex-col justify-between gap-3">
		<div class="py-2 text-xl font-semibold">Summary</div>
		<div class="flex justify-between">
			<div>Subtotal</div>
			<div>${data.subTotal}</div>
		</div>
		<div class="flex justify-between">
			<div>Estimated Delivery & Handling</div>
			<div>{data.deliveryCharge ? `$${data.deliveryCharge}` : 'free'}</div>
		</div>
		<div class="flex justify-between border-b border-t border-secondary py-2">
			<div>Total</div>
			<div>${data.totalPrice}</div>
		</div>
		<button class="btn btn-secondary w-full rounded-full bg-secondary">Checkout</button>
		<button class="btn btn-secondary w-full rounded-full bg-secondary">Discard cart</button>
	</div>
</div>
