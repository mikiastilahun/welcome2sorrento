<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import { FileText } from '@lucide/svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const handleScroll = () => {
			const reveals = document.querySelectorAll('.scroll-reveal');
			reveals.forEach((element) => {
				const elementTop = element.getBoundingClientRect().top;
				const elementVisible = 150;
				if (elementTop < window.innerHeight - elementVisible) {
					element.classList.add('revealed');
				}
			});
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>Terms of Service | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Welcome2Sorrento Terms of Service - Read our terms and conditions for using our services."
	/>
</svelte:head>

<!-- Hero -->
<section
	class="relative bg-gradient-to-br from-[color:var(--turquoise)]/10 via-white to-[color:var(--purple-lavender)]/10 py-24"
>
	<div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="animate-fade-in-up text-center">
			<div
				class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl"
			>
				<FileText class="h-10 w-10 text-white" />
			</div>
			<h1 class="mb-4 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
				Terms of <span class="text-gradient-2">Service</span>
			</h1>
			<p class="text-lg text-gray-600">Please read these terms carefully</p>
		</div>
	</div>
</section>

<!-- Content -->
<div class="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
	<Card
		class="scroll-reveal overflow-hidden border-2 border-[color:var(--turquoise)]/20 transition-colors hover:border-[color:var(--turquoise)]"
	>
		<div class="relative">
			<div
				class="absolute inset-0 bg-gradient-to-br from-[color:var(--turquoise)]/5 to-[color:var(--purple-lavender)]/5"
			></div>
			<div class="relative p-8 sm:p-12">
				<div class="prose prose-lg max-w-none">
					<p class="mb-8 text-sm text-gray-600">
						<strong>Last Updated:</strong> November 2024
					</p>

					<h2 class="mt-12 mb-6 text-3xl font-bold text-[color:var(--dark)]">Agreement to Terms</h2>
					<p class="mb-6 leading-relaxed text-gray-600">
						By accessing and using Welcome2Sorrento's website and services, you agree to be bound by
						these Terms of Service. If you disagree with any part of these terms, please do not use
						our services.
					</p>

					<h2 class="mt-12 mb-6 text-3xl font-bold text-[color:var(--dark)]">Our Services</h2>
					<p class="mb-4 leading-relaxed text-gray-600">
						Welcome2Sorrento provides travel information, guides, and booking assistance services
						for the Sorrento Peninsula and surrounding areas. Our services include:
					</p>
					<ul class="mb-6 ml-6 list-disc space-y-2 leading-relaxed text-gray-600">
						<li>Travel guides and recommendations</li>
						<li>Restaurant and accommodation booking assistance</li>
						<li>Tour and activity arrangements</li>
						<li>Custom itinerary planning</li>
					</ul>

					<h2 class="mt-12 mb-6 text-3xl font-bold text-[color:var(--dark)]">
						Booking Service Terms
					</h2>
					<p class="mb-4 leading-relaxed text-gray-600">
						When you use our booking service:
					</p>
					<ul class="mb-6 ml-6 list-disc space-y-2 leading-relaxed text-gray-600">
						<li>We act as an intermediary between you and service providers</li>
						<li>Service fees are non-refundable once bookings are confirmed</li>
						<li>You are responsible for payments to restaurants, hotels, and tour operators</li>
						<li>Cancellation policies vary by provider and will be communicated to you</li>
					</ul>

					<h2 class="mt-12 mb-6 text-3xl font-bold text-[color:var(--dark)]">
						Limitation of Liability
					</h2>
					<p class="mb-4 leading-relaxed text-gray-600">
						Welcome2Sorrento provides information and assistance in good faith. However, we are not
						liable for:
					</p>
					<ul class="mb-6 ml-6 list-disc space-y-2 leading-relaxed text-gray-600">
						<li>Changes or closures by third-party service providers</li>
						<li>Travel disruptions due to weather, strikes, or other circumstances</li>
						<li>Personal injuries or losses during your trip</li>
						<li>Accuracy of information provided by third parties</li>
					</ul>

					<h2 class="mt-12 mb-6 text-3xl font-bold text-[color:var(--dark)]">
						Intellectual Property
					</h2>
					<p class="mb-6 leading-relaxed text-gray-600">
						All content on this website, including text, images, and logos, is the property of
						Welcome2Sorrento or used with permission. You may not reproduce or distribute our
						content without written permission.
					</p>

					<h2 class="mt-12 mb-6 text-3xl font-bold text-[color:var(--dark)]">Changes to Terms</h2>
					<p class="mb-6 leading-relaxed text-gray-600">
						We reserve the right to modify these terms at any time. Continued use of our services
						after changes constitutes acceptance of the new terms.
					</p>

					<h2 class="mt-12 mb-6 text-3xl font-bold text-[color:var(--dark)]">Contact</h2>
					<p class="leading-relaxed text-gray-600">
						Questions about these Terms of Service? Contact us at
						<a
							href="mailto:margheroba@email.com"
							class="font-semibold text-[color:var(--turquoise)] transition-colors hover:text-[color:var(--purple-lavender)]"
						>
							margheroba@email.com
						</a>
					</p>
				</div>
			</div>
		</div>
	</Card>
</div>
