<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { SiteSettings } from '$lib/sanity/queries';

	interface Props {
		siteSettings: SiteSettings | null;
	}

	let { siteSettings }: Props = $props();

	// Get CTA content from CMS
	const heading = siteSettings?.homeCTA?.heading || 'Ready for Your Adventure?';
	const description =
		siteSettings?.homeCTA?.description ||
		'Let us help you plan the perfect trip to Sorrento and the Amalfi Coast.';
	const primaryButtonText = siteSettings?.homeCTA?.primaryButtonText || 'Get in Touch';
	const primaryButtonLink = siteSettings?.homeCTA?.primaryButtonLink || '/contact';
	const secondaryButtonText = siteSettings?.homeCTA?.secondaryButtonText || 'Learn More';
	const secondaryButtonLink = siteSettings?.homeCTA?.secondaryButtonLink || '/about';
	const backgroundImage = siteSettings?.homeCTA?.backgroundImage?.asset?.url || '';
</script>

<section class="relative py-24">
	<!-- Background image -->
	<div class="absolute inset-0">
		{#if backgroundImage}
			<img src={backgroundImage} alt="Sorrento" class="h-full w-full object-cover" />
		{/if}
		<div class="absolute inset-0 bg-black/50"></div>
	</div>

	<div class="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-2xl" use:reveal>
			<h2 class="heading-serif mb-6 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
				{heading}
			</h2>

			<p class="mb-8 text-lg text-white/90">
				{description}
			</p>

			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href={primaryButtonLink}
					class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[var(--charcoal)] shadow-lg transition-all hover:bg-white/90"
				>
					<span>{primaryButtonText}</span>
					<ArrowRight class="h-5 w-5" />
				</a>

				<a
					href={secondaryButtonLink}
					class="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 font-medium text-white transition-all hover:bg-white/10"
				>
					<span>{secondaryButtonText}</span>
				</a>
			</div>
		</div>
	</div>
</section>
