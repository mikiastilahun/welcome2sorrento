<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { Calendar, User, ArrowRight, BookOpen, Sparkles } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { urlFor } from '$lib/sanity/image';
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
	const allCategories = $derived(
		Array.from(new Set(data.posts.map((p) => p.category))).sort()
	);
	const categories = $derived(['All', ...allCategories]);
	
	let selectedCategory = $state('All');

	const filteredPosts = $derived(
		selectedCategory === 'All'
			? data.posts
			: data.posts.filter((p) => p.category === selectedCategory)
	);

	// Helper to get gradient based on category
	function getCategoryGradient(category: string): string {
		const gradients: Record<string, string> = {
			'local-culture': 'from-yellow-500 to-orange-500',
			'beaches': 'from-blue-500 to-cyan-500',
			'travel-tips': 'from-purple-500 to-pink-500',
			'day-trips': 'from-green-500 to-teal-500',
			'food-drink': 'from-red-500 to-orange-500'
		};
		return gradients[category] || 'from-indigo-500 to-purple-500';
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
	<section class="relative flex min-h-[70vh] flex-col overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1920&q=80"
				alt="Sorrento blog"
				class="h-full w-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-br from-[color:var(--dark)]/80 via-[color:var(--deep-purple)]/60 to-[color:var(--dark)]/80"
			></div>
		</div>

		<div class="relative z-10">
			<Breadcrumb />
		</div>

		<div class="relative z-10 flex flex-grow items-center justify-center">
			<div class="container mx-auto px-4 py-32 text-center text-white sm:px-6 lg:px-8">
				<div class="animate-fade-in-up">
					<div
						class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[color:var(--purple-lavender)] to-[color:var(--turquoise)] shadow-2xl"
					>
						<BookOpen class="h-10 w-10 text-white" />
					</div>
					<h1 class="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
						<span class="text-gradient">Sorrento</span> Travel Blog
					</h1>
					<p class="heading-serif mx-auto max-w-3xl text-xl font-light text-white/90 sm:text-2xl">
						Insider tips, local stories, and travel guides from the heart of the Amalfi Coast
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Category Filter -->
	<section
		class="sticky top-0 z-40 border-b border-gray-200 bg-white/95 py-8 shadow-md backdrop-blur-md"
	>
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex flex-wrap justify-center gap-3">
				{#each categories as category}
					<Button
						variant={selectedCategory === category ? 'default' : 'outline'}
						onclick={() => (selectedCategory = category)}
						class={selectedCategory === category
							? 'bg-gradient-to-r from-[color:var(--purple-lavender)] to-[color:var(--turquoise)] text-white transition-all duration-300 hover:shadow-lg'
							: 'border-2 transition-all duration-300 hover:border-[color:var(--purple-lavender)] hover:text-[color:var(--purple-lavender)]'}
					>
						{category}
					</Button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Featured Post -->
	{#if selectedCategory === 'All' && filteredPosts.length > 0}
		{@const featuredPost = filteredPosts[0]}
		{@const gradient = getCategoryGradient(featuredPost.category)}
		<section class="mesh-gradient relative py-32">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="scroll-reveal mx-auto max-w-6xl">
					<div
						class="mb-8 inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-[color:var(--purple-lavender)] to-[color:var(--turquoise)] px-4 py-2 text-white shadow-lg"
					>
						<Sparkles class="h-4 w-4" />
						<span class="text-sm font-bold">Featured Post</span>
					</div>

					<a href="/blog/{featuredPost.slug.current}" class="group block">
						<div class="relative overflow-hidden rounded-3xl">
							<div
								class="absolute inset-0 bg-gradient-to-r {gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20"
							></div>
							<div
								class="relative overflow-hidden rounded-3xl border-2 border-transparent bg-white shadow-xl transition-all duration-500 group-hover:border-[color:var(--purple-lavender)] group-hover:shadow-2xl"
							>
								<div class="grid grid-cols-1 lg:grid-cols-2">
									<div class="relative h-96 overflow-hidden lg:h-[500px]">
										{#if featuredPost.mainImage}
											<img
												src={urlFor(featuredPost.mainImage).width(800).height(500).url()}
												alt={featuredPost.title}
												class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
											/>
										{/if}
										<div
											class="absolute inset-0 bg-gradient-to-t from-[color:var(--dark)]/80 to-transparent"
										></div>
										<div class="absolute top-6 left-6">
											<Badge
												class="bg-gradient-to-r {gradient} border-0 px-4 py-1.5 text-sm text-white shadow-lg"
											>
												{formatCategory(featuredPost.category)}
											</Badge>
										</div>
									</div>

									<CardContent class="flex flex-col justify-center p-8 lg:p-12">
										<h2
											class="mb-6 text-3xl font-bold text-[color:var(--dark)] group-hover:bg-gradient-to-r group-hover:text-transparent sm:text-4xl lg:text-5xl group-hover:{gradient} transition-all duration-500 group-hover:bg-clip-text"
										>
											{featuredPost.title}
										</h2>
										<p class="mb-6 text-lg leading-relaxed text-muted-foreground">
											{featuredPost.excerpt}
										</p>
										<div
											class="mb-8 flex flex-wrap items-center gap-4 border-b-2 border-[color:var(--off-white)] pb-8 text-sm text-muted-foreground"
										>
											<div class="flex items-center space-x-2">
												<div
													class="h-8 w-8 rounded-lg bg-gradient-to-br {gradient} flex items-center justify-center text-xs font-bold text-white"
												>
													{featuredPost.author
														.split(' ')
														.map((n) => n[0])
														.join('')}
												</div>
												<span class="font-medium">{featuredPost.author}</span>
											</div>
											<div class="flex items-center space-x-2">
												<Calendar class="h-4 w-4" />
												<span
													>{new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
														month: 'long',
														day: 'numeric',
														year: 'numeric'
													})}</span
												>
											</div>
											<span>{featuredPost.readTime}</span>
										</div>
										<Button
											size="lg"
											class="w-fit bg-gradient-to-r {gradient} text-white transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[color:var(--purple-lavender)]/50"
										>
											<span class="flex items-center space-x-2">
												<span>Read Full Article</span>
												<ArrowRight
													class="h-5 w-5 transition-transform group-hover:translate-x-2"
												/>
											</span>
										</Button>
									</CardContent>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	{/if}

	<!-- Blog Grid -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			{#if filteredPosts.length === 0}
				<div class="py-20 text-center">
					<BookOpen class="mx-auto mb-4 h-16 w-16 text-muted-foreground opacity-50" />
					<h3 class="mb-2 text-2xl font-bold text-[color:var(--dark)]">No Posts Found</h3>
					<p class="text-muted-foreground">
						{selectedCategory === 'All'
							? 'No blog posts have been published yet. Check back soon!'
							: `No posts found in the "${formatCategory(selectedCategory)}" category.`}
					</p>
				</div>
			{:else}
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each filteredPosts.slice(selectedCategory === 'All' ? 1 : 0) as post, index}
						{@const gradient = getCategoryGradient(post.category)}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<a href="/blog/{post.slug.current}" class="group block h-full">
								<Card
									class="flex h-full flex-col overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-[color:var(--purple-lavender)] hover:shadow-2xl"
								>
									<div class="relative h-64 overflow-hidden">
										{#if post.mainImage}
											<img
												src={urlFor(post.mainImage).width(600).height(400).url()}
												alt={post.title}
												class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
											/>
										{/if}
										<div
											class="absolute inset-0 bg-gradient-to-t from-[color:var(--dark)]/60 to-transparent"
										></div>
										<div class="absolute top-4 left-4">
											<Badge class="bg-gradient-to-r {gradient} border-0 text-white shadow-lg">
												{formatCategory(post.category)}
											</Badge>
										</div>
										<div
											class="glass absolute right-4 bottom-4 rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white"
										>
											{post.readTime}
										</div>
									</div>

									<CardContent class="flex flex-grow flex-col p-6">
										<h3
											class="mb-3 text-xl font-bold text-[color:var(--dark)] group-hover:bg-gradient-to-r group-hover:text-transparent group-hover:{gradient} transition-all duration-500 group-hover:bg-clip-text"
										>
											{post.title}
										</h3>
										<p class="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground">
											{post.excerpt}
										</p>
										<div
											class="flex flex-wrap items-center gap-3 border-t-2 border-[color:var(--off-white)] pt-4 text-xs text-muted-foreground"
										>
											<div class="flex items-center space-x-2">
												<div
													class="h-6 w-6 rounded-lg bg-gradient-to-br {gradient} flex items-center justify-center text-[10px] font-bold text-white"
												>
													{post.author
														.split(' ')
														.map((n) => n[0])
														.join('')}
												</div>
												<span class="font-medium">{post.author}</span>
											</div>
											<div class="flex items-center space-x-1">
												<Calendar class="h-3 w-3" />
												<span
													>{new Date(post.publishedAt).toLocaleDateString('en-US', {
														month: 'short',
														day: 'numeric'
													})}</span
												>
											</div>
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
	<section class="relative overflow-hidden py-32">
		<div
			class="animate-gradient absolute inset-0 bg-gradient-to-br from-[color:var(--purple-lavender)] via-[color:var(--deep-purple)] to-[color:var(--dark)]"
		></div>

		<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-white">
				<div
					class="glass mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20"
				>
					<Sparkles class="h-8 w-8" />
				</div>
				<h2 class="mb-6 text-4xl font-bold sm:text-5xl">Never Miss a Post</h2>
				<p class="mb-10 text-xl text-white/90">
					Subscribe to our newsletter for the latest travel tips, local insights, and exclusive
					guides
				</p>
				<a href="/#newsletter">
					<Button
						size="lg"
						class="bg-white px-10 py-7 text-lg text-[color:var(--dark)] shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-[color:var(--off-white)]"
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
