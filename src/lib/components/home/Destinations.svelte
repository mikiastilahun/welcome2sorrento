<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import { VintageButton } from '$lib/components/ui/decorative';
	import { ArrowRight, MapPin } from '@lucide/svelte';
	import type { Destination } from '$lib/sanity/queries';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		featuredDestinations: Destination[];
	}

	let { featuredDestinations }: Props = $props();
</script>

<section class="relative overflow-hidden bg-[var(--cream)] py-24">
	<!-- Decorative wave at top -->
	<div class="absolute top-0 right-0 left-0">
		<svg
			class="h-16 w-full"
			viewBox="0 0 1200 60"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0,60 C200,20 400,50 600,30 C800,10 1000,40 1200,20 L1200,0 L0,0 Z" fill="white"
			></path>
		</svg>
	</div>

	<!-- Decorative background elements -->
	<div class="pointer-events-none absolute inset-0">
		<!-- Map pin pattern -->
		<div class="absolute top-20 left-10 opacity-5">
			<MapPin class="h-32 w-32 text-[var(--terracotta)]" />
		</div>
		<div class="absolute right-20 bottom-40 opacity-5">
			<MapPin class="h-24 w-24 text-[var(--azure)]" />
		</div>
		<!-- Dotted path connecting destinations -->
		<svg class="absolute inset-0 h-full w-full opacity-[0.03]">
			<path
				d="M100,200 Q300,100 500,200 T900,200 Q1100,100 1200,200"
				stroke="var(--charcoal)"
				stroke-width="3"
				stroke-dasharray="10,10"
				fill="none"
			/>
		</svg>
	</div>

	<div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mb-16 text-center" use:reveal>
			<!-- Section label -->
			<div class="mb-4 flex items-center justify-center gap-3">
				<div class="h-px w-8 bg-[var(--olive)]"></div>
				<span class="font-serif text-sm tracking-[0.2em] text-[var(--olive)] uppercase"
					>Day Trips</span
				>
				<div class="h-px w-8 bg-[var(--olive)]"></div>
			</div>

			<h2
				class="heading-serif mb-4 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl lg:text-6xl"
			>
				Explore Nearby <span class="text-[var(--azure)]">Wonders</span>
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-[var(--stone)]">
				Venture beyond to discover world-renowned destinations just a short journey away
			</p>
		</div>

		<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each featuredDestinations as destination, index}
				<div class="scroll-reveal" style="transition-delay: {index * 100}ms" use:reveal>
					<a href="/surrounding/{destination.slug.current}" class="group block">
						<Card
							class="luggage-tag-card hover:shadow-mediterranean-lg relative h-full overflow-hidden border-[var(--sand)] py-0 transition-all duration-300 ease-out hover:-translate-y-2"
						>
							<!-- Luggage Tag Decoration -->
							<div class="absolute top-3 right-3 z-20">
								<div
									class="relative flex h-8 w-8 items-center justify-center rounded-full bg-[var(--terracotta)] shadow-md"
								>
									<div
										class="h-3 w-3 rounded-full border-2 border-[var(--cream)] bg-[var(--cream)]"
									></div>
								</div>
								<div
									class="absolute -top-3 left-1/2 h-4 w-0.5 -translate-x-1/2 bg-[var(--charcoal)]/60"
								></div>
							</div>

							<div class="relative aspect-[4/5] overflow-hidden bg-[var(--sand)]">
								<img
									src={destination.cardImage?.asset?.url ||
										'https://welcome2sorrento.com/wp-content/uploads/2024/12/Clear-Water-large-768x1024.jpeg'}
									alt={destination.name}
									class="h-full w-full object-cover transition-transform duration-700 ease-in-out will-change-transform group-hover:scale-110"
								/>
								<div
									class="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/80 via-[var(--charcoal)]/30 to-transparent"
								></div>
								<div class="absolute right-0 bottom-0 left-0 p-6">
									<div
										class="mb-3 inline-block rounded-sm bg-white/20 px-3 py-1 text-xs font-medium tracking-wider text-white uppercase backdrop-blur-sm"
									>
										Day Trip
									</div>
									<h3 class="heading-serif mb-2 text-3xl font-semibold text-white">
										{destination.name}
									</h3>
									<p class="mb-4 text-sm text-white/90">
										{destination.subtitle || destination.shortDescription || ''}
									</p>
									<div
										class="flex items-center gap-2 font-serif text-sm tracking-wider text-[var(--coral)] transition-all duration-200 group-hover:translate-x-2"
									>
										<span>Discover More</span>
										<ArrowRight class="h-4 w-4" />
									</div>
								</div>
								<div class="absolute top-4 left-4 opacity-60">
									<div
										class="rounded border-2 border-white/40 px-2 py-1 text-[0.6rem] font-bold tracking-widest text-white uppercase"
									>
										Italia
									</div>
								</div>
							</div>
						</Card>
					</a>
				</div>
			{/each}
		</div>

		<div class="scroll-reveal text-center" use:reveal>
			<VintageButton href="/surrounding" variant="olive" size="lg">
				<span>View All Destinations</span>
				<ArrowRight class="h-5 w-5" />
			</VintageButton>
		</div>
	</div>
</section>
