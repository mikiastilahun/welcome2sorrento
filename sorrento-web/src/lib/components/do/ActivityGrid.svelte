<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Clock, Sparkles } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import { formatCategory, toPlainText } from '$lib/utils';
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

<section class="relative bg-white py-10">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredActivities as activity, index}
				<div class="scroll-reveal h-full" style="transition-delay: {index * 0.1}s" use:reveal>
					<Card
						class="border-(--sand) hover:border-(--azure) group flex h-full flex-col overflow-hidden border pt-0 transition-all duration-300 hover:shadow-lg"
					>
						<div class="relative h-56 overflow-hidden">
							<img
								src={getActivityImage(activity)}
								alt={activity.name}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>

							<!-- Category Badge - Top Right -->
							<div class="absolute right-4 top-4">
								<Badge class="text-(--charcoal) border-0 bg-white/90 font-semibold shadow-md">
									{formatCategory(activity.category)}
								</Badge>
							</div>

							<!-- Duration Badge - Bottom Left -->
							{#if activity.duration}
								<div class="absolute bottom-4 left-4">
									<Badge
										class="bg-(--terracotta) flex items-center space-x-1 border-0 font-semibold text-white shadow-md"
									>
										<Clock class="h-3 w-3" />
										<span>{activity.duration}</span>
									</Badge>
								</div>
							{/if}
						</div>

					<CardContent class="flex grow flex-col px-4 pb-3 pt-2">
						<div class="grow">
							{#if activity.priceRange}
								<div class="mb-1">
									<Badge class="bg-(--azure) border-0 font-semibold text-white">
										{activity.priceRange}
									</Badge>
								</div>
							{/if}
							<CardTitle
								class="heading-serif text-(--charcoal) group-hover:text-(--azure) mb-1 text-xl transition-colors duration-300"
							>
								{activity.name}
							</CardTitle>
							<p class="text-(--stone) mb-2 line-clamp-2 text-sm leading-relaxed">
								{toPlainText(activity.description)}
							</p>

							{#if activity.highlights && activity.highlights.length > 0}
								<div class="mb-2 space-y-1.5">
									<div
										class="text-(--azure) mb-1 flex items-center space-x-1 text-xs font-bold uppercase tracking-wide"
									>
										<Sparkles class="h-3 w-3" />
										<span>Highlights</span>
									</div>
									<div class="flex flex-wrap gap-1.5">
										{#each activity.highlights.slice(0, 3) as highlight}
											<Badge
												variant="outline"
												class="border-(--azure) text-(--azure) hover:bg-(--azure)/10 text-xs transition-colors"
											>
												{highlight}
											</Badge>
										{/each}
									</div>
								</div>
							{/if}
						</div>

						{#if activity.bestFor}
							<div class="border-(--sand) border-t pt-2">
								<span class="text-(--stone) text-sm"
									>Best for: <span class="text-foreground font-medium">{activity.bestFor}</span
									></span
								>
							</div>
						{/if}
					</CardContent>
					</Card>
				</div>
			{/each}
		</div>
	</div>
</section>
