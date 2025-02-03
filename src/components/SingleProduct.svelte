<script>
	export let product;
</script>

<div class="mx-auto my-5 grid w-1/2 grid-cols-9 gap-2 shadow-xl">
	<div class="col-span-5">
		<img
			class="h-[45vh] w-full object-cover"
			src={product.productImgUrl}
			alt={product.productName}
		/>
	</div>
	<div class="col-span-4 flex flex-col justify-between gap-3">
		<div>
			<div class="text-xl font-semibold">{product.productName}</div>
			<div>{product.productCategory}</div>
			<div class="my-3 text-lg font-semibold">MRP: ${product.productPrice}</div>
			<div class="text-base text-secondary">
				<div>Inclusive of all taxes</div>
				<div>(Also includes all applicable duties)</div>
			</div>
		</div>
		<div class="flex flex-col justify-between gap-2">
			<div class="flex justify-start gap-2">
				<div class="text-base font-semibold text-primary">Availble Quantity:</div>
				<div class="text-base font-bold">{product.productAvailableQuan}</div>
			</div>
			<button class="btn btn-primary w-full rounded-full">Add To Cart</button>
		</div>
	</div>
</div>
