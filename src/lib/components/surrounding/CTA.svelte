<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative overflow-hidden bg-(--azure) py-24">
	<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8" use:reveal>
		<div class="mx-auto max-w-3xl text-white">
			<h2 class="heading-serif mb-6 text-3xl font-semibold sm:text-4xl">
				Plan Your Perfect Day Trips
			</h2>
			<p class="mb-10 text-lg text-white/90">
				Let us help you arrange transportation, tours, and tickets for unforgettable excursions
			</p>
			<Button
				size="lg"
				class="group bg-white px-8 py-6 text-base text-(--charcoal) shadow-lg transition-all duration-200 ease-out hover:bg-(--cream) hover:shadow-xl"
			>
				<a href="/contact" class="flex items-center space-x-2">
					<span>Contact us for trip planning</span>
					<ArrowRight class="h-5 w-5" />
				</a>
			</Button>
		</div>
	</div>
</section>

