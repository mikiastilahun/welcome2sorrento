<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { ChefHat } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative overflow-hidden bg-(--azure) py-32">
	<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8" use:reveal>
		<div class="mx-auto max-w-3xl text-white">
			<h2 class="heading-serif mb-6 text-4xl font-bold sm:text-5xl">
				Need Restaurant Recommendations?
			</h2>
			<p class="mb-10 text-xl text-white/90">
				Let us help you book a table at the perfect restaurant for your taste and occasion
			</p>
			<Button
				size="lg"
				class="group bg-white px-10 py-7 text-lg text-(--azure) shadow-lg transition-all duration-200 ease-out hover:bg-(--cream) hover:shadow-xl"
			>
				<a href="/contact" class="flex items-center space-x-2">
					<ChefHat class="h-5 w-5" />
					<span>Contact Us for Reservations</span>
				</a>
			</Button>
		</div>
	</div>
</section>

