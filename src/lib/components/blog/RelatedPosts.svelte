<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { ArrowRight } from '@lucide/svelte';
	import { formatCategory } from '$lib/utils';
	import type { BlogPost } from '$lib/sanity/queries';

	interface Props {
		relatedPosts: BlogPost[];
	}

	let { relatedPosts }: Props = $props();

	function getCategoryColor(category: string): string {
		const colors: Record<string, string> = {
			'local-culture': 'bg-[color:var(--terracotta)]',
			beaches: 'bg-[color:var(--azure)]',
			'travel-tips': 'bg-[color:var(--coral)]',
			'day-trips': 'bg-[color:var(--olive)]',
			'food-drink': 'bg-[color:var(--terracotta)]'
		};
		return colors[category] || 'bg-[color:var(--azure)]';
	}
</script>

{#if relatedPosts && relatedPosts.length > 0}
	<section class="relative bg-[color:var(--cream)] py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-3xl font-bold text-[color:var(--charcoal)] sm:text-4xl">
					Related Articles
				</h2>
			</div>

			<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
				{#each relatedPosts as relatedPost}
					{@const categoryColor = getCategoryColor(relatedPost.category)}
					<a href="/blog/{relatedPost.slug.current}" class="group block">
						<Card
							class="flex h-full flex-col overflow-hidden border border-[color:var(--sand)] transition-all duration-300 hover:border-[color:var(--azure)] hover:shadow-lg"
						>
							<div class="relative h-48 overflow-hidden">
								{#if relatedPost.mainImage?.asset?.url}
									<img
										src={relatedPost.mainImage.asset.url}
										alt={relatedPost.title}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								{/if}
								<div class="absolute top-4 left-4">
									<Badge class="{categoryColor} border-0 text-white">
										{formatCategory(relatedPost.category)}
									</Badge>
								</div>
							</div>
							<CardContent class="flex grow flex-col p-6">
								<h3
									class="mb-2 text-lg font-bold text-[color:var(--charcoal)] transition-colors duration-200 group-hover:text-[color:var(--azure)]"
								>
									{relatedPost.title}
								</h3>
								<p class="mb-4 grow text-sm text-[color:var(--stone)]">
									{relatedPost.excerpt}
								</p>
								<div class="flex items-center text-sm text-[color:var(--azure)]">
									<span>Read More</span>
									<ArrowRight
										class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2"
									/>
								</div>
							</CardContent>
						</Card>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}

