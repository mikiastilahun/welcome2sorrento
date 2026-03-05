<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { MapPin, ChefHat } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import { formatCategory, toPlainText } from '$lib/utils';
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

<section class="relative bg-white py-10">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		{#if filteredRestaurants.length === 0}
			<div class="py-16 text-center">
				<ChefHat class="text-(--stone) mx-auto mb-4 h-16 w-16 opacity-50" />
				<h3 class="text-(--charcoal) mb-2 text-2xl font-bold">No Restaurants Found</h3>
				<p class="text-(--stone)">
					{selectedCategory === 'All'
						? 'No restaurants have been added yet. Check back soon!'
						: `No restaurants found in the "${formatCategory(selectedCategory)}" category.`}
				</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredRestaurants as restaurant, index}
					{@const categoryColor = getCategoryColor(restaurant.category)}
					<div class="scroll-reveal h-full" style="transition-delay: {index * 0.1}s" use:reveal>
						<Card
							class="border-(--sand) hover:border-(--azure) group flex h-full flex-col overflow-hidden border pt-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
						>
							<div class="relative h-56 overflow-hidden">
								<img
									src={restaurant?.mainImage?.asset?.url ||
										'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80'}
									alt={restaurant.name}
									class="h-full w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-[1.04]"
								/>

								<!-- Category Badge - Top Right -->
								<div class="absolute right-4 top-4">
									<Badge class="text-(--charcoal) border-0 bg-white/90 font-semibold shadow-md">
										{formatCategory(restaurant.category)}
									</Badge>
								</div>
							</div>

						<CardContent class="flex flex-grow flex-col px-4 pb-3 pt-2">
							<div class="flex-grow">
								<div class="mb-1">
									<Badge class="{categoryColor} border-0 font-semibold text-white">
										{restaurant.priceRange}
									</Badge>
								</div>
								<CardTitle
									class="heading-serif text-(--charcoal) group-hover:text-(--azure) mb-1 text-xl transition-colors duration-300"
								>
									{restaurant.name}
								</CardTitle>
								<div class="text-(--stone) mb-1.5 text-sm font-medium">
									{restaurant.cuisine}
								</div>
								<p class="text-(--stone) mb-2 line-clamp-2 text-sm leading-relaxed">
									{toPlainText(restaurant.description)}
								</p>

								<div class="mb-2 flex flex-wrap gap-1.5">
									{#each restaurant.highlights.slice(0, 3) as highlight}
										<Badge
											variant="outline"
											class="border-(--azure) text-(--azure) hover:bg-(--azure)/10 text-xs transition-colors"
										>
											{highlight}
										</Badge>
									{/each}
								</div>
							</div>

							<div
								class="border-(--sand) text-(--stone) flex items-start space-x-2 border-t pt-2 text-sm"
							>
								<MapPin class="text-(--azure) mt-0.5 h-4 w-4 flex-shrink-0" />
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
