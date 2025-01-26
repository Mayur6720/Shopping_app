<script>
	export let data;
	export let className;
	// productName: { type: String, require: true, unique: true },
	//   productCategory: { type: String, require: true },
	//   productDescription: { type: String, require: true },
	//   productImgUrl: { type: String, require: true },
	//   productAvailableQuan: { type: Number, require: true },
	//   productPrice: { type: Number, require: true },
</script>

<div class={className}>
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
			<h3 class="text-lg font-semibold">Availble Quan : {data.productAvailableQuan}</h3>
			<p class="text-gray-500">${data.productPrice}</p>
		</div>
	</div>
</div>

<!-- <div class="mb-4 break-inside-avoid rounded-lg bg-accent/10 p-4 shadow-lg">
	<figure class="w-full">
		<img
			src={data.productImgUrl}
			alt={data.productName}
			class="h-auto w-full rounded-lg object-cover"
		/>
	</figure>
	<div class="mt-2">
		<div class="text-sm text-gray-500">{data.productDescription}</div>
		<div class="text-lg text-primary">{data.productName}</div>
		<h3 class="text-lg font-semibold">Availble Quan : {data.productAvailableQuan}</h3>
		<p class="text-gray-500">${data.productPrice}</p>
	</div>
</div> -->
