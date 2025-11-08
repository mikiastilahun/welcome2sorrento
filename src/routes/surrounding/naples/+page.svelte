<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		Train,
		Utensils,
		Church,
		Mountain,
		AlertCircle,
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
	<section class="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1600875017876-96a047e8d449?w=1920&q=80"
				alt="Naples"
				class="h-full w-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-br from-[color:var(--dark)]/80 via-[color:var(--terracotta)]/60 to-[color:var(--dark)]/80"
			></div>
		</div>
		<div class="relative z-10 container mx-auto px-4 py-32 text-center text-white">
			<div class="animate-fade-in-up">
				<div
					class="mx-auto mb-6 flex h-20 w-20 animate-pulse items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 shadow-2xl"
				>
					<Utensils class="h-10 w-10 text-white" />
				</div>
				<h1 class="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
					<span class="text-gradient">Naples</span>
				</h1>
				<p class="heading-serif text-xl font-light text-white/90 sm:text-2xl">
					Historic Capital of Southern Italy
				</p>
			</div>
		</div>
	</section>

	<!-- Introduction -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto max-w-4xl px-4">
			<div class="scroll-reveal">
				<div class="mb-12 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2"
					>
						<Sparkles class="h-4 w-4 text-orange-500" />
						<span class="text-sm font-medium text-[color:var(--dark)]">Historic City</span>
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
	<section class="relative bg-gradient-to-b from-white via-[color:var(--off-white)] to-white py-32">
		<div class="container mx-auto px-4">
			<div class="scroll-reveal mb-20 text-center">
				<h2 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
					Top <span class="text-gradient-2">Attractions</span>
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">Discover Naples' treasures</p>
			</div>

			<div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
				{#each [{ title: 'Pompeii & Vesuvius', description: "Explore the ancient Roman city frozen in time and hike to the active volcano's crater.", duration: 'Full day excursion recommended', icon: Mountain, gradient: 'from-red-500 to-orange-500' }, { title: 'Historic Center', description: 'UNESCO site with narrow streets, baroque churches, and vibrant street life.', duration: 'Half day walking tour', icon: Church, gradient: 'from-blue-500 to-cyan-500' }, { title: 'Pizza Napoletana', description: 'Taste authentic Neapolitan pizza at legendary pizzerias like Da Michele and Sorbillo.', duration: 'Must-try experience', icon: Utensils, gradient: 'from-orange-500 to-yellow-500' }, { title: 'Archaeological Museum', description: 'World-class collection of Roman artifacts, mosaics, and treasures from Pompeii.', duration: '2-3 hours', icon: Church, gradient: 'from-green-500 to-teal-500' }] as attraction, index}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<Card
							class="h-full overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-[color:var(--purple-lavender)] hover:shadow-2xl"
						>
							<div class="relative">
								<div
									class="absolute inset-0 bg-gradient-to-r {attraction.gradient} opacity-5"
								></div>
								<CardContent class="relative p-8">
									<div
										class="mb-6 h-14 w-14 rounded-2xl bg-gradient-to-br {attraction.gradient} flex items-center justify-center shadow-lg"
									>
										<svelte:component this={attraction.icon} class="h-7 w-7 text-white" />
									</div>
									<h3 class="mb-3 text-2xl font-bold text-[color:var(--dark)]">
										{attraction.title}
									</h3>
									<p class="mb-4 leading-relaxed text-gray-600">
										{attraction.description}
									</p>
									<div class="flex items-center text-sm text-gray-600">
										<Clock class="mr-2 h-4 w-4 opacity-70" />
										<span>{attraction.duration}</span>
									</div>
								</CardContent>
							</div>
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
					<h2 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
						How to <span class="text-gradient">Get There</span>
					</h2>
				</div>

				<div class="scroll-reveal">
					<Card
						class="overflow-hidden border-2 border-[color:var(--purple-lavender)]/20 transition-all duration-500 hover:border-[color:var(--purple-lavender)]"
					>
						<div class="relative">
							<div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5"></div>
							<CardContent class="relative p-10">
								<div class="mb-8 flex items-start space-x-6">
									<div
										class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg"
									>
										<Train class="h-8 w-8 text-white" />
									</div>
									<div class="flex-grow">
										<h3 class="mb-4 text-2xl font-bold text-[color:var(--dark)]">From Sorrento</h3>
										<div class="space-y-6">
											<div
												class="rounded-2xl border-2 border-[color:var(--off-white)] bg-white p-6 transition-colors hover:border-blue-500"
											>
												<div class="flex items-start space-x-4">
													<Train class="mt-1 h-6 w-6 text-blue-500" />
													<div>
														<div class="mb-2 text-lg font-bold text-[color:var(--dark)]">
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
												class="rounded-2xl border-2 border-[color:var(--off-white)] bg-white p-6 transition-colors hover:border-purple-500"
											>
												<div class="flex items-start space-x-4">
													<Car class="mt-1 h-6 w-6 text-purple-500" />
													<div>
														<div class="mb-2 text-lg font-bold text-[color:var(--dark)]">
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

								<div class="relative overflow-hidden rounded-2xl">
									<div
										class="absolute inset-0 bg-gradient-to-r from-[color:var(--turquoise)]/10 to-[color:var(--purple-lavender)]/10"
									></div>
									<div class="relative p-6">
										<h4 class="mb-4 flex items-center text-lg font-bold text-[color:var(--dark)]">
											<AlertCircle class="mr-2 h-5 w-5 text-[color:var(--turquoise)]" />
											Insider Tips
										</h4>
										<ul class="space-y-3">
											{#each ['Watch your belongings in crowded areas', 'Book Pompeii tickets online to skip lines', 'Combine with Vesuvius for full day trip', 'Try authentic pizza at Da Michele or Sorbillo'] as tip}
												<li class="flex items-start space-x-3 text-sm text-gray-600">
													<div
														class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[color:var(--turquoise)] to-[color:var(--purple-lavender)]"
													></div>
													<span>{tip}</span>
												</li>
											{/each}
										</ul>
									</div>
								</div>
							</CardContent>
						</div>
					</Card>

					<div class="mt-10 text-center">
						<Button
							size="lg"
							class="bg-gradient-to-r from-orange-500 to-red-500 px-10 py-7 text-lg text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl"
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
