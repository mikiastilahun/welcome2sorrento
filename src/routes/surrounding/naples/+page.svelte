<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		Train,
		Utensils,
		Church,
		Mountain,
		ArrowRight,
		Sparkles,
		Car,
		Clock
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
	<title>Naples Travel Guide - Pizza, Pompeii & Vesuvius | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Complete guide to Naples - authentic Neapolitan pizza, Pompeii ruins, Mount Vesuvius, and historic attractions."
	/>
</svelte:head>

<div class="-mt-24">
	<!-- Hero -->
	<section class="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920&q=80"
				alt="Naples"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>
		<div
			class="animate-fade-in-up relative z-10 container mx-auto px-4 py-32 text-center text-white"
		>
			<h1 class="heading-serif mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">Naples</h1>
			<p class="text-xl font-light text-white/90 sm:text-2xl">Historic Capital of Southern Italy</p>
		</div>
	</section>

	<!-- Introduction -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto max-w-4xl px-4">
			<div class="animate-fade-in-up">
				<div class="mb-12 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-(--terracotta)/20 bg-(--terracotta)/10 px-4 py-2"
					>
						<Sparkles class="h-4 w-4 text-(--terracotta)" />
						<span class="text-sm font-medium text-(--charcoal)">Historic City</span>
					</div>
				</div>
				<p class="text-center text-lg leading-relaxed text-gray-600">
					Naples pulses with energy, history, and authentic Italian culture. As the birthplace of
					pizza and gateway to Pompeii and Mount Vesuvius, this vibrant city offers rich history,
					stunning art, and unforgettable culinary experiences.
				</p>
			</div>
		</div>
	</section>

	<!-- Top Attractions -->
	<section class="relative bg-(--cream) py-32">
		<div class="container mx-auto px-4">
			<div class="scroll-reveal mb-20 text-center">
				<h2 class="heading-serif mb-6 text-4xl font-bold text-(--deep-azure) sm:text-5xl">
					Top Attractions
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">Discover Naples' treasures</p>
			</div>

			<div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
				{#each [{ title: 'Pompeii & Vesuvius', description: "Explore the ancient Roman city frozen in time and hike to the active volcano's crater.", duration: 'Full day excursion recommended', icon: Mountain }, { title: 'Historic Center', description: 'UNESCO site with narrow streets, baroque churches, and vibrant street life.', duration: 'Half day walking tour', icon: Church }, { title: 'Pizza Napoletana', description: 'Taste authentic Neapolitan pizza at legendary pizzerias like Da Michele and Sorbillo.', duration: 'Must-try experience', icon: Utensils }, { title: 'Archaeological Museum', description: 'World-class collection of Roman artifacts, mosaics, and treasures from Pompeii.', duration: '2-3 hours', icon: Church }] as attraction, index}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<Card
							class="h-full overflow-hidden border border-(--sand) bg-white transition-all duration-300 hover:border-(--azure) hover:shadow-lg"
						>
							<CardContent class="p-8">
								<div
									class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--terracotta) shadow-lg"
								>
									<svelte:component this={attraction.icon} class="h-7 w-7 text-white" />
								</div>
								<h3 class="mb-3 text-2xl font-bold text-(--charcoal)">
									{attraction.title}
								</h3>
								<p class="mb-4 leading-relaxed text-gray-600">
									{attraction.description}
								</p>
								<div class="flex items-center text-sm text-gray-600">
									<Clock class="mr-2 h-4 w-4" />
									<span>{attraction.duration}</span>
								</div>
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
									class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-(--terracotta) shadow-md"
								>
									<Train class="h-8 w-8 text-white" />
								</div>
								<div class="grow">
									<h3 class="mb-4 text-2xl font-bold text-(--charcoal)">From Sorrento</h3>
									<div class="space-y-6">
										<div
											class="rounded-xl border border-(--sand) bg-(--warm-white) p-6 transition-colors hover:border-(--azure)"
										>
											<div class="flex items-start space-x-4">
												<Train class="mt-1 h-6 w-6 text-(--azure)" />
												<div>
													<div class="mb-2 text-lg font-bold text-(--charcoal)">
														Circumvesuviana Train
													</div>
													<div class="space-y-1 text-sm text-gray-600">
														<div>Duration: 1 hour | Cost: €4-5 one way</div>
														<div>Frequent departures, most economical option</div>
													</div>
												</div>
											</div>
										</div>

										<div
											class="rounded-xl border border-(--sand) bg-(--warm-white) p-6 transition-colors hover:border-(--azure)"
										>
											<div class="flex items-start space-x-4">
												<Car class="mt-1 h-6 w-6 text-(--azure)" />
												<div>
													<div class="mb-2 text-lg font-bold text-(--charcoal)">
														Private Transfer
													</div>
													<div class="space-y-1 text-sm text-gray-600">
														<div>Duration: 50 min | Cost: €80-120</div>
														<div>Direct, comfortable, door-to-door</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="rounded-xl bg-(--cream) p-6">
								<h4 class="mb-4 flex items-center text-lg font-bold text-(--charcoal)">
									<Train class="mr-2 h-5 w-5 text-(--azure)" />
									Insider Tips
								</h4>
								<ul class="space-y-3">
									{#each ['Watch your belongings in crowded areas', 'Book Pompeii tickets online to skip lines', 'Combine with Vesuvius for full day trip', 'Try authentic pizza at Da Michele or Sorbillo'] as tip}
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
							class="bg-(--terracotta) px-10 py-6 text-lg text-white transition-all duration-300 hover:bg-(--deep-azure) hover:shadow-lg"
						>
							<a href="/contact" class="flex items-center space-x-2">
								<span>Book Naples & Pompeii Tour</span>
								<ArrowRight class="h-5 w-5" />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
