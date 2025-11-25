<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Clock, Star, Sparkles } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import { formatCategory } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';

	interface Props {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		filteredActivities: any[];
	}

	let { filteredActivities }: Props = $props();

	// Helper function to get activity image URL
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function getActivityImage(activity: any) {
		if (activity.mainImage) {
			return urlFor(activity.mainImage).width(800).height(600).url();
		}
		return (
			activity.image || 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80'
		);
	}
</script>

<section class="relative bg-white py-32">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredActivities as activity, index}
				<div class="scroll-reveal h-full" style="transition-delay: {index * 0.1}s" use:reveal>
					<Card
						class="group flex h-full flex-col overflow-hidden border border-(--sand) pt-0 transition-all duration-300 hover:border-(--azure) hover:shadow-lg"
					>
						<div class="relative h-72 overflow-hidden">
							<img
								src={getActivityImage(activity)}
								alt={activity.name}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>

							<!-- Category Badge -->
							<div class="absolute top-4 right-4">
								<Badge class="border-0 bg-white/90 font-semibold text-(--charcoal) shadow-md">
									{formatCategory(activity.category)}
								</Badge>
							</div>

							<!-- Duration/Rating Badge -->
							<div class="absolute bottom-4 left-4 flex items-center space-x-2">
								{#if activity.duration}
									<Badge
										class="flex items-center space-x-1 border-0 bg-(--azure) font-semibold text-white shadow-md"
									>
										<Clock class="h-3 w-3" />
										<span>{activity.duration}</span>
									</Badge>
								{/if}
								{#if activity.rating}
									<Badge
										class="flex items-center space-x-1 border-0 bg-(--coral) font-semibold text-white shadow-md"
									>
										<Star class="h-3 w-3" />
										<span>{activity.rating}/5</span>
									</Badge>
								{/if}
							</div>
						</div>

						<CardContent class="flex grow flex-col p-6">
							<div class="grow">
								<CardTitle
									class="heading-serif mb-3 text-2xl text-(--charcoal) transition-colors duration-300 group-hover:text-(--azure)"
								>
									{activity.name}
								</CardTitle>
								<p class="mb-6 text-sm leading-relaxed text-(--stone)">
									{activity.description}
								</p>

								{#if activity.highlights && activity.highlights.length > 0}
									<div class="mb-6 space-y-2">
										<div
											class="mb-2 flex items-center space-x-1 text-xs font-bold tracking-wide text-(--azure) uppercase"
										>
											<Sparkles class="h-3 w-3" />
											<span>Highlights</span>
										</div>
										<div class="flex flex-wrap gap-2">
											{#each activity.highlights as highlight}
												<Badge
													variant="outline"
													class="border-(--azure) text-xs text-(--azure) transition-colors hover:bg-(--azure)/10"
												>
													{highlight}
												</Badge>
											{/each}
										</div>
									</div>
								{/if}
							</div>

							<div class="flex items-center justify-between border-t border-(--sand) pt-4">
								{#if activity.priceRange}
									<span class="text-sm text-(--stone)"
										>Price: <span class="font-medium text-foreground">{activity.priceRange}</span
										></span
									>
								{:else if activity.bestFor}
									<span class="text-sm text-(--stone)"
										>Best for: <span class="font-medium text-foreground">{activity.bestFor}</span></span
									>
								{:else}
									<span></span>
								{/if}
							</div>
						</CardContent>
					</Card>
				</div>
			{/each}
		</div>
	</div>
</section>

