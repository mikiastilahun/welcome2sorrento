<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative py-24">
	<!-- Background image -->
	<div class="absolute inset-0">
		<img
			src="https://welcome2sorrento.com/wp-content/uploads/2024/12/Meta-ricky-johnson-scaled.jpg"
			alt="Sorrento"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-black/50"></div>
	</div>

	<div class="relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-2xl" use:reveal>
			<h2 class="heading-serif mb-6 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
				Ready for Your Adventure?
			</h2>

			<p class="mb-8 text-lg text-white/90">
				Let us help you plan the perfect trip to Sorrento and the Amalfi Coast.
			</p>

			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[var(--charcoal)] shadow-lg transition-all hover:bg-white/90"
				>
					<span>Get in Touch</span>
					<ArrowRight class="h-5 w-5" />
				</a>

				<a
					href="/about"
					class="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 font-medium text-white transition-all hover:bg-white/10"
				>
					<span>Learn More</span>
				</a>
			</div>
		</div>
	</div>
</section>
