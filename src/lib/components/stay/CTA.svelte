<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative py-20">
	<div class="absolute inset-0">
		<img
			src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
			alt="Luxury accommodation"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-black/50"></div>
	</div>

	<div
		class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8"
		use:reveal
	>
		<div class="mx-auto max-w-2xl text-white">
			<h2 class="heading-serif mb-4 text-3xl font-semibold sm:text-4xl">
				Need Help Finding Accommodation?
			</h2>
			<p class="mb-8 text-lg text-white/90">
				We can help you find and reserve the perfect place for your stay
			</p>
			<a
				href="/contact"
				class="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[var(--charcoal)] transition-all hover:bg-white/90"
			>
				<span>Contact Us</span>
				<ArrowRight class="h-5 w-5" />
			</a>
		</div>
	</div>
</section>
