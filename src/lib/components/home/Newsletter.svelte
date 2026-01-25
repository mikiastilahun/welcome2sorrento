<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { Send } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { SiteSettings } from '$lib/sanity/queries';

	interface Props {
		siteSettings: SiteSettings | null;
	}

	let { siteSettings }: Props = $props();

	// Get newsletter content from CMS
	const heading = siteSettings?.newsletter?.heading || 'Stay Connected';
	const description =
		siteSettings?.newsletter?.description ||
		'Get travel tips and special offers delivered to your inbox';
	const buttonText = siteSettings?.newsletter?.buttonText || 'Subscribe';
	const successMessage =
		siteSettings?.newsletter?.successMessage || "You're now part of our travel community.";
	const placeholderText = siteSettings?.newsletter?.placeholderText || 'Enter your email';

	let email = $state('');
	let isSubmitting = $state(false);
	let isSuccess = $state(false);

	async function handleNewsletter(e: Event) {
		e.preventDefault();
		isSubmitting = true;

		// Simulate submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		isSuccess = true;
		isSubmitting = false;
		email = '';

		// Reset success state after animation
		setTimeout(() => {
			isSuccess = false;
		}, 3000);
	}
</script>

<section id="newsletter" class="bg-white py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-xl text-center" use:reveal>
			<h2 class="heading-serif mb-4 text-3xl font-semibold text-[var(--charcoal)] sm:text-4xl">
				{#if isSuccess}
					<span class="text-[var(--olive)]">Thank You!</span>
				{:else}
					{heading}
				{/if}
			</h2>

			<p class="mb-8 text-lg text-[var(--stone)]">
				{#if isSuccess}
					{successMessage}
				{:else}
					{description}
				{/if}
			</p>

			{#if !isSuccess}
				<form onsubmit={handleNewsletter} class="flex flex-col gap-4 sm:flex-row">
					<Input
						type="email"
						placeholder={placeholderText}
						bind:value={email}
						required
						disabled={isSubmitting}
						class="h-12 flex-1 rounded-full border-[var(--sand)] px-5"
					/>

					<button
						type="submit"
						disabled={isSubmitting}
						class="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--azure)] px-6 font-medium text-white transition-all hover:bg-[var(--deep-azure)] disabled:opacity-50"
					>
						{#if isSubmitting}
							<span>Sending...</span>
						{:else}
							<span>{buttonText}</span>
							<Send class="h-4 w-4" />
						{/if}
					</button>
				</form>
			{:else}
				<div class="flex items-center justify-center gap-2 text-[var(--olive)]">
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
					<span class="font-medium">Successfully subscribed!</span>
				</div>
			{/if}
		</div>
	</div>
</section>
