<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import {
		MapPin,
		ArrowRight,
		Clock,
		Sparkles,
		Waves,
		Mountain,
		Sun,
		Compass
	} from '@lucide/svelte';
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

	const destinations = [
		{
			name: 'Capri',
			tagline: 'The Jewel of the Mediterranean',
			image: 'https://images.unsplash.com/photo-1566993881472-0e5e8c244e7c?w=1200&q=80',
			description:
				'Legendary island of glamour and natural beauty, home to the famous Blue Grotto, dramatic Faraglioni rocks, and chic Piazzetta.',
			highlights: ['Blue Grotto', 'Gardens of Augustus', 'Villa Jovis', 'Marina Piccola'],
			link: '/surrounding/capri',
			distance: '20 km by ferry',
			travelTime: '20-40 min',
			icon: Waves,
			gradient: 'from-blue-500 to-cyan-500'
		},
		{
			name: 'Amalfi Coast',
			tagline: 'UNESCO World Heritage Wonder',
			image: 'https://images.unsplash.com/photo-1534113414509-0bd4d0ff02a9?w=1200&q=80',
			description:
				'Breathtaking coastal drive featuring picturesque villages like Positano, Amalfi, and Ravello clinging to dramatic cliffs.',
			highlights: ['Positano', 'Amalfi Cathedral', 'Ravello Gardens', 'Path of Gods'],
			link: '/surrounding/amalfi',
			distance: '20-40 km',
			travelTime: '1-1.5 hours',
			icon: Mountain,
			gradient: 'from-purple-500 to-pink-500'
		},
		{
			name: 'Naples',
			tagline: 'Historic Capital of Southern Italy',
			image: 'https://images.unsplash.com/photo-1600875017876-96a047e8d449?w=1200&q=80',
			description:
				'Vibrant city steeped in history, birthplace of pizza, and gateway to Pompeii and Mount Vesuvius.',
			highlights: ['Pompeii', 'Mount Vesuvius', 'Historic Center', 'Pizza Napoletana'],
			link: '/surrounding/naples',
			distance: '50 km',
			travelTime: '1 hour by train',
			icon: Sun,
			gradient: 'from-orange-500 to-red-500'
		},
		{
			name: 'Procida',
			tagline: 'Authentic Island Charm',
			image: 'https://images.unsplash.com/photo-1633859994781-5229a2e46878?w=1200&q=80',
			description:
				'Colorful fishing village and unspoiled island gem, less touristy than Capri with authentic Italian character.',
			highlights: ['Marina Corricella', 'Terra Murata', 'Chiaiolella Beach', 'Local Life'],
			link: '/surrounding/procida',
			distance: '35 km by ferry',
			travelTime: '40 min + 30 min',
			icon: Waves,
			gradient: 'from-teal-500 to-green-500'
		},
		{
			name: 'Ischia',
			tagline: 'Island of Thermal Spas',
			image: 'https://images.unsplash.com/photo-1602002419077-c05bf89d0645?w=1200&q=80',
			description:
				'Volcanic island famous for natural thermal springs, beautiful beaches, and the stunning Aragonese Castle.',
			highlights: ['Thermal Parks', 'Aragonese Castle', 'Maronti Beach', 'Monte Epomeo'],
			link: '/surrounding/ischia',
			distance: '45 km by ferry',
			travelTime: '50 min + 40 min',
			icon: Sparkles,
			gradient: 'from-indigo-500 to-purple-500'
		},
		{
			name: 'Salerno',
			tagline: 'Gateway to Southern Coastline',
			image: 'https://images.unsplash.com/photo-1555992336-fb0d29d8a6e7?w=1200&q=80',
			description:
				'Historic port city with beautiful waterfront promenade, medieval center, and access to Paestum ruins.',
			highlights: ['Lungomare', 'Duomo', 'Paestum Temples', 'Historic Center'],
			link: '/surrounding/salerno',
			distance: '55 km',
			travelTime: '1.5 hours',
			icon: Compass,
			gradient: 'from-pink-500 to-rose-500'
		}
	];
</script>

<svelte:head>
	<title>Surrounding Area - Capri, Amalfi Coast, Naples & More | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Explore destinations near Sorrento - Capri, the Amalfi Coast, Naples, Procida, Ischia, and Salerno. Complete travel guides for day trips."
	/>
</svelte:head>

<div class="-mt-24">
	<!-- Hero Section -->
	<section class="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1534113414509-0bd4d0ff02a9?w=1920&q=80"
				alt="Amalfi Coast panorama"
				class="h-full w-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-br from-[color:var(--dark)]/80 via-[color:var(--deep-purple)]/60 to-[color:var(--dark)]/80"
			></div>
		</div>

		<div class="relative z-10 container mx-auto px-4 py-32 text-center text-white sm:px-6 lg:px-8">
			<div class="animate-fade-in-up">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[color:var(--turquoise)] to-[color:var(--light-turquoise)] shadow-2xl"
				>
					<MapPin class="h-10 w-10 text-white" />
				</div>
				<h1 class="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
					Explore the <span class="text-gradient-2">Surrounding Area</span>
				</h1>
				<p class="heading-serif mx-auto max-w-3xl text-xl font-light text-white/90 sm:text-2xl">
					World-renowned destinations just a short journey from Sorrento
				</p>
			</div>
		</div>
	</section>

	<!-- Introduction -->
	<section class="mesh-gradient relative py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-5xl">
				<div class="mb-16 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-[color:var(--turquoise)]/20 bg-[color:var(--turquoise)]/10 px-4 py-2"
					>
						<Compass class="h-4 w-4 text-[color:var(--turquoise)]" />
						<span class="text-sm font-medium text-[color:var(--dark)]"
							>Gateway to Southern Italy</span
						>
					</div>
					<h2 class="mb-8 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
						Your <span class="text-gradient-2">Perfect Base</span>
					</h2>
					<p class="text-xl leading-relaxed text-gray-600">
						Sorrento's prime location makes it the perfect base for exploring some of Italy's most
						iconic destinations. From legendary islands to dramatic coastal drives, ancient ruins to
						vibrant cities, each destination offers unique experiences and unforgettable memories.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Destinations Grid -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="space-y-16">
				{#each destinations as destination, index}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<a href={destination.link} class="group block">
							<div class="relative overflow-hidden rounded-3xl">
								<div
									class="absolute inset-0 bg-gradient-to-r {destination.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20"
								></div>
								<div
									class="relative overflow-hidden rounded-3xl border-2 border-transparent bg-white shadow-lg transition-all duration-500 group-hover:border-[color:var(--turquoise)] group-hover:shadow-2xl"
								>
									<div
										class="grid grid-cols-1 lg:grid-cols-2 {index % 2 === 1
											? 'lg:grid-flow-col-dense'
											: ''}"
									>
										<!-- Image -->
										<div
											class="relative h-96 overflow-hidden lg:h-[500px] {index % 2 === 1
												? 'lg:col-start-2'
												: ''}"
										>
											<img
												src={destination.image}
												alt={destination.name}
												class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
											/>
											<div
												class="absolute inset-0 bg-gradient-to-t from-[color:var(--dark)]/80 via-[color:var(--dark)]/20 to-transparent"
											></div>

											<!-- Floating Icon -->
											<div
												class="glass absolute top-6 right-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20"
											>
												<svelte:component this={destination.icon} class="h-8 w-8 text-white" />
											</div>

											<!-- Mobile Title -->
											<div class="absolute right-6 bottom-6 left-6 lg:hidden">
												<h3 class="mb-2 text-4xl font-bold text-white">{destination.name}</h3>
												<p class="text-white/90">{destination.tagline}</p>
											</div>
										</div>

										<!-- Content -->
										<CardContent
											class="flex flex-col justify-center p-8 lg:p-12 {index % 2 === 1
												? 'lg:col-start-1'
												: ''}"
										>
											<div class="mb-6 hidden lg:block">
												<div
													class="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r px-3 py-1 {destination.gradient} mb-4 text-sm font-medium text-white"
												>
													<Sparkles class="h-3 w-3" />
													<span>Must Visit</span>
												</div>
												<h3
													class="mb-3 text-5xl font-bold text-[color:var(--dark)] group-hover:bg-gradient-to-r group-hover:text-transparent group-hover:{destination.gradient} transition-all duration-500 group-hover:bg-clip-text"
												>
													{destination.name}
												</h3>
												<p class="mb-6 text-xl font-medium text-[color:var(--turquoise)]">
													{destination.tagline}
												</p>
											</div>

											<p class="mb-8 text-lg leading-relaxed text-gray-600">
												{destination.description}
											</p>

											<div class="mb-8">
												<div
													class="mb-4 flex items-center space-x-2 text-sm font-bold tracking-wide text-[color:var(--turquoise)] uppercase"
												>
													<Sparkles class="h-4 w-4" />
													<span>Top Highlights</span>
												</div>
												<div class="grid grid-cols-2 gap-3">
													{#each destination.highlights as highlight}
														<div
															class="flex items-center space-x-2 rounded-xl bg-[color:var(--off-white)] p-3 group-hover:bg-gradient-to-r group-hover:{destination.gradient} group-hover:bg-opacity-10 transition-all duration-300"
														>
															<div
																class="h-2 w-2 rounded-full bg-gradient-to-r {destination.gradient}"
															></div>
															<span class="text-sm font-medium">{highlight}</span>
														</div>
													{/each}
												</div>
											</div>

											<div
												class="flex flex-col justify-between gap-4 border-t-2 border-[color:var(--off-white)] pt-6 sm:flex-row sm:items-center"
											>
												<div class="space-y-2">
													<div class="flex items-center space-x-2 text-sm">
														<MapPin class="h-4 w-4 text-[color:var(--turquoise)]" />
														<span class="font-semibold">Distance:</span>
														<span class="text-gray-600">{destination.distance}</span>
													</div>
													<div class="flex items-center space-x-2 text-sm">
														<Clock class="h-4 w-4 text-[color:var(--purple-lavender)]" />
														<span class="font-semibold">Travel Time:</span>
														<span class="text-gray-600">{destination.travelTime}</span>
													</div>
												</div>

												<Button
													class="bg-gradient-to-r {destination.gradient} whitespace-nowrap text-white transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[color:var(--turquoise)]/50"
												>
													<span class="flex items-center space-x-2">
														<span>Explore {destination.name}</span>
														<ArrowRight
															class="h-4 w-4 transition-transform group-hover:translate-x-2"
														/>
													</span>
												</Button>
											</div>
										</CardContent>
									</div>
								</div>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Transportation Info -->
	<section class="relative bg-gradient-to-b from-white via-[color:var(--off-white)] to-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-20 text-center">
					<h2 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
						Getting <span class="text-gradient-2">Around</span>
					</h2>
					<p class="text-xl text-gray-600">
						Multiple transportation options to explore the region
					</p>
				</div>

				<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
					{#each [{ title: 'Ferry Services', description: 'Regular ferries to Capri, Ischia, Procida, and Naples from Sorrento port', gradient: 'from-blue-500 to-cyan-500', icon: Waves }, { title: 'Bus & Train', description: 'SITA buses along the coast, Circumvesuviana train to Naples and Pompeii', gradient: 'from-purple-500 to-pink-500', icon: Mountain }, { title: 'Private Tours', description: 'Customized private tours and transfers available through our booking service', gradient: 'from-orange-500 to-red-500', icon: Sparkles }] as transport, index}
						<div class="scroll-reveal group" style="transition-delay: {index * 0.1}s">
							<div class="relative h-full overflow-hidden rounded-3xl">
								<div
									class="absolute inset-0 bg-gradient-to-r {transport.gradient} opacity-5 transition-opacity duration-300 group-hover:opacity-10"
								></div>
								<div
									class="relative flex h-full flex-col items-center rounded-3xl border-2 border-transparent bg-white p-8 text-center transition-all duration-300 group-hover:border-[color:var(--turquoise)]"
								>
									<div
										class="h-16 w-16 rounded-2xl bg-gradient-to-br {transport.gradient} mb-6 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
									>
										<svelte:component this={transport.icon} class="h-8 w-8 text-white" />
									</div>
									<h3 class="mb-4 text-2xl font-bold text-[color:var(--dark)]">
										{transport.title}
									</h3>
									<p class="leading-relaxed text-gray-600">
										{transport.description}
									</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="relative overflow-hidden py-32">
		<div
			class="animate-gradient absolute inset-0 bg-gradient-to-br from-[color:var(--turquoise)] via-[color:var(--purple-lavender)] to-[color:var(--deep-purple)]"
		></div>

		<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-white">
				<h2 class="mb-6 text-4xl font-bold sm:text-5xl">Plan Your Perfect Day Trips</h2>
				<p class="mb-10 text-xl text-white/90">
					Let us help you arrange transportation, tours, and tickets for unforgettable excursions
				</p>
				<Button
					size="lg"
					class="bg-white px-10 py-7 text-lg text-[color:var(--dark)] shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-[color:var(--off-white)]"
				>
					<a href="/contact" class="flex items-center space-x-2">
						<span>Contact Us for Trip Planning</span>
						<ArrowRight class="h-5 w-5" />
					</a>
				</Button>
			</div>
		</div>
	</section>
</div>
