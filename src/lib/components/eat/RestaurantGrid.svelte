<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Star, MapPin, ChefHat } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import { formatCategory } from '$lib/utils';
	import type { Restaurant } from '$lib/sanity/queries';

	interface Props {
		filteredRestaurants: Restaurant[];
		selectedCategory: string;
	}

	let { filteredRestaurants, selectedCategory }: Props = $props();

	function getCategoryColor(category: string): string {
		const colors: Record<string, string> = {
			'fine-dining': 'bg-(--terracotta)',
			traditional: 'bg-(--coral)',
			seafood: 'bg-(--azure)',
			'casual-dining': 'bg-(--olive)',
			pizzeria: 'bg-(--terracotta)'
		};
		return colors[category] || 'bg-(--azure)';
	}
</script>

<section class="relative bg-white py-32">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		{#if filteredRestaurants.length === 0}
			<div class="py-20 text-center">
				<ChefHat class="mx-auto mb-4 h-16 w-16 text-(--stone) opacity-50" />
				<h3 class="mb-2 text-2xl font-bold text-(--charcoal)">No Restaurants Found</h3>
				<p class="text-(--stone)">
					{selectedCategory === 'All'
						? 'No restaurants have been added yet. Check back soon!'
						: `No restaurants found in the "${formatCategory(selectedCategory)}" category.`}
				</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredRestaurants as restaurant, index}
					{@const categoryColor = getCategoryColor(restaurant.category)}
					<div class="scroll-reveal h-full" style="transition-delay: {index * 0.1}s" use:reveal>
						<Card
							class="group flex h-full flex-col overflow-hidden border border-(--sand) pt-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-(--azure) hover:shadow-lg"
						>
							<div class="relative h-72 overflow-hidden">
								<img
									src={restaurant?.mainImage?.asset?.url ||
										'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80'}
									alt={restaurant.name}
									class="h-full w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-[1.04]"
								/>

								<!-- Category Badge -->
								<div class="absolute top-4 right-4">
									<Badge class="{categoryColor} border-0 font-semibold text-white shadow-md">
										{formatCategory(restaurant.category)}
									</Badge>
								</div>

								<!-- Rating -->
								<div
									class="absolute bottom-4 left-4 flex items-center space-x-1 rounded-lg bg-white px-3 py-2 shadow-md"
								>
									<Star class="h-4 w-4 fill-yellow-400 text-yellow-400" />
									<span class="text-sm font-bold text-(--charcoal)">{restaurant.rating}</span>
								</div>

								<!-- Price Range -->
								<div class="absolute right-4 bottom-4 rounded-lg bg-white px-3 py-2 shadow-md">
									<span class="text-sm font-semibold text-(--charcoal)"
										>{restaurant.priceRange}</span
									>
								</div>
							</div>

							<CardContent class="flex flex-grow flex-col p-6">
								<div class="flex-grow">
									<CardTitle
										class="heading-serif mb-2 text-2xl text-(--charcoal) transition-colors duration-300 group-hover:text-(--azure)"
									>
										{restaurant.name}
									</CardTitle>
									<div class="mb-4 text-sm font-medium text-(--stone)">
										{restaurant.cuisine}
									</div>
									<p class="mb-6 text-sm leading-relaxed text-(--stone)">
										{restaurant.description}
									</p>

									<div class="mb-6 flex flex-wrap gap-2">
										{#each restaurant.highlights as highlight}
											<Badge
												variant="outline"
												class="border-(--azure) text-xs text-(--azure) transition-colors hover:bg-(--azure)/10"
											>
												{highlight}
											</Badge>
										{/each}
									</div>
								</div>

								<div
									class="flex items-start space-x-2 border-t border-(--sand) pt-4 text-sm text-(--stone)"
								>
									<MapPin class="mt-0.5 h-4 w-4 flex-shrink-0 text-(--azure)" />
									<span class="font-medium">{restaurant.location}</span>
								</div>
							</CardContent>
						</Card>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

