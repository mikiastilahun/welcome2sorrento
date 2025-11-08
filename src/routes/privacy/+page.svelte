<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import { Shield, Sparkles } from '@lucide/svelte';
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
	<title>Privacy Policy | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Welcome2Sorrento Privacy Policy - Learn how we protect and handle your personal information."
	/>
</svelte:head>

<!-- Hero -->
<section
	class="relative bg-gradient-to-br from-[color:var(--purple-lavender)]/10 via-white to-[color:var(--turquoise)]/10 py-24"
>
	<div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="animate-fade-in-up text-center">
			<div
				class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-2xl"
			>
				<Shield class="h-10 w-10 text-white" />
			</div>
			<h1 class="mb-4 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
				Privacy <span class="text-gradient">Policy</span>
			</h1>
			<p class="text-lg text-gray-600">Your privacy is important to us</p>
		</div>
	</div>
</section>

<!-- Content -->
<div class="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
	<Card
		class="scroll-reveal overflow-hidden border-2 border-[color:var(--purple-lavender)]/20 transition-colors hover:border-[color:var(--purple-lavender)]"
	>
		<div class="relative">
			<div
				class="absolute inset-0 bg-gradient-to-br from-[color:var(--purple-lavender)]/5 to-[color:var(--turquoise)]/5"
			></div>
			<div class="relative p-8 sm:p-12">
				<div class="prose prose-lg max-w-none">
					<p class="mb-8 text-sm text-gray-600">
						<strong>Last Updated:</strong> November 2024
					</p>

					<h2 class="mt-12 mb-6 text-3xl font-bold text-[color:var(--dark)]">Introduction</h2>
					<p class="mb-6 leading-relaxed text-gray-600">
						Welcome2Sorrento ("we," "our," or "us") respects your privacy and is committed to
						protecting your personal information. This Privacy Policy explains how we collect, use,
						and safeguard your data when you use our website and services.
					</p>

					<h2 class="mt-12 mb-6 text-3xl font-bold text-[color:var(--dark)]">
						Information We Collect
					</h2>
					<p class="mb-4 leading-relaxed text-gray-600">
						We collect information that you provide directly to us, including:
					</p>
					<ul class="mb-6 ml-6 list-disc space-y-2 leading-relaxed text-gray-600">
						<li>Name and contact information (email, phone number)</li>
						<li>Travel dates and preferences</li>
						<li>Booking requests and itinerary information</li>
						<li>Communication history with our team</li>
					</ul>

					<h2 class="mt-12 mb-6 text-3xl font-bold text-[color:var(--dark)]">
						How We Use Your Information
					</h2>
					<p class="mb-4 leading-relaxed text-gray-600">
						We use the information we collect to:
					</p>
					<ul class="mb-6 ml-6 list-disc space-y-2 leading-relaxed text-gray-600">
						<li>Provide our booking and planning services</li>
						<li>Communicate with you about your travel plans</li>
						<li>Send newsletters and travel tips (with your consent)</li>
						<li>Improve our website and services</li>
						<li>Comply with legal obligations</li>
					</ul>

					<h2 class="mt-12 mb-6 text-3xl font-bold text-[color:var(--dark)]">
						Information Sharing
					</h2>
					<p class="mb-4 leading-relaxed text-gray-600">
						We do not sell your personal information. We may share your information with:
					</p>
					<ul class="mb-6 ml-6 list-disc space-y-2 leading-relaxed text-gray-600">
						<li>Hotels, restaurants, and tour operators to fulfill your bookings</li>
						<li>Service providers who assist in our operations</li>
						<li>Legal authorities when required by law</li>
					</ul>

					<h2 class="mt-12 mb-6 text-3xl font-bold text-[color:var(--dark)]">Your Rights</h2>
					<p class="mb-4 leading-relaxed text-gray-600">You have the right to:</p>
					<ul class="mb-6 ml-6 list-disc space-y-2 leading-relaxed text-gray-600">
						<li>Access your personal information</li>
						<li>Request corrections or deletions</li>
						<li>Opt-out of marketing communications</li>
						<li>Request data portability</li>
					</ul>

					<h2 class="mt-12 mb-6 text-3xl font-bold text-[color:var(--dark)]">Contact Us</h2>
					<p class="leading-relaxed text-gray-600">
						If you have questions about this Privacy Policy, please contact us at
						<a
							href="mailto:margheroba@email.com"
							class="font-semibold text-[color:var(--purple-lavender)] transition-colors hover:text-[color:var(--turquoise)]"
						>
							margheroba@email.com
						</a>
					</p>
				</div>
			</div>
		</div>
	</Card>
</div>
