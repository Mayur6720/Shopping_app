<script>
	export let data;
	export let className;
</script>

<div data-sveltekit-preload-data="false" class={className}>
	<a href="products/{data._id}">
		<div class="flex h-full flex-col justify-between gap-3">
			<div
				class="flex h-[14rem] w-full items-center justify-center overflow-hidden rounded-lg bg-secondary/30"
			>
				<figure class="w-full">
					<img src={data.productImgUrl} alt={data.productName} class="h-full w-full object-cover" />
				</figure>
			</div>
			<div class="bg-white">
				<div class="text-sm text-gray-500">{data.productDescription}</div>
				<div class="text-md font-semibold">{data.productName}</div>
				<h3 class="text-lg font-semibold">Availble Quantity : {data.productAvailableQuan}</h3>
				<p class="text-gray-500">${data.productPrice}</p>
			</div>
		</div>
	</a>
</div>
