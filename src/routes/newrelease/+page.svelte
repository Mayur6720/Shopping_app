<script>
	import NewRealaseProductCard from '../../components/NewRealaseProductCard.svelte';
</script>

<div class="mx-auto w-11/12">
	<div class="grid grid-cols-12 gap-6">
		{#each Array(30) as _, i}
			<div class="col-span-3 mx-auto w-11/12 rounded-md border">
				<NewRealaseProductCard />
			</div>
		{/each}
	</div>
</div>
