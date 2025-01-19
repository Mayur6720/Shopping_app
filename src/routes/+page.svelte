<script lang="ts">
	import { cn } from '$lib/utils';
	import LandingPageProduct from '../section/LandingPageProduct.svelte';
	import OrbitingCircles from '../components/OrbitingCircles.svelte';
	import CommentsMarquee from '../section/CommentsMarquee.svelte';
	let className: any = '';
	export { className as class };
</script>

<!-- <div class="flex"> -->
<!-- <div
		class=" flex min-h-[25rem] items-center justify-start rounded-lg bg-white dark:bg-transparent"
	>
		Helllo this
	</div> -->

<div class=" flex justify-around dark:text-primary">
	<div class="ml-10 mt-[2.5rem] flex !w-3/4 flex-col gap-2">
		<span class="w-1/2 capitalize lg:text-6xl"
			>The trandition of <span class="text-[#5f50d4]">excellence</span> since</span
		>
		<span class="flex w-5/6 text-base"
			>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque et blanditiis earum porro.
			Libero ad, ab amet nulla soluta cum nihil laborum accusamus.</span
		>
	</div>
	<div
		class={cn(
			' relative mr-[5rem] flex h-[400px] w-full max-w-[26rem] items-center justify-center overflow-hidden',
			className
		)}
	>
		<!-- <span
		class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
	>
		
	</span> -->

		<!--  Inner Circles  -->
		<OrbitingCircles class="h-[40px] w-[40px] border-none bg-transparent" duration={20} radius={80}>
			<!-- Open AI -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="40px"
				viewBox="0 -960 960 960"
				width="40px"
				fill="#000"
				><path
					d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
				/></svg
			>
		</OrbitingCircles>
		<OrbitingCircles
			class="h-[40px] w-[40px] border-none bg-transparent"
			duration={20}
			radius={80}
			delay={-10}
		>
			<!-- Supabase -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="40px"
				viewBox="0 -960 960 960"
				width="40px"
				fill="#000"
				><path
					d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z"
				/></svg
			>
		</OrbitingCircles>

		<!-- Outer Circles (reverse)  -->
		<OrbitingCircles
			class="h-[40px] w-[40px] border-none bg-transparent"
			radius={160}
			duration={20}
			reverse
		>
			<!-- Svelte -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="40px"
				viewBox="0 -960 960 960"
				width="40px"
				fill="#000"
				><path
					d="M80-680v-200h200v80H160v120H80Zm0 600v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM700-260h60v60h-60v-60Zm0-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm120-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm240-320v240H520v-240h240ZM440-440v240H200v-240h240Zm0-320v240H200v-240h240Zm-60 500v-120H260v120h120Zm0-320v-120H260v120h120Zm320 0v-120H580v120h120Z"
				/></svg
			>
		</OrbitingCircles>
		<OrbitingCircles
			class="h-[40px] w-[40px] border-none bg-transparent"
			radius={160}
			duration={20}
			delay={-10}
			reverse
		>
			<!-- Github -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="40px"
				viewBox="0 -960 960 960"
				width="40px"
				fill="#000"
				><path
					d="M320-80q-33 0-56.5-23.5T240-160v-40q0-47 20.5-87t53.5-67l-25-166h-89q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h200v-40h160v40h159l-73 486q33 27 53.5 67t20.5 87v40q0 33-23.5 56.5T640-80H320Zm-43-520-24-160h-53v160h77Zm203 400q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200Zm-92-200h184l54-360H334l54 360Zm-68 240h320v-40q0-50-35-85t-85-35h-80q-50 0-85 35t-35 85v40Zm160-80Z"
				/></svg
			>
		</OrbitingCircles>
	</div>
</div>

<LandingPageProduct />

<CommentsMarquee />
