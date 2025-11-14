<script lang="ts">
	import type { Destination } from '$lib/sanity/queries';
	import { urlFor } from '$lib/sanity/image';
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

	interface Props {
		data: {
			destinations: Destination[];
		};
	}

	let { data }: Props = $props();

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

	// Fallback destinations if CMS is not populated yet
	const fallbackDestinations = [
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

	// Map CMS destinations to display format
	const cmsDestinations = data.destinations.map((dest) => ({
		name: dest.name,
		tagline: dest.subtitle || '',
		image: dest.cardImage?.asset?.url || '',
		description: dest.shortDescription || '',
		highlights: dest.attractions?.slice(0, 4).map((a) => a.name) || [],
		link: `/surrounding/${dest.slug.current}`,
		distance: '',
		travelTime: '',
		icon: Waves,
		gradient: 'from-blue-500 to-cyan-500'
	}));

	// Use CMS destinations if available, otherwise use fallback
	const destinations = cmsDestinations.length > 0 ? cmsDestinations : fallbackDestinations;
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
	<section class="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
				alt="Amalfi Coast panorama"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>

		<div class="relative z-10 container mx-auto px-4 py-20 text-center text-white sm:px-6 lg:px-8">
			<div class="animate-fade-in-up">
				<h1 class="heading-serif mb-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
					Explore the Surrounding Area
				</h1>
				<p class="heading-serif mx-auto max-w-3xl text-lg font-light text-white/90 sm:text-xl">
					World-renowned destinations just a short journey from Sorrento
				</p>
			</div>
		</div>
	</section>

	<!-- Introduction -->
	<section class="relative bg-[color:var(--warm-white)] py-24">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-4xl">
				<div class="mb-16 text-center">
					<h2
						class="heading-serif mb-6 text-3xl font-semibold text-[color:var(--charcoal)] sm:text-4xl"
					>
						Your Perfect Base
					</h2>
					<p class="text-lg leading-relaxed text-[color:var(--stone)]">
						Sorrento's prime location makes it the perfect base for exploring some of Italy's most
						iconic destinations. From legendary islands to dramatic coastal drives, ancient ruins to
						vibrant cities, each destination offers unique experiences and unforgettable memories.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Destinations Grid -->
	<section class="relative bg-white py-24">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each destinations as destination, index}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<a href={destination.link} class="group block h-full">
							<Card class="h-full overflow-hidden pt-0 transition-all duration-300 hover:shadow-lg">
								<!-- Image -->
								<div
									class="relative {!destination.description ? 'h-full' : 'h-80'} overflow-hidden"
								>
									<img
										src={destination.image ||
											'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80'}
										alt={destination.name}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div
										class="absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/60 via-transparent to-transparent"
									></div>

									<!-- Title Overlay -->
									<div class="absolute right-0 bottom-0 left-0 p-6 text-white">
										<h3 class="heading-serif mb-1 text-2xl font-semibold">{destination.name}</h3>
										<p class="text-sm text-white/90">{destination.tagline}</p>
									</div>
								</div>

								<!-- Content -->
								<CardContent class="flex flex-col p-6">
									{#if destination.description}
										<p class="mb-6 leading-relaxed text-(--stone)">
											{destination.description}
										</p>
									{/if}

									{#if destination.highlights.length > 0}
										<div class="mb-6">
											<h4
												class="mb-3 text-sm font-semibold tracking-wide text-[color:var(--azure)] uppercase"
											>
												Top Highlights
											</h4>
											<div class="space-y-2">
												{#each destination.highlights.slice(0, 4) as highlight}
													<div
														class="flex items-center space-x-2 text-sm text-[color:var(--charcoal)]"
													>
														<div class="h-1.5 w-1.5 rounded-full bg-[color:var(--azure)]"></div>
														<span>{highlight}</span>
													</div>
												{/each}
											</div>
										</div>
									{/if}

									{#if destination.distance || destination.travelTime}
										<div class="mt-auto space-y-2 border-t border-[color:var(--sand)] pt-4">
											{#if destination.distance}
												<div class="flex items-center space-x-2 text-sm text-[color:var(--stone)]">
													<MapPin class="h-4 w-4 text-[color:var(--azure)]" />
													<span>{destination.distance}</span>
												</div>
											{/if}
											{#if destination.travelTime}
												<div class="flex items-center space-x-2 text-sm text-[color:var(--stone)]">
													<Clock class="h-4 w-4 text-[color:var(--azure)]" />
													<span>{destination.travelTime}</span>
												</div>
											{/if}
										</div>
									{/if}
								</CardContent>
							</Card>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Transportation Info -->
	<section class="relative bg-[color:var(--cream)] py-24">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-16 text-center">
					<h2
						class="heading-serif mb-4 text-3xl font-semibold text-[color:var(--charcoal)] sm:text-4xl"
					>
						Getting Around
					</h2>
					<p class="text-lg text-[color:var(--stone)]">
						Multiple transportation options to explore the region
					</p>
				</div>

				<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
					{#each [{ title: 'Ferry Services', description: 'Regular ferries to Capri, Ischia, Procida, and Naples from Sorrento port', icon: Waves }, { title: 'Bus & Train', description: 'SITA buses along the coast, Circumvesuviana train to Naples and Pompeii', icon: Mountain }, { title: 'Private Tours', description: 'Customized private tours and transfers available through our booking service', icon: Sparkles }] as transport, index}
						<div class="scroll-reveal group" style="transition-delay: {index * 0.1}s">
							<Card class="h-full text-center transition-all duration-300 hover:shadow-lg">
								<CardContent class="flex h-full flex-col items-center p-8">
									<div
										class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--azure)] shadow-md transition-transform duration-300 group-hover:scale-110"
									>
										<svelte:component this={transport.icon} class="h-8 w-8 text-white" />
									</div>
									<h3 class="mb-4 text-xl font-semibold text-[color:var(--charcoal)]">
										{transport.title}
									</h3>
									<p class="leading-relaxed text-[color:var(--stone)]">
										{transport.description}
									</p>
								</CardContent>
							</Card>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="relative overflow-hidden bg-(--azure) py-24">
		<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-white">
				<h2 class="heading-serif mb-6 text-3xl font-semibold sm:text-4xl">
					Plan Your Perfect Day Trips
				</h2>
				<p class="mb-10 text-lg text-white/90">
					Let us help you arrange transportation, tours, and tickets for unforgettable excursions
				</p>
				<Button
					size="lg"
					class="bg-white px-8 py-6 text-base text-[color:var(--charcoal)] shadow-lg transition-all duration-300 hover:bg-[color:var(--cream)]"
				>
					<a href="/contact" class="flex items-center space-x-2">
						<span>Contact us for trip planning</span>
						<ArrowRight class="h-5 w-5" />
					</a>
				</Button>
			</div>
		</div>
	</section>
</div>
