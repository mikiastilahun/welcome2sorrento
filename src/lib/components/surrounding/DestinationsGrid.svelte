<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import { MapPin, Clock, ArrowRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	interface Props {
		destinations: any[];
		heading?: string;
		subheading?: string;
	}

	let {
		destinations,
		heading = 'Destinations Near Sorrento',
		subheading = 'World-renowned locations just a short journey away'
	}: Props = $props();

	// Color accents for variety
	const accentColors = ['azure', 'terracotta', 'olive', 'coral', 'azure', 'terracotta'];
</script>

<section class="relative overflow-hidden bg-white py-24">
	<!-- Decorative background pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.02]">
		<svg class="h-full w-full">
			<defs>
				<pattern id="dest-grid" width="60" height="60" patternUnits="userSpaceOnUse">
					<path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--charcoal)" stroke-width="1" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#dest-grid)" />
		</svg>
	</div>

	<div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="scroll-reveal mb-16 text-center" use:reveal>
			<div class="mb-4 flex items-center justify-center gap-3">
				<div class="h-px w-8 bg-[var(--azure)]"></div>
				<span class="font-serif text-sm tracking-[0.2em] text-[var(--azure)] uppercase"
					>Explore</span
				>
				<div class="h-px w-8 bg-[var(--azure)]"></div>
			</div>
			<h2 class="heading-serif mb-4 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
				{heading || 'Destinations Near Sorrento'}
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-[var(--stone)]">
				{subheading || 'World-renowned locations just a short journey away'}
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each destinations as destination, index}
				{@const accentColor = accentColors[index % 6]}
				<div class="scroll-reveal" style="transition-delay: {index * 100}ms" use:reveal>
					<a href={destination.link} class="group block h-full">
						<Card
							class="shadow-mediterranean hover:shadow-mediterranean-lg relative h-full overflow-hidden border-[var(--sand)] pt-0 transition-all duration-300 hover:-translate-y-2"
						>
							<!-- Luggage tag decoration -->
							<div class="absolute -top-1 right-6 z-30 flex rotate-12 flex-col items-center">
								<div class="h-2 w-4 rounded-t bg-[var(--{accentColor})]"></div>
								<div
									class="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--{accentColor})] shadow-sm"
								>
									<div class="h-2 w-2 rounded-full bg-white/50"></div>
								</div>
								<div class="h-4 w-0.5 bg-[var(--{accentColor})]/50"></div>
								<div
									class="rounded bg-white/90 px-3 py-1.5 text-center text-[10px] font-bold tracking-wider text-[var(--{accentColor})] uppercase shadow-md backdrop-blur-sm"
								>
									Day Trip
								</div>
							</div>

							<!-- Image -->
							<div class="relative {!destination.description ? 'h-full' : 'h-72'} overflow-hidden">
								<img
									src={destination.image ||
										'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80'}
									alt={destination.name}
									class="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
								/>
								<!-- Gradient overlay -->
								<div
									class="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/70 via-[var(--charcoal)]/30 to-transparent"
								></div>

								<!-- Italia stamp -->
								<div class="absolute top-4 left-4 z-10 rotate-[-5deg] opacity-80">
									<div
										class="rounded border-2 border-dashed border-white/50 bg-white/10 px-3 py-1 backdrop-blur-sm"
									>
										<span class="font-serif text-xs font-bold tracking-[0.2em] text-white uppercase"
											>ITALIA</span
										>
									</div>
								</div>

								<!-- Title Overlay -->
								<div class="absolute right-0 bottom-0 left-0 p-6 text-white">
									<h3
										class="heading-serif mb-1 text-2xl font-semibold transition-colors group-hover:text-[var(--coral)]"
									>
										{destination.name}
									</h3>
									<p class="text-sm text-white/90">{destination.tagline}</p>
								</div>
							</div>

							<!-- Content -->
							<CardContent class="flex flex-col p-6">
								{#if destination.description}
									<p class="mb-6 leading-relaxed text-[var(--stone)]">
										{destination.description}
									</p>
								{/if}

								{#if destination.highlights && destination.highlights.length > 0}
									<div class="mb-6">
										<h4
											class="mb-3 text-sm font-semibold tracking-wide text-[var(--{accentColor})] uppercase"
										>
											Top Highlights
										</h4>
										<div class="space-y-2">
											{#each destination.highlights.slice(0, 4) as highlight}
												<div class="flex items-center space-x-2 text-sm text-[var(--charcoal)]">
													<div class="h-1.5 w-1.5 rounded-full bg-[var(--{accentColor})]"></div>
													<span>{highlight}</span>
												</div>
											{/each}
										</div>
									</div>
								{/if}

								{#if destination.distance || destination.travelTime}
									<div class="mt-auto space-y-2 border-t border-[var(--sand)] pt-4">
										{#if destination.distance}
											<div class="flex items-center space-x-2 text-sm text-[var(--stone)]">
												<MapPin class="h-4 w-4 text-[var(--{accentColor})]" />
												<span>{destination.distance}</span>
											</div>
										{/if}
										{#if destination.travelTime}
											<div class="flex items-center space-x-2 text-sm text-[var(--stone)]">
												<Clock class="h-4 w-4 text-[var(--{accentColor})]" />
												<span>{destination.travelTime}</span>
											</div>
										{/if}
									</div>
								{/if}

								<!-- Explore link -->
								<div
									class="mt-4 flex items-center font-serif tracking-wide text-[var(--azure)] transition-all duration-200 group-hover:translate-x-2"
								>
									<span>Explore</span>
									<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</div>
							</CardContent>

							<!-- Decorative corner -->
							<div
								class="absolute right-0 bottom-0 h-16 w-16 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
								style="background: linear-gradient(135deg, transparent 50%, var(--{accentColor}) 50%);"
							></div>
						</Card>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
