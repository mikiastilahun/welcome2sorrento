<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from '@lucide/svelte';
	import type { Destination } from '$lib/sanity/queries';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		featuredDestinations: Destination[];
	}

	let { featuredDestinations }: Props = $props();

	const fallbackDestinations = [
		{
			name: 'Capri',
			description: 'The jewel of the Mediterranean',
			image:
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Clear-Water-large-768x1024.jpeg',
			link: '/surrounding/capri'
		},
		{
			name: 'Amalfi Coast',
			description: 'Dramatic cliffs and colorful villages',
			image:
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Positano-marianna-berno-683x1024.jpg',
			link: '/surrounding/amalfi'
		},
		{
			name: 'Naples',
			description: 'Vibrant culture and authentic pizza',
			image:
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Marina-della-Lobra-scaled.jpeg',
			link: '/surrounding/naples'
		}
	];
</script>

<section class="relative bg-(--cream) py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mb-16 text-center" use:reveal>
			<h2 class="heading-serif mb-4 text-4xl font-semibold text-(--charcoal) sm:text-5xl">
				Explore Nearby Wonders
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-(--stone)">
				Venture beyond to discover world-renowned destinations
			</p>
		</div>

		<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#if featuredDestinations.length === 0}
				{#each fallbackDestinations as destination}
					<div class="scroll-reveal" use:reveal>
						<a href={destination.link} class="group block">
							<Card
								class="h-full overflow-hidden border-(--sand) py-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
							>
								<div class="relative aspect-4/5 overflow-hidden bg-(--sand)">
									<img
										src={destination.image}
										alt={destination.name}
										class="h-full w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-[1.04]"
									/>

									<div
										class="absolute inset-0 bg-linear-to-t from-(--charcoal)/60 to-transparent"
									></div>
									<div class="absolute right-0 bottom-0 left-0 p-6">
										<h3 class="heading-serif mb-1 text-2xl font-semibold text-white">
											{destination.name}
										</h3>
										<p class="text-sm text-white/90">
											{destination.description}
										</p>
									</div>
								</div>
							</Card>
						</a>
					</div>
				{/each}
			{:else}
				{#each featuredDestinations as destination}
					<div class="scroll-reveal" use:reveal>
						<a href="/surrounding/{destination.slug.current}" class="group block">
							<Card
								class="h-full overflow-hidden border-(--sand) py-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
							>
								<div class="relative aspect-4/5 overflow-hidden bg-(--sand)">
									<img
										src={destination.cardImage?.asset?.url ||
											'https://welcome2sorrento.com/wp-content/uploads/2024/12/Clear-Water-large-768x1024.jpeg'}
										alt={destination.name}
										class="h-full w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-[1.04]"
									/>
									<div
										class="absolute inset-0 bg-linear-to-t from-(--charcoal)/60 to-transparent"
									></div>
									<div class="absolute right-0 bottom-0 left-0 p-6">
										<h3 class="heading-serif mb-1 text-2xl font-semibold text-white">
											{destination.name}
										</h3>
										<p class="text-sm text-white/90">
											{destination.subtitle || destination.shortDescription || ''}
										</p>
									</div>
								</div>
							</Card>
						</a>
					</div>
				{/each}
			{/if}
		</div>

		<div class="scroll-reveal text-center" use:reveal>
			<a href="/surrounding">
				<Button
					size="lg"
					class="group bg-(--azure) px-8 py-6 text-lg transition-all duration-200 ease-out hover:bg-(--deep-azure) hover:shadow-lg hover:brightness-110"
				>
					<div class="flex items-center space-x-2">
						<span>View All Destinations</span>
						<ArrowRight class="h-5 w-5" />
					</div>
				</Button>
			</a>
		</div>
	</div>
</section>

