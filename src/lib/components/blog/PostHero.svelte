<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { FloatingElements } from '$lib/components/ui/decorative';
	import { Calendar, Clock } from '@lucide/svelte';
	import { formatCategory } from '$lib/utils';
	import type { BlogPost } from '$lib/sanity/queries';

	interface Props {
		post: BlogPost;
	}

	let { post }: Props = $props();

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

	const categoryColor = getCategoryColor(post.category);
</script>

<section class="relative flex min-h-[60vh] flex-col overflow-hidden pt-24">
	<!-- Ken Burns animated background -->
	<div class="absolute inset-0 z-0">
		<div class="animate-ken-burns h-full w-full">
			{#if post.mainImage?.asset?.url}
				<img src={post.mainImage.asset.url} alt={post.title} class="h-full w-full object-cover" />
			{/if}
		</div>
		<!-- Gradient overlays -->
		<div class="absolute inset-0 bg-gradient-to-b from-[var(--charcoal)]/40 via-[var(--charcoal)]/50 to-[var(--charcoal)]/70"></div>
		<div class="absolute inset-0 bg-gradient-to-r from-[var(--deep-azure)]/20 to-transparent"></div>
		<!-- Film grain -->
		<div class="film-grain pointer-events-none absolute inset-0"></div>
	</div>

	<!-- Floating decorative elements -->
	<FloatingElements variant="mixed" density="sparse" opacity={0.1} class="z-5" />

	<div class="relative z-10 w-full">
		<Breadcrumb />
	</div>

	<div class="relative z-10 flex grow items-center justify-center">
		<div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
			<!-- Postcard-style frame -->
			<div 
				class="stagger-reveal mx-auto max-w-4xl rounded-xl border border-white/10 bg-black/20 p-8 text-center text-white backdrop-blur-sm md:p-12"
				style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.3), inset 0 0 80px rgba(255,255,255,0.02);"
			>
				<!-- Decorative corners -->
				<div class="pointer-events-none absolute top-4 left-4 h-6 w-6 opacity-40">
					<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--{categoryColor})]">
						<path d="M2 2v8M2 2h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
					</svg>
				</div>
				<div class="pointer-events-none absolute top-4 right-4 h-6 w-6 opacity-40">
					<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--{categoryColor})]">
						<path d="M22 2v8M22 2h-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
					</svg>
				</div>
				<div class="pointer-events-none absolute bottom-4 left-4 h-6 w-6 opacity-40">
					<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--{categoryColor})]">
						<path d="M2 22v-8M2 22h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
					</svg>
				</div>
				<div class="pointer-events-none absolute right-4 bottom-4 h-6 w-6 opacity-40">
					<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--{categoryColor})]">
						<path d="M22 22v-8M22 22h-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
					</svg>
				</div>

				<Badge class="mb-6 border-0 bg-[var(--{categoryColor})] px-4 py-2 text-white shadow-lg">
					{formatCategory(post.category)}
				</Badge>

				<h1 class="heading-serif mb-6 text-3xl font-semibold sm:text-4xl lg:text-5xl">
					{post.title}
				</h1>

				<p class="mx-auto mb-8 max-w-3xl text-lg font-light leading-relaxed text-white/90">
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
						<span>
							{new Date(post.publishedAt).toLocaleDateString('en-US', {
								month: 'long',
								day: 'numeric',
								year: 'numeric'
							})}
						</span>
					</div>
					<div class="flex items-center space-x-2">
						<Clock class="h-5 w-5" />
						<span>{post.readTime}</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Wave decoration at bottom -->
	<div class="absolute right-0 bottom-0 left-0 z-10">
		<svg
			class="h-16 w-full"
			viewBox="0 0 1200 60"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0,60 C200,20 400,50 600,30 C800,10 1000,40 1200,20 L1200,60 L0,60 Z"
				fill="white"
			></path>
		</svg>
	</div>
</section>
