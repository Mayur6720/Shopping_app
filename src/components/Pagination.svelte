<script>
	export let pageLength = 10;
	export let currentPage = 1;
</script>

<div class="mx-auto my-5 flex w-fit items-center gap-1">
	<div class="">
		<span
			class="material-symbols-outlined flex"
			tabindex="0"
			role="button"
			on:keypress
			on:click={() => {
				if (currentPage > 1) {
					currentPage--;
				}
			}}
		>
			arrow_back_ios_new
		</span>
	</div>
	{#each Array.from({ length: pageLength }) as page, index}
		<div
			tabindex="0"
			role="button"
			on:keypress
			class="rounded-md border border-secondary px-4 py-2 {currentPage === index + 1
				? 'bg-black text-secondary'
				: ''}"
			on:click={() => {
				currentPage = index + 1;
			}}
		>
			{index + 1}
		</div>
	{/each}
	<div>
		<span
			class="material-symbols-outlined flex"
			tabindex="0"
			role="button"
			on:keypress
			on:click={() => {
				if (currentPage < pageLength) {
					currentPage++;
				}
			}}
		>
			arrow_forward_ios
		</span>
	</div>
</div>
