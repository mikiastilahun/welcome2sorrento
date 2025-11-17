<script lang="ts">
	import type {
		BlogPost,
		Destination,
		Testimonial,
		LocalSpecialty,
		SiteSettings
	} from '$lib/sanity/queries';
	import SEO from '$lib/components/SEO.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardDescription from '$lib/components/ui/card/card-description.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { ArrowRight, MapPin, Utensils, Hotel, Sparkles, Mail } from '@lucide/svelte';
	import { onMount } from 'svelte';

	interface Props {
		data: {
			featuredPosts: BlogPost[];
			featuredDestinations: Destination[];
			testimonials: Testimonial[];
			localSpecialties: LocalSpecialty[];
			siteSettings: SiteSettings | null;
		};
	}

	let { data }: Props = $props();

	let email = $state('');
	let scrollY = $state(0);

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;

			// Reveal animations on scroll
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

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	// Featured sections with CMS data or fallback to defaults
	const featuredSections = [
		{
			title: data.siteSettings?.featuredSections?.eat?.title || 'Eat',
			description:
				data.siteSettings?.featuredSections?.eat?.description ||
				'Discover authentic Italian cuisine and hidden culinary gems',
			image:
				data.siteSettings?.featuredSections?.eat?.image?.asset?.url ||
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Pizza-christian-mackie-768x1024.jpg',
			link: '/sorrento/eat',
			icon: Utensils
		},
		{
			title: data.siteSettings?.featuredSections?.stay?.title || 'Stay',
			description:
				data.siteSettings?.featuredSections?.stay?.description ||
				'Find your perfect accommodation from luxury hotels to charming B&Bs',
			image:
				data.siteSettings?.featuredSections?.stay?.image?.asset?.url ||
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Hotel-chloe-lefleur-768x1024.jpg',
			link: '/sorrento/stay',
			icon: Hotel
		},
		{
			title: data.siteSettings?.featuredSections?.do?.title || 'Do',
			description:
				data.siteSettings?.featuredSections?.do?.description ||
				'Experience unforgettable activities and explore stunning attractions',
			image:
				data.siteSettings?.featuredSections?.do?.image?.asset?.url ||
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Clear-Water-large-768x1024.jpeg',
			link: '/sorrento/do',
			icon: Sparkles
		}
	];

	// Use CMS destinations or fallback
	const destinations =
		data.featuredDestinations.length > 0
			? data.featuredDestinations.map((dest) => ({
					name: dest.name,
					description: dest.subtitle || dest.shortDescription,
					image: dest.cardImage?.asset?.url || '',
					link: `/surrounding/${dest.slug.current}`
				}))
			: [
					{
						name: 'Capri',
						description: 'The jewel of the Mediterranean',
						image:
							'https://welcome2sorrento.com/wp-content/uploads/2024/12/Clear-Water-large-768x1024.jpeg',
						link: '/surrounding/capri'
					},
					{
						name: 'Amalfi Coast',
						description: 'Dramatic cliffs and colorful villages',
						image:
							'https://welcome2sorrento.com/wp-content/uploads/2024/12/Positano-marianna-berno-683x1024.jpg',
						link: '/surrounding/amalfi'
					},
					{
						name: 'Naples',
						description: 'Vibrant culture and authentic pizza',
						image:
							'https://welcome2sorrento.com/wp-content/uploads/2024/12/Marina-della-Lobra-scaled.jpeg',
						link: '/surrounding/naples'
					}
				];

	function handleNewsletter(e: Event) {
		e.preventDefault();
		console.log('Newsletter signup:', email);
		email = '';
	}
</script>

<SEO
	title="Welcome2Sorrento - Your Ultimate Guide to Sorrento & Amalfi Coast"
	description="Discover the magic of Sorrento and the breathtaking Amalfi Coast. Find the best restaurants, hotels, activities, and hidden gems. Expert travel guide by locals."
	keywords="Sorrento travel guide, Amalfi Coast, Italy tourism, Sorrento restaurants, Sorrento hotels, things to do Sorrento, Capri day trips, Naples to Sorrento"
	type="website"
/>

<svelte:head>
	<title>Welcome2Sorrento - Your Ultimate Guide to the Jewel of the Amalfi Coast</title>
</svelte:head>

<div class="relative -mt-24">
	<!-- Hero Section -->
	<section class="relative flex h-screen items-center justify-center overflow-hidden pt-24">
		<!-- Single Background Image -->
		<div class="absolute inset-0 z-0">
			<img
				src="https://welcome2sorrento.com/wp-content/uploads/2024/12/Sorrento-gregory-smirnov-2-scaled.jpg"
				alt="Sorrento coastline"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-black/50"></div>
		</div>

		<!-- Hero Content - Centered -->
		<div class="relative z-10 container mx-auto px-4 text-center text-white sm:px-6 lg:px-8">
			<div class="animate-fade-in-up">
				<h1 class="heading-serif mb-6 text-5xl leading-tight font-semibold sm:text-6xl lg:text-7xl">
					Discover Sorrento
				</h1>

				<p class="mx-auto mb-10 max-w-2xl text-lg font-light text-white/95 sm:text-xl lg:text-2xl">
					Experience the magic of Italy's most enchanting coastal paradise
				</p>

				<a href="#explore">
					<Button
						size="lg"
						class="cursor-pointer bg-(--azure) px-8 py-6 text-lg transition-all duration-200 ease-out hover:bg-(--deep-azure) hover:shadow-lg hover:brightness-110"
					>
						<div class="flex items-center space-x-2">
							<span>Explore Sorrento</span>
							<ArrowRight class="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
						</div>
					</Button>
				</a>
			</div>
		</div>
	</section>

	<!-- Introduction Section -->
	<section class="relative bg-(--warm-white) py-24" id="explore">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-5xl">
				<div class="mb-16 text-center">
					<h2
						class="heading-serif mb-6 text-4xl font-semibold text-[color:var(--charcoal)] sm:text-5xl"
					>
						Welcome to Sorrento
					</h2>
					<p class="mx-auto max-w-3xl text-lg leading-relaxed text-[color:var(--stone)] sm:text-xl">
						Nestled atop dramatic cliffs overlooking the Bay of Naples, Sorrento captivates visitors
						with its stunning coastal views, vibrant lemon groves, and warm Italian hospitality.
					</p>
				</div>

				<!-- Feature Cards - Simplified -->
				<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
					<Card class="border-[color:var(--sand)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
						<CardContent class="p-6">
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--azure)]"
							>
								<MapPin class="h-6 w-6 text-white" />
							</div>
							<h3 class="mb-2 text-xl font-semibold text-[color:var(--charcoal)]">
								Local Insights
							</h3>
							<p class="leading-relaxed text-[color:var(--stone)]">
								Authentic recommendations from locals who know every hidden gem and secret spot.
							</p>
						</CardContent>
					</Card>

					<Card class="border-[color:var(--sand)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
						<CardContent class="p-6">
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--azure)]"
							>
								<Sparkles class="h-6 w-6 text-white" />
							</div>
							<h3 class="mb-2 text-xl font-semibold text-[color:var(--charcoal)]">Hidden Gems</h3>
							<p class="leading-relaxed text-[color:var(--stone)]">
								Discover breathtaking locations and experiences that most tourists never find.
							</p>
						</CardContent>
					</Card>

					<Card class="border-[color:var(--sand)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
						<CardContent class="p-6">
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--azure)]"
							>
								<Hotel class="h-6 w-6 text-white" />
							</div>
							<h3 class="mb-2 text-xl font-semibold text-[color:var(--charcoal)]">
								Expert Curation
							</h3>
							<p class="leading-relaxed text-[color:var(--stone)]">
								Carefully selected experiences to ensure your trip is absolutely unforgettable.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	</section>

	<!-- Eat, Stay, Do Section - 3-Column Grid -->
	<section class="relative bg-white py-24">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-16 text-center">
				<h2 class="heading-serif mb-4 text-4xl font-semibold text-(--charcoal) sm:text-5xl">
					Plan Your Perfect Visit
				</h2>
				<p class="mx-auto max-w-2xl text-lg text-(--stone)">
					Everything you need to make the most of your Sorrento adventure
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each featuredSections as section, index}
					{@const Icon = section.icon}
					<div class="scroll-reveal" style="transition-delay: {index * 100}ms">
						<a href={section.link} class="group block">
							<Card
								class="h-full overflow-hidden border-(--sand) pt-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-(--azure) hover:shadow-lg"
							>
								<div class="relative h-64 overflow-hidden">
									<img
										src={section.image}
										alt={section.title}
										class="h-full w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-[1.04]"
									/>
								</div>
								<CardHeader>
									<div
										class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--azure)] transition-transform duration-200 ease-out group-hover:scale-105"
									>
										<Icon class="h-5 w-5 text-white" />
									</div>
									<CardTitle class="heading-serif text-2xl text-[color:var(--charcoal)]">
										{section.title}
									</CardTitle>
									<CardDescription class="text-[color:var(--stone)]">
										{section.description}
									</CardDescription>
								</CardHeader>
								<CardContent class="pb-6">
									<div
										class="flex items-center font-medium text-[color:var(--azure)] transition-transform duration-200 ease-out group-hover:translate-x-1"
									>
										<span>Explore {section.title}</span>
										<ArrowRight
											class="ml-2 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
										/>
									</div>
								</CardContent>
							</Card>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Featured Destinations - Clean Grid -->
	<section class="relative bg-(--cream) py-24">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-16 text-center">
				<h2 class="heading-serif mb-4 text-4xl font-semibold text-(--charcoal) sm:text-5xl">
					Explore Nearby Wonders
				</h2>
				<p class="mx-auto max-w-2xl text-lg text-(--stone)">
					Venture beyond to discover world-renowned destinations
				</p>
			</div>

			<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#if data.featuredDestinations.length === 0}
					{#each destinations as destination}
						<div class="scroll-reveal">
							<a href={destination.link} class="group block">
								<Card
									class="h-full overflow-hidden border-[color:var(--sand)] py-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
								>
									<div class="relative aspect-[4/5] overflow-hidden bg-[color:var(--sand)]">
										{#if destination.image}
											<img
												src={destination.image}
												alt={destination.name}
												class="h-full w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-[1.04]"
											/>
										{/if}
										<div
											class="absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/60 to-transparent"
										></div>
										<div class="absolute right-0 bottom-0 left-0 p-6">
											<h3 class="heading-serif mb-1 text-2xl font-semibold text-white">
												{destination.name}
											</h3>
											<p class="text-sm text-white/90">
												{destination.description}
											</p>
										</div>
									</div>
								</Card>
							</a>
						</div>
					{/each}
				{:else}
					{#each data.featuredDestinations as destination}
						<div class="scroll-reveal">
							<a href="/surrounding/{destination.slug.current}" class="group block">
								<Card
									class="h-full overflow-hidden border-[color:var(--sand)] py-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
								>
									<div class="relative aspect-[4/5] overflow-hidden bg-[color:var(--sand)]">
										<img
											src={destination.cardImage?.asset?.url ||
												'https://welcome2sorrento.com/wp-content/uploads/2024/12/Clear-Water-large-768x1024.jpeg'}
											alt={destination.name}
											class="h-full w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-[1.04]"
										/>
										<div
											class="absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/60 to-transparent"
										></div>
										<div class="absolute right-0 bottom-0 left-0 p-6">
											<h3 class="heading-serif mb-1 text-2xl font-semibold text-white">
												{destination.name}
											</h3>
											<p class="text-sm text-white/90">
												{destination.subtitle || destination.shortDescription || ''}
											</p>
										</div>
									</div>
								</Card>
							</a>
						</div>
					{/each}
				{/if}
			</div>

			<div class="scroll-reveal text-center">
				<a href="/surrounding">
					<Button
						size="lg"
						class="group bg-[color:var(--azure)] px-8 py-6 text-lg transition-all duration-200 ease-out hover:bg-[color:var(--deep-azure)] hover:shadow-lg hover:brightness-110"
					>
						<div class="flex items-center space-x-2">
							<span>View All Destinations</span>
							<ArrowRight class="h-5 w-5" />
						</div>
					</Button>
				</a>
			</div>
		</div>
	</section>

	<!-- Testimonial Section - Simplified -->
	{#if data.testimonials.length > 0}
		{@const testimonial = data.testimonials[0]}
		<section class="relative bg-[color:var(--sand)] py-24">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="scroll-reveal mx-auto max-w-4xl text-center">
					<div
						class="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--azure)]"
					>
						<svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
							/>
						</svg>
					</div>

					<blockquote
						class="heading-serif mb-8 text-2xl leading-relaxed font-light text-[color:var(--charcoal)] sm:text-3xl"
					>
						"{testimonial.text}"
					</blockquote>

					<div class="flex items-center justify-center space-x-4">
						{#if testimonial.photo?.asset?.url}
							<img
								src={testimonial.photo.asset.url}
								alt={testimonial.name}
								class="h-14 w-14 rounded-xl object-cover"
							/>
						{:else}
							<div
								class="flex h-14 w-14 items-center justify-center rounded-xl bg-[color:var(--azure)] text-lg font-semibold text-white"
							>
								{testimonial.name.charAt(0)}
							</div>
						{/if}
						<div class="text-left">
							<p class="font-semibold text-[color:var(--charcoal)]">{testimonial.name}</p>
							<p class="text-sm text-[color:var(--stone)]">{testimonial.location}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	{:else}
		<section class="relative bg-[color:var(--sand)] py-24">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="scroll-reveal mx-auto max-w-4xl text-center">
					<div
						class="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--azure)]"
					>
						<svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
							/>
						</svg>
					</div>

					<blockquote
						class="heading-serif mb-8 text-2xl leading-relaxed font-light text-[color:var(--charcoal)] sm:text-3xl"
					>
						"Welcome2Sorrento made our trip absolutely unforgettable. The local recommendations and
						insider tips helped us discover places we never would have found on our own."
					</blockquote>

					<div class="flex items-center justify-center space-x-4">
						<div
							class="flex h-14 w-14 items-center justify-center rounded-xl bg-[color:var(--azure)] text-lg font-semibold text-white"
						>
							SP
						</div>
						<div class="text-left">
							<p class="font-semibold text-[color:var(--charcoal)]">Sarah Parker</p>
							<p class="text-sm text-[color:var(--stone)]">London, UK</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	{/if}

	<!-- Newsletter Section - Simplified -->
	<section id="newsletter" class="relative bg-[color:var(--cream)] py-24">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-2xl">
				<div class="mb-8 text-center">
					<div
						class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--azure)]"
					>
						<Mail class="h-8 w-8 text-white" />
					</div>
					<h2
						class="heading-serif mb-4 text-3xl font-semibold text-[color:var(--charcoal)] sm:text-4xl"
					>
						Stay Connected
					</h2>
					<p class="mx-auto max-w-xl text-lg text-[color:var(--stone)]">
						Get exclusive travel tips, insider guides, and special offers delivered to your inbox
					</p>
				</div>

				<form onsubmit={handleNewsletter} class="flex flex-col gap-4 sm:flex-row">
					<Input
						type="email"
						placeholder="Enter your email address"
						bind:value={email}
						required
						class="h-12 flex-1 rounded-lg border-[color:var(--stone)] text-base transition-colors focus:border-[color:var(--azure)]"
					/>
					<Button
						type="submit"
						size="lg"
						class="h-12 bg-[color:var(--azure)] px-8 text-base transition-all duration-200 ease-out hover:bg-[color:var(--deep-azure)] hover:shadow-lg hover:brightness-110 sm:whitespace-nowrap"
					>
						Subscribe
					</Button>
				</form>

				<p class="mt-4 text-center text-sm text-[color:var(--stone)]">
					Join 10,000+ travelers. Unsubscribe anytime.
				</p>
			</div>
		</div>
	</section>

	<!-- Final CTA Section - Simplified -->
	<section class="relative overflow-hidden py-24">
		<div class="absolute inset-0">
			<img
				src="https://welcome2sorrento.com/wp-content/uploads/2024/12/Meta-ricky-johnson-scaled.jpg"
				alt="Sorrento"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-black/70"></div>
		</div>

		<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-white">
				<h2 class="heading-serif mb-6 text-4xl font-semibold sm:text-5xl">
					Ready for Your Adventure?
				</h2>
				<p class="mx-auto mb-10 max-w-2xl text-lg font-light text-white/95 sm:text-xl">
					Let us help you plan the perfect trip with our personalized booking service
				</p>

				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a href="/about#services">
						<Button
							size="lg"
							class="group bg-white px-10 py-6 text-lg text-[color:var(--charcoal)] transition-all duration-200 ease-out hover:bg-[color:var(--cream)] hover:shadow-lg"
						>
							<div class="flex items-center space-x-2">
								<span>Our Services</span>
								<ArrowRight class="h-5 w-5" />
							</div>
						</Button>
					</a>
					<a href="/contact">
						<Button
							size="lg"
							variant="outline"
							class="border-2 border-white bg-transparent px-10 py-6 text-lg text-white transition-all duration-200 ease-out hover:bg-white hover:text-[color:var(--charcoal)] hover:shadow-lg"
						>
							<div class="flex items-center space-x-2">
								<Mail class="h-5 w-5" />
								<span>Get in Touch</span>
							</div>
						</Button>
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
