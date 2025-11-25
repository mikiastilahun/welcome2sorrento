<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import { MapPin, Clock } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	interface Props {
		destinations: any[];
	}

	let { destinations }: Props = $props();
</script>

<section class="relative bg-white py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each destinations as destination, index}
				<div class="scroll-reveal" style="transition-delay: {index * 0.1}s" use:reveal>
					<a href={destination.link} class="group block h-full">
						<Card
							class="h-full overflow-hidden pt-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
						>
							<!-- Image -->
							<div class="relative {!destination.description ? 'h-full' : 'h-80'} overflow-hidden">
								<img
									src={destination.image ||
										'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80'}
									alt={destination.name}
									class="h-full w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-[1.04]"
								/>
								<div
									class="absolute inset-0 bg-gradient-to-t from-(--charcoal)/60 via-transparent to-transparent"
								></div>

								<!-- Title Overlay -->
								<div class="absolute right-0 bottom-0 left-0 p-6 text-white">
									<h3 class="heading-serif mb-1 text-2xl font-semibold">{destination.name}</h3>
									<p class="text-sm text-white/90">{destination.tagline}</p>
								</div>
							</div>

							<!-- Content -->
							<CardContent class="flex flex-col p-6">
								{#if destination.description}
									<p class="mb-6 leading-relaxed text-(--stone)">
										{destination.description}
									</p>
								{/if}

								{#if destination.highlights.length > 0}
									<div class="mb-6">
										<h4 class="mb-3 text-sm font-semibold tracking-wide text-(--azure) uppercase">
											Top Highlights
										</h4>
										<div class="space-y-2">
											{#each destination.highlights.slice(0, 4) as highlight}
												<div class="flex items-center space-x-2 text-sm text-(--charcoal)">
													<div class="h-1.5 w-1.5 rounded-full bg-(--azure)"></div>
													<span>{highlight}</span>
												</div>
											{/each}
										</div>
									</div>
								{/if}

								{#if destination.distance || destination.travelTime}
									<div class="mt-auto space-y-2 border-t border-(--sand) pt-4">
										{#if destination.distance}
											<div class="flex items-center space-x-2 text-sm text-(--stone)">
												<MapPin class="h-4 w-4 text-(--azure)" />
												<span>{destination.distance}</span>
											</div>
										{/if}
										{#if destination.travelTime}
											<div class="flex items-center space-x-2 text-sm text-(--stone)">
												<Clock class="h-4 w-4 text-(--azure)" />
												<span>{destination.travelTime}</span>
											</div>
										{/if}
									</div>
								{/if}
							</CardContent>
						</Card>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

