<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { Calendar, Clock } from '@lucide/svelte';
	import { formatCategory } from '$lib/utils';
	import type { BlogPost } from '$lib/sanity/queries';

	interface Props {
		post: BlogPost;
	}

	let { post }: Props = $props();

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

<section class="relative flex min-h-[60vh] flex-col overflow-hidden pt-24">
	<div class="absolute inset-0 z-0">
		{#if post.mainImage?.asset?.url}
			<img src={post.mainImage.asset.url} alt={post.title} class="h-full w-full object-cover" />
		{/if}
		<div class="absolute inset-0 bg-(--charcoal)/50"></div>
	</div>

	<div class="relative z-10">
		<Breadcrumb />
	</div>

	<div class="relative z-10 flex grow items-center justify-center">
		<div class="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center text-white">
				<Badge class="mb-6 {getCategoryColor(post.category)} border-0 px-4 py-2 text-white">
					{formatCategory(post.category)}
				</Badge>

				<h1 class="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
					{post.title}
				</h1>

				<p class="heading-serif mx-auto mb-8 max-w-3xl text-xl font-light text-white/90">
					{post.excerpt}
				</p>

				<div class="flex flex-wrap items-center justify-center gap-6 text-white/90">
					{#if post.author}
						<div class="flex items-center space-x-2">
							<span class="font-medium">{post.author}</span>
						</div>
					{/if}
					<div class="flex items-center space-x-2">
						<Calendar class="h-5 w-5" />
						<span
							>{new Date(post.publishedAt).toLocaleDateString('en-US', {
								month: 'long',
								day: 'numeric',
								year: 'numeric'
							})}</span
						>
					</div>
					<div class="flex items-center space-x-2">
						<Clock class="h-5 w-5" />
						<span>{post.readTime}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

