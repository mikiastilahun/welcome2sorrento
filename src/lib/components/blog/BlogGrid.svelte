<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Calendar, BookOpen, ArrowRight } from '@lucide/svelte';
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
			'local-culture': 'terracotta',
			beaches: 'azure',
			'travel-tips': 'coral',
			'day-trips': 'olive',
			'food-drink': 'terracotta'
		};
		return colors[category] || 'azure';
	}
</script>

<section class="relative overflow-hidden bg-white py-24">
	<!-- Decorative background pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.02]">
		<svg class="h-full w-full">
			<defs>
				<pattern id="blog-grid" width="60" height="60" patternUnits="userSpaceOnUse">
					<path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--charcoal)" stroke-width="1" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#blog-grid)" />
		</svg>
	</div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		{#if filteredPosts.length === 0}
			<div class="py-20 text-center">
				<div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--cream)]">
					<BookOpen class="h-10 w-10 text-[var(--stone)]" />
				</div>
				<h3 class="heading-serif mb-3 text-2xl font-semibold text-[var(--charcoal)]">No Posts Found</h3>
				<p class="text-[var(--stone)]">
					{selectedCategory === 'All'
						? 'No blog posts have been published yet. Check back soon!'
						: `No posts found in the "${formatCategory(selectedCategory)}" category.`}
				</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredPosts as post, index}
					{@const accentColor = getCategoryColor(post.category)}
					<div class="scroll-reveal" style="transition-delay: {index * 100}ms" use:reveal>
						<a href="/blog/{post.slug.current}" class="group block h-full">
							<Card class="relative flex h-full flex-col overflow-hidden border-[var(--sand)] pt-0 shadow-mediterranean transition-all duration-300 hover:-translate-y-2 hover:shadow-mediterranean-lg">
								<!-- Vintage number badge -->
								<div class="pointer-events-none absolute -top-2 -left-2 z-20 select-none font-serif text-7xl font-bold text-[var(--{accentColor})] opacity-10">
									0{index + 1}
								</div>

								<div class="relative h-60 overflow-hidden">
									<img
										src={post?.mainImage?.asset?.url ||
											'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1920&q=80'}
										alt={post.title}
										class="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
									/>
									<!-- Gradient overlay -->
									<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

									<div class="absolute top-4 left-4">
										<Badge class="border-0 bg-[var(--{accentColor})] text-white shadow-lg">
											{formatCategory(post.category)}
										</Badge>
									</div>
									<div class="absolute right-4 bottom-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[var(--charcoal)] shadow-md backdrop-blur-sm">
										{post.readTime}
									</div>
								</div>

								<CardContent class="flex grow flex-col p-6">
									<h3 class="heading-serif mb-3 text-xl font-semibold text-[var(--charcoal)] transition-colors duration-200 ease-out group-hover:text-[var(--azure)]">
										{post.title}
									</h3>
									<p class="mb-6 grow text-sm leading-relaxed text-[var(--stone)]">
										{post.excerpt}
									</p>
									<div class="flex flex-wrap items-center gap-3 border-t border-[var(--sand)] pt-4 text-xs text-[var(--stone)]">
										<div class="flex items-center space-x-2">
											<Calendar class="h-3 w-3" />
											<span>
												{new Date(post.publishedAt).toLocaleDateString('en-US', {
													month: 'short',
													day: 'numeric',
													year: 'numeric'
												})}
											</span>
										</div>
										<span class="font-medium">{post.author}</span>
									</div>
									
									<!-- Read more link -->
									<div class="mt-4 flex items-center font-serif tracking-wide text-[var(--azure)] transition-all duration-200 group-hover:translate-x-2">
										<span>Read More</span>
										<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</div>
								</CardContent>

								<!-- Decorative corner -->
								<div
									class="absolute right-0 bottom-0 h-16 w-16 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
									style="background: linear-gradient(135deg, transparent 50%, var(--{accentColor}) 50%);"
								></div>
							</Card>
						</a>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
