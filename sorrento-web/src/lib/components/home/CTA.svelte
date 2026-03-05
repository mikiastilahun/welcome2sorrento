<script lang="ts">
	import { Instagram, Facebook, Youtube } from '@lucide/svelte';
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
	const backgroundImage = siteSettings?.homeCTA?.backgroundImage?.asset?.url || '';

	// Get social links from CMS
	const instagramUrl = siteSettings?.socialMedia?.instagram || 'https://instagram.com';
	const facebookUrl = siteSettings?.socialMedia?.facebook || 'https://facebook.com';
	const youtubeUrl = siteSettings?.socialMedia?.youtube || 'https://youtube.com';
	const tiktokUrl = siteSettings?.socialMedia?.tiktok || 'https://tiktok.com';
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

			<!-- Social Media Icons -->
			<div class="flex justify-center gap-4">
				<a
					href={instagramUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]"
					aria-label="Follow us on Instagram"
				>
					<Instagram
						class="h-6 w-6 text-[var(--charcoal)] transition-colors group-hover:text-white"
					/>
				</a>

				<a
					href={tiktokUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-black"
					aria-label="Follow us on TikTok"
				>
					<svg
						class="h-6 w-6 text-[var(--charcoal)] transition-colors group-hover:text-white"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
						/>
					</svg>
				</a>

				<a
					href={facebookUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#1877F2]"
					aria-label="Follow us on Facebook"
				>
					<Facebook
						class="h-6 w-6 text-[var(--charcoal)] transition-colors group-hover:text-white"
					/>
				</a>

				<a
					href={youtubeUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#FF0000]"
					aria-label="Subscribe on YouTube"
				>
					<Youtube
						class="h-6 w-6 text-[var(--charcoal)] transition-colors group-hover:text-white"
					/>
				</a>
			</div>
		</div>
	</div>
</section>
