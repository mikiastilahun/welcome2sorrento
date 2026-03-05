<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { EatPage } from '$lib/sanity/queries';

	interface Props {
		pageData?: EatPage | null;
	}

	let { pageData = null }: Props = $props();

	const heading = pageData?.cta?.heading || 'Need Restaurant Recommendations?';
	const description =
		pageData?.cta?.description || 'Let us help you book a table at the perfect restaurant';
	const buttonText = pageData?.cta?.buttonText || 'Contact Us';
	const buttonLink = pageData?.cta?.buttonLink || '/contact';
	const backgroundImage = pageData?.cta?.backgroundImage?.asset?.url || '';
</script>

<section class="relative py-20">
	<div class="absolute inset-0">
		{#if backgroundImage}
			<img src={backgroundImage} alt="Italian cuisine" class="h-full w-full object-cover" />
		{/if}
		<div class="absolute inset-0 bg-black/50"></div>
	</div>

	<div
		class="scroll-reveal container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8"
		use:reveal
	>
		<div class="mx-auto max-w-2xl text-white">
			<h2 class="heading-serif mb-4 text-3xl font-semibold sm:text-4xl">
				{heading}
			</h2>
			<p class="mb-8 text-lg text-white/90">
				{description}
			</p>
			<a
				href={buttonLink}
				class="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[var(--charcoal)] transition-all hover:bg-white/90"
			>
				<span>{buttonText}</span>
				<ArrowRight class="h-5 w-5" />
			</a>
		</div>
	</div>
</section>
