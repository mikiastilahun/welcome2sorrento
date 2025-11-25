<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import { Waves, Mountain, Sparkles } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	const transportOptions = [
		{
			title: 'Ferry Services',
			description: 'Regular ferries to Capri, Ischia, Procida, and Naples from Sorrento port',
			icon: Waves
		},
		{
			title: 'Bus & Train',
			description: 'SITA buses along the coast, Circumvesuviana train to Naples and Pompeii',
			icon: Mountain
		},
		{
			title: 'Private Tours',
			description: 'Customized private tours and transfers available through our booking service',
			icon: Sparkles
		}
	];
</script>

<section class="relative bg-(--cream) py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-5xl">
			<div class="scroll-reveal mb-16 text-center" use:reveal>
				<h2 class="heading-serif mb-4 text-3xl font-semibold text-(--charcoal) sm:text-4xl">
					Getting Around
				</h2>
				<p class="text-lg text-(--stone)">
					Multiple transportation options to explore the region
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each transportOptions as transport, index}
					<div class="scroll-reveal group" style="transition-delay: {index * 0.1}s" use:reveal>
						<Card
							class="h-full text-center transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
						>
							<CardContent class="flex h-full flex-col items-center p-8">
								<div
									class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--azure) shadow-md transition-transform duration-200 ease-out group-hover:scale-105"
								>
									<svelte:component this={transport.icon} class="h-8 w-8 text-white" />
								</div>
								<h3 class="mb-4 text-xl font-semibold text-(--charcoal)">
									{transport.title}
								</h3>
								<p class="leading-relaxed text-(--stone)">
									{transport.description}
								</p>
							</CardContent>
						</Card>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

