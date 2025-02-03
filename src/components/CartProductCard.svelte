<script>
	export let product;
</script>

<div class="flex h-2/3 w-full justify-start gap-2">
	<div class="flex w-1/2 flex-col justify-between gap-2">
		<div
			class="flex h-[12rem] items-center justify-center overflow-hidden rounded-lg bg-secondary/30"
		>
			<figure class="w-full">
				<img
					class="h-full w-full object-cover"
					src={product.productImgUrl}
					alt={product.productName}
				/>
			</figure>
		</div>
		<div class="flex w-2/3 items-center justify-around rounded-full border border-secondary p-2">
			<span class="material-symbols-outlined"> delete </span>
			<span class="text-lg">{product.productCartQuantity}</span>
			<span class="material-symbols-outlined"> add </span>
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
