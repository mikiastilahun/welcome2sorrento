<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Ship, Camera, Heart, ArrowRight, Sparkles } from '@lucide/svelte';
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
	<section class="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80"
				alt="Procida"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>
		<div
			class="animate-fade-in-up relative z-10 container mx-auto px-4 py-32 text-center text-white"
		>
			<h1 class="heading-serif mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">Procida</h1>
			<p class="text-xl font-light text-white/90 sm:text-2xl">Authentic Island Charm</p>
		</div>
	</section>

	<section class="relative bg-white py-32">
		<div class="container mx-auto max-w-4xl px-4">
			<div class="animate-fade-in-up">
				<div class="mb-12 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-(--coral)/20 bg-(--coral)/10 px-4 py-2"
					>
						<Sparkles class="h-4 w-4 text-(--coral)" />
						<span class="text-sm font-medium text-(--charcoal)">Hidden Gem</span>
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

	<section class="relative bg-(--cream) py-32">
		<div class="container mx-auto px-4">
			<div class="scroll-reveal mb-20 text-center">
				<h2 class="heading-serif mb-6 text-4xl font-bold text-(--deep-azure) sm:text-5xl">
					Highlights
				</h2>
			</div>

			<div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
			{#each [{ title: 'Marina Corricella', description: 'Iconic harbor with colorful houses cascading to the sea', icon: Camera }, { title: 'Terra Murata', description: "Medieval village at the island's highest point", icon: Heart }, { title: 'Chiaiolella Beach', description: 'Sandy beach with view of nearby Ischia', icon: Ship }] as highlight, index}
				{@const HighlightIcon = highlight.icon}
				<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
					<Card
						class="h-full overflow-hidden border border-(--sand) bg-white transition-all duration-300 hover:border-(--azure) hover:shadow-lg"
					>
						<CardContent class="p-8 text-center">
							<div
								class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--coral) shadow-lg"
							>
							<HighlightIcon class="h-8 w-8 text-white" />
								</div>
								<h3 class="mb-3 text-xl font-bold text-(--charcoal)">{highlight.title}</h3>
								<p class="leading-relaxed text-gray-600">{highlight.description}</p>
							</CardContent>
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
					<h2 class="heading-serif mb-6 text-4xl font-bold text-(--deep-azure) sm:text-5xl">
						How to Get There
					</h2>
				</div>

				<div class="scroll-reveal">
					<Card class="overflow-hidden border border-(--sand) bg-white shadow-sm">
						<CardContent class="p-10">
							<div class="mb-8 flex items-start space-x-6">
								<div
									class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-(--coral) shadow-md"
								>
									<Ship class="h-8 w-8 text-white" />
								</div>
								<div class="grow">
									<h3 class="mb-4 text-2xl font-bold text-(--charcoal)">From Sorrento</h3>
									<div class="space-y-4 text-gray-600">
										<p>Ferry to Naples (1 hr), then ferry to Procida (40 min)</p>
										<p>Total journey: ~2 hours | Cost: €25-35 round trip</p>
										<p>
											Alternatively: Direct boat from Sorrento in summer season (when available)
										</p>
									</div>
								</div>
							</div>

							<div class="rounded-xl bg-(--cream) p-6">
								<h4 class="mb-4 flex items-center text-lg font-bold text-(--charcoal)">
									<Ship class="mr-2 h-5 w-5 text-(--azure)" />
									Best For
								</h4>
								<p class="leading-relaxed text-gray-600">
									Travelers seeking authentic Italian atmosphere away from crowds. Perfect for
									photography enthusiasts and those who want to experience "real" island life.
								</p>
							</div>
						</CardContent>
					</Card>

					<div class="mt-10 text-center">
						<Button
							size="lg"
							class="bg-(--coral) px-10 py-6 text-lg text-white transition-all duration-300 hover:bg-(--deep-azure) hover:shadow-lg"
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
