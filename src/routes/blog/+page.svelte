<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { Calendar, ArrowRight, BookOpen } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import type { BlogPost } from '$lib/sanity/queries';

	interface Props {
		data: {
			posts: BlogPost[];
		};
	}

	let { data }: Props = $props();

	onMount(() => {
		const handleScroll = () => {
			const reveals = document.querySelectorAll('.scroll-reveal');
			reveals.forEach((element) => {
				const elementTop = element.getBoundingClientRect().top;
				const elementVisible = 150;
				if (elementTop < window.innerHeight - elementVisible) {
					element.classList.add('revealed');
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	});

	// Get unique categories from posts
	const allCategories = $derived(Array.from(new Set(data.posts.map((p) => p.category))).sort());
	const categories = $derived(['All', ...allCategories]);

	let selectedCategory = $state('All');

	const filteredPosts = $derived(
		selectedCategory === 'All'
			? data.posts
			: data.posts.filter((p) => p.category === selectedCategory)
	);

	// Helper to get solid color based on category
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

	// Helper to format category name
	function formatCategory(category: string): string {
		return category
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}
</script>

<svelte:head>
	<title>Sorrento Travel Blog - Tips, Guides & Local Insights | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Discover insider tips, travel guides, and local insights for Sorrento and the Amalfi Coast."
	/>
</svelte:head>

<div class="-mt-24">
	<!-- Hero Section -->
	<section class="relative flex min-h-[60vh] flex-col overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1920&q=80"
				alt="Sorrento blog"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>

		<div class="relative z-10">
			<Breadcrumb />
		</div>

		<div class="relative z-10 flex grow items-center justify-center">
			<div class="container mx-auto px-4 py-24 text-center text-white sm:px-6 lg:px-8">
				<div class="animate-fade-in-up">
					<h1 class="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">Sorrento Travel Blog</h1>
					<p class="heading-serif mx-auto max-w-3xl text-xl font-light text-white/90 sm:text-2xl">
						Insider tips, local stories, and travel guides from the heart of the Amalfi Coast
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Introduction -->
	<section class="relative bg-(--warm-white) py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-4xl text-center">
				<p class="text-xl leading-relaxed text-gray-600">
					Step into the daily rhythms of coastal life with visits to traditional boat workshops,
					secluded coves, and lemon groves. Enjoy immersive hikes, boating excursions, and local
					flavors that craft a Sorrento experience full of authentic charm and natural beauty. Find
					stories, tips, and inspiration for every traveler seeking their own unforgettable Sorrento
					adventure.
				</p>
			</div>
		</div>
	</section>

	<!-- Category Filter -->
	<section
		class="sticky top-0 z-40 border-b border-[color:var(--sand)] bg-white/95 py-8 shadow-sm backdrop-blur-md"
	>
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex flex-wrap justify-center gap-3">
				{#each categories as category}
					<Button
						variant={selectedCategory === category ? 'default' : 'outline'}
						onclick={() => (selectedCategory = category)}
						class={selectedCategory === category
							? 'bg-[color:var(--azure)] text-white transition-all duration-200 ease-out hover:bg-[color:var(--deep-azure)] hover:brightness-110'
							: 'border-2 border-[color:var(--sand)] transition-all duration-200 ease-out hover:border-[color:var(--azure)] hover:text-[color:var(--azure)]'}
					>
						{category}
					</Button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Blog Grid -->
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
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
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

	<!-- Newsletter CTA -->
	<section class="relative overflow-hidden bg-[color:var(--cream)] py-32">
		<div class="scroll-reveal container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl">
				<h2 class="mb-6 text-4xl font-bold text-[color:var(--charcoal)] sm:text-5xl">
					Never Miss a Post
				</h2>
				<p class="mb-10 text-xl text-[color:var(--stone)]">
					Subscribe to our newsletter for the latest travel tips, local insights, and exclusive
					guides
				</p>
				<a href="/#newsletter">
					<Button
						size="lg"
						class="group bg-[color:var(--azure)] px-10 py-7 text-lg text-white transition-all duration-200 ease-out hover:bg-[color:var(--deep-azure)] hover:shadow-lg hover:brightness-110"
					>
						<div class="flex items-center space-x-2">
							<span>Subscribe Now</span>
							<ArrowRight class="h-5 w-5" />
						</div>
					</Button>
				</a>
			</div>
		</div>
	</section>
</div>
