<script lang="ts">
	import type { Destination } from '$lib/sanity/queries';
	import { PostcardFrame, VintageButton } from '$lib/components/ui/decorative';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
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
		Sparkles,
		Lightbulb
	} from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		data: {
			destination: Destination;
		};
	}

	let { data }: Props = $props();
	const { destination } = data;

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

	const transportColors = ['azure', 'olive', 'terracotta'];
</script>

<svelte:head>
	<title>{destination.name} Travel Guide | Welcome2Sorrento</title>
	<meta name="description" content={destination.shortDescription || ''} />
</svelte:head>

<div class="-mt-24">
	<PageHeader
		title={destination.name}
		subtitle={destination.subtitle || ''}
		image={destination.heroImage?.asset?.url ||
			'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80'}
		label="Destinazione"
	/>

	<!-- Introduction -->
	<section class="texture-grain relative bg-[var(--warm-white)] py-24">
		<!-- Decorative tile border -->
		<div class="absolute top-0 right-0 left-0">
			<div class="mx-auto max-w-4xl px-4">
				<div class="border-tile-decorative"></div>
			</div>
		</div>

		<div class="container mx-auto max-w-4xl px-4">
			<div class="scroll-reveal" use:reveal>
				<div class="mb-8 text-center">
					<div class="mb-4 flex items-center justify-center gap-3">
						<div class="h-px w-8 bg-[var(--azure)]"></div>
						<span class="font-serif text-sm tracking-[0.2em] text-[var(--azure)] uppercase"
							>About</span
						>
						<div class="h-px w-8 bg-[var(--azure)]"></div>
					</div>
					<div
						class="inline-flex items-center space-x-2 rounded-full border border-[var(--azure)]/20 bg-[var(--azure)]/10 px-4 py-2"
					>
						<Sparkles class="h-5 w-5 text-[var(--azure)]" />
						<span class="text-sm font-semibold text-[var(--azure)]">About {destination.name}</span>
					</div>
				</div>

				<div class="prose prose-lg mx-auto max-w-none text-[var(--stone)]">
					{#if destination.introduction && destination.introduction.length > 0}
						{#each destination.introduction as block}
							{#if block._type === 'block' && block.children}
								<p>
									{#each block.children as child}
										{#if child._type === 'span'}
											{child.text}
										{/if}
									{/each}
								</p>
							{/if}
						{/each}
					{/if}
				</div>

				<!-- Decorative divider -->
				<div class="mt-12 flex items-center justify-center gap-4">
					<div class="h-px w-16 bg-gradient-to-r from-transparent to-[var(--azure)]"></div>
					<div class="h-2 w-2 rotate-45 bg-[var(--azure)]"></div>
					<div class="h-px w-16 bg-gradient-to-l from-transparent to-[var(--azure)]"></div>
				</div>
			</div>
		</div>
	</section>

	<!-- How to Get There -->
	{#if destination.howToGetThere?.fromSorrento?.options && destination.howToGetThere.fromSorrento.options.length > 0}
		<section class="relative bg-white py-24">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="scroll-reveal mb-12 text-center" use:reveal>
					<div class="mb-4 flex items-center justify-center gap-3">
						<div class="h-px w-8 bg-[var(--olive)]"></div>
						<span class="font-serif text-sm tracking-[0.2em] text-[var(--olive)] uppercase"
							>Transport</span
						>
						<div class="h-px w-8 bg-[var(--olive)]"></div>
					</div>
					<h2 class="heading-serif mb-6 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
						How to Get There
					</h2>
					<p class="mx-auto max-w-3xl text-xl text-[var(--stone)]">
						From Sorrento to {destination.name}
					</p>
				</div>

				<div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each destination.howToGetThere.fromSorrento.options as option, index}
						{@const TransportIcon = getTransportIcon(option.type)}
						{@const accentColor = transportColors[index % 3]}
						<div
							class="scroll-reveal polaroid-hover"
							style="transition-delay: {index * 100}ms"
							use:reveal
						>
							<PostcardFrame variant={index === 1 ? 'cream' : 'default'}>
								<div class="text-center">
									<div
										class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--{accentColor})] to-[var(--{accentColor})] shadow-lg"
									>
										<TransportIcon class="h-8 w-8 text-white" />
									</div>
									<h3
										class="heading-serif mb-2 text-xl font-semibold text-[var(--charcoal)] capitalize"
									>
										{option.type}
									</h3>
									<p class="mb-4 text-sm text-[var(--stone)]">
										{option.details || ''}
									</p>
									<div class="space-y-2 border-t border-[var(--sand)] pt-4">
										<div class="flex items-center justify-between text-sm">
											<span class="text-[var(--stone)]">Duration</span>
											<span
												class="flex items-center space-x-1 font-semibold text-[var(--{accentColor})]"
											>
												<Clock class="h-4 w-4" />
												<span>{option.duration}</span>
											</span>
										</div>
										<div class="flex items-center justify-between text-sm">
											<span class="text-[var(--stone)]">Cost</span>
											<span class="font-semibold text-[var(--charcoal)]">{option.cost}</span>
										</div>
									</div>
								</div>
							</PostcardFrame>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Must-See Attractions -->
	{#if destination.attractions && destination.attractions.length > 0}
		<section class="relative overflow-hidden bg-[var(--cream)] py-24">
			<!-- Wave decoration at top -->
			<div class="absolute top-0 right-0 left-0">
				<svg
					class="h-12 w-full"
					viewBox="0 0 1200 60"
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0,60 C300,20 600,50 900,30 C1050,20 1100,40 1200,30 L1200,0 L0,0 Z" fill="white"
					></path>
				</svg>
			</div>

			<div class="container mx-auto px-4 pt-8 sm:px-6 lg:px-8">
				<div class="scroll-reveal mb-12 text-center" use:reveal>
					<div class="mb-4 flex items-center justify-center gap-3">
						<div class="h-px w-8 bg-[var(--coral)]"></div>
						<span class="font-serif text-sm tracking-[0.2em] text-[var(--coral)] uppercase"
							>Must See</span
						>
						<div class="h-px w-8 bg-[var(--coral)]"></div>
					</div>
					<h2 class="heading-serif mb-6 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
						Must-See Attractions
					</h2>
					<p class="mx-auto max-w-3xl text-xl text-[var(--stone)]">
						The highlights you can't miss in {destination.name}
					</p>
				</div>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each destination.attractions as attraction, index}
						{@const accentColors = ['azure', 'terracotta', 'olive', 'coral']}
						{@const accentColor = accentColors[index % 4]}
						<div class="scroll-reveal" style="transition-delay: {index * 100}ms" use:reveal>
							<Card
								class="group shadow-mediterranean hover:shadow-mediterranean-lg relative h-full overflow-hidden border-[var(--sand)] pt-0 transition-all duration-300 hover:-translate-y-2"
							>
								<!-- Vintage number badge -->
								<div
									class="pointer-events-none absolute -top-2 -left-2 z-20 font-serif text-7xl font-bold select-none text-[var(--{accentColor})] opacity-10"
								>
									0{index + 1}
								</div>

								<div class="relative h-56 overflow-hidden">
									{#if attraction.image?.asset?.url}
										<img
											src={attraction.image.asset.url}
											alt={attraction.name}
											class="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
										/>
									{/if}
									<div
										class="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/70 via-[var(--charcoal)]/30 to-transparent"
									></div>
								</div>
								<CardContent class="p-6">
									<h3
										class="heading-serif mb-2 text-xl font-semibold text-[var(--charcoal)] transition-colors group-hover:text-[var(--azure)]"
									>
										{attraction.name}
									</h3>
									<p class="text-[var(--stone)]">{attraction.description}</p>
								</CardContent>

								<!-- Decorative corner -->
								<div
									class="absolute right-0 bottom-0 h-16 w-16 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
									style="background: linear-gradient(135deg, transparent 50%, var(--{accentColor}) 50%);"
								></div>
							</Card>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Visitor Tips -->
	{#if destination.planningTips && destination.planningTips.length > 0}
		<section class="relative bg-white py-24">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="scroll-reveal mb-12 text-center" use:reveal>
					<div class="mb-4 flex items-center justify-center gap-3">
						<div class="h-px w-8 bg-[var(--terracotta)]"></div>
						<span class="font-serif text-sm tracking-[0.2em] text-[var(--terracotta)] uppercase"
							>Tips</span
						>
						<div class="h-px w-8 bg-[var(--terracotta)]"></div>
					</div>
					<h2 class="heading-serif mb-6 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
						Visitor Tips
					</h2>
					<p class="mx-auto max-w-3xl text-xl text-[var(--stone)]">
						Insider advice for your visit to {destination.name}
					</p>
				</div>

				<div class="mx-auto max-w-4xl space-y-6">
					{#each destination.planningTips as tip, index}
						<div
							class="scroll-reveal polaroid-hover"
							style="transition-delay: {index * 100}ms"
							use:reveal
						>
							<PostcardFrame variant={index % 2 === 0 ? 'default' : 'cream'}>
								<div class="flex items-start gap-4">
									<div
										class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--terracotta)]"
									>
										<Lightbulb class="h-5 w-5 text-white" />
									</div>
									<div>
										<h4 class="font-semibold text-[var(--charcoal)]">{tip.title}</h4>
										<p class="text-lg text-[var(--stone)]">{tip.description}</p>
									</div>
								</div>
							</PostcardFrame>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- CTA Section -->
	<section class="relative overflow-hidden py-24">
		<!-- Background with Ken Burns effect -->
		<div class="absolute inset-0">
			<div class="animate-ken-burns h-full w-full">
				<img
					src={destination.heroImage?.asset?.url ||
						'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80'}
					alt={destination.name}
					class="h-full w-full object-cover"
				/>
			</div>
			<div
				class="absolute inset-0 bg-gradient-to-r from-[var(--azure)]/95 to-[var(--deep-azure)]/90"
			></div>
			<div class="film-grain pointer-events-none absolute inset-0"></div>
		</div>

		<div
			class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8"
			use:reveal
		>
			<div class="mx-auto max-w-3xl text-white">
				<!-- Section label -->
				<div class="mb-4 flex items-center justify-center gap-3">
					<div class="h-px w-8 bg-white/50"></div>
					<span class="font-serif text-sm tracking-[0.3em] text-white/80 uppercase"
						>Explore More</span
					>
					<div class="h-px w-8 bg-white/50"></div>
				</div>

				<h2 class="heading-serif mb-6 text-4xl font-semibold sm:text-5xl">
					Explore More of the Amalfi Coast Region
				</h2>
				<p class="mb-12 text-xl text-white/90">
					Discover more beautiful destinations near Sorrento
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<VintageButton href="/surrounding" variant="coral" size="lg">
						<span>All Destinations</span>
						<ArrowRight class="h-5 w-5" />
					</VintageButton>
					<VintageButton href="/contact" variant="azure" size="lg">
						<span>Plan Your Trip</span>
					</VintageButton>
				</div>
			</div>
		</div>

		<!-- Decorative corners -->
		<div class="pointer-events-none absolute top-8 left-8 h-16 w-16 opacity-20">
			<svg viewBox="0 0 64 64" fill="none" class="h-full w-full text-white">
				<path d="M0 0v24M0 0h24" stroke="currentColor" stroke-width="2" />
			</svg>
		</div>
		<div class="pointer-events-none absolute top-8 right-8 h-16 w-16 opacity-20">
			<svg viewBox="0 0 64 64" fill="none" class="h-full w-full text-white">
				<path d="M64 0v24M64 0h-24" stroke="currentColor" stroke-width="2" />
			</svg>
		</div>
		<div class="pointer-events-none absolute bottom-8 left-8 h-16 w-16 opacity-20">
			<svg viewBox="0 0 64 64" fill="none" class="h-full w-full text-white">
				<path d="M0 64v-24M0 64h24" stroke="currentColor" stroke-width="2" />
			</svg>
		</div>
		<div class="pointer-events-none absolute right-8 bottom-8 h-16 w-16 opacity-20">
			<svg viewBox="0 0 64 64" fill="none" class="h-full w-full text-white">
				<path d="M64 64v-24M64 64h-24" stroke="currentColor" stroke-width="2" />
			</svg>
		</div>
	</section>
</div>
