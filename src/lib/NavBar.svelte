<div
	data-sveltekit-preload-data="false"
	class="glass navbar sticky top-0 z-10 flex h-[8vh] justify-between"
>
	<div class="">
		<a class="cursor-pointer text-xl font-semibold text-[#5f50d4]" href="/">Shopplers</a>
	</div>
	<div
		class="mr-2 flex justify-center gap-3 rounded-full border-2 border-gray-500 px-5 text-lg font-semibold"
	>
		<a class="cursor-pointer border-2 border-transparent px-2 py-1" href="/newrelease"
			>New Release</a
		>
		<a class="cursor-pointer border-2 border-transparent px-2 py-1" href="/products">Products</a>
		<a class="cursor-pointer border-2 border-transparent px-2 py-1" href="/about">About</a>
	</div>
	<div class="">
		<div class="dropdown dropdown-end mx-2">
			<a href="/cart">
				<div
					on:keypress
					tabindex="0"
					role="button"
					class="btn btn-circle btn-ghost"
					on:click={() => {}}
				>
					<div class="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
						<span class="badge indicator-item badge-sm">8</span>
					</div>
				</div>
			</a>
		</div>
		<button class="btn">Login</button>
	</div>
</div>
