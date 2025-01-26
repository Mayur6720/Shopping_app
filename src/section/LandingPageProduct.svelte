<script>
	import NewRealaseProductCard from '../components/NewRealaseProductCard.svelte';
</script>

<!-- {
  "id": 18,
  "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
  "price": 9.85,
  "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
  "category": "women's clothing",
  "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  "rating": {
    "rate": 4.7,
    "count": 130
  }
}, -->

<div class="divider divider-primary my-[5rem]">New Release</div>

<div class="mx-auto flex w-11/12 justify-around gap-2">
	{#each { length: 4 } as _, i}
		<!-- <div class="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
					alt="Shoes"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">
					Shoes!
					<div class="badge badge-secondary bg-pink-500 text-accent">NEW</div>
				</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-start">
					<div class="badge badge-outline">Fashion</div>
					<div class="badge badge-outline">Products</div>
				</div>
				<div class="mt-2 w-full">
					<button class="btn btn-primary w-full rounded-full text-accent">Buy Now</button>
				</div>
			</div>
		</div> -->
		<div class="flex w-1/5 flex-col">
			<NewRealaseProductCard />
		</div>
	{/each}
</div>

<style>
</style>
