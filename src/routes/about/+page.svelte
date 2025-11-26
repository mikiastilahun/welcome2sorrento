<script lang="ts">
	import type { AboutPage } from '$lib/sanity/queries';
	import { urlFor } from '$lib/sanity/image';
	import PortableTextRenderer from '$lib/components/PortableTextRenderer.svelte';
	import { PostcardFrame, VintageButton } from '$lib/components/ui/decorative';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import {
		Heart,
		MessageCircle,
		MapPin,
		Users,
		CheckCircle,
		Phone,
		Globe,
		Star,
		Award,
		Sparkles,
		ArrowRight
	} from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { PortableTextBlock } from '@portabletext/types';

	interface Props {
		data: {
			aboutPage: AboutPage | null;
		};
	}

	let { data }: Props = $props();

	// Map icon names to components
	const iconMap: Record<string, any> = {
		MapPin,
		Heart,
		Users,
		Sparkles,
		Phone,
		Globe,
		Star,
		Award
	};

	const aboutData = data.aboutPage || ({} as AboutPage);
	const colorAccents = ['azure', 'terracotta', 'olive', 'coral'];
</script>

<svelte:head>
	<title>{aboutData.seo?.metaTitle || 'About Us - Our Story & Services | Welcome2Sorrento'}</title>
	<meta
		name="description"
		content={aboutData.seo?.metaDescription ||
			'Learn about Welcome2Sorrento - created by an Italian/British couple who love the Sorrento Peninsula. Discover our WhatsApp booking service.'}
	/>
</svelte:head>

<div class="-mt-24">
	<!-- Hero Section -->
	<PageHeader
		title={aboutData.title || 'About Welcome2Sorrento'}
		subtitle={aboutData.subtitle ||
			'Sharing our love for Sorrento with travelers from around the world'}
		image="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=1920&q=80"
		label="La Nostra Storia"
	/>

	<!-- Our Story -->
	<section class="texture-grain relative bg-[var(--warm-white)] py-24">
		<!-- Decorative tile border -->
		<div class="absolute top-0 right-0 left-0">
			<div class="mx-auto max-w-6xl px-4">
				<div class="border-tile-decorative"></div>
			</div>
		</div>

		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-6xl" use:reveal>
				<div class="mb-12 text-center">
					<!-- Section label -->
					<div class="mb-4 flex items-center justify-center gap-3">
						<div class="h-px w-8 bg-[var(--terracotta)]"></div>
						<span class="font-serif text-sm tracking-[0.2em] text-[var(--terracotta)] uppercase"
							>Our Story</span
						>
						<div class="h-px w-8 bg-[var(--terracotta)]"></div>
					</div>
					<h2 class="heading-serif mb-6 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
						{aboutData.story?.title || 'A Love Story with Sorrento'}
					</h2>
				</div>

				<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					<!-- Image with postcard frame -->
					<PostcardFrame showStamp stampText="SORRENTO">
						<div class="group relative overflow-hidden rounded-lg">
							<img
								src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=80"
								alt="Sorrento"
								class="h-[450px] w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-[1.04]"
							/>
						</div>
					</PostcardFrame>

					<div class="space-y-6 text-lg leading-relaxed text-[var(--stone)]">
						{#if aboutData.story?.paragraphs}
							<PortableTextRenderer value={aboutData.story.paragraphs as PortableTextBlock[]} />
						{/if}

						{#if aboutData.mission}
							<p
								class="mt-8 rounded-lg border-l-4 border-[var(--azure)] bg-[var(--cream)] p-4 font-semibold text-[var(--charcoal)] italic"
							>
								"{aboutData.mission}"
							</p>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- What Makes Us Different -->
	<section class="relative overflow-hidden bg-white py-24">
		<!-- Decorative background -->
		<div class="pointer-events-none absolute inset-0 opacity-[0.02]">
			<svg class="h-full w-full">
				<defs>
					<pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
						<path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--charcoal)" stroke-width="1" />
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#about-grid)" />
			</svg>
		</div>

		<div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-16 text-center" use:reveal>
				<div class="mb-4 flex items-center justify-center gap-3">
					<div class="h-px w-8 bg-[var(--azure)]"></div>
					<span class="font-serif text-sm tracking-[0.2em] text-[var(--azure)] uppercase"
						>Why Us</span
					>
					<div class="h-px w-8 bg-[var(--azure)]"></div>
				</div>
				<h2 class="heading-serif mb-6 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
					What Makes Us Different
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-[var(--stone)]">
					Authentic local expertise combined with genuine passion
				</p>
			</div>

			<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#if aboutData.services}
					{#each aboutData.services as service, index}
						{@const IconComponent = iconMap[service.icon || 'MapPin'] || MapPin}
						{@const accentColor = colorAccents[index % 4]}
						<div
							class="scroll-reveal polaroid-hover"
							style="transition-delay: {index * 100}ms"
							use:reveal
						>
							<PostcardFrame variant={index === 1 ? 'cream' : 'default'}>
								<Card class="border-0 bg-transparent shadow-none">
									<CardContent class="p-4 text-center">
										<!-- Vintage number -->
										<div
											class="absolute -top-2 -left-2 font-serif text-5xl font-bold text-[var(--{accentColor})] opacity-10"
										>
											0{index + 1}
										</div>
										<div
											class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--{accentColor})] to-[var(--{accentColor ===
											'azure'
												? 'deep-azure'
												: accentColor})] shadow-lg transition-transform duration-200 ease-out group-hover:scale-105"
										>
											<IconComponent class="h-8 w-8 text-white" />
										</div>
										<h3 class="heading-serif mb-3 text-xl font-semibold text-[var(--charcoal)]">
											{service.title}
										</h3>
										<p class="text-sm leading-relaxed text-[var(--stone)]">
											{service.description}
										</p>
									</CardContent>
								</Card>
							</PostcardFrame>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</section>

	<!-- Our Services -->
	<section class="relative bg-[var(--cream)] py-24" id="services">
		<!-- Wave decoration at top -->
		<div class="absolute top-0 right-0 left-0">
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
			<div class="scroll-reveal mx-auto max-w-6xl" use:reveal>
				<div class="mb-12 text-center">
					<div class="mb-4 flex items-center justify-center gap-3">
						<div class="h-px w-8 bg-[var(--olive)]"></div>
						<span class="font-serif text-sm tracking-[0.2em] text-[var(--olive)] uppercase"
							>Services</span
						>
						<div class="h-px w-8 bg-[var(--olive)]"></div>
					</div>
					<h2 class="heading-serif mb-6 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
						WhatsApp Booking Service
					</h2>
					<p class="mx-auto max-w-2xl text-xl text-[var(--stone)]">
						Personalized travel planning at your fingertips
					</p>
				</div>

				<Card class="shadow-mediterranean-lg overflow-hidden border-[var(--sand)] py-0">
					<div class="grid grid-cols-1 lg:grid-cols-2">
						<div class="relative h-96 overflow-hidden lg:h-auto">
							<img
								src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
								alt="WhatsApp booking service"
								class="h-full w-full object-cover"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/60 to-transparent"
							></div>
							<div class="absolute right-8 bottom-8 left-8 text-white">
								<div
									class="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm"
								>
									<Phone class="h-8 w-8" />
								</div>
								<h3 class="heading-serif text-3xl font-semibold">Available 24/7</h3>
								<p class="mt-2 text-white/90">Real-time support throughout your journey</p>
							</div>
						</div>

						<CardContent class="p-8 lg:p-12">
							<h3 class="heading-serif mb-6 text-3xl font-semibold text-[var(--charcoal)]">
								Stress-Free Planning
							</h3>
							<p class="mb-8 text-lg leading-relaxed text-[var(--stone)]">
								For a fixed, transparent fee, we'll handle every detail of your Sorrento adventure.
								Focus on anticipating your Italian getaway while we take care of the rest.
							</p>

							<h4
								class="mb-4 flex items-center space-x-2 text-xl font-semibold text-[var(--charcoal)]"
							>
								<Star class="h-5 w-5 text-[var(--azure)]" />
								<span>What We Handle:</span>
							</h4>
							<ul class="mb-8 space-y-3">
								{#each ['Restaurant reservations at the best tables', 'Hotel and accommodation booking assistance', 'Activity and tour arrangements', 'Transportation coordination', 'Customized itinerary planning', 'Real-time support via WhatsApp'] as item, index}
									<li class="flex items-start space-x-3" style="animation-delay: {index * 50}ms">
										<div
											class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--azure)]"
										>
											<CheckCircle class="h-4 w-4 text-white" />
										</div>
										<span class="leading-relaxed text-[var(--stone)]">{item}</span>
									</li>
								{/each}
							</ul>

							<VintageButton href="/contact" variant="azure" size="lg" class="w-full">
								<MessageCircle class="h-5 w-5" />
								<span>Get in Touch</span>
							</VintageButton>
						</CardContent>
					</div>
				</Card>
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<section class="relative bg-white py-24">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-16 text-center" use:reveal>
				<div class="mb-4 flex items-center justify-center gap-3">
					<div class="h-px w-8 bg-[var(--coral)]"></div>
					<span class="font-serif text-sm tracking-[0.2em] text-[var(--coral)] uppercase"
						>Testimonials</span
					>
					<div class="h-px w-8 bg-[var(--coral)]"></div>
				</div>
				<h2 class="heading-serif mb-6 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
					What Travelers Say
				</h2>
			</div>

			<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3"></div>
		</div>
	</section>

	<!-- CTA -->
	<section class="relative overflow-hidden py-24">
		<!-- Background with Ken Burns effect -->
		<div class="absolute inset-0">
			<div class="animate-ken-burns h-full w-full">
				<img
					src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1920&q=80"
					alt="Sorrento coastline"
					class="h-full w-full object-cover"
				/>
			</div>
			<div
				class="absolute inset-0 bg-gradient-to-r from-[var(--azure)]/95 to-[var(--deep-azure)]/90"
			></div>
			<div class="film-grain pointer-events-none absolute inset-0"></div>
		</div>

		<div
			class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8"
			use:reveal
		>
			<div class="mx-auto max-w-3xl text-white">
				<div class="mb-4 flex items-center justify-center gap-3">
					<div class="h-px w-8 bg-white/50"></div>
					<span class="font-serif text-sm tracking-[0.3em] text-white/80 uppercase"
						>Get Started</span
					>
					<div class="h-px w-8 bg-white/50"></div>
				</div>
				<h2 class="heading-serif mb-6 text-4xl font-semibold sm:text-5xl">
					Ready to Plan Your Perfect Trip?
				</h2>
				<p class="mb-10 text-xl text-white/90">
					Let us help you create unforgettable memories in Sorrento and the Amalfi Coast
				</p>
				<VintageButton href="/contact" variant="coral" size="lg">
					<span>Get in Touch</span>
					<ArrowRight class="h-5 w-5" />
				</VintageButton>
			</div>
		</div>
	</section>
</div>
