<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import { PostcardFrame } from '$lib/components/ui/decorative';
	import { Ship, Train, Car } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	const transportOptions = [
		{
			title: 'Ferry Services',
			description: 'Regular ferries to Capri, Ischia, Procida, and Naples from Sorrento port',
			icon: Ship,
			color: 'azure'
		},
		{
			title: 'Bus & Train',
			description: 'SITA buses along the coast, Circumvesuviana train to Naples and Pompeii',
			icon: Train,
			color: 'olive'
		},
		{
			title: 'Private Tours',
			description: 'Customized private tours and transfers available through our booking service',
			icon: Car,
			color: 'terracotta'
		}
	];
</script>

<section class="relative bg-[var(--cream)] py-24">
	<!-- Wave decoration at top -->
	<div class="absolute top-0 right-0 left-0">
		<svg
			class="h-12 w-full"
			viewBox="0 0 1200 60"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0,60 C300,20 600,50 900,30 C1050,20 1100,40 1200,30 L1200,0 L0,0 Z"
				fill="white"
			></path>
		</svg>
	</div>

	<div class="container mx-auto px-4 pt-8 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-5xl">
			<div class="scroll-reveal mb-12 text-center" use:reveal>
				<div class="mb-4 flex items-center justify-center gap-3">
					<div class="h-px w-8 bg-[var(--olive)]"></div>
					<span class="font-serif text-sm tracking-[0.2em] text-[var(--olive)] uppercase">Transport</span>
					<div class="h-px w-8 bg-[var(--olive)]"></div>
				</div>
				<h2 class="heading-serif mb-4 text-3xl font-semibold text-[var(--charcoal)] sm:text-4xl">
					Getting Around
				</h2>
				<p class="text-lg text-[var(--stone)]">
					Multiple transportation options to explore the region
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each transportOptions as transport, index}
				{@const TransportIcon = transport.icon}
				<div class="scroll-reveal group polaroid-hover" style="transition-delay: {index * 100}ms" use:reveal>
					<PostcardFrame variant={index === 1 ? 'cream' : 'default'}>
						<div class="text-center">
							<div
								class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--{transport.color})] to-[var(--{transport.color === 'azure' ? 'deep-azure' : transport.color})] shadow-lg transition-transform duration-200 ease-out group-hover:scale-110"
							>
							<TransportIcon class="h-8 w-8 text-white" />
								</div>
								<h3 class="heading-serif mb-3 text-xl font-semibold text-[var(--charcoal)]">
									{transport.title}
								</h3>
								<p class="leading-relaxed text-[var(--stone)]">
									{transport.description}
								</p>
							</div>
						</PostcardFrame>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
