<script lang="ts">
	import { PostcardFrame, VintageButton } from '$lib/components/ui/decorative';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardDescription from '$lib/components/ui/card/card-description.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { Utensils, Hotel, Sparkles, ArrowRight, Lightbulb } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	const sections = [
		{
			title: 'Eat',
			subtitle: 'Authentic Italian Cuisine',
			description:
				'From Michelin-starred restaurants to hidden family trattorias, discover the best places to experience authentic Sorrentine cuisine, fresh seafood, and the famous limoncello.',
			image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80',
			link: '/sorrento/eat',
			icon: Utensils,
			number: '01',
			accent: 'terracotta',
			features: ['Traditional Trattorias', 'Fine Dining Experiences', 'Street Food & Markets']
		},
		{
			title: 'Stay',
			subtitle: 'Elegant Accommodations',
			description:
				"Find your perfect home away from home. Whether you prefer luxury hotels with infinity pools, charming B&Bs, or private villas, we've curated the finest accommodations in Sorrento.",
			image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
			link: '/sorrento/stay',
			icon: Hotel,
			number: '02',
			accent: 'azure',
			features: ['5-Star Luxury Hotels', 'Boutique B&Bs', 'Private Villas']
		},
		{
			title: 'Do',
			subtitle: 'Unforgettable Experiences',
			description:
				'Create memories that last a lifetime. From boat tours and cooking classes to historical sites and scenic walks, discover activities that showcase the best of Sorrento.',
			image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
			link: '/sorrento/do',
			icon: Sparkles,
			number: '03',
			accent: 'olive',
			features: ['Boat Tours & Beaches', 'Cooking Classes', 'Historical Tours']
		}
	];

	const tips = [
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
</script>

<svelte:head>
	<title>Sorrento Guide - Eat, Stay & Do | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Complete guide to Sorrento - discover the best restaurants, accommodations, and activities in this stunning Italian coastal town."
	/>
</svelte:head>

<div class="-mt-24">
	<PageHeader
		title="Experience Sorrento"
		subtitle="Your comprehensive guide to the jewel of the Amalfi Coast"
		image="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1920&q=80"
		label="La Dolce Vita"
	/>

	<!-- Introduction -->
	<section class="texture-grain relative bg-[var(--warm-white)] py-24">
		<!-- Decorative tile border -->
		<div class="absolute top-0 right-0 left-0">
			<div class="mx-auto max-w-5xl px-4">
				<div class="border-tile-decorative"></div>
			</div>
		</div>

		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-5xl" use:reveal>
				<div class="mb-12 text-center">
					<div class="mb-4 flex items-center justify-center gap-3">
						<div class="h-px w-8 bg-[var(--terracotta)]"></div>
						<span class="font-serif text-sm tracking-[0.2em] text-[var(--terracotta)] uppercase">Welcome</span>
						<div class="h-px w-8 bg-[var(--terracotta)]"></div>
					</div>
					<h2 class="heading-serif mb-4 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
						Discover <span class="text-[var(--azure)]">Sorrento</span>
					</h2>
				</div>

				<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					<PostcardFrame showStamp stampText="SORRENTO">
						<div class="group relative overflow-hidden rounded-lg">
							<img
								src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
								alt="Sorrento coastline"
								class="h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
					</PostcardFrame>

					<div class="space-y-6 text-lg leading-relaxed text-[var(--stone)]">
						<p>
							Perched on clifftops overlooking the Bay of Naples with Mount Vesuvius in the
							distance, Sorrento is a town that captivates all who visit. Known for its dramatic
							coastline, fragrant lemon groves, and elegant piazzas, this enchanting destination
							offers the perfect blend of natural beauty, rich history, and authentic Italian
							culture.
						</p>
						<p>
							Whether you're savoring fresh seafood at a family-run trattoria, relaxing in a
							boutique hotel with sweeping coastal views, or exploring ancient ruins and artisan
							workshops, Sorrento promises unforgettable moments at every turn.
						</p>
					</div>
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
					<span class="font-serif text-sm tracking-[0.2em] text-[var(--azure)] uppercase">Explore</span>
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
							<Card class="relative flex h-full flex-col overflow-hidden border-[var(--sand)] pt-0 shadow-mediterranean transition-all duration-300 hover:-translate-y-2 hover:shadow-mediterranean-lg">
								<!-- Vintage number badge -->
								<div class="pointer-events-none absolute -top-2 -left-2 z-20 select-none font-serif text-7xl font-bold text-[var(--{section.accent})] opacity-10">
									{section.number}
								</div>

								<div class="relative h-72 overflow-hidden">
									<img
										src={section.image}
										alt={section.title}
										class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<!-- Gradient overlay -->
									<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
								</div>

								<CardHeader class="relative">
									<!-- Icon badge -->
									<div
										class="absolute -top-8 left-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--{section.accent})] shadow-lg transition-all duration-300 group-hover:scale-110"
									>
										<Icon class="h-7 w-7 text-white" />
									</div>

									<div class="pt-6">
										<CardTitle class="heading-serif text-2xl text-[var(--charcoal)] transition-colors group-hover:text-[var(--azure)]">
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
									<div class="mb-6 space-y-2">
										{#each section.features as feature}
											<div class="flex items-center space-x-2 text-sm text-[var(--stone)]">
												<div class="h-1.5 w-1.5 rounded-full bg-[var(--{section.accent})]"></div>
												<span>{feature}</span>
											</div>
										{/each}
									</div>
									<div class="flex items-center font-serif tracking-wide text-[var(--azure)] transition-all duration-200 group-hover:translate-x-2">
										<span>Explore {section.title}</span>
										<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</div>
								</CardContent>

								<!-- Decorative corner -->
								<div
									class="absolute right-0 bottom-0 h-16 w-16 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
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
		<div class="absolute top-0 right-0 left-0">
			<svg
				class="h-12 w-full"
				viewBox="0 0 1200 60"
				preserveAspectRatio="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0,60 C300,20 600,50 900,30 C1050,20 1100,40 1200,30 L1200,0 L0,0 Z"
					fill="white"
				></path>
			</svg>
		</div>

		<div class="container mx-auto px-4 pt-8 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-12 text-center" use:reveal>
					<div class="mb-4 flex items-center justify-center gap-3">
						<div class="h-px w-8 bg-[var(--olive)]"></div>
						<span class="font-serif text-sm tracking-[0.2em] text-[var(--olive)] uppercase">Tips</span>
						<div class="h-px w-8 bg-[var(--olive)]"></div>
					</div>
					<h2 class="heading-serif mb-4 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
						Insider Tips
					</h2>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each tips as tip, index}
						<div class="scroll-reveal polaroid-hover" style="transition-delay: {index * 100}ms" use:reveal>
							<PostcardFrame variant={index % 2 === 0 ? 'default' : 'cream'}>
								<div class="flex items-start gap-4">
									<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--olive)]">
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
				<img
					src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1920&q=80"
					alt="Sorrento coastline"
					class="h-full w-full object-cover"
				/>
			</div>
			<div class="absolute inset-0 bg-gradient-to-r from-[var(--azure)]/95 to-[var(--deep-azure)]/90"></div>
			<div class="film-grain pointer-events-none absolute inset-0"></div>
		</div>

		<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8" use:reveal>
			<div class="mx-auto max-w-3xl text-white">
				<div class="mb-4 flex items-center justify-center gap-3">
					<div class="h-px w-8 bg-white/50"></div>
					<span class="font-serif text-sm tracking-[0.3em] text-white/80 uppercase">Get Help</span>
					<div class="h-px w-8 bg-white/50"></div>
				</div>
				<h2 class="heading-serif mb-6 text-4xl font-semibold sm:text-5xl">
					Need Help Planning Your Visit?
				</h2>
				<p class="mb-10 text-xl text-white/90">
					Our personalized WhatsApp booking service makes planning your perfect Sorrento experience easy
				</p>
				<VintageButton href="/contact" variant="coral" size="lg">
					<span>Get in Touch</span>
					<ArrowRight class="h-5 w-5" />
				</VintageButton>
			</div>
		</div>
	</section>
</div>
