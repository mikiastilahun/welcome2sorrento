<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative flex min-h-[60vh] flex-col overflow-hidden pt-24">
	<div class="absolute inset-0 z-0">
		<img
			src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1920&q=80"
			alt="Sorrento blog"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-(--charcoal)/50"></div>
	</div>

	<div class="relative z-10">
		<Breadcrumb />
	</div>

	<div class="relative z-10 flex grow items-center justify-center">
		<div class="container mx-auto px-4 py-24 text-center text-white sm:px-6 lg:px-8">
			<div class="animate-fade-in-up">
				<h1 class="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">Sorrento Travel Blog</h1>
				<p class="heading-serif mx-auto max-w-3xl text-xl font-light text-white/90 sm:text-2xl">
					Insider tips, local stories, and travel guides from the heart of the Amalfi Coast
				</p>
			</div>
		</div>
	</div>
</section>

<section class="relative bg-(--warm-white) py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-4xl text-center" use:reveal>
			<p class="text-xl leading-relaxed text-gray-600">
				Step into the daily rhythms of coastal life with visits to traditional boat workshops,
				secluded coves, and lemon groves. Enjoy immersive hikes, boating excursions, and local
				flavors that craft a Sorrento experience full of authentic charm and natural beauty. Find
				stories, tips, and inspiration for every traveler seeking their own unforgettable Sorrento
				adventure.
			</p>
		</div>
	</div>
</section>

