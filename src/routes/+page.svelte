<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import type { BlogPost, Destination, Testimonial, LocalSpecialty } from '$lib/sanity/queries';
	import SEO from '$lib/components/SEO.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import {
		ArrowRight,
		MapPin,
		Utensils,
		Hotel,
		Sparkles,
		Mail,
		Star,
		Users,
		Award,
		TrendingUp,
		Heart,
		Camera,
		Globe,
		Waves,
		Mountain,
		Sun
	} from '@lucide/svelte';
	import { onMount } from 'svelte';

	interface Props {
		data: {
			featuredPosts: BlogPost[];
			featuredDestinations: Destination[];
			testimonials: Testimonial[];
			localSpecialties: LocalSpecialty[];
		};
	}

	let { data }: Props = $props();

	let email = $state('');
	let mouseX = $state(0);
	let mouseY = $state(0);
	let scrollY = $state(0);

	onMount(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		};

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

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const featuredSections = [
		{
			title: 'Eat',
			description: 'Discover authentic Italian cuisine and hidden culinary gems',
			image:
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Pizza-christian-mackie-768x1024.jpg',
			link: '/sorrento/eat',
			icon: Utensils,
			color: 'from-orange-500 to-red-500'
		},
		{
			title: 'Stay',
			description: 'Find your perfect accommodation from luxury hotels to charming B&Bs',
			image:
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Hotel-chloe-lefleur-768x1024.jpg',
			link: '/sorrento/stay',
			icon: Hotel,
			color: 'from-blue-500 to-purple-500'
		},
		{
			title: 'Do',
			description: 'Experience unforgettable activities and explore stunning attractions',
			image:
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Clear-Water-large-768x1024.jpeg',
			link: '/sorrento/do',
			icon: Sparkles,
			color: 'from-green-500 to-teal-500'
		}
	];

	const destinations = [
		{
			name: 'Capri',
			description: 'The jewel of the Mediterranean',
			image:
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Clear-Water-large-768x1024.jpeg',
			link: '/surrounding/capri',
			icon: Waves
		},
		{
			name: 'Amalfi Coast',
			description: 'Dramatic cliffs and colorful villages',
			image:
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Positano-marianna-berno-683x1024.jpg',
			link: '/surrounding/amalfi',
			icon: Mountain
		},
		{
			name: 'Naples',
			description: 'Vibrant culture and authentic pizza',
			image:
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Marina-della-Lobra-scaled.jpeg',
			link: '/surrounding/naples',
			icon: Sun
		}
	];

	const stats = [
		{ value: '5000+', label: 'Happy Travelers', icon: Users },
		{ value: '200+', label: 'Partner Hotels', icon: Hotel },
		{ value: '50+', label: 'Top Restaurants', icon: Award },
		{ value: '98%', label: 'Satisfaction Rate', icon: TrendingUp }
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

<div class="relative -mt-24 overflow-hidden">
	<!-- Animated Background Blobs -->
	<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
		<div
			class="blob absolute top-0 -left-20 h-96 w-96 rounded-full bg-[color:var(--purple-lavender)] opacity-20 blur-3xl"
			style="transform: translate({mouseX * 0.02}px, {mouseY * 0.02}px)"
		></div>
		<div
			class="blob absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[color:var(--turquoise)] opacity-20 blur-3xl"
			style="transform: translate({mouseX * -0.02}px, {mouseY * -0.02}px)"
		></div>
	</div>

	<!-- Hero Section with Parallax -->
	<section class="relative flex h-screen items-center justify-center overflow-hidden pt-24">
		<!-- Parallax Background -->
		<div class="absolute inset-0 z-0" style="transform: translateY({scrollY * 0.5}px)">
			<img
				src="https://welcome2sorrento.com/wp-content/uploads/2024/12/Sorrento-gregory-smirnov-2-scaled.jpg"
				alt="Sorrento coastline"
				class="h-full w-full scale-110 object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-b from-[color:var(--dark)]/60 via-[color:var(--dark)]/40 to-[color:var(--dark)]/80"
			></div>
		</div>

		<!-- Floating Elements -->
		<div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
			<div
				class="animate-float absolute top-1/4 left-1/4 h-16 w-16 rounded-full border-2 border-white/20"
				style="animation-delay: 0s;"
			></div>
			<div
				class="animate-float absolute top-1/3 right-1/4 h-12 w-12 rounded-full border-2 border-[color:var(--turquoise)]/30"
				style="animation-delay: 2s;"
			></div>
			<div
				class="animate-float absolute bottom-1/4 left-1/3 h-20 w-20 rounded-full border-2 border-[color:var(--purple-lavender)]/30"
				style="animation-delay: 4s;"
			></div>
		</div>

		<!-- Hero Content -->
		<div
			class="relative z-10 container mx-auto px-4 py-20 text-center text-white sm:px-6 md:py-24 lg:px-8"
		>
			<div class="animate-fade-in-up">
				<div
					class="glass mb-6 inline-flex animate-pulse items-center space-x-2 rounded-full border border-white/20 px-4 py-2"
				>
					<Sparkles class="h-4 w-4 text-[color:var(--turquoise)]" />
					<span class="text-sm font-medium">Your Journey Starts Here</span>
				</div>

				<h1
					class="mb-4 text-5xl leading-tight font-bold sm:text-6xl md:mb-6 lg:text-7xl xl:text-8xl"
				>
					Welcome to <br />
					<span class="text-gradient mt-2 inline-block">Sorrento</span>
				</h1>

				<p
					class="heading-serif mx-auto mb-8 max-w-4xl text-lg font-light text-white/90 sm:text-xl md:mb-10 lg:text-2xl xl:text-3xl"
				>
					Experience the magic of Italy's most enchanting coastal paradise
				</p>

				<div class="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:mb-12">
					<a href="#explore">
						<Button
							size="lg"
							class="group bg-gradient-to-r from-[color:var(--purple-lavender)] to-[color:var(--turquoise)] px-8 py-6 text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[color:var(--purple-lavender)]/50"
						>
							<div class="flex items-center space-x-2">
								<span>Start Exploring</span>
								<ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-2" />
							</div>
						</Button>
					</a>
					<a href="/surrounding">
						<Button
							size="lg"
							class="glass border-2 border-white/30 px-8 py-6 text-lg transition-all duration-500 hover:scale-105 hover:bg-white hover:text-[color:var(--dark)]"
						>
							<div class="flex items-center space-x-2">
								<MapPin class="h-5 w-5" />
								<span>View Destinations</span>
							</div>
						</Button>
					</a>
				</div>

				<!-- Stats Bar -->
				<div class="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
					{#each stats as stat}
						{@const Icon = stat.icon}
						<div
							class="glass rounded-2xl border border-white/20 p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 md:p-5"
						>
							<Icon class="mx-auto mb-2 h-6 w-6 text-[color:var(--turquoise)] md:h-8 md:w-8" />
							<div class="text-gradient mb-1 text-2xl font-bold md:text-3xl">{stat.value}</div>
							<div class="text-xs text-white/70 md:text-sm">{stat.label}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Scroll Indicator -->
		<div class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
			<div
				class="flex h-10 w-6 justify-center rounded-full border-2 border-white/50 backdrop-blur-sm"
			>
				<div class="mt-2 h-3 w-1 animate-pulse rounded-full bg-white"></div>
			</div>
		</div>

		<!-- Diagonal Wave Transition -->
		<div
			class="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-white to-transparent"
		></div>
	</section>

	<!-- Introduction Section with Mesh Gradient -->
	<section class="mesh-gradient relative py-32" id="explore">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-5xl">
				<div class="mb-16 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-[color:var(--purple-lavender)]/20 bg-[color:var(--purple-lavender)]/10 px-4 py-2"
					>
						<Heart class="h-4 w-4 text-[color:var(--purple-lavender)]" />
						<span class="text-sm font-medium text-[color:var(--dark)]">Made with Love</span>
					</div>
					<h2 class="mb-8 text-5xl font-bold text-[color:var(--dark)] sm:text-6xl">
						Discover the <span class="text-gradient">Magic</span>
					</h2>
					<p class="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 sm:text-2xl">
						Nestled atop dramatic cliffs overlooking the Bay of Naples, Sorrento captivates visitors
						with its stunning coastal views, vibrant lemon groves, and warm Italian hospitality.
					</p>
				</div>

				<!-- Feature Grid -->
				<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
					<div
						class="group rounded-3xl border border-[color:var(--purple-lavender)]/10 bg-white/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[color:var(--purple-lavender)]/30 hover:shadow-2xl"
					>
						<div
							class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--purple-lavender)] to-[color:var(--deep-purple)] transition-transform duration-500 group-hover:scale-110"
						>
							<Globe class="h-7 w-7 text-white" />
						</div>
						<h3 class="mb-3 text-xl font-bold text-[color:var(--dark)]">Local Insights</h3>
						<p class="leading-relaxed text-gray-600">
							Authentic recommendations from locals who know every hidden gem and secret spot.
						</p>
					</div>

					<div
						class="group rounded-3xl border border-[color:var(--turquoise)]/10 bg-white/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[color:var(--turquoise)]/30 hover:shadow-2xl"
					>
						<div
							class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--turquoise)] to-[color:var(--light-turquoise)] transition-transform duration-500 group-hover:scale-110"
						>
							<Camera class="h-7 w-7 text-white" />
						</div>
						<h3 class="mb-3 text-xl font-bold text-[color:var(--dark)]">Hidden Gems</h3>
						<p class="leading-relaxed text-gray-600">
							Discover breathtaking locations and experiences that most tourists never find.
						</p>
					</div>

					<div
						class="group rounded-3xl border border-[color:var(--purple-lavender)]/10 bg-white/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[color:var(--purple-lavender)]/30 hover:shadow-2xl"
					>
						<div
							class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--deep-purple)] to-[color:var(--purple-lavender)] transition-transform duration-500 group-hover:scale-110"
						>
							<Star class="h-7 w-7 text-white" />
						</div>
						<h3 class="mb-3 text-xl font-bold text-[color:var(--dark)]">Expert Curation</h3>
						<p class="leading-relaxed text-gray-600">
							Carefully selected experiences to ensure your trip is absolutely unforgettable.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Featured Sections with Asymmetric Layout -->
	<section class="relative overflow-hidden bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-20 text-center">
				<h2 class="mb-6 text-5xl font-bold text-[color:var(--dark)] sm:text-6xl">
					Plan Your <span class="text-gradient">Perfect Visit</span>
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">
					Everything you need to make the most of your Sorrento adventure
				</p>
			</div>

			<div class="space-y-12">
				{#each featuredSections as section, index}
					{@const Icon = section.icon}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<a
							href={section.link}
							class="group relative block {index % 2 === 0 ? 'lg:pr-64' : 'lg:pl-64'}"
						>
							<div
								class="relative overflow-hidden rounded-3xl bg-gradient-to-br {section.color} p-1 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
							>
								<div class="overflow-hidden rounded-3xl bg-white">
									<div
										class="flex flex-col {index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}"
									>
										<!-- Image -->
										<div class="relative h-80 overflow-hidden lg:h-96 lg:w-1/2">
											<img
												src={section.image}
												alt={section.title}
												class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
											/>
											<div
												class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
											></div>
											<div class="absolute top-6 right-6">
												<div
													class="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-md"
												>
													<Icon class="h-7 w-7 text-white" />
												</div>
											</div>
										</div>

										<!-- Content -->
										<div class="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
											<div
												class="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r px-3 py-1 {section.color} mb-6 self-start text-sm font-medium text-white"
											>
												<Sparkles class="h-3 w-3" />
												<span>Featured</span>
											</div>
											<h3 class="mb-4 text-4xl font-bold text-[color:var(--dark)] lg:text-5xl">
												{section.title}
											</h3>
											<p class="mb-8 text-lg leading-relaxed text-gray-600">
												{section.description}
											</p>
											<div
												class="flex items-center text-lg font-semibold text-[color:var(--purple-lavender)] transition-transform duration-300 group-hover:translate-x-4"
											>
												<span>Explore {section.title}</span>
												<ArrowRight class="ml-3 h-5 w-5" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Surrounding Destinations with Bento Grid -->
	<section class="relative bg-gradient-to-b from-white via-[color:var(--off-white)] to-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-20 text-center">
				<div
					class="mb-6 inline-flex items-center space-x-2 rounded-full border border-[color:var(--turquoise)]/20 bg-[color:var(--turquoise)]/10 px-4 py-2"
				>
					<MapPin class="h-4 w-4 text-[color:var(--turquoise)]" />
					<span class="text-sm font-medium text-[color:var(--dark)]">Beyond Sorrento</span>
				</div>
				<h2 class="mb-6 text-5xl font-bold text-[color:var(--dark)] sm:text-6xl">
					Explore <span class="text-gradient-2">Nearby Wonders</span>
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">
					Venture beyond to discover world-renowned destinations
				</p>
			</div>

			<div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#if data.featuredDestinations.length === 0}
					{#each destinations as destination, index}
						{@const Icon = destination.icon}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<a
								href={destination.link}
								class="group relative block h-96 overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
							>
								<img
									src={destination.image}
									alt={destination.name}
									class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div
									class="absolute inset-0 bg-gradient-to-t from-[color:var(--dark)]/90 via-[color:var(--dark)]/50 to-transparent"
								></div>

								<!-- Floating Icon -->
								<div
									class="glass absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20"
								>
									<Icon class="h-6 w-6 text-white" />
								</div>

								<!-- Content -->
								<div class="absolute right-0 bottom-0 left-0 p-8">
									<h3
										class="mb-2 text-3xl font-bold text-white transition-transform duration-300 group-hover:translate-x-2"
									>
										{destination.name}
									</h3>
									<p
										class="mb-4 text-white/80 transition-transform duration-300 group-hover:translate-x-2"
										style="transition-delay: 0.05s"
									>
										{destination.description}
									</p>
									<div
										class="flex items-center font-medium text-[color:var(--turquoise)] transition-transform duration-300 group-hover:translate-x-2"
										style="transition-delay: 0.1s"
									>
										<span>Discover More</span>
										<ArrowRight class="ml-2 h-4 w-4" />
									</div>
								</div>
							</a>
						</div>
					{/each}
				{:else}
					{#each data.featuredDestinations as destination, index}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<a
								href="/surrounding/{destination.slug.current}"
								class="group relative block h-96 overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
							>
								{#if destination.mainImage}
									<img
										src={urlFor(destination.mainImage).width(600).height(400).url()}
										alt={destination.name}
										class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
								{/if}
								<div
									class="absolute inset-0 bg-gradient-to-t from-[color:var(--dark)]/90 via-[color:var(--dark)]/50 to-transparent"
								></div>

								<!-- Floating Icon -->
								<div
									class="glass absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20"
								>
									<MapPin class="h-6 w-6 text-white" />
								</div>

								<!-- Content -->
								<div class="absolute right-0 bottom-0 left-0 p-8">
									<h3
										class="mb-2 text-3xl font-bold text-white transition-transform duration-300 group-hover:translate-x-2"
									>
										{destination.name}
									</h3>
									<p
										class="mb-4 text-white/80 transition-transform duration-300 group-hover:translate-x-2"
										style="transition-delay: 0.05s"
									>
										{destination.excerpt || destination.tagline || ''}
									</p>
									<div
										class="flex items-center font-medium text-[color:var(--turquoise)] transition-transform duration-300 group-hover:translate-x-2"
										style="transition-delay: 0.1s"
									>
										<span>Discover More</span>
										<ArrowRight class="ml-2 h-4 w-4" />
									</div>
								</div>
							</a>
						</div>
					{/each}
				{/if}
			</div>

			<div class="scroll-reveal text-center">
				<a href="/surrounding">
					<Button
						size="lg"
						class="bg-gradient-to-r from-[color:var(--turquoise)] to-[color:var(--light-turquoise)] px-8 py-6 text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[color:var(--turquoise)]/50"
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

	<!-- Testimonial Section with Gradient -->
	{#if data.testimonials.length > 0}
		{@const testimonial = data.testimonials[0]}
		<section class="relative overflow-hidden py-32">
			<div
				class="animate-gradient absolute inset-0 bg-gradient-to-br from-[color:var(--purple-lavender)] via-[color:var(--deep-purple)] to-[color:var(--dark)]"
			></div>

			<div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="scroll-reveal mx-auto max-w-4xl text-center text-white">
					<div
						class="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md"
					>
						<svg
							class="h-10 w-10 text-[color:var(--turquoise)]"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
							/>
						</svg>
					</div>

					<blockquote
						class="heading-serif mb-8 text-2xl leading-relaxed font-light sm:text-3xl lg:text-4xl"
					>
						"{testimonial.text}"
					</blockquote>

					<div class="flex items-center justify-center space-x-4">
						{#if testimonial.photo}
							<img
								src={urlFor(testimonial.photo).width(64).height(64).url()}
								alt={testimonial.name}
								class="h-16 w-16 rounded-2xl object-cover shadow-xl"
							/>
						{:else}
							<div
								class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--turquoise)] to-[color:var(--light-turquoise)] text-xl font-bold text-[color:var(--dark)] shadow-xl"
							>
								{testimonial.name.charAt(0)}
							</div>
						{/if}
						<div class="text-left">
							<p class="text-lg font-semibold">{testimonial.name}</p>
							<p class="text-white/70">{testimonial.location}</p>
						</div>
					</div>

					<!-- Rating Stars -->
					{#if testimonial.rating}
						<div class="mt-8 flex items-center justify-center space-x-1">
							{#each Array(testimonial.rating) as _, i}
								<Star class="h-6 w-6 fill-[color:var(--turquoise)] text-[color:var(--turquoise)]" />
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</section>
	{:else}
		<section class="relative overflow-hidden py-32">
			<div
				class="animate-gradient absolute inset-0 bg-gradient-to-br from-[color:var(--purple-lavender)] via-[color:var(--deep-purple)] to-[color:var(--dark)]"
			></div>

			<div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="scroll-reveal mx-auto max-w-4xl text-center text-white">
					<div
						class="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md"
					>
						<svg
							class="h-10 w-10 text-[color:var(--turquoise)]"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
							/>
						</svg>
					</div>

					<blockquote
						class="heading-serif mb-8 text-2xl leading-relaxed font-light sm:text-3xl lg:text-4xl"
					>
						"Welcome2Sorrento made our trip absolutely unforgettable. The local recommendations and
						insider tips helped us discover places we never would have found on our own."
					</blockquote>

					<div class="flex items-center justify-center space-x-4">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--turquoise)] to-[color:var(--light-turquoise)] text-xl font-bold text-[color:var(--dark)] shadow-xl"
						>
							SP
						</div>
						<div class="text-left">
							<p class="text-lg font-semibold">Sarah Parker</p>
							<p class="text-white/70">London, UK</p>
						</div>
					</div>

					<!-- Rating Stars -->
					<div class="mt-8 flex items-center justify-center space-x-1">
						{#each Array(5) as _, i}
							<Star class="h-6 w-6 fill-[color:var(--turquoise)] text-[color:var(--turquoise)]" />
						{/each}
					</div>
				</div>
			</div>
		</section>
	{/if}

	<!-- Newsletter Section with Modern Card -->
	<section id="newsletter" class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-3xl">
				<div class="relative overflow-hidden rounded-3xl">
					<!-- Gradient Border Effect -->
					<div
						class="animate-gradient absolute inset-0 bg-gradient-to-r from-[color:var(--purple-lavender)] via-[color:var(--turquoise)] to-[color:var(--purple-lavender)]"
					></div>
					<div class="relative m-1 rounded-3xl bg-white p-12">
						<div class="mb-8 text-center">
							<div
								class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[color:var(--purple-lavender)] to-[color:var(--turquoise)] shadow-lg"
							>
								<Mail class="h-10 w-10 text-white" />
							</div>
							<h2 class="mb-4 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
								Stay <span class="text-gradient">Connected</span>
							</h2>
							<p class="mx-auto max-w-xl text-lg text-gray-600">
								Get exclusive travel tips, insider guides, and special offers delivered to your
								inbox
							</p>
						</div>

						<form onsubmit={handleNewsletter} class="flex flex-col gap-4 sm:flex-row">
							<Input
								type="email"
								placeholder="Enter your email address"
								bind:value={email}
								required
								class="h-14 flex-1 rounded-xl border-2 text-lg transition-colors focus:border-[color:var(--purple-lavender)]"
							/>
							<Button
								type="submit"
								size="lg"
								class="h-14 bg-gradient-to-r from-[color:var(--purple-lavender)] to-[color:var(--turquoise)] px-8 text-lg whitespace-nowrap transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[color:var(--purple-lavender)]/50"
							>
								Subscribe Now
							</Button>
						</form>

						<p class="mt-6 text-center text-sm text-gray-600">
							Join 10,000+ travelers. Unsubscribe anytime.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Final CTA Section -->
	<section class="relative overflow-hidden py-32">
		<div class="absolute inset-0">
			<img
				src="https://welcome2sorrento.com/wp-content/uploads/2024/12/Meta-ricky-johnson-scaled.jpg"
				alt="Sorrento"
				class="h-full w-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-r from-[color:var(--dark)]/90 to-[color:var(--deep-purple)]/80"
			></div>
		</div>

		<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-white">
				<div
					class="glass mb-8 inline-flex items-center space-x-2 rounded-full border border-white/20 px-4 py-2"
				>
					<Sparkles class="h-4 w-4 text-[color:var(--turquoise)]" />
					<span class="text-sm font-medium">Let's Make It Happen</span>
				</div>

				<h2 class="mb-8 text-5xl font-bold sm:text-6xl">
					Ready for Your <span class="text-gradient">Adventure</span>?
				</h2>
				<p class="mx-auto mb-12 max-w-2xl text-xl font-light text-white/90 sm:text-2xl">
					Let us help you plan the perfect trip with our personalized booking service
				</p>

				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a href="/about#services">
						<Button
							size="lg"
							class="bg-white px-10 py-7 text-lg text-[color:var(--dark)] shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-[color:var(--off-white)]"
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
							class="glass border-2 border-white px-10 py-7 text-lg transition-all duration-500 hover:scale-105 hover:bg-white hover:text-[color:var(--dark)]"
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
