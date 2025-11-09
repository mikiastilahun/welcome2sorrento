<script lang="ts">
	import type { Activity } from '$lib/sanity/queries';
	import { urlFor } from '$lib/sanity/image';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import {
		Waves,
		Church,
		ShoppingBag,
		Camera,
		Ship,
		ChefHat,
		Footprints,
		Compass,
		Sparkles,
		Clock,
		Star
	} from '@lucide/svelte';
	import { onMount } from 'svelte';

	interface Props {
		data: {
			activities: Activity[];
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

	// Fallback activities if CMS is not populated yet
	const fallbackActivities = [
		{
			name: 'Boat Tour to Capri',
			category: 'Water Activities',
			duration: 'Full Day',
			image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
			description:
				'Discover the legendary Blue Grotto and circumnavigate the stunning island of Capri.',
			highlights: ['Blue Grotto', 'Faraglioni Rocks', 'Marina Piccola'],
			bestFor: 'Everyone',
			gradient: 'from-blue-500 to-cyan-500'
		},
		{
			name: 'Cooking Class Experience',
			category: 'Culinary',
			duration: '3-4 hours',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
			description: 'Learn to make authentic Italian pasta, pizza, and limoncello with local chefs.',
			highlights: ['Hands-on Cooking', 'Local Recipes', 'Wine Tasting'],
			bestFor: 'Food Lovers',
			gradient: 'from-orange-500 to-red-500'
		},
		{
			name: 'Marina Grande Beach',
			category: 'Beaches',
			duration: 'Half Day',
			image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
			description:
				'Relax at the charming fishing village beach with crystal-clear waters and local restaurants.',
			highlights: ['Beach Clubs', 'Restaurants', 'Swimming'],
			bestFor: 'Beach Lovers',
			gradient: 'from-teal-500 to-green-500'
		},
		{
			name: 'Walk to Punta Campanella',
			category: 'Nature & Hiking',
			duration: '4-5 hours',
			image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
			description:
				'Scenic coastal hike through lemon groves with breathtaking views of the peninsula.',
			highlights: ['Coastal Views', 'Lemon Groves', 'Ancient Ruins'],
			bestFor: 'Active Travelers',
			gradient: 'from-green-500 to-emerald-500'
		},
		{
			name: 'Pompeii & Vesuvius Day Trip',
			category: 'Historical',
			duration: 'Full Day',
			image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80',
			description: 'Explore the ancient ruins of Pompeii and hike to the crater of Mount Vesuvius.',
			highlights: ['Ancient Ruins', 'Volcano Crater', 'Archaeological Site'],
			bestFor: 'History Buffs',
			gradient: 'from-red-500 to-orange-500'
		},
		{
			name: 'Limoncello Tasting Tour',
			category: 'Culinary',
			duration: '2-3 hours',
			image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800&q=80',
			description: 'Visit lemon groves and learn the traditional process of making limoncello.',
			highlights: ['Lemon Groves', 'Tasting Session', 'Local Product'],
			bestFor: 'Everyone',
			gradient: 'from-yellow-500 to-amber-500'
		},
		{
			name: 'Sorrento Cathedral Tour',
			category: 'Cultural',
			duration: '1-2 hours',
			image: 'https://images.unsplash.com/photo-1528187975002-e0f6eb462096?w=800&q=80',
			description: 'Discover the historic cathedral and explore the charming old town streets.',
			highlights: ['Historic Architecture', 'Art & Frescoes', 'Old Town'],
			bestFor: 'Culture Enthusiasts',
			gradient: 'from-purple-500 to-pink-500'
		},
		{
			name: 'Shopping in Corso Italia',
			category: 'Shopping',
			duration: '2-3 hours',
			image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
			description:
				'Browse local artisan shops for ceramics, limoncello, and handcrafted leather goods.',
			highlights: ['Local Crafts', 'Ceramics', 'Limoncello'],
			bestFor: 'Shoppers',
			gradient: 'from-pink-500 to-rose-500'
		},
		{
			name: 'Sunset at Villa Comunale',
			category: 'Views & Relaxation',
			duration: '1-2 hours',
			image: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=800&q=80',
			description: 'Watch the sunset over the Bay of Naples from this beautiful clifftop park.',
			highlights: ['Panoramic Views', 'Gardens', 'Photography'],
			bestFor: 'Photographers',
			gradient: 'from-indigo-500 to-purple-500'
		}
	];

	// Use CMS activities if available, otherwise use fallback
	const displayActivities = data.activities.length > 0 ? data.activities : fallbackActivities;

	// Extract unique categories from activities
	const categoriesFromData = Array.from(
		new Set(displayActivities.map((a: any) => a.category).filter(Boolean))
	).sort();

	const categories = ['All', ...categoriesFromData];
	let selectedCategory = $state('All');

	const filteredActivities = $derived(
		selectedCategory === 'All'
			? displayActivities
			: displayActivities.filter((a: any) => a.category === selectedCategory)
	);

	// Helper function to get activity image URL
	function getActivityImage(activity: any) {
		if (activity.mainImage) {
			return urlFor(activity.mainImage).width(800).height(600).url();
		}
		return activity.image || 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80';
	}

	// Helper function to format category name
	function formatCategory(category: string) {
		return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	}
</script>

<svelte:head>
	<title>Things to Do in Sorrento - Activities & Attractions | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Discover the best activities and attractions in Sorrento - boat tours, cooking classes, beaches, hiking, and more."
	/>
</svelte:head>

<div class="-mt-24">
	<!-- Hero Section -->
	<section class="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1920&q=80"
				alt="Activities in Sorrento"
				class="h-full w-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-br from-[color:var(--dark)]/80 via-[color:var(--deep-purple)]/60 to-[color:var(--dark)]/80"
			></div>
		</div>

		<div class="relative z-10 container mx-auto px-4 py-32 text-center text-white sm:px-6 lg:px-8">
			<div class="animate-fade-in-up">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-green-500 to-teal-500 shadow-2xl"
				>
					<Compass class="h-10 w-10 text-white" />
				</div>
				<h1 class="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
					Things to <span class="text-gradient">Do</span> in Sorrento
				</h1>
				<p class="heading-serif mx-auto max-w-3xl text-xl font-light text-white/90 sm:text-2xl">
					Unforgettable experiences and adventures await
				</p>
			</div>
		</div>
	</section>

	<!-- Introduction -->
	<section class="mesh-gradient relative py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-4xl text-center">
				<p class="text-xl leading-relaxed text-gray-600">
					From exploring ancient ruins to sailing crystal-clear waters, cooking authentic Italian
					cuisine to hiking coastal trails through fragrant lemon groves, Sorrento offers
					experiences that create memories to last a lifetime. Discover activities perfect for every
					interest and pace.
				</p>
			</div>
		</div>
	</section>

	<!-- Category Filter -->
	<section
		class="sticky top-0 z-40 border-b border-gray-200 bg-white/95 py-8 shadow-md backdrop-blur-md"
	>
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex flex-wrap justify-center gap-3">
				{#each categories as category}
					<Button
						variant={selectedCategory === category ? 'default' : 'outline'}
						onclick={() => (selectedCategory = category)}
						class={selectedCategory === category
							? 'bg-gradient-to-r from-green-500 to-teal-500 text-white transition-all duration-300 hover:shadow-lg'
							: 'border-2 transition-all duration-300 hover:border-green-500 hover:text-green-500'}
					>
						{formatCategory(category)}
					</Button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Activities Grid -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredActivities as activity, index}
					<div class="scroll-reveal h-full" style="transition-delay: {index * 0.1}s">
						<Card
							class="group flex h-full flex-col overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-green-500 hover:shadow-2xl"
						>
							<div class="relative h-72 overflow-hidden">
								<img
									src={getActivityImage(activity)}
									alt={activity.name}
									class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div
									class="absolute inset-0 bg-gradient-to-t from-[color:var(--dark)]/80 via-[color:var(--dark)]/20 to-transparent"
								></div>

								<!-- Category Badge -->
								<div class="absolute top-4 right-4">
									<Badge
										class="border-0 bg-white/90 font-semibold text-[color:var(--dark)] shadow-lg backdrop-blur-sm"
									>
										{formatCategory(activity.category)}
									</Badge>
								</div>

								<!-- Duration/Rating Badge -->
								<div class="absolute bottom-4 left-4 flex items-center space-x-2">
									{#if activity.duration}
										<Badge
											class="bg-gradient-to-r from-green-500 to-teal-500 flex items-center space-x-1 border-0 font-semibold text-white shadow-lg"
										>
											<Clock class="h-3 w-3" />
											<span>{activity.duration}</span>
										</Badge>
									{/if}
									{#if activity.rating}
										<Badge
											class="bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center space-x-1 border-0 font-semibold text-white shadow-lg"
										>
											<Star class="h-3 w-3" />
											<span>{activity.rating}/5</span>
										</Badge>
									{/if}
								</div>
							</div>

							<CardContent class="flex flex-grow flex-col p-6">
								<div class="flex-grow">
									<CardTitle
										class="mb-3 text-2xl group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-teal-500 group-hover:text-transparent transition-all duration-500 group-hover:bg-clip-text"
									>
										{activity.name}
									</CardTitle>
									<p class="mb-6 text-sm leading-relaxed text-gray-600">
										{activity.description}
									</p>

									{#if activity.highlights && activity.highlights.length > 0}
										<div class="mb-6 space-y-2">
											<div
												class="mb-2 flex items-center space-x-1 text-xs font-bold tracking-wide text-green-600 uppercase"
											>
												<Sparkles class="h-3 w-3" />
												<span>Highlights</span>
											</div>
											<div class="flex flex-wrap gap-2">
												{#each activity.highlights as highlight}
													<Badge
														variant="outline"
														class="border-green-500 text-xs text-green-500 transition-colors hover:bg-green-50"
													>
														{highlight}
													</Badge>
												{/each}
											</div>
										</div>
									{/if}
								</div>

								<div
									class="flex items-center justify-between border-t-2 border-[color:var(--off-white)] pt-4"
								>
									{#if activity.priceRange}
										<span class="text-sm text-gray-600"
											>Price: <span class="font-medium text-foreground">{activity.priceRange}</span
											></span
										>
									{:else if activity.bestFor}
										<span class="text-sm text-gray-600"
											>Best for: <span class="font-medium text-foreground">{activity.bestFor}</span
											></span
										>
									{:else}
										<span></span>
									{/if}
								</div>
							</CardContent>
						</Card>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Quick Activity Guide -->
	<section class="relative bg-gradient-to-b from-white via-[color:var(--off-white)] to-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-20 text-center">
				<div
					class="mb-6 inline-flex items-center space-x-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2"
				>
					<Sparkles class="h-4 w-4 text-green-500" />
					<span class="text-sm font-medium text-[color:var(--dark)]">By Interest</span>
				</div>
				<h2 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
					Activities by <span class="text-gradient">Interest</span>
				</h2>
			</div>

			<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each [{ title: 'Water Lovers', description: 'Boat tours, beaches, swimming, snorkeling', icon: Waves, gradient: 'from-blue-500 to-cyan-500' }, { title: 'Food Enthusiasts', description: 'Cooking classes, wine tours, market visits', icon: ChefHat, gradient: 'from-orange-500 to-red-500' }, { title: 'Active Explorers', description: 'Hiking trails, bike tours, kayaking', icon: Footprints, gradient: 'from-green-500 to-emerald-500' }, { title: 'History Buffs', description: 'Ancient sites, museums, cultural tours', icon: Church, gradient: 'from-purple-500 to-pink-500' }] as interest, index}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<div class="relative h-full overflow-hidden rounded-3xl">
							<div class="absolute inset-0 bg-gradient-to-r {interest.gradient} opacity-5"></div>
							<div
								class="relative h-full rounded-3xl border-2 border-transparent bg-white p-8 text-center transition-all duration-300 hover:border-green-500"
							>
								<div
									class="h-16 w-16 rounded-2xl bg-gradient-to-br {interest.gradient} mx-auto mb-6 flex items-center justify-center shadow-lg"
								>
									{#if interest.icon === Waves}
										<Waves class="h-8 w-8 text-white" />
									{:else if interest.icon === ChefHat}
										<ChefHat class="h-8 w-8 text-white" />
									{:else if interest.icon === Footprints}
										<Footprints class="h-8 w-8 text-white" />
									{:else if interest.icon === Church}
										<Church class="h-8 w-8 text-white" />
									{/if}
								</div>
								<h3 class="mb-3 text-xl font-bold text-[color:var(--dark)]">{interest.title}</h3>
								<p class="text-sm leading-relaxed text-gray-600">{interest.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="relative overflow-hidden py-32">
		<div
			class="animate-gradient absolute inset-0 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-600"
		></div>

		<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-white">
				<h2 class="mb-6 text-4xl font-bold sm:text-5xl">Ready to Book Your Activities?</h2>
				<p class="mb-10 text-xl text-white/90">
					Let us help you plan and book the perfect activities for your Sorrento adventure
				</p>
				<Button
					size="lg"
					class="bg-white px-10 py-7 text-lg text-green-600 shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-[color:var(--off-white)]"
				>
					<a href="/contact" class="flex items-center space-x-2">
						<Compass class="h-5 w-5" />
						<span>Contact Us for Activity Booking</span>
					</a>
				</Button>
			</div>
		</div>
	</section>
</div>
