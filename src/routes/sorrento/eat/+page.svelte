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

	// Helper to get solid color based on category
	function getCategoryColor(category: string): string {
		const colors: Record<string, string> = {
			'fine-dining': 'bg-[color:var(--terracotta)]',
			traditional: 'bg-[color:var(--coral)]',
			seafood: 'bg-[color:var(--azure)]',
			'casual-dining': 'bg-[color:var(--olive)]',
			pizzeria: 'bg-[color:var(--terracotta)]'
		};
		return colors[category] || 'bg-[color:var(--azure)]';
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
	<section class="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
				alt="Italian cuisine in Sorrento"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>

		<div class="relative z-10 container mx-auto px-4 py-32 text-center text-white sm:px-6 lg:px-8">
			<div class="animate-fade-in-up">
				<h1 class="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">Where to Eat in Sorrento</h1>
				<p class="heading-serif mx-auto max-w-3xl text-xl font-light text-white/90 sm:text-2xl">
					From Michelin stars to family trattorias, discover culinary excellence
				</p>
			</div>
		</div>
	</section>

	<!-- Introduction -->
	<section class="relative bg-[color:var(--warm-white)] py-20">
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
		class="sticky top-0 z-40 border-b border-[color:var(--sand)] bg-white/95 py-8 shadow-sm backdrop-blur-md"
	>
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex flex-wrap justify-center gap-3">
				{#each categories as category}
					<Button
						variant={selectedCategory === category ? 'default' : 'outline'}
						onclick={() => (selectedCategory = category)}
						class={selectedCategory === category
							? 'bg-[color:var(--azure)] text-white transition-all duration-200 ease-out hover:bg-[color:var(--deep-azure)] hover:brightness-110'
							: 'border border-[color:var(--sand)] transition-all duration-200 ease-out hover:border-[color:var(--azure)] hover:text-[color:var(--azure)]'}
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
						{@const categoryColor = getCategoryColor(restaurant.category)}
						<div class="scroll-reveal h-full" style="transition-delay: {index * 0.1}s">
							<Card
								class="group flex h-full flex-col overflow-hidden border border-[color:var(--sand)] pt-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[color:var(--azure)] hover:shadow-lg"
							>
								<div class="relative h-72 overflow-hidden">
									<img
										src={restaurant?.mainImage?.asset?.url ||
											'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80'}
										alt={restaurant.name}
										class="h-full w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-[1.04]"
									/>

									<!-- Category Badge -->
									<div class="absolute top-4 right-4">
										<Badge class="{categoryColor} border-0 font-semibold text-white shadow-md">
											{formatCategory(restaurant.category)}
										</Badge>
									</div>

									<!-- Rating -->
									<div
										class="absolute bottom-4 left-4 flex items-center space-x-1 rounded-lg bg-white px-3 py-2 shadow-md"
									>
										<Star class="h-4 w-4 fill-yellow-400 text-yellow-400" />
										<span class="text-sm font-bold text-[color:var(--charcoal)]"
											>{restaurant.rating}</span
										>
									</div>

									<!-- Price Range -->
									<div class="absolute right-4 bottom-4 rounded-lg bg-white px-3 py-2 shadow-md">
										<span class="text-sm font-semibold text-[color:var(--charcoal)]"
											>{restaurant.priceRange}</span
										>
									</div>
								</div>

								<CardContent class="flex flex-grow flex-col p-6">
									<div class="flex-grow">
										<CardTitle
											class="mb-2 text-2xl text-[color:var(--charcoal)] transition-colors duration-300 group-hover:text-[color:var(--azure)]"
										>
											{restaurant.name}
										</CardTitle>
										<div class="mb-4 text-sm font-medium text-[color:var(--stone)]">
											{restaurant.cuisine}
										</div>
										<p class="mb-6 text-sm leading-relaxed text-gray-600">
											{restaurant.description}
										</p>

										<div class="mb-6 flex flex-wrap gap-2">
											{#each restaurant.highlights as highlight}
												<Badge
													variant="outline"
													class="border-[color:var(--azure)] text-xs text-[color:var(--azure)] transition-colors hover:bg-[color:var(--azure)]/10"
												>
													{highlight}
												</Badge>
											{/each}
										</div>
									</div>

									<div
										class="flex items-start space-x-2 border-t border-[color:var(--sand)] pt-4 text-sm text-gray-600"
									>
										<MapPin class="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--azure)]" />
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
	<section class="relative bg-[color:var(--cream)] py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-20 text-center">
				<h2 class="mb-6 text-4xl font-bold text-[color:var(--charcoal)] sm:text-5xl">
					Must-Try Local Specialties
				</h2>
			</div>

			<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each [{ name: 'Gnocchi alla Sorrentina', description: 'Potato dumplings with tomato, mozzarella, and basil', icon: UtensilsCrossed, color: 'bg-[color:var(--terracotta)]' }, { name: 'Limoncello', description: 'Sweet lemon liqueur made from local lemons', icon: Wine, color: 'bg-[color:var(--coral)]' }, { name: 'Scialatielli ai Frutti di Mare', description: 'Fresh pasta with mixed seafood', icon: ChefHat, color: 'bg-[color:var(--azure)]' }, { name: 'Delizia al Limone', description: 'Lemon-flavored sponge cake dessert', icon: Coffee, color: 'bg-[color:var(--olive)]' }] as dish, index}
					<div class="scroll-reveal group" style="transition-delay: {index * 0.1}s">
						<div
							class="flex h-full flex-col items-center rounded-2xl border border-[color:var(--sand)] bg-white p-8 text-center transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[color:var(--azure)] hover:shadow-md"
						>
							<div
								class="{dish.color} mb-6 flex h-16 w-16 items-center justify-center rounded-xl shadow-md transition-transform duration-200 ease-out group-hover:scale-105"
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
							<h3 class="mb-3 text-xl font-bold text-[color:var(--charcoal)]">{dish.name}</h3>
							<p class="text-sm leading-relaxed text-gray-600">{dish.description}</p>
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
					<h2 class="mb-6 text-4xl font-bold text-[color:var(--charcoal)] sm:text-5xl">
						Dining Tips
					</h2>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each [{ title: 'Meal Times', description: 'Lunch: 12:30-3pm, Dinner: 7:30pm onwards. Many places close between meals.', icon: Clock, color: 'bg-[color:var(--azure)]' }, { title: 'Pricing', description: '€ = Budget (€10-20), €€ = Moderate (€20-40), €€€ = Upscale (€40-70), €€€€ = Fine Dining (€70+)', icon: Euro, color: 'bg-[color:var(--olive)]' }, { title: 'Reservations', description: 'Book ahead for fine dining and popular spots, especially in peak season.', icon: MapPin, color: 'bg-[color:var(--terracotta)]' }, { title: 'Local Etiquette', description: "Service charge is usually included. Round up for good service, but tipping isn't mandatory.", icon: Award, color: 'bg-[color:var(--coral)]' }] as tip, index}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<div
							class="h-full rounded-2xl border border-[color:var(--sand)] bg-white p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[color:var(--azure)] hover:shadow-md"
						>
								<div class="flex items-start space-x-4">
									<div
										class="{tip.color} flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg shadow-sm"
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
										<h3 class="mb-2 text-lg font-bold text-[color:var(--charcoal)]">{tip.title}</h3>
										<p class="text-sm leading-relaxed text-gray-600">{tip.description}</p>
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
	<section class="relative overflow-hidden bg-[color:var(--azure)] py-32">
		<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-white">
				<h2 class="mb-6 text-4xl font-bold sm:text-5xl">Need Restaurant Recommendations?</h2>
				<p class="mb-10 text-xl text-white/90">
					Let us help you book a table at the perfect restaurant for your taste and occasion
				</p>
				<Button
					size="lg"
					class="group bg-white px-10 py-7 text-lg text-[color:var(--azure)] shadow-lg transition-all duration-200 ease-out hover:bg-[color:var(--cream)] hover:shadow-xl"
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
