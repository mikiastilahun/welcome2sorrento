<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/sanity/image';
	import type { BlogPost } from '$lib/sanity/queries';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2 } from '@lucide/svelte';

	interface Props {
		data: {
			post: BlogPost;
		};
	}

	let { data }: Props = $props();

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

	function formatCategory(category: string): string {
		return category
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	const gradient = $derived(getCategoryGradient(data.post.category));
</script>

<svelte:head>
	<title>{data.post.title} | Welcome2Sorrento Blog</title>
	<meta name="description" content={data.post.excerpt} />
</svelte:head>

<div class="-mt-24">
	<!-- Hero Section -->
	<section class="relative flex min-h-[70vh] flex-col overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			{#if data.post.mainImage}
				<img
					src={urlFor(data.post.mainImage).width(1920).height(1080).url()}
					alt={data.post.title}
					class="h-full w-full object-cover"
				/>
			{/if}
			<div
				class="absolute inset-0 bg-gradient-to-br from-[color:var(--dark)]/80 via-[color:var(--deep-purple)]/60 to-[color:var(--dark)]/80"
			></div>
		</div>

		<div class="relative z-10">
			<Breadcrumb />
		</div>

		<div class="relative z-10 flex flex-grow items-center justify-center">
			<div class="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-4xl text-center text-white">
					<Badge class="mb-6 bg-gradient-to-r {gradient} border-0 px-4 py-2 text-white shadow-lg">
						{formatCategory(data.post.category)}
					</Badge>

					<h1 class="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
						{data.post.title}
					</h1>

					<p class="heading-serif mx-auto mb-8 max-w-3xl text-xl font-light text-white/90">
						{data.post.excerpt}
					</p>

					<div class="flex flex-wrap items-center justify-center gap-6 text-white/80">
						{#if data.post.author}
							<div class="flex items-center space-x-2">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br {gradient} text-sm font-bold text-white"
								>
									{data.post.author.name
										.split(' ')
										.map((n) => n[0])
										.join('')}
								</div>
								<span class="font-medium">{data.post.author.name}</span>
							</div>
						{/if}
						<div class="flex items-center space-x-2">
							<Calendar class="h-5 w-5" />
							<span
								>{new Date(data.post.publishedAt).toLocaleDateString('en-US', {
									month: 'long',
									day: 'numeric',
									year: 'numeric'
								})}</span
							>
						</div>
						<div class="flex items-center space-x-2">
							<Clock class="h-5 w-5" />
							<span>{data.post.readTime}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Article Content -->
	<section class="relative bg-white py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<article class="mx-auto max-w-4xl">
				<!-- Article Body -->
				<div class="prose prose-lg max-w-none">
					{#if data.post.body}
						<PortableText value={data.post.body} />
					{/if}
				</div>

				<!-- Tags -->
				{#if data.post.tags && data.post.tags.length > 0}
					<div class="mt-12 border-t-2 border-[color:var(--off-white)] pt-8">
						<h3 class="mb-4 text-lg font-bold text-[color:var(--dark)]">Tags</h3>
						<div class="flex flex-wrap gap-2">
							{#each data.post.tags as tag}
								<Badge variant="outline" class="border-[color:var(--purple-lavender)] text-sm">
									{tag}
								</Badge>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Author Bio -->
				{#if data.post.author}
					<div class="mt-12 rounded-3xl border-2 border-[color:var(--off-white)] bg-white p-8">
						<h3 class="mb-4 text-xl font-bold text-[color:var(--dark)]">About the Author</h3>
						<div class="flex items-start space-x-4">
							<div
								class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br {gradient} text-2xl font-bold text-white"
							>
								{data.post.author.name
									.split(' ')
									.map((n) => n[0])
									.join('')}
							</div>
							<div>
								<h4 class="mb-2 text-lg font-bold text-[color:var(--dark)]">
									{data.post.author.name}
								</h4>
								{#if data.post.author.bio}
									<p class="text-gray-600">{data.post.author.bio}</p>
								{/if}
							</div>
						</div>
					</div>
				{/if}

				<!-- Navigation -->
				<div class="mt-12 flex flex-col justify-between gap-4 sm:flex-row">
					<a href="/blog">
						<Button variant="outline" class="w-full sm:w-auto">
							<ArrowLeft class="mr-2 h-4 w-4" />
							Back to Blog
						</Button>
					</a>
					<Button variant="outline" class="w-full sm:w-auto">
						<Share2 class="mr-2 h-4 w-4" />
						Share Article
					</Button>
				</div>
			</article>
		</div>
	</section>

	<!-- Related Posts -->
	{#if data.post.relatedPosts && data.post.relatedPosts.length > 0}
		<section class="relative bg-gradient-to-b from-white via-[color:var(--off-white)] to-white py-20">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="mb-12 text-center">
					<h2 class="mb-4 text-3xl font-bold text-[color:var(--dark)] sm:text-4xl">
						Related <span class="text-gradient">Articles</span>
					</h2>
				</div>

				<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
					{#each data.post.relatedPosts as relatedPost}
						{@const relatedGradient = getCategoryGradient(relatedPost.category)}
						<a href="/blog/{relatedPost.slug.current}" class="group block">
							<Card
								class="flex h-full flex-col overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-[color:var(--purple-lavender)] hover:shadow-2xl"
							>
								<div class="relative h-48 overflow-hidden">
									{#if relatedPost.mainImage}
										<img
											src={urlFor(relatedPost.mainImage).width(600).height(400).url()}
											alt={relatedPost.title}
											class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>
									{/if}
									<div
										class="absolute inset-0 bg-gradient-to-t from-[color:var(--dark)]/80 to-transparent"
									></div>
									<div class="absolute top-4 left-4">
										<Badge class="bg-gradient-to-r {relatedGradient} border-0 text-white">
											{formatCategory(relatedPost.category)}
										</Badge>
									</div>
								</div>
								<CardContent class="flex flex-grow flex-col p-6">
									<h3 class="mb-2 text-lg font-bold text-[color:var(--dark)]">
										{relatedPost.title}
									</h3>
									<p class="mb-4 flex-grow text-sm text-gray-600">
										{relatedPost.excerpt}
									</p>
									<div class="flex items-center text-sm text-[color:var(--purple-lavender)]">
										<span>Read More</span>
										<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
									</div>
								</CardContent>
							</Card>
						</a>
					{/each}
				</div>
			</div>
		</section>
	{/if}
</div>

