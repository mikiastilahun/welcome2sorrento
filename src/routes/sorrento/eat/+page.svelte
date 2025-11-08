<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import {
		Star,
		MapPin,
		Euro,
		ChefHat,
		Wine,
		Coffee,
		UtensilsCrossed,
		Sparkles,
		Award,
		Clock
	} from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { urlFor } from '$lib/sanity/image';
	import type { Restaurant } from '$lib/sanity/queries';

	interface Props {
		data: {
			restaurants: Restaurant[];
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

	// Get unique categories from restaurants
	const allCategories = $derived(
		Array.from(new Set(data.restaurants.map((r) => r.category))).sort()
	);
	const categories = $derived(['All', ...allCategories]);

	let selectedCategory = $state('All');

	const filteredRestaurants = $derived(
		selectedCategory === 'All'
			? data.restaurants
			: data.restaurants.filter((r) => r.category === selectedCategory)
	);

	// Helper to get gradient based on category
	function getCategoryGradient(category: string): string {
		const gradients: Record<string, string> = {
			'fine-dining': 'from-amber-500 to-orange-600',
			'traditional': 'from-red-500 to-pink-600',
			'seafood': 'from-blue-500 to-cyan-500',
			'casual-dining': 'from-green-500 to-emerald-600',
			'pizzeria': 'from-orange-500 to-red-500'
		};
		return gradients[category] || 'from-purple-500 to-indigo-600';
	}

	// Helper to format category name
	function formatCategory(category: string): string {
		return category
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}
</script>

<svelte:head>
	<title>Where to Eat in Sorrento - Best Restaurants & Trattorias | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Discover the best restaurants in Sorrento - from Michelin-starred fine dining to authentic family trattorias and fresh seafood."
	/>
</svelte:head>

<div class="-mt-24">
	<!-- Hero Section -->
	<section class="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
				alt="Italian cuisine in Sorrento"
				class="h-full w-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-br from-[color:var(--dark)]/80 via-[color:var(--deep-purple)]/60 to-[color:var(--dark)]/80"
			></div>
		</div>

		<div class="relative z-10 container mx-auto px-4 py-32 text-center text-white sm:px-6 lg:px-8">
			<div class="animate-fade-in-up">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 shadow-2xl"
				>
					<ChefHat class="h-10 w-10 text-white" />
				</div>
				<h1 class="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
					Where to <span class="text-gradient">Eat</span> in Sorrento
				</h1>
				<p class="heading-serif mx-auto max-w-3xl text-xl font-light text-white/90 sm:text-2xl">
					From Michelin stars to family trattorias, discover culinary excellence
				</p>
			</div>
		</div>
	</section>

	<!-- Introduction -->
	<section class="mesh-gradient relative py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-4xl text-center">
				<p class="text-xl leading-relaxed text-gray-600">
					Sorrento's culinary scene blends centuries of tradition with contemporary innovation. From
					fresh seafood caught in the Bay of Naples to pasta made by hand in family kitchens, every
					meal tells a story of passion, quality, and authentic Italian flavor.
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
							? 'bg-gradient-to-r from-orange-500 to-red-500 text-white transition-all duration-300 hover:shadow-lg'
							: 'border-2 transition-all duration-300 hover:border-orange-500 hover:text-orange-500'}
					>
						{category === 'All' ? category : formatCategory(category)}
					</Button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Restaurants Grid -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			{#if filteredRestaurants.length === 0}
				<div class="py-20 text-center">
					<ChefHat class="mx-auto mb-4 h-16 w-16 text-gray-600 opacity-50" />
					<h3 class="mb-2 text-2xl font-bold text-[color:var(--dark)]">No Restaurants Found</h3>
					<p class="text-gray-600">
						{selectedCategory === 'All'
							? 'No restaurants have been added yet. Check back soon!'
							: `No restaurants found in the "${formatCategory(selectedCategory)}" category.`}
					</p>
				</div>
			{:else}
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each filteredRestaurants as restaurant, index}
						{@const gradient = getCategoryGradient(restaurant.category)}
						<div class="scroll-reveal h-full" style="transition-delay: {index * 0.1}s">
							<Card
								class="group flex h-full flex-col overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-orange-500 hover:shadow-2xl"
							>
								<div class="relative h-72 overflow-hidden">
									{#if restaurant.mainImage}
										<img
											src={urlFor(restaurant.mainImage).width(800).height(600).url()}
											alt={restaurant.name}
											class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>
									{/if}
									<div
										class="absolute inset-0 bg-gradient-to-t from-[color:var(--dark)]/80 via-[color:var(--dark)]/20 to-transparent"
									></div>

									<!-- Category Badge -->
									<div class="absolute top-4 right-4">
										<Badge
											class="border-0 bg-white/90 font-semibold text-[color:var(--dark)] shadow-lg backdrop-blur-sm"
										>
											{formatCategory(restaurant.category)}
										</Badge>
									</div>

									<!-- Rating -->
									<div
										class="glass absolute bottom-4 left-4 flex items-center space-x-1 rounded-xl border border-white/20 px-3 py-2"
									>
										<Star class="h-5 w-5 fill-yellow-400 text-yellow-400" />
										<span class="text-lg font-bold text-white">{restaurant.rating}</span>
									</div>

									<!-- Price Range -->
									<div
										class="glass absolute right-4 bottom-4 rounded-xl border border-white/20 px-3 py-2"
									>
										<span class="font-semibold text-white">{restaurant.priceRange}</span>
									</div>
								</div>

								<CardContent class="flex flex-grow flex-col p-6">
									<div class="flex-grow">
										<CardTitle
											class="mb-2 text-2xl group-hover:bg-gradient-to-r group-hover:text-transparent group-hover:{gradient} transition-all duration-500 group-hover:bg-clip-text"
										>
											{restaurant.name}
										</CardTitle>
										<div class="mb-4 text-sm font-medium text-gray-600">
											{restaurant.cuisine}
										</div>
										<p class="mb-6 text-sm leading-relaxed text-gray-600">
											{restaurant.description}
										</p>

										<div class="mb-6 flex flex-wrap gap-2">
											{#each restaurant.highlights as highlight}
												<Badge
													variant="outline"
													class="border-orange-500 text-xs text-orange-500 transition-colors hover:bg-orange-50"
												>
													{highlight}
												</Badge>
											{/each}
										</div>
									</div>

									<div
										class="flex items-start space-x-2 border-t-2 border-[color:var(--off-white)] pt-4 text-sm text-gray-600"
									>
										<MapPin class="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
										<span class="font-medium">{restaurant.location}</span>
									</div>
								</CardContent>
							</Card>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>

	<!-- Local Specialties -->
	<section class="relative bg-gradient-to-b from-white via-[color:var(--off-white)] to-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-20 text-center">
				<div
					class="mb-6 inline-flex items-center space-x-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2"
				>
					<Sparkles class="h-4 w-4 text-orange-500" />
					<span class="text-sm font-medium text-[color:var(--dark)]">Taste of Sorrento</span>
				</div>
				<h2 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
					Must-Try <span class="text-gradient">Local Specialties</span>
				</h2>
			</div>

			<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each [{ name: 'Gnocchi alla Sorrentina', description: 'Potato dumplings with tomato, mozzarella, and basil', icon: UtensilsCrossed, gradient: 'from-red-500 to-orange-500' }, { name: 'Limoncello', description: 'Sweet lemon liqueur made from local lemons', icon: Wine, gradient: 'from-yellow-500 to-amber-500' }, { name: 'Scialatielli ai Frutti di Mare', description: 'Fresh pasta with mixed seafood', icon: ChefHat, gradient: 'from-blue-500 to-cyan-500' }, { name: 'Delizia al Limone', description: 'Lemon-flavored sponge cake dessert', icon: Coffee, gradient: 'from-amber-500 to-yellow-500' }] as dish, index}
					<div class="scroll-reveal group" style="transition-delay: {index * 0.1}s">
						<div class="relative h-full overflow-hidden rounded-3xl">
							<div
								class="absolute inset-0 bg-gradient-to-r {dish.gradient} opacity-5 transition-opacity duration-300 group-hover:opacity-10"
							></div>
							<div
								class="relative flex h-full flex-col items-center rounded-3xl border-2 border-transparent bg-white p-8 text-center transition-all duration-300 group-hover:border-orange-500"
							>
								<div
									class="h-16 w-16 rounded-2xl bg-gradient-to-br {dish.gradient} mb-6 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
								>
									{#if dish.icon === UtensilsCrossed}
										<UtensilsCrossed class="h-8 w-8 text-white" />
									{:else if dish.icon === Wine}
										<Wine class="h-8 w-8 text-white" />
									{:else if dish.icon === ChefHat}
										<ChefHat class="h-8 w-8 text-white" />
									{:else if dish.icon === Coffee}
										<Coffee class="h-8 w-8 text-white" />
									{/if}
								</div>
								<h3 class="mb-3 text-xl font-bold text-[color:var(--dark)]">{dish.name}</h3>
								<p class="text-sm leading-relaxed text-gray-600">{dish.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Dining Tips -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-20 text-center">
					<h2 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
						<span class="text-gradient">Dining</span> Tips
					</h2>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each [{ title: 'Meal Times', description: 'Lunch: 12:30-3pm, Dinner: 7:30pm onwards. Many places close between meals.', icon: Clock, gradient: 'from-blue-500 to-cyan-500' }, { title: 'Pricing', description: '€ = Budget (€10-20), €€ = Moderate (€20-40), €€€ = Upscale (€40-70), €€€€ = Fine Dining (€70+)', icon: Euro, gradient: 'from-green-500 to-emerald-500' }, { title: 'Reservations', description: 'Book ahead for fine dining and popular spots, especially in peak season.', icon: MapPin, gradient: 'from-purple-500 to-indigo-500' }, { title: 'Local Etiquette', description: "Service charge is usually included. Round up for good service, but tipping isn't mandatory.", icon: Award, gradient: 'from-orange-500 to-red-500' }] as tip, index}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<div class="relative h-full overflow-hidden rounded-3xl">
								<div class="absolute inset-0 bg-gradient-to-r {tip.gradient} opacity-5"></div>
								<div
									class="relative h-full rounded-3xl border-2 border-[color:var(--off-white)] bg-white p-8 transition-all duration-300 hover:border-orange-500"
								>
									<div class="flex items-start space-x-4">
										<div
											class="h-12 w-12 rounded-xl bg-gradient-to-br {tip.gradient} flex flex-shrink-0 items-center justify-center shadow-lg"
										>
											{#if tip.icon === Clock}
												<Clock class="h-6 w-6 text-white" />
											{:else if tip.icon === Euro}
												<Euro class="h-6 w-6 text-white" />
											{:else if tip.icon === MapPin}
												<MapPin class="h-6 w-6 text-white" />
											{:else if tip.icon === Award}
												<Award class="h-6 w-6 text-white" />
											{/if}
										</div>
										<div>
											<h3 class="mb-2 text-lg font-bold text-[color:var(--dark)]">{tip.title}</h3>
											<p class="text-sm leading-relaxed text-gray-600">{tip.description}</p>
										</div>
									</div>
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
			class="animate-gradient absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600"
		></div>

		<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-white">
				<h2 class="mb-6 text-4xl font-bold sm:text-5xl">Need Restaurant Recommendations?</h2>
				<p class="mb-10 text-xl text-white/90">
					Let us help you book a table at the perfect restaurant for your taste and occasion
				</p>
				<Button
					size="lg"
					class="bg-white px-10 py-7 text-lg text-orange-600 shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-[color:var(--off-white)]"
				>
					<a href="/contact" class="flex items-center space-x-2">
						<ChefHat class="h-5 w-5" />
						<span>Contact Us for Reservations</span>
					</a>
				</Button>
			</div>
		</div>
	</section>
</div>
