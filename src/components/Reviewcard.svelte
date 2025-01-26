<script>
	import { cn } from '$lib/utils';

	export let img;
	export let name;
	export let username;
	export let body;
</script>

<figure
	class={cn(
		'relative w-64 cursor-pointer overflow-hidden rounded-2xl border p-4',
		// light styles
		'border !border-red-950/20 !bg-primary/20 hover:bg-gray-950/[.05]',
		// dark styles
		'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
	)}
>
	<div class="flex flex-row items-center gap-2">
		<img class="rounded-full" width="32" height="32" alt="" src={img} />
		<div class="flex flex-col">
			<!-- svelte-ignore a11y-structure -->
			<figcaption class="text-sm font-medium dark:text-white">
				{name}
			</figcaption>
			<p class="text-xs font-medium dark:text-accent/40">{username}</p>
		</div>
	</div>
	<blockquote class="mt-2 text-sm text-primary">{body}</blockquote>
</figure>
