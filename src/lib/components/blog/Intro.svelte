<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { FloatingElements } from '$lib/components/ui/decorative';
	import { reveal } from '$lib/actions/reveal';
	import type { BlogPage } from '$lib/sanity/queries';

	interface Props {
		pageData?: BlogPage | null;
	}

	let { pageData = null }: Props = $props();

	// Get content from CMS
	const label = pageData?.header?.label || 'Il Nostro Blog';
	const heading = pageData?.header?.heading || 'Sorrento Travel Blog';
	const subheading =
		pageData?.header?.subheading ||
		'Insider tips, local stories, and travel guides from the heart of the Amalfi Coast';
	const heroImage = pageData?.header?.heroImage?.asset?.url || '';
	const introText =
		pageData?.introText ||
		'Step into the daily rhythms of coastal life with visits to traditional boat workshops, secluded coves, and lemon groves. Enjoy immersive hikes, boating excursions, and local flavors that craft a Sorrento experience full of authentic charm and natural beauty. Find stories, tips, and inspiration for every traveler seeking their own unforgettable Sorrento adventure.';
</script>

<section class="relative flex min-h-[55vh] flex-col overflow-hidden pt-24">
	<!-- Ken Burns animated background -->
	<div class="absolute inset-0 z-0">
		<div class="animate-ken-burns h-full w-full">
			{#if heroImage}
				<img src={heroImage} alt="Sorrento blog" class="h-full w-full object-cover" />
			{/if}
		</div>
		<!-- Gradient overlays -->
		<div
			class="from-[var(--charcoal)]/40 via-[var(--charcoal)]/50 to-[var(--charcoal)]/70 absolute inset-0 bg-gradient-to-b"
		></div>
		<div class="from-[var(--deep-azure)]/20 absolute inset-0 bg-gradient-to-r to-transparent"></div>
		<!-- Film grain -->
		<div class="film-grain pointer-events-none absolute inset-0"></div>
	</div>

	<!-- Floating decorative elements -->
	<FloatingElements variant="mixed" density="sparse" opacity={0.15} class="z-5" />

	<div class="relative z-10 w-full">
		<Breadcrumb />
	</div>

	<div class="relative z-10 flex grow items-center justify-center">
		<div class="container mx-auto px-4 py-16 text-center text-white sm:px-6 lg:px-8">
			<!-- Postcard-style frame -->
			<div
				class="stagger-reveal mx-auto max-w-4xl rounded-xl border border-white/10 bg-black/20 p-8 backdrop-blur-sm md:p-12"
				style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.3), inset 0 0 80px rgba(255,255,255,0.02);"
			>
				<!-- Decorative corners -->
				<div class="pointer-events-none absolute left-4 top-4 h-6 w-6 opacity-40">
					<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--coral)]">
						<path d="M2 2v8M2 2h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
					</svg>
				</div>
				<div class="pointer-events-none absolute right-4 top-4 h-6 w-6 opacity-40">
					<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--coral)]">
						<path
							d="M22 2v8M22 2h-8"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>
				<div class="pointer-events-none absolute bottom-4 left-4 h-6 w-6 opacity-40">
					<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--coral)]">
						<path
							d="M2 22v-8M2 22h8"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>
				<div class="pointer-events-none absolute bottom-4 right-4 h-6 w-6 opacity-40">
					<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--coral)]">
						<path
							d="M22 22v-8M22 22h-8"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>

				<!-- Label -->
				<div class="mb-4 flex items-center justify-center gap-4">
					<div class="h-px w-12 bg-gradient-to-r from-transparent to-[var(--coral)]"></div>
					<span class="font-serif text-sm uppercase tracking-[0.3em] text-[var(--coral)]"
						>{label}</span
					>
					<div class="h-px w-12 bg-gradient-to-l from-transparent to-[var(--coral)]"></div>
				</div>

				<h1 class="heading-serif mb-4 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
					{heading}
				</h1>
				<p class="mx-auto max-w-3xl text-lg font-light leading-relaxed text-white/90 sm:text-xl">
					{subheading}
				</p>
			</div>
		</div>
	</div>

	<!-- Wave decoration at bottom -->
	<div class="absolute bottom-0 left-0 right-0 z-10">
		<svg
			class="h-16 w-full"
			viewBox="0 0 1200 60"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0,60 C200,20 400,50 600,30 C800,10 1000,40 1200,20 L1200,60 L0,60 Z"
				fill="var(--warm-white)"
			></path>
		</svg>
	</div>
</section>

<section class="texture-grain relative bg-[var(--warm-white)] py-16">
	<!-- Decorative tile border at top -->
	<div class="absolute left-0 right-0 top-0">
		<div class="mx-auto max-w-4xl px-4">
			<div class="border-tile-decorative"></div>
		</div>
	</div>

	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-4xl text-center" use:reveal>
			<p class="text-xl leading-relaxed text-[var(--stone)]">
				{introText}
			</p>

			<!-- Decorative divider -->
			<div class="mt-8 flex items-center justify-center gap-4">
				<div class="h-px w-16 bg-gradient-to-r from-transparent to-[var(--terracotta)]"></div>
				<div class="h-2 w-2 rotate-45 bg-[var(--terracotta)]"></div>
				<div class="h-px w-16 bg-gradient-to-l from-transparent to-[var(--terracotta)]"></div>
			</div>
		</div>
	</div>
</section>
