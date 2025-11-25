<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowLeft, Share2 } from '@lucide/svelte';
	import type { BlogPost } from '$lib/sanity/queries';

	interface Props {
		post: BlogPost;
	}

	let { post }: Props = $props();
</script>

<section class="relative bg-white py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<article class="mx-auto max-w-4xl">
			<!-- Article Body -->
			<div class="prose prose-lg max-w-none">
				{#if post.body}
					<PortableText value={post.body} />
				{/if}
			</div>

			<!-- Tags -->
			{#if post.tags && post.tags.length > 0}
				<div class="mt-12 border-t border-[color:var(--sand)] pt-8">
					<h3 class="mb-4 text-lg font-bold text-[color:var(--charcoal)]">Tags</h3>
					<div class="flex flex-wrap gap-2">
						{#each post.tags as tag}
							<Badge variant="outline" class="border-[color:var(--azure)] text-sm">
								{tag}
							</Badge>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Author Bio -->
			{#if post.author && typeof post.author === 'string'}
				<div class="mt-12 rounded-2xl border border-(--sand) bg-(--cream) p-8">
					<h3 class="mb-4 text-xl font-bold text-(--charcoal)">About the Author</h3>
					<div class="flex items-start space-x-4">
						<div
							class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-(--azure) text-2xl font-bold text-white"
						>
							{post.author
								.split(' ')
								.map((n: string) => n[0])
								.join('')}
						</div>
						<div>
							<h4 class="mb-2 text-lg font-bold text-(--charcoal)">
								{post.author}
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

