<script lang="ts">
	import { VintageButton } from '$lib/components/ui/decorative';
	import { ArrowRight, Compass } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative overflow-hidden py-24">
	<!-- Background with Ken Burns effect -->
	<div class="absolute inset-0">
		<div class="animate-ken-burns h-full w-full">
			<img
				src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1920&q=80"
				alt="Sorrento coastline"
				class="h-full w-full object-cover"
			/>
		</div>
		<div class="absolute inset-0 bg-gradient-to-r from-[var(--azure)]/95 to-[var(--deep-azure)]/90"></div>
		<div class="film-grain pointer-events-none absolute inset-0"></div>
	</div>

	<!-- Decorative compass -->
	<div class="pointer-events-none absolute top-1/2 left-8 hidden -translate-y-1/2 opacity-10 lg:block">
		<Compass class="h-40 w-40 text-white animate-compass-point" />
	</div>
	<div class="pointer-events-none absolute top-1/2 right-8 hidden -translate-y-1/2 opacity-10 lg:block">
		<Compass class="h-40 w-40 text-white animate-compass-point" style="animation-delay: -1s;" />
	</div>

	<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8" use:reveal>
		<div class="mx-auto max-w-3xl text-white">
			<!-- Section label -->
			<div class="mb-4 flex items-center justify-center gap-3">
				<div class="h-px w-8 bg-white/50"></div>
				<span class="font-serif text-sm tracking-[0.3em] text-white/80 uppercase">Plan Your Trip</span>
				<div class="h-px w-8 bg-white/50"></div>
			</div>
			
			<h2 class="heading-serif mb-6 text-3xl font-semibold sm:text-4xl lg:text-5xl">
				Plan Your Perfect Day Trips
			</h2>
			<p class="mb-10 text-lg text-white/90 leading-relaxed">
				Let us help you arrange transportation, tours, and tickets for unforgettable excursions around the stunning Bay of Naples
			</p>
			
			<VintageButton href="/contact" variant="coral" size="lg">
				<span>Contact us for trip planning</span>
				<ArrowRight class="h-5 w-5" />
			</VintageButton>
		</div>
	</div>

	<!-- Decorative corners -->
	<div class="pointer-events-none absolute top-8 left-8 h-16 w-16 opacity-20">
		<svg viewBox="0 0 64 64" fill="none" class="h-full w-full text-white">
			<path d="M0 0v24M0 0h24" stroke="currentColor" stroke-width="2" />
		</svg>
	</div>
	<div class="pointer-events-none absolute top-8 right-8 h-16 w-16 opacity-20">
		<svg viewBox="0 0 64 64" fill="none" class="h-full w-full text-white">
			<path d="M64 0v24M64 0h-24" stroke="currentColor" stroke-width="2" />
		</svg>
	</div>
	<div class="pointer-events-none absolute bottom-8 left-8 h-16 w-16 opacity-20">
		<svg viewBox="0 0 64 64" fill="none" class="h-full w-full text-white">
			<path d="M0 64v-24M0 64h24" stroke="currentColor" stroke-width="2" />
		</svg>
	</div>
	<div class="pointer-events-none absolute right-8 bottom-8 h-16 w-16 opacity-20">
		<svg viewBox="0 0 64 64" fill="none" class="h-full w-full text-white">
			<path d="M64 64v-24M64 64h-24" stroke="currentColor" stroke-width="2" />
		</svg>
	</div>
</section>
