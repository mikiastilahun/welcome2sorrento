<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import type { Restaurant, Accommodation, Activity, SiteSettings } from '$lib/sanity/queries';
	import { toPlainText } from '$lib/utils';

	interface Props {
		featuredRestaurants: Restaurant[];
		featuredAccommodations: Accommodation[];
		featuredActivities: Activity[];
		siteSettings: SiteSettings | null;
	}

	let { featuredRestaurants, featuredAccommodations, featuredActivities, siteSettings }: Props =
		$props();

	// Combine all featured items
	const allFeaturedItems = $derived(() => {
		const items: Array<{
			type: 'restaurant' | 'accommodation' | 'activity';
			name: string;
			description: string;
			image: string;
			priceRange: string;
			category: string;
			link: string;
		}> = [];

		featuredRestaurants.slice(0, 2).forEach((r) => {
			items.push({
				type: 'restaurant',
				name: r.name,
				description: toPlainText(r.description),
				image:
					r.mainImage?.asset?.url ||
					'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
				priceRange: r.priceRange,
				category: r.category,
				link: '/sorrento/eat'
			});
		});

		featuredAccommodations.slice(0, 2).forEach((a) => {
			items.push({
				type: 'accommodation',
				name: a.name,
				description: toPlainText(a.description),
				image:
					a.mainImage?.asset?.url ||
					'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
				priceRange: a.priceRange,
				category: a.type,
				link: '/sorrento/stay'
			});
		});

		featuredActivities.slice(0, 2).forEach((a) => {
			items.push({
				type: 'activity',
				name: a.name,
				description: toPlainText(a.description),
				image:
					a.mainImage?.asset?.url ||
					'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80',
				priceRange: a.priceRange,
				category: a.category,
				link: '/sorrento/do'
			});
		});

		return items.slice(0, 6);
	});

	function getTypeLabel(type: string): string {
		switch (type) {
			case 'restaurant':
				return 'Restaurant';
			case 'accommodation':
				return 'Stay';
			case 'activity':
				return 'Activity';
			default:
				return type;
		}
	}

	function getTypeColor(type: string): string {
		switch (type) {
			case 'restaurant':
				return 'bg-(--coral)';
			case 'accommodation':
				return 'bg-(--azure)';
			case 'activity':
				return 'bg-(--olive)';
			default:
				return 'bg-(--azure)';
		}
	}
</script>

{#if allFeaturedItems().length > 0}
	<section class="bg-white py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-12 text-center" use:reveal>
				<h2
					class="heading-serif mb-4 text-3xl font-semibold text-[var(--charcoal)] sm:text-4xl lg:text-5xl"
				>
					Our Top Recommendations
				</h2>
				<p class="mx-auto max-w-2xl text-lg text-[var(--stone)]">
					Hand-picked favorites from our local experts
				</p>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each allFeaturedItems() as item, index}
					<div class="scroll-reveal" style="transition-delay: {index * 100}ms" use:reveal>
						<a href={item.link} class="group block">
							<div
								class="border-(--sand) hover:border-(--azure) overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
							>
								<div class="relative h-48 overflow-hidden">
									<img
										src={item.image}
										alt={item.name}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>

									<!-- Type Badge - Top Right -->
									<div class="absolute right-3 top-3">
										<Badge class="text-(--charcoal) border-0 bg-white/90 font-semibold shadow-md">
											{getTypeLabel(item.type)}
										</Badge>
									</div>
								</div>

							<div class="px-3 pb-2.5 pt-2">
								<div class="mb-1">
									<Badge class="{getTypeColor(item.type)} border-0 font-semibold text-white">
										{item.priceRange}
									</Badge>
								</div>
								<h3
									class="heading-serif group-hover:text-(--azure) mb-1 text-lg font-semibold text-[var(--charcoal)] transition-colors"
								>
									{item.name}
								</h3>
								<p class="mb-1.5 line-clamp-2 text-sm text-[var(--stone)]">
									{item.description}
								</p>
								<div
									class="text-(--azure) flex items-center text-sm font-medium transition-transform duration-200 group-hover:translate-x-1"
								>
									<span>View Details</span>
									<ArrowRight class="ml-1 h-4 w-4" />
								</div>
							</div>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}
