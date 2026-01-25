<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import type { Destination, SiteSettings } from '$lib/sanity/queries';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		featuredDestinations: Destination[];
		siteSettings: SiteSettings | null;
	}

	let { featuredDestinations, siteSettings }: Props = $props();

	// Get section content from CMS
	const sectionHeading = siteSettings?.destinationsSection?.heading || 'Day Trips';
	const sectionSubheading =
		siteSettings?.destinationsSection?.subheading ||
		'Discover world-renowned destinations just a short journey away';
	const ctaText = siteSettings?.destinationsSection?.ctaText || 'View All Destinations';
</script>

<section class="bg-white py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mb-12 text-center" use:reveal>
			<h2
				class="heading-serif mb-4 text-3xl font-semibold text-[var(--charcoal)] sm:text-4xl lg:text-5xl"
			>
				{sectionHeading}
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-[var(--stone)]">
				{sectionSubheading}
			</p>
		</div>

		<div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each featuredDestinations as destination, index}
				{#if destination.cardImage?.asset?.url}
					<div class="scroll-reveal" style="transition-delay: {index * 100}ms" use:reveal>
						<a href="/surrounding/{destination.slug.current}" class="group block">
							<div
								class="overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
							>
								<div class="relative aspect-[4/5] overflow-hidden">
									<img
										src={destination.cardImage.asset.url}
										alt={destination.name}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
									></div>

									<div class="absolute bottom-0 left-0 right-0 p-6 text-white">
										<h3 class="heading-serif mb-2 text-2xl font-semibold">
											{destination.name}
										</h3>
										<p class="mb-3 line-clamp-2 text-sm text-white/90">
											{destination.subtitle || destination.shortDescription || ''}
										</p>
										<div
											class="flex items-center text-sm font-medium transition-transform duration-200 group-hover:translate-x-2"
										>
											<span>Discover</span>
											<ArrowRight class="ml-2 h-4 w-4" />
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
				{/if}
			{/each}
		</div>

		<div class="scroll-reveal text-center" use:reveal>
			<a
				href="/surrounding"
				class="inline-flex items-center gap-2 rounded-full border-2 border-[var(--charcoal)] px-6 py-3 font-medium text-[var(--charcoal)] transition-all hover:bg-[var(--charcoal)] hover:text-white"
			>
				<span>{ctaText}</span>
				<ArrowRight class="h-4 w-4" />
			</a>
		</div>
	</div>
</section>
