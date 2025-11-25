<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Calendar, BookOpen } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import { formatCategory } from '$lib/utils';
	import type { BlogPost } from '$lib/sanity/queries';

	interface Props {
		filteredPosts: BlogPost[];
		selectedCategory: string;
	}

	let { filteredPosts, selectedCategory }: Props = $props();

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

<section class="relative bg-white py-32">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		{#if filteredPosts.length === 0}
			<div class="py-20 text-center">
				<BookOpen class="mx-auto mb-4 h-16 w-16 text-gray-600 opacity-50" />
				<h3 class="mb-2 text-2xl font-bold text-[color:var(--dark)]">No Posts Found</h3>
				<p class="text-gray-600">
					{selectedCategory === 'All'
						? 'No blog posts have been published yet. Check back soon!'
						: `No posts found in the "${formatCategory(selectedCategory)}" category.`}
				</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredPosts as post, index}
					{@const categoryColor = getCategoryColor(post.category)}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s" use:reveal>
						<a href="/blog/{post.slug.current}" class="group block h-full">
							<Card
								class="flex h-full flex-col overflow-hidden border border-[color:var(--sand)] pt-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[color:var(--azure)] hover:shadow-lg"
							>
								<div class="relative h-64 overflow-hidden">
									<img
										src={post?.mainImage?.asset?.url ||
											'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1920&q=80'}
										alt={post.title}
										class="h-full w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-[1.04]"
									/>

									<div class="absolute top-4 left-4">
										<Badge class="{categoryColor} border-0 text-white">
											{formatCategory(post.category)}
										</Badge>
									</div>
									<div
										class="absolute right-4 bottom-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[color:var(--charcoal)]"
									>
										{post.readTime}
									</div>
								</div>

								<CardContent class="flex grow flex-col p-6">
									<h3
										class="mb-3 text-xl font-bold text-[color:var(--charcoal)] transition-colors duration-200 ease-out group-hover:text-[color:var(--azure)]"
									>
										{post.title}
									</h3>
									<p class="mb-6 grow text-sm leading-relaxed text-[color:var(--stone)]">
										{post.excerpt}
									</p>
									<div
										class="flex flex-wrap items-center gap-3 border-t border-[color:var(--sand)] pt-4 text-xs text-[color:var(--stone)]"
									>
										<div class="flex items-center space-x-2">
											<Calendar class="h-3 w-3" />
											<span
												>{new Date(post.publishedAt).toLocaleDateString('en-US', {
													month: 'short',
													day: 'numeric',
													year: 'numeric'
												})}</span
											>
										</div>
										<span class="font-medium">{post.author}</span>
									</div>
								</CardContent>
							</Card>
						</a>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

