<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Star, MapPin, Wifi, Coffee, Waves, Heart, Home, Sparkles, Award } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { urlFor } from '$lib/sanity/image';
	import type { Accommodation } from '$lib/sanity/queries';

	interface Props {
		data: {
			accommodations: Accommodation[];
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

	// Get unique types from accommodations
	const allTypes = $derived(Array.from(new Set(data.accommodations.map((a) => a.type))).sort());
	const types = $derived(['All', ...allTypes]);

	let selectedType = $state('All');

	const filteredAccommodations = $derived(
		selectedType === 'All'
			? data.accommodations
			: data.accommodations.filter((a) => a.type === selectedType)
	);

	// Helper to get solid color based on type
	function getTypeColor(type: string): string {
		const colors: Record<string, string> = {
			'luxury-hotel': 'bg-[color:var(--azure)]',
			'boutique-hotel': 'bg-[color:var(--terracotta)]',
			bnb: 'bg-[color:var(--olive)]',
			'private-villa': 'bg-[color:var(--coral)]',
			resort: 'bg-[color:var(--azure)]'
		};
		return colors[type] || 'bg-[color:var(--azure)]';
	}

	// Helper to format type name
	function formatType(type: string): string {
		if (type === 'bnb') return 'B&B';
		return type
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}
</script>

<svelte:head>
	<title>Where to Stay in Sorrento - Hotels, B&Bs & Apartments | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Find your perfect accommodation in Sorrento - luxury hotels, boutique B&Bs, and charming apartments with stunning views."
	/>
</svelte:head>

<div class="-mt-24">
	<!-- Hero Section -->
	<section class="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
				alt="Luxury hotel in Sorrento"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>

		<div class="relative z-10 container mx-auto px-4 py-32 text-center text-white sm:px-6 lg:px-8">
			<div class="animate-fade-in-up">
				<h1 class="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">Where to Stay in Sorrento</h1>
				<p class="heading-serif mx-auto max-w-3xl text-xl font-light text-white/90 sm:text-2xl">
					From luxury clifftop hotels to charming family-run B&Bs
				</p>
			</div>
		</div>
	</section>

	<!-- Introduction -->
	<section class="relative bg-[color:var(--warm-white)] py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-4xl text-center">
				<p class="text-xl leading-relaxed text-gray-600">
					Sorrento offers accommodations to suit every style and budget. Whether you seek five-star
					luxury with infinity pools and Michelin-starred restaurants, intimate boutique hotels with
					personalized service, or charming B&Bs where you'll feel like part of the family, you'll
					find your perfect home away from home.
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
				{#each types as type}
					<Button
						variant={selectedType === type ? 'default' : 'outline'}
						onclick={() => (selectedType = type)}
						class={selectedType === type
							? 'bg-[color:var(--azure)] text-white transition-all duration-200 hover:bg-[color:var(--deep-azure)]'
							: 'border border-[color:var(--sand)] transition-all duration-200 hover:border-[color:var(--azure)] hover:text-[color:var(--azure)]'}
					>
						{type === 'All' ? type : formatType(type)}
					</Button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Accommodations Grid -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			{#if filteredAccommodations.length === 0}
				<div class="py-20 text-center">
					<Home class="mx-auto mb-4 h-16 w-16 text-gray-600 opacity-50" />
					<h3 class="mb-2 text-2xl font-bold text-[color:var(--dark)]">No Accommodations Found</h3>
					<p class="text-gray-600">
						{selectedType === 'All'
							? 'No accommodations have been added yet. Check back soon!'
							: `No accommodations found in the "${formatType(selectedType)}" category.`}
					</p>
				</div>
			{:else}
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each filteredAccommodations as accommodation, index}
						{@const typeColor = getTypeColor(accommodation.type)}
						<div class="scroll-reveal h-full" style="transition-delay: {index * 0.1}s">
							<Card
								class="group flex h-full flex-col overflow-hidden border border-[color:var(--sand)] pt-0 transition-all duration-300 hover:border-[color:var(--azure)] hover:shadow-lg"
							>
								<div class="relative h-72 overflow-hidden">
									<img
										src={accommodation?.mainImage?.asset?.url ||
											'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80'}
										alt={accommodation.name}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>

									<!-- Category Badge -->
									<div class="absolute top-4 right-4">
										<Badge
											class="border-0 bg-white/90 font-semibold text-[color:var(--charcoal)] shadow-md"
										>
											{formatType(accommodation.type)}
										</Badge>
									</div>

									<!-- Price Badge -->
									<div class="absolute top-4 left-4">
										<Badge class="{typeColor} border-0 font-semibold text-white shadow-md">
											{accommodation.priceRange}
										</Badge>
									</div>

									<!-- Rating -->
									<div
										class="absolute bottom-4 left-4 flex items-center space-x-1 rounded-lg bg-white px-3 py-2 shadow-md"
									>
										<Star class="h-4 w-4 fill-yellow-400 text-yellow-400" />
										<span class="text-sm font-bold text-[color:var(--charcoal)]"
											>{accommodation.rating}</span
										>
									</div>
								</div>

								<CardContent class="flex flex-grow flex-col p-6">
									<div class="flex-grow">
										<CardTitle
											class="mb-3 text-2xl text-[color:var(--charcoal)] transition-colors duration-300 group-hover:text-[color:var(--azure)]"
										>
											{accommodation.name}
										</CardTitle>
										<p class="mb-6 text-sm leading-relaxed text-gray-600">
											{accommodation.description}
										</p>

										<div class="mb-6 flex flex-wrap gap-2">
											{#each accommodation.highlights as amenity}
												<Badge
													variant="outline"
													class="border-[color:var(--azure)] text-xs text-[color:var(--azure)] transition-colors hover:bg-[color:var(--azure)]/10"
												>
													{amenity}
												</Badge>
											{/each}
										</div>
									</div>

									<div
										class="flex items-start space-x-2 border-t border-[color:var(--sand)] pt-4 text-sm text-gray-600"
									>
										<MapPin class="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--azure)]" />
										<span class="font-medium">{accommodation.location}</span>
									</div>
								</CardContent>
							</Card>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>

	<!-- Neighborhood Guide -->
	<section class="relative bg-[color:var(--cream)] py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-20 text-center">
				<h2 class="mb-6 text-4xl font-bold text-[color:var(--charcoal)] sm:text-5xl">
					Where to Stay
				</h2>
			</div>

			<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
				{#each [{ title: 'City Center', description: 'Heart of Sorrento with easy access to Piazza Tasso, shops, and restaurants. Perfect for first-time visitors.', icon: MapPin, badge: 'Most Popular', color: 'bg-[color:var(--azure)]' }, { title: 'Marina Grande', description: 'Charming fishing village atmosphere with beachfront restaurants and authentic local character.', icon: Waves, badge: 'Authentic', color: 'bg-[color:var(--olive)]' }, { title: 'Via Capo', description: 'Clifftop location with spectacular views and quieter atmosphere. Ideal for romantic getaways.', icon: Heart, badge: 'Scenic', color: 'bg-[color:var(--terracotta)]' }] as area, index}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<div
							class="h-full rounded-2xl border border-[color:var(--sand)] bg-white p-8 transition-all duration-300 hover:border-[color:var(--azure)] hover:shadow-md"
						>
							<div class="mb-4 flex items-center space-x-3">
								<div
									class="{area.color} flex h-12 w-12 items-center justify-center rounded-lg shadow-sm"
								>
									{#if area.icon === MapPin}
										<MapPin class="h-6 w-6 text-white" />
									{:else if area.icon === Waves}
										<Waves class="h-6 w-6 text-white" />
									{:else if area.icon === Heart}
										<Heart class="h-6 w-6 text-white" />
									{/if}
								</div>
								<h3 class="text-xl font-bold text-[color:var(--charcoal)]">{area.title}</h3>
							</div>
							<p class="mb-4 text-sm leading-relaxed text-gray-600">
								{area.description}
							</p>
							<Badge class="{area.color} border-0 text-white">{area.badge}</Badge>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Booking Tips -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-20 text-center">
					<h2 class="mb-6 text-4xl font-bold text-[color:var(--charcoal)] sm:text-5xl">
						Booking Tips
					</h2>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each [{ title: 'Best Time to Book', description: 'Book 3-6 months ahead for summer (June-August). Spring and fall offer better rates and you can often book 1-2 months in advance.' }, { title: 'Room with a View', description: "Request sea-view rooms when booking. They're worth the premium for sunrise vistas over the Bay of Naples and Mount Vesuvius." }, { title: 'Transportation', description: 'Ask about transfer services from Naples airport or train station. Many hotels offer this convenience for a reasonable fee.' }, { title: 'Price Guide', description: '€ = €50-100/night, €€ = €100-200/night, €€€ = €200-400/night, €€€€ = €400+/night. Prices vary by season.' }] as tip, index}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<div
								class="h-full rounded-2xl border border-[color:var(--sand)] bg-white p-8 transition-all duration-300 hover:border-[color:var(--azure)] hover:shadow-md"
							>
								<h3 class="mb-2 text-lg font-bold text-[color:var(--charcoal)]">{tip.title}</h3>
								<p class="text-sm leading-relaxed text-gray-600">{tip.description}</p>
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
				<h2 class="mb-6 text-4xl font-bold sm:text-5xl">Need Help Finding Accommodation?</h2>
				<p class="mb-10 text-xl text-white/90">
					Our WhatsApp booking service can help you find and reserve the perfect place for your stay
				</p>
				<Button
					size="lg"
					class="bg-white px-10 py-7 text-lg text-[color:var(--azure)] shadow-lg transition-all duration-300 hover:bg-[color:var(--cream)]"
				>
					<a href="/contact" class="flex items-center space-x-2">
						<Home class="h-5 w-5" />
						<span>Contact Us for Booking Assistance</span>
					</a>
				</Button>
			</div>
		</div>
	</section>
</div>
