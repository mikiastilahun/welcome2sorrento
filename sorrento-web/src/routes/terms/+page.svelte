<script lang="ts">
	import { FileText } from 'lucide-svelte';
	import { PortableText } from '@portabletext/svelte';
	import type { TermsPage } from '$lib/sanity/queries';

	interface Props {
		data: {
			termsPage: TermsPage | null;
		};
	}

	let { data }: Props = $props();

	const pageData = data.termsPage || ({} as TermsPage);

	// SEO from CMS
	const seoTitle = pageData.seo?.metaTitle || 'Terms of Service | Welcome2Sorrento';
	const seoDescription =
		pageData.seo?.metaDescription ||
		'Welcome2Sorrento Terms of Service - Read our terms and conditions for using our services.';

	// Format the last updated date
	const formattedDate = pageData.lastUpdated
		? new Date(pageData.lastUpdated).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long'
			})
		: 'November 2024';
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
</svelte:head>

<!-- Hero -->
<section class="bg-(--warm-white) relative py-24 pb-1">
	<div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<div
				class="bg-(--azure) mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm"
			>
				<FileText class="h-8 w-8 text-white" />
			</div>
			<h1 class="text-(--charcoal) mb-4 font-serif text-4xl font-semibold sm:text-5xl">
				{pageData.title || 'Terms of Service'}
			</h1>
			<p class="text-(--stone) text-lg">
				{pageData.subtitle || 'Please read these terms carefully'}
			</p>
		</div>
	</div>
</section>

<!-- Content -->
<div class="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="border-(--sand) rounded-2xl border bg-white p-8 shadow-sm sm:p-12">
		<div class="prose prose-lg max-w-none">
			<p class="text-(--stone) mb-8 text-sm">
				<strong>Last Updated:</strong>
				{formattedDate}
			</p>

			{#if pageData.content && pageData.content.length > 0}
				<div class="legal-content">
					<PortableText value={pageData.content} />
				</div>
			{:else}
				<!-- Fallback content when CMS is empty -->
				<h2 class="text-(--azure) mb-6 mt-12 font-serif text-3xl font-semibold">
					Agreement to Terms
				</h2>
				<p class="text-(--charcoal) mb-6 leading-relaxed">
					By accessing and using Welcome2Sorrento's website and services, you agree to be bound by
					these Terms of Service. If you disagree with any part of these terms, please do not use
					our services.
				</p>

				<h2 class="text-(--azure) mb-6 mt-12 font-serif text-3xl font-semibold">Our Services</h2>
				<p class="text-(--charcoal) mb-4 leading-relaxed">
					Welcome2Sorrento provides travel information, guides, and booking assistance services for
					the Sorrento Peninsula and surrounding areas. Our services include:
				</p>
				<ul class="text-(--charcoal) mb-6 ml-6 list-disc space-y-2 leading-relaxed">
					<li>Travel guides and recommendations</li>
					<li>Restaurant and accommodation booking assistance</li>
					<li>Tour and activity arrangements</li>
					<li>Custom itinerary planning</li>
				</ul>

				<h2 class="text-(--azure) mb-6 mt-12 font-serif text-3xl font-semibold">
					Booking Service Terms
				</h2>
				<p class="text-(--charcoal) mb-4 leading-relaxed">When you use our booking service:</p>
				<ul class="text-(--charcoal) mb-6 ml-6 list-disc space-y-2 leading-relaxed">
					<li>We act as an intermediary between you and service providers</li>
					<li>Service fees are non-refundable once bookings are confirmed</li>
					<li>You are responsible for payments to restaurants, hotels, and tour operators</li>
					<li>Cancellation policies vary by provider and will be communicated to you</li>
				</ul>

				<h2 class="text-(--azure) mb-6 mt-12 font-serif text-3xl font-semibold">
					Limitation of Liability
				</h2>
				<p class="text-(--charcoal) mb-4 leading-relaxed">
					Welcome2Sorrento provides information and assistance in good faith. However, we are not
					liable for:
				</p>
				<ul class="text-(--charcoal) mb-6 ml-6 list-disc space-y-2 leading-relaxed">
					<li>Changes or closures by third-party service providers</li>
					<li>Travel disruptions due to weather, strikes, or other circumstances</li>
					<li>Personal injuries or losses during your trip</li>
					<li>Accuracy of information provided by third parties</li>
				</ul>

				<h2 class="text-(--azure) mb-6 mt-12 font-serif text-3xl font-semibold">
					Intellectual Property
				</h2>
				<p class="text-(--charcoal) mb-6 leading-relaxed">
					All content on this website, including text, images, and logos, is the property of
					Welcome2Sorrento or used with permission. You may not reproduce or distribute our content
					without written permission.
				</p>

				<h2 class="text-(--azure) mb-6 mt-12 font-serif text-3xl font-semibold">
					Changes to Terms
				</h2>
				<p class="text-(--charcoal) mb-6 leading-relaxed">
					We reserve the right to modify these terms at any time. Continued use of our services
					after changes constitutes acceptance of the new terms.
				</p>

				<h2 class="text-(--azure) mb-6 mt-12 font-serif text-3xl font-semibold">Contact</h2>
				<p class="text-(--charcoal) leading-relaxed">
					Questions about these Terms of Service? Contact us at
					<a
						href="mailto:margheroba@email.com"
						class="text-(--azure) hover:text-(--deep-azure) font-semibold transition-colors"
					>
						margheroba@email.com
					</a>
				</p>
			{/if}
		</div>
	</div>
</div>

<style>
	/* Legal content styling for PortableText */
	.legal-content :global(h2) {
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		font-family: var(--font-serif);
		font-size: 1.875rem;
		font-weight: 600;
		color: var(--azure);
	}

	.legal-content :global(h3) {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-family: var(--font-serif);
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--charcoal);
	}

	.legal-content :global(h4) {
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
		font-family: var(--font-serif);
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--charcoal);
	}

	.legal-content :global(p) {
		margin-bottom: 1.5rem;
		line-height: 1.75;
		color: var(--charcoal);
	}

	.legal-content :global(ul),
	.legal-content :global(ol) {
		margin-bottom: 1.5rem;
		margin-left: 1.5rem;
		list-style-type: disc;
	}

	.legal-content :global(ol) {
		list-style-type: decimal;
	}

	.legal-content :global(li) {
		margin-bottom: 0.5rem;
		line-height: 1.75;
		color: var(--charcoal);
	}

	.legal-content :global(a) {
		font-weight: 600;
		color: var(--azure);
		transition: color 0.2s;
	}

	.legal-content :global(a:hover) {
		color: var(--deep-azure);
	}

	.legal-content :global(strong) {
		font-weight: 600;
	}

	.legal-content :global(em) {
		font-style: italic;
	}
</style>
