<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import type { Destination } from '$lib/sanity/queries';
	import PortableTextRenderer from '$lib/components/PortableTextRenderer.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
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
	<PageHeader
		title={destination.name}
		subtitle={destination.tagline || ''}
		image={destination.heroImage?.asset?.url ||
			'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80'}
	/>

	<!-- Introduction -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto max-w-4xl px-4">
			<div class="scroll-reveal">
				<div class="mb-12 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-(--azure)/20 bg-(--azure)/10 px-4 py-2"
					>
						<Sparkles class="h-5 w-5 text-(--azure)" />
						<span class="text-sm font-semibold text-(--azure)">About {destination.name}</span>
					</div>
				</div>

				<div class="prose prose-lg mx-auto max-w-none text-(--stone)">
					{#if destination.description}
						<PortableTextRenderer value={destination.description} />
					{/if}
				</div>
			</div>
		</div>
	</section>

	<!-- How to Get There -->
	{#if destination.transport && destination.transport.length > 0}
		<section class="relative bg-(--cream) py-32">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="scroll-reveal mb-16 text-center">
					<h2 class="heading-serif mb-6 text-4xl font-bold text-(--charcoal) sm:text-5xl">
						How to Get There
					</h2>
					<p class="mx-auto max-w-3xl text-xl text-(--stone)">
						From Sorrento to {destination.name}
					</p>
				</div>

				<div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each destination.transport as option, index}
						{@const TransportIcon = getTransportIcon(option.type)}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<Card
								class="h-full border-2 border-transparent transition-all duration-200 ease-out hover:-translate-y-1 hover:border-(--azure) hover:shadow-lg"
							>
								<CardContent class="flex flex-col p-6">
									<div
										class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--azure) shadow-lg"
									>
										<TransportIcon class="h-8 w-8 text-white" />
									</div>
									<h3 class="mb-2 text-2xl font-bold text-(--charcoal) capitalize">
										{option.type}
									</h3>
									<p class="mb-4 flex-grow text-(--stone)">
										{option.description}
									</p>
									<div class="space-y-3 border-t-2 border-(--sand) pt-4">
										<div class="flex items-center justify-between">
											<span class="text-sm text-(--stone)">Duration</span>
											<span class="flex items-center space-x-1 font-semibold text-(--azure)">
												<Clock class="h-4 w-4" />
												<span>{option.duration}</span>
											</span>
										</div>
										<div class="flex items-center justify-between">
											<span class="text-sm text-(--stone)">Cost</span>
											<span class="font-semibold text-(--charcoal)">{option.cost}</span>
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
					<h2 class="heading-serif mb-6 text-4xl font-bold text-(--charcoal) sm:text-5xl">
						Must-See Attractions
					</h2>
					<p class="mx-auto max-w-3xl text-xl text-(--stone)">
						The highlights you can't miss in {destination.name}
					</p>
				</div>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each destination.mustSee as attraction, index}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<Card
								class="group h-full overflow-hidden border-2 border-transparent transition-all duration-200 ease-out hover:-translate-y-1 hover:border-(--azure) hover:shadow-lg"
							>
								<div class="relative h-64 overflow-hidden">
									{#if attraction.image?.asset?.url}
										<img
											src={attraction.image.asset.url}
											alt={attraction.name}
											class="h-full w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-[1.04]"
										/>
									{/if}
									<div
										class="absolute inset-0 bg-gradient-to-t from-(--charcoal)/80 via-(--charcoal)/20 to-transparent"
									></div>
								</div>
								<CardContent class="p-6">
									<h3 class="heading-serif mb-2 text-2xl font-bold text-(--charcoal)">
										{attraction.name}
									</h3>
									<p class="text-(--stone)">{attraction.description}</p>
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
		<section class="relative bg-(--cream) py-32">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="scroll-reveal mb-16 text-center">
					<h2 class="heading-serif mb-6 text-4xl font-bold text-(--charcoal) sm:text-5xl">
						Visitor Tips
					</h2>
					<p class="mx-auto max-w-3xl text-xl text-(--stone)">
						Insider advice for your visit to {destination.name}
					</p>
				</div>

				<div class="mx-auto max-w-4xl space-y-6">
					{#each destination.tips as tip, index}
						<div
							class="scroll-reveal flex items-start space-x-4 rounded-2xl border-2 border-(--azure)/20 bg-white p-6 shadow-lg transition-all duration-200 hover:shadow-2xl"
							style="transition-delay: {index * 0.1}s"
						>
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-(--azure) shadow-lg"
							>
								<AlertCircle class="h-6 w-6 text-white" />
							</div>
							<div class="flex-grow">
								<p class="text-lg text-(--stone)">
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
	<section class="relative overflow-hidden bg-(--azure) py-32">
		<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-white">
				<h2 class="heading-serif mb-6 text-4xl font-bold sm:text-5xl">
					Explore More of the Amalfi Coast Region
				</h2>
				<p class="mb-12 text-xl text-white/90">
					Discover more beautiful destinations near Sorrento
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<a href="/surrounding">
						<Button
							size="lg"
							class="bg-white text-(--azure) transition-all duration-200 hover:bg-(--cream) hover:shadow-lg"
						>
							All Destinations
							<ArrowRight class="ml-2 h-5 w-5" />
						</Button>
					</a>
					<a href="/contact">
						<Button
							variant="outline"
							size="lg"
							class="border-2 border-white bg-transparent text-white transition-all duration-200 hover:bg-white hover:text-(--azure)"
						>
							Plan Your Trip
						</Button>
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
