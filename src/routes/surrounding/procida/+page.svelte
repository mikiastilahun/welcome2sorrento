<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Ship, Camera, Heart, AlertCircle, ArrowRight, Sparkles, MapPin } from '@lucide/svelte';
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
	<title>Procida Travel Guide - Authentic Island Charm | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Discover Procida, the authentic Italian island - colorful Marina Corricella, Terra Murata, and local charm away from the crowds."
	/>
</svelte:head>

<div class="-mt-24">
	<section class="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1633859994781-5229a2e46878?w=1920&q=80"
				alt="Procida"
				class="h-full w-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-br from-[color:var(--dark)]/80 via-[color:var(--warm-yellow)]/60 to-[color:var(--dark)]/80"
			></div>
		</div>
		<div class="relative z-10 container mx-auto px-4 py-32 text-center text-white">
			<div class="animate-fade-in-up">
				<div
					class="mx-auto mb-6 flex h-20 w-20 animate-pulse items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-500 to-amber-500 shadow-2xl"
				>
					<Heart class="h-10 w-10 text-white" />
				</div>
				<h1 class="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
					<span class="text-gradient">Procida</span>
				</h1>
				<p class="heading-serif text-xl font-light text-white/90 sm:text-2xl">
					Authentic Island Charm
				</p>
			</div>
		</div>
	</section>

	<section class="relative bg-white py-32">
		<div class="container mx-auto max-w-4xl px-4">
			<div class="scroll-reveal">
				<div class="mb-12 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2"
					>
						<Sparkles class="h-4 w-4 text-yellow-500" />
						<span class="text-sm font-medium text-[color:var(--dark)]">Hidden Gem</span>
					</div>
				</div>
				<p class="text-center text-lg leading-relaxed text-gray-600">
					Procida is the smallest and least touristy of the Bay of Naples islands, offering an
					authentic glimpse of Italian island life. With its pastel-colored fishing villages, narrow
					streets, and relaxed atmosphere, Procida feels like stepping back in time.
				</p>
			</div>
		</div>
	</section>

	<section class="relative bg-gradient-to-b from-white via-[color:var(--off-white)] to-white py-32">
		<div class="container mx-auto px-4">
			<div class="scroll-reveal mb-20 text-center">
				<h2 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
					<span class="text-gradient-2">Highlights</span>
				</h2>
			</div>

			<div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
				{#each [{ title: 'Marina Corricella', description: 'Iconic harbor with colorful houses cascading to the sea', icon: Camera, gradient: 'from-blue-500 to-cyan-500' }, { title: 'Terra Murata', description: "Medieval village at the island's highest point", icon: Heart, gradient: 'from-pink-500 to-rose-500' }, { title: 'Chiaiolella Beach', description: 'Sandy beach with view of nearby Ischia', icon: Ship, gradient: 'from-green-500 to-teal-500' }] as highlight, index}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<Card
							class="h-full overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-[color:var(--purple-lavender)] hover:shadow-2xl"
						>
							<div class="relative">
								<div class="absolute inset-0 bg-gradient-to-r {highlight.gradient} opacity-5"></div>
								<CardContent class="relative p-8 text-center">
									<div
										class="mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br {highlight.gradient} flex items-center justify-center shadow-lg"
									>
										<svelte:component this={highlight.icon} class="h-8 w-8 text-white" />
									</div>
									<h3 class="mb-3 text-xl font-bold text-[color:var(--dark)]">{highlight.title}</h3>
									<p class="leading-relaxed text-gray-600">{highlight.description}</p>
								</CardContent>
							</div>
						</Card>
					</div>
				{/each}
			</div>
		</div>
	</section>

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
							<div
								class="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5"
							></div>
							<CardContent class="relative p-10">
								<div class="mb-8 flex items-start space-x-6">
									<div
										class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 shadow-lg"
									>
										<Ship class="h-8 w-8 text-white" />
									</div>
									<div class="flex-grow">
										<h3 class="mb-4 text-2xl font-bold text-[color:var(--dark)]">From Sorrento</h3>
										<div class="space-y-4 text-gray-600">
											<p>Ferry to Naples (1 hr), then ferry to Procida (40 min)</p>
											<p>Total journey: ~2 hours | Cost: €25-35 round trip</p>
											<p>
												Alternatively: Direct boat from Sorrento in summer season (when available)
											</p>
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
											Best For
										</h4>
										<p class="leading-relaxed text-gray-600">
											Travelers seeking authentic Italian atmosphere away from crowds. Perfect for
											photography enthusiasts and those who want to experience "real" island life.
										</p>
									</div>
								</div>
							</CardContent>
						</div>
					</Card>

					<div class="mt-10 text-center">
						<Button
							size="lg"
							class="bg-gradient-to-r from-yellow-500 to-amber-500 px-10 py-7 text-lg text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl"
						>
							<a href="/contact" class="flex items-center space-x-2">
								<span>Plan Your Procida Visit</span>
								<ArrowRight class="h-5 w-5" />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
