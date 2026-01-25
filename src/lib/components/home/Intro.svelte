<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import { PostcardFrame } from '$lib/components/ui/decorative';
	import { MapPin, Sparkles, Hotel } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { SiteSettings } from '$lib/sanity/queries';

	interface Props {
		siteSettings: SiteSettings | null;
	}

	let { siteSettings }: Props = $props();

	// Get intro content from CMS with fallbacks
	const introHeading = siteSettings?.introSection?.heading || 'Welcome to Sorrento';
	const introDescription =
		siteSettings?.introSection?.description ||
		'Nestled atop dramatic cliffs overlooking the Bay of Naples, Sorrento captivates visitors with its stunning coastal views, vibrant lemon groves, and warm Italian hospitality.';

	// Get intro cards from CMS with fallbacks
	const defaultCards = [
		{
			title: 'Local Insights',
			description:
				'Authentic recommendations from locals who know every hidden gem and secret spot.',
			icon: 'MapPin'
		},
		{
			title: 'Hidden Gems',
			description: 'Discover breathtaking locations and experiences that most tourists never find.',
			icon: 'Sparkles'
		},
		{
			title: 'Expert Curation',
			description:
				'Carefully selected experiences to ensure your trip is absolutely unforgettable.',
			icon: 'Hotel'
		}
	];

	const introCards =
		siteSettings?.introCards && siteSettings.introCards.length > 0
			? siteSettings.introCards
			: defaultCards;

	// Icon mapping
	const iconComponents: Record<string, typeof MapPin> = {
		MapPin,
		Sparkles,
		Hotel
	};

	function getIconComponent(iconName?: string) {
		if (!iconName) return MapPin;
		return iconComponents[iconName] || MapPin;
	}

	// Gradient colors for cards
	const cardGradients = [
		'from-[var(--azure)] to-[var(--deep-azure)]',
		'from-[var(--coral)] to-[var(--terracotta)]',
		'from-[var(--olive)] to-[oklch(0.45_0.1_125)]'
	];

	const cardVariants: Array<'white' | 'cream'> = ['white', 'cream', 'white'];
	const showStamps = [false, true, false];
</script>

<section class="texture-grain relative bg-[var(--warm-white)] py-24" id="explore">
	<!-- Decorative tile pattern border at top -->
	<div class="absolute left-0 right-0 top-0">
		<div class="mx-auto max-w-5xl px-4">
			<div class="border-tile-decorative"></div>
		</div>
	</div>

	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-5xl" use:reveal>
			<div class="mb-16 text-center">
				<!-- Decorative element above heading -->
				<div class="mb-6 flex items-center justify-center gap-3">
					<svg class="h-8 w-8 text-[var(--terracotta)]" viewBox="0 0 32 32" fill="currentColor">
						<path
							d="M16 2L18 10L26 8L20 14L28 18L20 20L26 28L16 22L6 28L12 20L4 18L12 14L6 8L14 10L16 2Z"
							opacity="0.6"
						/>
					</svg>
				</div>

				<h2
					class="heading-serif mb-6 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl lg:text-6xl"
				>
					{@html introHeading.replace(
						'Sorrento',
						'<span class="text-[var(--azure)]">Sorrento</span>'
					)}
				</h2>
				<p class="mx-auto max-w-3xl text-lg leading-relaxed text-[var(--stone)] sm:text-xl">
					{introDescription}
				</p>

				<!-- Decorative divider -->
				<div class="mt-8 flex items-center justify-center gap-4">
					<div class="h-px w-16 bg-gradient-to-r from-transparent to-[var(--terracotta)]"></div>
					<div class="h-2 w-2 rotate-45 bg-[var(--terracotta)]"></div>
					<div class="h-px w-16 bg-gradient-to-l from-transparent to-[var(--terracotta)]"></div>
				</div>
			</div>

			<!-- Feature Cards - Polaroid Style -->
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each introCards as card, index}
					{@const IconComponent = getIconComponent(card.icon)}
					<div
						class="scroll-reveal polaroid-hover"
						style="transition-delay: {(index + 1) * 100}ms;"
						use:reveal
					>
						<PostcardFrame showStamp={showStamps[index % 3]} variant={cardVariants[index % 3]}>
							<Card class="border-0 bg-transparent shadow-none">
								<CardContent class="p-4 text-center">
									<div
										class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br {cardGradients[
											index % 3
										]} shadow-lg"
									>
										<IconComponent class="h-8 w-8 text-white" />
									</div>
									<h3 class="heading-serif mb-2 text-2xl font-semibold text-[var(--charcoal)]">
										{card.title}
									</h3>
									<p class="leading-relaxed text-[var(--stone)]">
										{card.description}
									</p>
								</CardContent>
							</Card>
						</PostcardFrame>
					</div>
				{/each}
			</div>

			<!-- Ambient decorative elements -->
			<div class="pointer-events-none absolute left-10 top-20 opacity-10">
				<svg class="h-24 w-24 text-[var(--azure)]" viewBox="0 0 100 100" fill="currentColor">
					<circle cx="50" cy="50" r="40" />
				</svg>
			</div>
			<div class="pointer-events-none absolute bottom-20 right-10 opacity-10">
				<svg class="h-32 w-32 text-[var(--terracotta)]" viewBox="0 0 100 100" fill="currentColor">
					<polygon points="50,10 90,90 10,90" />
				</svg>
			</div>
		</div>
	</div>

	<!-- Bottom wave divider -->
	<div class="absolute bottom-0 left-0 right-0">
		<svg
			class="h-12 w-full"
			viewBox="0 0 1200 60"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0,30 C300,60 600,0 900,30 C1050,45 1150,30 1200,30 L1200,60 L0,60 Z" fill="white"
			></path>
		</svg>
	</div>
</section>
