<script lang="ts">
	import { Shield } from 'lucide-svelte';
	import { PortableText } from '@portabletext/svelte';
	import type { PrivacyPage } from '$lib/sanity/queries';

	interface Props {
		data: {
			privacyPage: PrivacyPage | null;
		};
	}

	let { data }: Props = $props();

	const pageData = data.privacyPage || ({} as PrivacyPage);

	// SEO from CMS
	const seoTitle = pageData.seo?.metaTitle || 'Privacy Policy | Welcome2Sorrento';
	const seoDescription =
		pageData.seo?.metaDescription ||
		'Welcome2Sorrento Privacy Policy - Learn how we protect and handle your personal information.';

	// Format the last updated date
	const formattedDate = pageData.lastUpdated
		? new Date(pageData.lastUpdated).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long'
			})
		: 'November 2025';
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
				<Shield class="h-8 w-8 text-white" />
			</div>
			<h1 class="text-(--charcoal) mb-4 font-serif text-4xl font-semibold sm:text-5xl">
				{pageData.title || 'Privacy Policy'}
			</h1>
			<p class="text-(--stone) text-lg">
				{pageData.subtitle || 'Your privacy is important to us'}
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
				<h2 class="text-(--azure) mb-6 mt-12 font-serif text-3xl font-semibold">Introduction</h2>
				<p class="text-(--charcoal) mb-6 leading-relaxed">
					Welcome2Sorrento ("we," "our," or "us") respects your privacy and is committed to
					protecting your personal information. This Privacy Policy explains how we collect, use,
					and safeguard your data when you use our website and services.
				</p>

				<h2 class="text-(--azure) mb-6 mt-12 font-serif text-3xl font-semibold">
					Information We Collect
				</h2>
				<p class="text-(--charcoal) mb-4 leading-relaxed">
					We collect information that you provide directly to us, including:
				</p>
				<ul class="text-(--charcoal) mb-6 ml-6 list-disc space-y-2 leading-relaxed">
					<li>Name and contact information (email, phone number)</li>
					<li>Travel dates and preferences</li>
					<li>Booking requests and itinerary information</li>
					<li>Communication history with our team</li>
				</ul>

				<h2 class="text-(--azure) mb-6 mt-12 font-serif text-3xl font-semibold">
					How We Use Your Information
				</h2>
				<p class="text-(--charcoal) mb-4 leading-relaxed">We use the information we collect to:</p>
				<ul class="text-(--charcoal) mb-6 ml-6 list-disc space-y-2 leading-relaxed">
					<li>Provide our booking and planning services</li>
					<li>Communicate with you about your travel plans</li>
					<li>Send newsletters and travel tips (with your consent)</li>
					<li>Improve our website and services</li>
					<li>Comply with legal obligations</li>
				</ul>

				<h2 class="text-(--azure) mb-6 mt-12 font-serif text-3xl font-semibold">
					Information Sharing
				</h2>
				<p class="text-(--charcoal) mb-4 leading-relaxed">
					We do not sell your personal information. We may share your information with:
				</p>
				<ul class="text-(--charcoal) mb-6 ml-6 list-disc space-y-2 leading-relaxed">
					<li>Hotels, restaurants, and tour operators to fulfill your bookings</li>
					<li>Service providers who assist in our operations</li>
					<li>Legal authorities when required by law</li>
				</ul>

				<h2 class="text-(--azure) mb-6 mt-12 font-serif text-3xl font-semibold">Your Rights</h2>
				<p class="text-(--charcoal) mb-4 leading-relaxed">You have the right to:</p>
				<ul class="text-(--charcoal) mb-6 ml-6 list-disc space-y-2 leading-relaxed">
					<li>Access your personal information</li>
					<li>Request corrections or deletions</li>
					<li>Opt-out of marketing communications</li>
					<li>Request data portability</li>
				</ul>

				<h2 class="text-(--azure) mb-6 mt-12 font-serif text-3xl font-semibold">Contact Us</h2>
				<p class="text-(--charcoal) leading-relaxed">
					If you have questions about this Privacy Policy, please contact us at
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
