<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { MapPin, Car, Camera, Ship, ArrowRight, Sparkles } from '@lucide/svelte';
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
	<title>Amalfi Coast Travel Guide - Positano, Ravello & More | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Complete guide to the Amalfi Coast - Positano, Amalfi Town, Ravello, scenic drives, best viewpoints, and how to get there from Sorrento."
	/>
</svelte:head>

<div class="-mt-24">
	<!-- Hero -->
	<section class="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920&q=80"
				alt="Amalfi Coast"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>
		<div
			class="animate-fade-in-up relative z-10 container mx-auto px-4 py-32 text-center text-white"
		>
			<h1 class="heading-serif mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">Amalfi Coast</h1>
			<p class="text-xl font-light text-white/90 sm:text-2xl">UNESCO World Heritage Wonder</p>
		</div>
	</section>

	<!-- Introduction -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto max-w-4xl px-4">
			<div class="animate-fade-in-up">
				<div class="mb-12 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-(--olive)/20 bg-(--olive)/10 px-4 py-2"
					>
						<Sparkles class="h-4 w-4 text-(--olive)" />
						<span class="text-sm font-medium text-(--charcoal)">UNESCO World Heritage</span>
					</div>
				</div>
				<p class="text-center text-lg leading-relaxed text-gray-600">
					The Amalfi Coast is one of the world's most breathtaking coastal drives, featuring
					picturesque villages perched on dramatic cliffs overlooking the turquoise Mediterranean.
					This UNESCO World Heritage site captivates with its colorful towns, lemon groves, and
					panoramic vistas at every turn.
				</p>
			</div>
		</div>
	</section>

	<!-- Must-Visit Towns -->
	<section class="relative bg-(--cream) py-32">
		<div class="container mx-auto px-4">
			<div class="scroll-reveal mb-20 text-center">
				<h2 class="heading-serif mb-6 text-4xl font-bold text-(--deep-azure) sm:text-5xl">
					Must-Visit Towns
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">
					Discover the colorful villages of the coast
				</p>
			</div>

			<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each [{ name: 'Positano', description: 'Cascading pastel houses, chic boutiques, and stunning beach. The most photogenic town on the coast.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', icon: Camera }, { name: 'Amalfi Town', description: "Historic maritime republic with magnificent cathedral and charming piazzas. The coast's namesake.", image: 'https://images.unsplash.com/photo-1591799265444-d66432b91588?w=800&q=80', icon: MapPin }, { name: 'Ravello', description: 'Perched high above, known for stunning gardens (Villa Rufolo, Villa Cimbrone) and summer music festival.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80', icon: Sparkles }] as town, index}
				{@const TownIcon = town.icon}
				<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
					<Card
						class="group flex h-full flex-col overflow-hidden border border-(--sand) bg-white pt-0 transition-all duration-300 hover:border-(--azure) hover:shadow-lg"
					>
						<div class="relative h-72 overflow-hidden rounded-t-lg">
							<img
								src={town.image}
								alt={town.name}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div class="absolute right-6 bottom-6 left-6">
								<div
									class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-(--azure) shadow-lg"
								>
								<TownIcon class="h-6 w-6 text-white" />
									</div>
									<h3 class="mb-2 text-3xl font-bold text-white">{town.name}</h3>
								</div>
							</div>
							<CardContent class="grow p-6">
								<p class="leading-relaxed text-gray-600">
									{town.description}
								</p>
							</CardContent>
						</Card>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- How to Get There -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4">
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
									class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-(--olive) shadow-md"
								>
									<Car class="h-8 w-8 text-white" />
								</div>
								<div class="grow">
									<h3 class="mb-4 text-2xl font-bold text-(--charcoal)">From Sorrento</h3>
									<div class="space-y-6">
										<div
											class="rounded-xl border border-(--sand) bg-(--warm-white) p-6 transition-colors hover:border-(--azure)"
										>
											<div class="flex items-start space-x-4">
												<Car class="mt-1 h-6 w-6 text-(--azure)" />
												<div>
													<div class="mb-2 text-lg font-bold text-(--charcoal)">SITA Bus</div>
													<div class="text-sm leading-relaxed text-gray-600">
														Scenic coastal route via SS163. Duration: 1-1.5 hours to Amalfi, 2 hours
														to Salerno. €10-15 round trip.
													</div>
												</div>
											</div>
										</div>

										<div
											class="rounded-xl border border-(--sand) bg-(--warm-white) p-6 transition-colors hover:border-(--azure)"
										>
											<div class="flex items-start space-x-4">
												<Ship class="mt-1 h-6 w-6 text-(--azure)" />
												<div>
													<div class="mb-2 text-lg font-bold text-(--charcoal)">Ferry (Summer)</div>
													<div class="text-sm leading-relaxed text-gray-600">
														Coastal ferry to Positano & Amalfi. Duration: 30-70 min. €15-25 one way.
														Most scenic option!
													</div>
												</div>
											</div>
										</div>

										<div
											class="rounded-xl border border-(--sand) bg-(--warm-white) p-6 transition-colors hover:border-(--azure)"
										>
											<div class="flex items-start space-x-4">
												<Camera class="mt-1 h-6 w-6 text-(--azure)" />
												<div>
													<div class="mb-2 text-lg font-bold text-(--charcoal)">Private Driver</div>
													<div class="text-sm leading-relaxed text-gray-600">
														Stress-free with photo stops. €150-300 for full day. Recommended for
														groups.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="rounded-xl bg-(--cream) p-6">
								<h4 class="mb-4 flex items-center text-lg font-bold text-(--charcoal)">
									<Ship class="mr-2 h-5 w-5 text-(--azure)" />
									Insider Tips
								</h4>
								<ul class="space-y-3">
									{#each ['Book bus tickets online in advance during summer', 'Best light for photos: morning for western-facing towns', 'Allow full day - the winding roads take time', 'Ferry option provides stunning coastal views'] as tip}
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
							class="bg-(--olive) px-10 py-6 text-lg text-white transition-all duration-300 hover:bg-(--deep-azure) hover:shadow-lg"
						>
							<a href="/contact" class="flex items-center space-x-2">
								<span>Plan Your Amalfi Coast Tour</span>
								<ArrowRight class="h-5 w-5" />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
