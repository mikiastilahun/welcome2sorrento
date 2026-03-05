<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { MapPin, Home } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import { formatType, toPlainText } from '$lib/utils';
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

<section class="relative bg-white py-10">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		{#if filteredAccommodations.length === 0}
			<div class="py-16 text-center">
				<Home class="text-(--stone) mx-auto mb-4 h-16 w-16 opacity-50" />
				<h3 class="text-(--charcoal) mb-2 text-2xl font-bold">No Accommodations Found</h3>
				<p class="text-(--stone)">
					{selectedType === 'All'
						? 'No accommodations have been added yet. Check back soon!'
						: `No accommodations found in the "${formatType(selectedType)}" category.`}
				</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredAccommodations as accommodation, index}
					{@const typeColor = getTypeColor(accommodation.type)}
					<div class="scroll-reveal h-full" style="transition-delay: {index * 0.1}s" use:reveal>
						<Card
							class="border-(--sand) hover:border-(--azure) group flex h-full flex-col overflow-hidden border pt-0 transition-all duration-300 hover:shadow-lg"
						>
							<div class="relative h-56 overflow-hidden">
								<img
									src={accommodation?.mainImage?.asset?.url ||
										'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80'}
									alt={accommodation.name}
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>

								<!-- Type Badge - Top Right -->
								<div class="absolute right-4 top-4">
									<Badge class="text-(--charcoal) border-0 bg-white/90 font-semibold shadow-md">
										{formatType(accommodation.type)}
									</Badge>
								</div>
							</div>

						<CardContent class="flex flex-grow flex-col px-4 pb-3 pt-2">
							<div class="flex-grow">
								<div class="mb-1">
									<Badge class="{typeColor} border-0 font-semibold text-white">
										{accommodation.priceRange}
									</Badge>
								</div>
								<CardTitle
									class="heading-serif text-(--charcoal) group-hover:text-(--azure) mb-1 text-xl transition-colors duration-300"
								>
									{accommodation.name}
								</CardTitle>
								<p class="text-(--stone) mb-2 line-clamp-2 text-sm leading-relaxed">
									{toPlainText(accommodation.description)}
								</p>

								<div class="mb-2 flex flex-wrap gap-1.5">
									{#each accommodation.highlights.slice(0, 3) as amenity}
										<Badge
											variant="outline"
											class="border-(--azure) text-(--azure) hover:bg-(--azure)/10 text-xs transition-colors"
										>
											{amenity}
										</Badge>
									{/each}
								</div>
							</div>

							<div
								class="border-(--sand) text-(--stone) flex items-start space-x-2 border-t pt-2 text-sm"
							>
								<MapPin class="text-(--azure) mt-0.5 h-4 w-4 flex-shrink-0" />
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
