<script lang="ts">
	import { FileText } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Terms of Service | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Welcome2Sorrento Terms of Service - Read our terms and conditions for using our services."
	/>
</svelte:head>

<!-- Hero -->
<section class="relative bg-(--warm-white) py-24 pb-1">
	<div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<div
				class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--azure) shadow-sm"
			>
				<FileText class="h-8 w-8 text-white" />
			</div>
			<h1 class="mb-4 font-serif text-4xl font-semibold text-(--charcoal) sm:text-5xl">
				Terms of Service
			</h1>
			<p class="text-lg text-(--stone)">Please read these terms carefully</p>
		</div>
	</div>
</section>

<!-- Content -->
<div class="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="rounded-2xl border border-(--sand) bg-white p-8 shadow-sm sm:p-12">
		<div class="prose prose-lg max-w-none">
			<p class="mb-8 text-sm text-(--stone)">
				<strong>Last Updated:</strong> November 2024
			</p>

			<h2 class="mt-12 mb-6 font-serif text-3xl font-semibold text-(--azure)">
				Agreement to Terms
			</h2>
			<p class="mb-6 leading-relaxed text-(--charcoal)">
				By accessing and using Welcome2Sorrento's website and services, you agree to be bound by
				these Terms of Service. If you disagree with any part of these terms, please do not use our
				services.
			</p>

			<h2 class="mt-12 mb-6 font-serif text-3xl font-semibold text-(--azure)">Our Services</h2>
			<p class="mb-4 leading-relaxed text-(--charcoal)">
				Welcome2Sorrento provides travel information, guides, and booking assistance services for
				the Sorrento Peninsula and surrounding areas. Our services include:
			</p>
			<ul class="mb-6 ml-6 list-disc space-y-2 leading-relaxed text-(--charcoal)">
				<li>Travel guides and recommendations</li>
				<li>Restaurant and accommodation booking assistance</li>
				<li>Tour and activity arrangements</li>
				<li>Custom itinerary planning</li>
			</ul>

			<h2 class="mt-12 mb-6 font-serif text-3xl font-semibold text-(--azure)">
				Booking Service Terms
			</h2>
			<p class="mb-4 leading-relaxed text-(--charcoal)">When you use our booking service:</p>
			<ul class="mb-6 ml-6 list-disc space-y-2 leading-relaxed text-(--charcoal)">
				<li>We act as an intermediary between you and service providers</li>
				<li>Service fees are non-refundable once bookings are confirmed</li>
				<li>You are responsible for payments to restaurants, hotels, and tour operators</li>
				<li>Cancellation policies vary by provider and will be communicated to you</li>
			</ul>

			<h2 class="mt-12 mb-6 font-serif text-3xl font-semibold text-(--azure)">
				Limitation of Liability
			</h2>
			<p class="mb-4 leading-relaxed text-(--charcoal)">
				Welcome2Sorrento provides information and assistance in good faith. However, we are not
				liable for:
			</p>
			<ul class="mb-6 ml-6 list-disc space-y-2 leading-relaxed text-(--charcoal)">
				<li>Changes or closures by third-party service providers</li>
				<li>Travel disruptions due to weather, strikes, or other circumstances</li>
				<li>Personal injuries or losses during your trip</li>
				<li>Accuracy of information provided by third parties</li>
			</ul>

			<h2 class="mt-12 mb-6 font-serif text-3xl font-semibold text-(--azure)">
				Intellectual Property
			</h2>
			<p class="mb-6 leading-relaxed text-(--charcoal)">
				All content on this website, including text, images, and logos, is the property of
				Welcome2Sorrento or used with permission. You may not reproduce or distribute our content
				without written permission.
			</p>

			<h2 class="mt-12 mb-6 font-serif text-3xl font-semibold text-(--azure)">Changes to Terms</h2>
			<p class="mb-6 leading-relaxed text-(--charcoal)">
				We reserve the right to modify these terms at any time. Continued use of our services after
				changes constitutes acceptance of the new terms.
			</p>

			<h2 class="mt-12 mb-6 font-serif text-3xl font-semibold text-(--azure)">Contact</h2>
			<p class="leading-relaxed text-(--charcoal)">
				Questions about these Terms of Service? Contact us at
				<a
					href="mailto:margheroba@email.com"
					class="font-semibold text-(--azure) transition-colors hover:text-(--deep-azure)"
				>
					margheroba@email.com
				</a>
			</p>
		</div>
	</div>
</div>
