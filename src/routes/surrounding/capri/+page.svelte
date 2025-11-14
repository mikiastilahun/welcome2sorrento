<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		MapPin,
		Clock,
		Ship,
		Camera,
		Utensils,
		Sparkles,
		ArrowRight,
		Euro
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
</script>

<svelte:head>
	<title>Capri Travel Guide - Blue Grotto, Faraglioni & More | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Complete guide to Capri island - Blue Grotto, Gardens of Augustus, best beaches, restaurants, and how to get there from Sorrento."
	/>
</svelte:head>

<div class="-mt-24">
	<!-- Hero Section -->
	<section class="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80"
				alt="Capri island"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>

		<div
			class="animate-fade-in-up relative z-10 container mx-auto px-4 py-32 text-center text-white"
		>
			<h1 class="heading-serif mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">Capri</h1>
			<p class="text-xl font-light text-white/90 sm:text-2xl">The Jewel of the Mediterranean</p>
		</div>
	</section>

	<!-- Introduction -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto max-w-4xl px-4">
			<div class="animate-fade-in-up">
				<div class="mb-12 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-(--azure)/20 bg-(--azure)/10 px-4 py-2"
					>
						<Sparkles class="h-4 w-4 text-(--azure)" />
						<span class="text-sm font-medium text-(--charcoal)">Island Paradise</span>
					</div>
				</div>
				<p class="text-center text-lg leading-relaxed text-gray-600">
					Capri has captivated visitors for millennia with its dramatic cliffs, azure waters, and
					sophisticated Mediterranean charm. This legendary island, once the retreat of Roman
					Emperor Tiberius, continues to enchant travelers with its natural beauty and glamorous
					atmosphere. From the otherworldly Blue Grotto to the iconic Faraglioni rocks, Capri offers
					a perfect blend of natural wonders and refined luxury.
				</p>
			</div>
		</div>
	</section>

	<!-- Things to See & Do -->
	<section class="relative bg-(--cream) py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-20 text-center">
				<h2 class="heading-serif mb-6 text-4xl font-bold text-(--deep-azure) sm:text-5xl">
					Things to See & Do
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">Discover the magic of Capri</p>
			</div>

			<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each [{ name: 'Blue Grotto (Grotta Azzurra)', description: 'Marvel at the magical blue light in this sea cave. Best visited in morning with calm seas.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80', duration: '30-45 minutes', icon: Camera }, { name: 'Faraglioni Rocks', description: 'Iconic limestone sea stacks rising from the azure waters. Take a boat tour around them.', image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80', duration: 'Perfect for photos', icon: Camera }, { name: 'Gardens of Augustus', description: 'Terraced gardens with spectacular views of Faraglioni and Via Krupp.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', duration: '1 hour', icon: Clock }, { name: 'Villa Jovis', description: "Ruins of Emperor Tiberius' villa with panoramic views. A scenic hike from Capri town.", image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80', duration: '2-3 hours', icon: Clock }, { name: 'Anacapri & Monte Solaro', description: "Take the chairlift to the island's highest point for 360-degree views.", image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80', duration: 'Half day', icon: MapPin }, { name: 'La Piazzetta', description: "The island's famous square, perfect for people-watching with an espresso.", image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80', duration: 'Iconic spot', icon: Camera }] as attraction, index}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<Card
							class="flex h-full flex-col overflow-hidden border border-(--sand) bg-white pt-0 transition-all duration-300 hover:border-(--azure) hover:shadow-lg"
						>
							<div class="relative h-56 overflow-hidden rounded-t-lg">
								<img
									src={attraction.image}
									alt={attraction.name}
									class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
								/>
							</div>
							<CardContent class="flex grow flex-col p-6">
								<h3 class="mb-3 text-xl font-bold text-(--charcoal)">{attraction.name}</h3>
								<p class="mb-4 grow text-sm leading-relaxed text-gray-600">
									{attraction.description}
								</p>
								<div class="flex items-center text-sm text-(--azure)">
									<svelte:component this={attraction.icon} class="mr-2 h-4 w-4" />
									<span>{attraction.duration}</span>
								</div>
							</CardContent>
						</Card>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Where to Eat -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-20 text-center">
					<h2 class="heading-serif mb-6 text-4xl font-bold text-(--deep-azure) sm:text-5xl">
						Where to Eat
					</h2>
				</div>

				<div class="space-y-6">
					{#each [{ name: 'Da Luigi ai Faraglioni', type: 'Beachfront Dining', description: 'Iconic beach club restaurant accessible by boat, serving fresh seafood with views of the Faraglioni.', cuisine: 'Fresh Seafood, Mediterranean', price: '€€€' }, { name: 'Ristorante Aurora', type: 'Traditional Italian', description: 'Historic restaurant near the Piazzetta, favorite of celebrities, known for excellent pasta and atmosphere.', cuisine: 'Italian Cuisine, Fine Dining', price: '€€€€' }, { name: 'La Capannina', type: 'Local Favorite', description: 'Family-run restaurant with beautiful garden setting, serving authentic Caprese cuisine since 1931.', cuisine: 'Traditional Caprese, Garden Dining', price: '€€€' }] as restaurant, index}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<Card
								class="overflow-hidden border border-(--sand) bg-white transition-all duration-300 hover:border-(--azure) hover:shadow-lg"
							>
								<CardContent class="p-8">
									<div class="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
										<div class="grow">
											<h3 class="mb-2 text-2xl font-bold text-(--charcoal)">
												{restaurant.name}
											</h3>
											<p class="mb-3 text-sm font-medium text-(--azure)">
												{restaurant.type}
											</p>
										</div>
										<div class="mb-2 flex items-center space-x-2 md:mb-0">
											<Euro class="h-5 w-5 text-gray-600" />
											<span class="text-lg font-semibold text-gray-600">{restaurant.price}</span>
										</div>
									</div>
									<p class="mb-4 leading-relaxed text-gray-600">
										{restaurant.description}
									</p>
									<div class="flex items-center text-sm text-gray-600">
										<Utensils class="mr-2 h-4 w-4" />
										<span>{restaurant.cuisine}</span>
									</div>
								</CardContent>
							</Card>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- How to Get There -->
	<section class="relative bg-(--cream) py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-20 text-center">
					<h2 class="heading-serif mb-6 text-4xl font-bold text-(--deep-azure) sm:text-5xl">
						How to Get There
					</h2>
				</div>

				<div class="scroll-reveal">
					<Card class="overflow-hidden border border-(--sand) bg-white shadow-sm">
						<CardContent class="p-10">
							<div class="mb-8 flex items-start space-x-6">
								<div
									class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-(--azure) shadow-md"
								>
									<Ship class="h-8 w-8 text-white" />
								</div>
								<div class="grow">
									<h3 class="mb-4 text-2xl font-bold text-(--charcoal)">From Sorrento</h3>
									<p class="mb-6 text-gray-600">
										Regular ferry and hydrofoil services run throughout the day from Marina Piccola
										port in Sorrento.
									</p>
									<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
										<div
											class="rounded-xl border border-(--sand) bg-(--warm-white) p-6 transition-colors hover:border-(--azure)"
										>
											<div class="mb-2 text-lg font-bold text-(--charcoal)">Ferry (Slow Boat)</div>
											<div class="space-y-1 text-sm text-gray-600">
												<div>Duration: 40 minutes</div>
												<div>Cost: €15-20 one way</div>
											</div>
										</div>
										<div
											class="rounded-xl border border-(--sand) bg-(--warm-white) p-6 transition-colors hover:border-(--azure)"
										>
											<div class="mb-2 text-lg font-bold text-(--charcoal)">Hydrofoil (Fast)</div>
											<div class="space-y-1 text-sm text-gray-600">
												<div>Duration: 20 minutes</div>
												<div>Cost: €20-25 one way</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="rounded-xl bg-(--sand) p-6">
								<h4 class="mb-4 flex items-center text-lg font-bold text-(--charcoal)">
									<Ship class="mr-2 h-5 w-5 text-(--azure)" />
									Insider Tips
								</h4>
								<ul class="space-y-3">
									{#each ['Book tickets in advance during peak season (June-September)', 'First ferry of the day (usually 7:30am) offers fewer crowds and best Blue Grotto conditions', 'Return ferries fill up - book your return when you arrive or risk waiting hours', 'Consider a round-island boat tour from Sorrento for a different perspective'] as tip}
										<li class="flex items-start space-x-3 text-sm text-gray-600">
											<div class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--azure)"></div>
											<span>{tip}</span>
										</li>
									{/each}
								</ul>
							</div>
						</CardContent>
					</Card>

					<div class="mt-10 text-center">
						<Button
							size="lg"
							class="bg-(--azure) px-10 py-6 text-lg text-white transition-all duration-300 hover:bg-(--deep-azure) hover:shadow-lg"
						>
							<a href="/contact" class="flex items-center space-x-2">
								<span>Book Your Capri Trip</span>
								<ArrowRight class="h-5 w-5" />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Planning Tips -->
	<section class="relative bg-(--cream) py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-20 text-center">
					<h2 class="heading-serif mb-6 text-4xl font-bold text-(--deep-azure) sm:text-5xl">
						Planning Your Visit
					</h2>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each [{ title: 'Best Time to Visit', description: 'May-June and September-October for pleasant weather and fewer crowds. Summer is beautiful but very busy.' }, { title: 'How Long to Stay', description: 'Full day trip recommended. Overnight stay allows you to experience the island after day-trippers leave.' }, { title: 'What to Bring', description: "Comfortable walking shoes, sunscreen, hat, and swimwear. Bring cash as some places don't accept cards." }, { title: 'Budget Estimate', description: 'Ferry €40, Blue Grotto €14, lunch €30-50, extras €20-50. Total: €100-150+ per person.' }] as tip, index}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<Card
								class="h-full border border-(--sand) bg-white transition-all duration-300 hover:border-(--azure) hover:shadow-md"
							>
								<CardContent class="p-8">
									<h3 class="mb-3 text-xl font-bold text-(--charcoal)">{tip.title}</h3>
									<p class="leading-relaxed text-gray-600">{tip.description}</p>
								</CardContent>
							</Card>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>
