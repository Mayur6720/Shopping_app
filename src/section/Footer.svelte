<script>
	import { onMount } from 'svelte';
	import { isFooterShow } from '../lib/store.js';

	let footerItems = [
		{ title: 'Resources', subMenu: ['Find A Store', 'Become A Member', 'Send Us Feedback'] },
		{
			title: 'Help',
			subMenu: [
				'Get Help',
				'Order Status',
				'Delivery',
				'Returns',
				'Payment Options',
				'Contact Us On All Other Inquiries'
			]
		},
		{
			title: 'Company',
			subMenu: ['About Nike', 'News', 'Careers', 'Investors', 'Sustainability', 'Report a Concern']
		}
	];

	let showFooter = false;

	onMount(() => {
		showFooter = $isFooterShow; // Only update after the component is mounted
	});
</script>

{#if showFooter}
	<div
		class=" h-fit flex-col justify-end rounded-t-lg bg-gradient-to-r from-[#ef745c] to-[#34073d] pt-5 text-white"
	>
		<div class="mx-2 flex flex-col justify-center text-center md:text-start lg:text-start">
			<div class="gap grid grid-cols-12 gap-4">
				{#each footerItems as menu, menuIdx}
					<div class="col-span-12 flex flex-col justify-start gap-5 md:col-span-4 lg:col-span-3">
						<div
							class="mx-auto w-full rounded-lg bg-white/30 text-lg font-semibold sm:w-1/3 md:w-full md:bg-transparent lg:w-full lg:bg-transparent"
						>
							{menu.title}
						</div>
						<div class="flex flex-col justify-between gap-2">
							{#each menu.subMenu as subMenu, subMenuIdx}
								<div class="text-sm font-medium">{subMenu}</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-4 flex w-full justify-between">
			<div class="flex justify-between gap-1">
				<span class=""
					><svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="24 "
						height="24"
						viewBox="0 0 24 24"
						fill="#fff"
					>
						<path
							d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
						></path>
					</svg></span
				>
				<span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="#fff"
					>
						<path
							d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h7.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H19c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z"
						></path>
					</svg></span
				>
				<span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="24"
						height="24"
						viewBox="0 0 32 32"
						fill="#fff"
					>
						<path
							fill-rule="evenodd"
							d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
						></path>
					</svg></span
				>
			</div>
			<div class="pr-1">© 2025, Inc. All rights reserved</div>
		</div>
	</div>
{/if}
