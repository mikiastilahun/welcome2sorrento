<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Star } from '@lucide/svelte';

	interface FeaturedItem {
		name: string;
		description: string;
		image: string;
		priceRange: string;
		category?: string;
		type?: string;
	}

	interface Props {
		title?: string;
		subtitle?: string;
		items: FeaturedItem[];
		badgeColor?: string;
	}

	let {
		title = 'Featured Picks',
		subtitle = 'Our top recommendations',
		items,
		badgeColor = 'bg-(--azure)'
	}: Props = $props();
</script>

{#if items.length > 0}
	<section class="bg-(--warm-white) py-16">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-8 text-center" use:reveal>
				<div class="mb-2 flex items-center justify-center gap-2">
					<Star class="fill-(--terracotta) text-(--terracotta) h-5 w-5" />
					<span class="text-(--terracotta) text-sm font-semibold uppercase tracking-wider"
						>{subtitle}</span
					>
					<Star class="fill-(--terracotta) text-(--terracotta) h-5 w-5" />
				</div>
				<h2 class="heading-serif text-2xl font-semibold text-[var(--charcoal)] sm:text-3xl">
					{title}
				</h2>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each items.slice(0, 3) as item, index}
					<div class="scroll-reveal" style="transition-delay: {index * 100}ms" use:reveal>
						<div
							class="border-(--terracotta)/20 hover:border-(--terracotta) group overflow-hidden rounded-xl border-2 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
						>
							<div class="relative h-48 overflow-hidden">
								<img
									src={item.image}
									alt={item.name}
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>

								<!-- Featured Badge -->
								<div class="absolute left-3 top-3">
									<Badge class="bg-(--terracotta) border-0 font-semibold text-white shadow-md">
										Featured
									</Badge>
								</div>
							</div>

						<div class="px-3 pb-2.5 pt-2">
							<div class="mb-1">
								<Badge class="{badgeColor} border-0 font-semibold text-white">
									{item.priceRange}
								</Badge>
							</div>
							<h3
								class="heading-serif group-hover:text-(--azure) mb-1 text-lg font-semibold text-[var(--charcoal)] transition-colors"
							>
								{item.name}
							</h3>
							<p class="line-clamp-2 text-sm text-[var(--stone)]">
								{item.description}
							</p>
						</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}
