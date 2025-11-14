<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { BlogPost } from '$lib/sanity/queries';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from '@lucide/svelte';

	interface Props {
		data: {
			post: BlogPost;
		};
	}

	let { data }: Props = $props();

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

	function formatCategory(category: string): string {
		return category
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}
</script>

<svelte:head>
	<title>{data.post.title} | Welcome2Sorrento Blog</title>
	<meta name="description" content={data.post.excerpt} />
</svelte:head>

<div class="-mt-24">
	<!-- Hero Section -->
	<section class="relative flex min-h-[60vh] flex-col overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			{#if data.post.mainImage?.asset?.url}
				<img
					src={data.post.mainImage.asset.url}
					alt={data.post.title}
					class="h-full w-full object-cover"
				/>
			{/if}
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>

		<div class="relative z-10">
			<Breadcrumb />
		</div>

		<div class="relative z-10 flex grow items-center justify-center">
			<div class="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-4xl text-center text-white">
					<Badge class="mb-6 {getCategoryColor(data.post.category)} border-0 px-4 py-2 text-white">
						{formatCategory(data.post.category)}
					</Badge>

					<h1 class="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
						{data.post.title}
					</h1>

					<p class="heading-serif mx-auto mb-8 max-w-3xl text-xl font-light text-white/90">
						{data.post.excerpt}
					</p>

					<div class="flex flex-wrap items-center justify-center gap-6 text-white/90">
						{#if data.post.author}
							<div class="flex items-center space-x-2">
								<span class="font-medium">{data.post.author}</span>
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
					<div class="mt-12 border-t border-[color:var(--sand)] pt-8">
						<h3 class="mb-4 text-lg font-bold text-[color:var(--charcoal)]">Tags</h3>
						<div class="flex flex-wrap gap-2">
							{#each data.post.tags as tag}
								<Badge variant="outline" class="border-[color:var(--azure)] text-sm">
									{tag}
								</Badge>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Author Bio -->
				{#if data.post.author && typeof data.post.author === 'string'}
					<div class="mt-12 rounded-2xl border border-(--sand) bg-(--cream) p-8">
						<h3 class="mb-4 text-xl font-bold text-(--charcoal)">About the Author</h3>
						<div class="flex items-start space-x-4">
							<div
								class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-(--azure) text-2xl font-bold text-white"
							>
								{data.post.author
									.split(' ')
									.map((n: string) => n[0])
									.join('')}
							</div>
							<div>
								<h4 class="mb-2 text-lg font-bold text-(--charcoal)">
									{data.post.author}
								</h4>
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
		<section class="relative bg-[color:var(--cream)] py-20">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="mb-12 text-center">
					<h2 class="mb-4 text-3xl font-bold text-[color:var(--charcoal)] sm:text-4xl">
						Related Articles
					</h2>
				</div>

				<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
					{#each data.post.relatedPosts as relatedPost}
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
</div>
