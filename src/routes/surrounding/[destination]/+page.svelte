<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import type { Destination } from '$lib/sanity/queries';
	import PortableTextRenderer from '$lib/components/PortableTextRenderer.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		MapPin,
		Clock,
		Car,
		Camera,
		Utensils,
		Ship,
		AlertCircle,
		ArrowRight,
		Sparkles
	} from '@lucide/svelte';
	import { onMount } from 'svelte';

	interface Props {
		data: {
			destination: Destination;
		};
	}

	let { data }: Props = $props();
	const { destination } = data;

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

	// Get the transport icon based on type
	function getTransportIcon(type: string) {
		switch (type) {
			case 'ferry':
				return Ship;
			case 'bus':
			case 'car':
			default:
				return Car;
		}
	}
</script>

<svelte:head>
	<title>{destination.name} Travel Guide | Welcome2Sorrento</title>
	<meta name="description" content={destination.excerpt} />
</svelte:head>

<div class="-mt-24">
	<!-- Hero -->
	<section class="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			{#if destination.heroImage?.asset?.url}
				<img
					src={destination.heroImage.asset.url}
					alt={destination.name}
					class="h-full w-full object-cover"
				/>
			{/if}
			<div
				class="absolute inset-0 bg-gradient-to-br from-[color:var(--dark)]/80 via-[color:var(--olive-green)]/60 to-[color:var(--dark)]/80"
			></div>
		</div>
		<div class="relative z-10 container mx-auto px-4 py-32 text-center text-white">
			<div class="animate-fade-in-up">
				<div
					class="mx-auto mb-6 flex h-20 w-20 animate-pulse items-center justify-center rounded-3xl bg-gradient-to-br from-green-500 to-teal-500 shadow-2xl"
				>
					<MapPin class="h-10 w-10 text-white" />
				</div>
				<h1 class="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
					<span class="text-gradient">{destination.name}</span>
				</h1>
				<p class="heading-serif text-xl font-light text-white/90 sm:text-2xl">
					{destination.tagline || ''}
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
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2"
					>
						<Sparkles class="h-5 w-5 text-green-500" />
						<span class="text-sm font-semibold text-green-600">About {destination.name}</span>
					</div>
				</div>

				<div class="prose prose-lg mx-auto max-w-none text-gray-600">
					{#if destination.description}
						<PortableTextRenderer value={destination.description} />
					{/if}
				</div>
			</div>
		</div>
	</section>

	<!-- How to Get There -->
	{#if destination.transport && destination.transport.length > 0}
		<section class="relative bg-[color:var(--off-white)] py-32">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="scroll-reveal mb-16 text-center">
					<h2 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
						How to Get There
					</h2>
					<p class="mx-auto max-w-3xl text-xl text-gray-600">
						From Sorrento to {destination.name}
					</p>
				</div>

				<div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each destination.transport as option, index}
						{@const TransportIcon = getTransportIcon(option.type)}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<Card
								class="h-full border-2 border-transparent transition-all duration-500 hover:border-green-500 hover:shadow-2xl"
							>
								<CardContent class="flex flex-col p-6">
									<div
										class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg"
									>
										<TransportIcon class="h-8 w-8 text-white" />
									</div>
									<h3 class="mb-2 text-2xl font-bold text-[color:var(--dark)] capitalize">
										{option.type}
									</h3>
									<p class="mb-4 flex-grow text-gray-600">
										{option.description}
									</p>
									<div class="space-y-3 border-t-2 border-[color:var(--off-white)] pt-4">
										<div class="flex items-center justify-between">
											<span class="text-sm text-gray-600">Duration</span>
											<span class="flex items-center space-x-1 font-semibold text-green-600">
												<Clock class="h-4 w-4" />
												<span>{option.duration}</span>
											</span>
										</div>
										<div class="flex items-center justify-between">
											<span class="text-sm text-gray-600">Cost</span>
											<span class="font-semibold text-[color:var(--dark)]">{option.cost}</span>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Must-See Attractions -->
	{#if destination.mustSee && destination.mustSee.length > 0}
		<section class="relative bg-white py-32">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="scroll-reveal mb-16 text-center">
					<h2 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
						Must-See Attractions
					</h2>
					<p class="mx-auto max-w-3xl text-xl text-gray-600">
						The highlights you can't miss in {destination.name}
					</p>
				</div>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each destination.mustSee as attraction, index}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<Card
								class="group h-full overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-green-500 hover:shadow-2xl"
							>
								<div class="relative h-64 overflow-hidden">
									{#if attraction.image?.asset?.url}
										<img
											src={attraction.image.asset.url}
											alt={attraction.name}
											class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>
									{/if}
									<div
										class="absolute inset-0 bg-gradient-to-t from-[color:var(--dark)]/80 via-[color:var(--dark)]/20 to-transparent"
									></div>
								</div>
								<CardContent class="p-6">
									<h3 class="mb-2 text-2xl font-bold text-[color:var(--dark)]">
										{attraction.name}
									</h3>
									<p class="text-gray-600">{attraction.description}</p>
								</CardContent>
							</Card>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Visitor Tips -->
	{#if destination.tips && destination.tips.length > 0}
		<section class="relative bg-gradient-to-b from-[color:var(--off-white)] to-white py-32">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="scroll-reveal mb-16 text-center">
					<h2 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">Visitor Tips</h2>
					<p class="mx-auto max-w-3xl text-xl text-gray-600">
						Insider advice for your visit to {destination.name}
					</p>
				</div>

				<div class="mx-auto max-w-4xl space-y-6">
					{#each destination.tips as tip, index}
						<div
							class="scroll-reveal flex items-start space-x-4 rounded-2xl border-2 border-green-500/20 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl"
							style="transition-delay: {index * 0.1}s"
						>
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg"
							>
								<AlertCircle class="h-6 w-6 text-white" />
							</div>
							<div class="flex-grow">
								<p class="text-lg text-gray-600">
									{tip}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- CTA Section -->
	<section class="relative bg-gradient-to-br from-green-500 to-teal-500 py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-4xl text-center text-white">
				<h2 class="mb-6 text-4xl font-bold sm:text-5xl">Explore More of the Amalfi Coast Region</h2>
				<p class="mb-12 text-xl text-white/90">
					Discover more beautiful destinations near Sorrento
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<Button
						href="/surrounding"
						size="lg"
						class="bg-white text-green-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
					>
						All Destinations
						<ArrowRight class="ml-2 h-5 w-5" />
					</Button>
					<Button
						href="/contact"
						variant="outline"
						size="lg"
						class="border-2 border-white bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-green-600"
					>
						Plan Your Trip
					</Button>
				</div>
			</div>
		</div>
	</section>
</div>
