<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Star, MapPin, Home } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import { formatType } from '$lib/utils';
	import type { Accommodation } from '$lib/sanity/queries';

	interface Props {
		filteredAccommodations: Accommodation[];
		selectedType: string;
	}

	let { filteredAccommodations, selectedType }: Props = $props();

	function getTypeColor(type: string): string {
		const colors: Record<string, string> = {
			'luxury-hotel': 'bg-(--azure)',
			'boutique-hotel': 'bg-(--terracotta)',
			bnb: 'bg-(--olive)',
			'private-villa': 'bg-(--coral)',
			resort: 'bg-(--azure)'
		};
		return colors[type] || 'bg-(--azure)';
	}
</script>

<section class="relative bg-white py-32">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		{#if filteredAccommodations.length === 0}
			<div class="py-20 text-center">
				<Home class="mx-auto mb-4 h-16 w-16 text-(--stone) opacity-50" />
				<h3 class="mb-2 text-2xl font-bold text-(--charcoal)">No Accommodations Found</h3>
				<p class="text-(--stone)">
					{selectedType === 'All'
						? 'No accommodations have been added yet. Check back soon!'
						: `No accommodations found in the "${formatType(selectedType)}" category.`}
				</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredAccommodations as accommodation, index}
					{@const typeColor = getTypeColor(accommodation.type)}
					<div class="scroll-reveal h-full" style="transition-delay: {index * 0.1}s" use:reveal>
						<Card
							class="group flex h-full flex-col overflow-hidden border border-(--sand) pt-0 transition-all duration-300 hover:border-(--azure) hover:shadow-lg"
						>
							<div class="relative h-72 overflow-hidden">
								<img
									src={accommodation?.mainImage?.asset?.url ||
										'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80'}
									alt={accommodation.name}
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>

								<!-- Category Badge -->
								<div class="absolute top-4 right-4">
									<Badge class="border-0 bg-white/90 font-semibold text-(--charcoal) shadow-md">
										{formatType(accommodation.type)}
									</Badge>
								</div>

								<!-- Price Badge -->
								<div class="absolute top-4 left-4">
									<Badge class="{typeColor} border-0 font-semibold text-white shadow-md">
										{accommodation.priceRange}
									</Badge>
								</div>

								<!-- Rating -->
								<div
									class="absolute bottom-4 left-4 flex items-center space-x-1 rounded-lg bg-white px-3 py-2 shadow-md"
								>
									<Star class="h-4 w-4 fill-yellow-400 text-yellow-400" />
									<span class="text-sm font-bold text-(--charcoal)">{accommodation.rating}</span>
								</div>
							</div>

							<CardContent class="flex flex-grow flex-col p-6">
								<div class="flex-grow">
									<CardTitle
										class="heading-serif mb-3 text-2xl text-(--charcoal) transition-colors duration-300 group-hover:text-(--azure)"
									>
										{accommodation.name}
									</CardTitle>
									<p class="mb-6 text-sm leading-relaxed text-(--stone)">
										{accommodation.description}
									</p>

									<div class="mb-6 flex flex-wrap gap-2">
										{#each accommodation.highlights as amenity}
											<Badge
												variant="outline"
												class="border-(--azure) text-xs text-(--azure) transition-colors hover:bg-(--azure)/10"
											>
												{amenity}
											</Badge>
										{/each}
									</div>
								</div>

								<div
									class="flex items-start space-x-2 border-t border-(--sand) pt-4 text-sm text-(--stone)"
								>
									<MapPin class="mt-0.5 h-4 w-4 flex-shrink-0 text-(--azure)" />
									<span class="font-medium">{accommodation.location}</span>
								</div>
							</CardContent>
						</Card>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

