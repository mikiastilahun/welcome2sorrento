<script lang="ts">
	import { PostcardFrame, VintageButton } from '$lib/components/ui/decorative';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardDescription from '$lib/components/ui/card/card-description.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { Utensils, Hotel, Sparkles, ArrowRight, Lightbulb } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { SorrentoPage } from '$lib/sanity/queries';

	interface Props {
		data: {
			pageData: SorrentoPage | null;
		};
	}

	let { data }: Props = $props();
	const pageData = data.pageData;

	// SEO from CMS
	const seoTitle = pageData?.seo?.metaTitle || 'Sorrento Guide - Eat, Stay & Do | Welcome2Sorrento';
	const seoDescription =
		pageData?.seo?.metaDescription ||
		'Complete guide to Sorrento - discover the best restaurants, accommodations, and activities in this stunning Italian coastal town.';
	const seoKeywords = pageData?.seo?.keywords || '';

	// Header from CMS
	const headerTitle = pageData?.header?.heading || 'Experience Sorrento';
	const headerSubtitle =
		pageData?.header?.subheading || 'Your comprehensive guide to the jewel of the Amalfi Coast';
	const headerImage = pageData?.header?.heroImage?.asset?.url || '';

	// Intro from CMS
	const introHeading = pageData?.intro?.heading || 'Discover Sorrento';
	const introDescription = pageData?.intro?.description || '';
	const introImage = pageData?.intro?.image?.asset?.url || '';

	// CTA from CMS
	const ctaHeading = pageData?.cta?.heading || 'Need Help Planning Your Visit?';
	const ctaDescription =
		pageData?.cta?.description ||
		'Our personalized WhatsApp booking service makes planning your perfect Sorrento experience easy';
	const ctaButtonText = pageData?.cta?.buttonText || 'Get in Touch';
	const ctaButtonLink = pageData?.cta?.buttonLink || '/contact';
	const ctaBackgroundImage = pageData?.cta?.backgroundImage?.asset?.url || '';

	// Icon components mapping
	const iconMap: Record<string, typeof Utensils> = {
		Utensils,
		Hotel,
		Sparkles
	};

	const accentColors = ['terracotta', 'azure', 'olive'];

	// Sections from CMS or defaults
	const defaultSections = [
		{
			title: 'Eat',
			subtitle: 'Authentic Italian Cuisine',
			description:
				'From Michelin-starred restaurants to hidden family trattorias, discover the best places to experience authentic Sorrentine cuisine, fresh seafood, and the famous limoncello.',
			image: '',
			link: '/sorrento/eat',
			features: ['Traditional Trattorias', 'Fine Dining Experiences', 'Street Food & Markets']
		},
		{
			title: 'Stay',
			subtitle: 'Elegant Accommodations',
			description:
				"Find your perfect home away from home. Whether you prefer luxury hotels with infinity pools, charming B&Bs, or private villas, we've curated the finest accommodations in Sorrento.",
			image: '',
			link: '/sorrento/stay',
			features: ['5-Star Luxury Hotels', 'Boutique B&Bs', 'Private Villas']
		},
		{
			title: 'Do',
			subtitle: 'Unforgettable Experiences',
			description:
				'Create memories that last a lifetime. From boat tours and cooking classes to historical sites and scenic walks, discover activities that showcase the best of Sorrento.',
			image: '',
			link: '/sorrento/do',
			features: ['Boat Tours & Beaches', 'Cooking Classes', 'Historical Tours']
		}
	];

	const sections =
		pageData?.sections && pageData.sections.length > 0
			? pageData.sections.map((s, i) => ({
					...s,
					icon: [Utensils, Hotel, Sparkles][i % 3],
					number: String(i + 1).padStart(2, '0'),
					accent: accentColors[i % 3]
				}))
			: defaultSections.map((s, i) => ({
					...s,
					icon: [Utensils, Hotel, Sparkles][i],
					number: String(i + 1).padStart(2, '0'),
					accent: accentColors[i]
				}));

	// Tips from CMS or defaults
	const defaultTips = [
		{
			title: 'Best Time to Visit',
			description:
				'April-June and September-October offer perfect weather with fewer crowds and better prices than peak summer months.'
		},
		{
			title: 'Getting Around',
			description:
				'The town center is walkable, but comfortable shoes are essential for the hills and cobblestone streets.'
		},
		{
			title: 'Local Experience',
			description:
				'Visit early morning or evening for a more authentic local atmosphere and the best light for photography.'
		},
		{
			title: 'Must Try',
			description:
				"Don't leave without trying authentic limoncello, fresh seafood pasta, and delizia al limone (lemon delight dessert)."
		}
	];

	const tips =
		pageData?.insiderTips && pageData.insiderTips.length > 0 ? pageData.insiderTips : defaultTips;
</script>

<SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} />

<svelte:head>
	<title>{seoTitle}</title>
</svelte:head>

<div class="-mt-24">
	{#if headerImage}
		<PageHeader
			title={headerTitle}
			subtitle={headerSubtitle}
			image={headerImage}
			label="La Dolce Vita"
		/>
	{/if}

	<!-- Introduction -->
	<section class="texture-grain relative bg-[var(--warm-white)] py-24">
		<!-- Decorative tile border -->
		<div class="absolute left-0 right-0 top-0">
			<div class="mx-auto max-w-5xl px-4">
				<div class="border-tile-decorative"></div>
			</div>
		</div>

		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-5xl" use:reveal>
				<div class="mb-12 text-center">
					<div class="mb-4 flex items-center justify-center gap-3">
						<div class="h-px w-8 bg-[var(--terracotta)]"></div>
						<span class="font-serif text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]"
							>Welcome</span
						>
						<div class="h-px w-8 bg-[var(--terracotta)]"></div>
					</div>
					<h2 class="heading-serif mb-4 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
						{@html introHeading.includes('Sorrento')
							? introHeading.replace(
									'Sorrento',
									'<span class="text-[var(--azure)]">Sorrento</span>'
								)
							: `Discover <span class="text-[var(--azure)]">Sorrento</span>`}
					</h2>
				</div>

				<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					{#if introImage}
						<PostcardFrame showStamp stampText="SORRENTO">
							<div class="group relative overflow-hidden rounded-lg">
								<img
									src={introImage}
									alt="Sorrento coastline"
									class="h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
						</PostcardFrame>
					{/if}

					{#if introDescription}
						<div class="space-y-6 text-lg leading-relaxed text-[var(--stone)]">
							{#each introDescription.split('\n\n') as paragraph}
								<p>{paragraph}</p>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</section>

	<!-- Main Sections -->
	<section class="relative overflow-hidden bg-white py-24">
		<!-- Decorative background pattern -->
		<div class="pointer-events-none absolute inset-0 opacity-[0.02]">
			<svg class="h-full w-full">
				<defs>
					<pattern id="sorrento-grid" width="60" height="60" patternUnits="userSpaceOnUse">
						<path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--charcoal)" stroke-width="1" />
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#sorrento-grid)" />
			</svg>
		</div>

		<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-16 text-center" use:reveal>
				<div class="mb-4 flex items-center justify-center gap-3">
					<div class="h-px w-8 bg-[var(--azure)]"></div>
					<span class="font-serif text-sm uppercase tracking-[0.2em] text-[var(--azure)]"
						>Explore</span
					>
					<div class="h-px w-8 bg-[var(--azure)]"></div>
				</div>
				<h2 class="heading-serif mb-4 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
					Plan Your Perfect Visit
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-[var(--stone)]">
					Everything you need for an unforgettable Sorrento experience
				</p>
			</div>

			<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
				{#each sections as section, index}
					{@const Icon = section.icon}
					<div class="scroll-reveal" style="transition-delay: {index * 150}ms" use:reveal>
						<a href={section.link} class="group block h-full">
							<Card
								class="shadow-mediterranean hover:shadow-mediterranean-lg relative flex h-full flex-col overflow-hidden border-[var(--sand)] pt-0 transition-all duration-300 hover:-translate-y-2"
							>
								<!-- Vintage number badge -->
								<div
									class="pointer-events-none absolute -left-2 -top-2 z-20 select-none font-serif text-7xl font-bold text-[var(--{section.accent})] opacity-10"
								>
									{section.number}
								</div>

								{#if section.image?.asset?.url || section.image}
									<div class="relative h-72 overflow-hidden">
										<img
											src={section.image?.asset?.url || section.image}
											alt={section.title}
											class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>
										<!-- Gradient overlay -->
										<div
											class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
										></div>
									</div>
								{/if}

								<CardHeader class="relative">
									<!-- Icon badge -->
									<div
										class="absolute -top-8 left-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--{section.accent})] shadow-lg transition-all duration-300 group-hover:scale-110"
									>
										<Icon class="h-7 w-7 text-white" />
									</div>

									<div class="pt-6">
										<CardTitle
											class="heading-serif text-2xl text-[var(--charcoal)] transition-colors group-hover:text-[var(--azure)]"
										>
											{section.title}
										</CardTitle>
										<CardDescription class="text-[var(--stone)]">
											{section.subtitle}
										</CardDescription>
									</div>
								</CardHeader>

								<CardContent class="flex grow flex-col pb-6">
									<p class="mb-6 grow leading-relaxed text-[var(--stone)]">
										{section.description}
									</p>
									{#if section.features && section.features.length > 0}
										<div class="mb-6 space-y-2">
											{#each section.features as feature}
												<div class="flex items-center space-x-2 text-sm text-[var(--stone)]">
													<div class="h-1.5 w-1.5 rounded-full bg-[var(--{section.accent})]"></div>
													<span>{feature}</span>
												</div>
											{/each}
										</div>
									{/if}
									<div
										class="flex items-center font-serif tracking-wide text-[var(--azure)] transition-all duration-200 group-hover:translate-x-2"
									>
										<span>Explore {section.title}</span>
										<ArrowRight
											class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
										/>
									</div>
								</CardContent>

								<!-- Decorative corner -->
								<div
									class="absolute bottom-0 right-0 h-16 w-16 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
									style="background: linear-gradient(135deg, transparent 50%, var(--{section.accent}) 50%);"
								></div>
							</Card>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Insider Tips -->
	<section class="relative bg-[var(--cream)] py-24">
		<!-- Wave decoration at top -->
		<div class="absolute left-0 right-0 top-0">
			<svg
				class="h-12 w-full"
				viewBox="0 0 1200 60"
				preserveAspectRatio="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0,60 C300,20 600,50 900,30 C1050,20 1100,40 1200,30 L1200,0 L0,0 Z" fill="white"
				></path>
			</svg>
		</div>

		<div class="container mx-auto px-4 pt-8 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-12 text-center" use:reveal>
					<div class="mb-4 flex items-center justify-center gap-3">
						<div class="h-px w-8 bg-[var(--olive)]"></div>
						<span class="font-serif text-sm uppercase tracking-[0.2em] text-[var(--olive)]"
							>Tips</span
						>
						<div class="h-px w-8 bg-[var(--olive)]"></div>
					</div>
					<h2 class="heading-serif mb-4 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
						Insider Tips
					</h2>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each tips as tip, index}
						<div
							class="scroll-reveal polaroid-hover"
							style="transition-delay: {index * 100}ms"
							use:reveal
						>
							<PostcardFrame variant={index % 2 === 0 ? 'default' : 'cream'}>
								<div class="flex items-start gap-4">
									<div
										class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--olive)]"
									>
										<Lightbulb class="h-5 w-5 text-white" />
									</div>
									<div>
										<h3 class="mb-2 font-semibold text-[var(--charcoal)]">{tip.title}</h3>
										<p class="text-sm leading-relaxed text-[var(--stone)]">{tip.description}</p>
									</div>
								</div>
							</PostcardFrame>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="relative overflow-hidden py-24">
		<!-- Background -->
		<div class="absolute inset-0">
			<div class="animate-ken-burns h-full w-full">
				{#if ctaBackgroundImage}
					<img
						src={ctaBackgroundImage}
						alt="Sorrento coastline"
						class="h-full w-full object-cover"
					/>
				{/if}
			</div>
			<div
				class="from-[var(--azure)]/95 to-[var(--deep-azure)]/90 absolute inset-0 bg-gradient-to-r"
			></div>
			<div class="film-grain pointer-events-none absolute inset-0"></div>
		</div>

		<div
			class="scroll-reveal container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8"
			use:reveal
		>
			<div class="mx-auto max-w-3xl text-white">
				<div class="mb-4 flex items-center justify-center gap-3">
					<div class="h-px w-8 bg-white/50"></div>
					<span class="font-serif text-sm uppercase tracking-[0.3em] text-white/80">Get Help</span>
					<div class="h-px w-8 bg-white/50"></div>
				</div>
				<h2 class="heading-serif mb-6 text-4xl font-semibold sm:text-5xl">
					{ctaHeading}
				</h2>
				<p class="mb-10 text-xl text-white/90">
					{ctaDescription}
				</p>
				<VintageButton href={ctaButtonLink} variant="coral" size="lg">
					<span>{ctaButtonText}</span>
					<ArrowRight class="h-5 w-5" />
				</VintageButton>
			</div>
		</div>
	</section>
</div>
