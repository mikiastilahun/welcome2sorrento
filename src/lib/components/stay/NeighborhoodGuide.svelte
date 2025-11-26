<script lang="ts">
	import { MapPin, Waves, Heart } from '@lucide/svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { reveal } from '$lib/actions/reveal';

	const neighborhoods = [
		{
			title: 'City Center',
			description:
				'Heart of Sorrento with easy access to Piazza Tasso, shops, and restaurants. Perfect for first-time visitors.',
			icon: MapPin,
			badge: 'Most Popular',
			color: 'bg-(--azure)'
		},
		{
			title: 'Marina Grande',
			description:
				'Charming fishing village atmosphere with beachfront restaurants and authentic local character.',
			icon: Waves,
			badge: 'Authentic',
			color: 'bg-(--olive)'
		},
		{
			title: 'Via Capo',
			description:
				'Clifftop location with spectacular views and quieter atmosphere. Ideal for romantic getaways.',
			icon: Heart,
			badge: 'Scenic',
			color: 'bg-(--terracotta)'
		}
	];
</script>

<section class="relative bg-(--cream) py-32">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mb-20 text-center" use:reveal>
			<h2 class="heading-serif mb-6 text-4xl font-bold text-(--charcoal) sm:text-5xl">
				Where to Stay
			</h2>
		</div>

		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
			{#each neighborhoods as area, index}
				<div class="scroll-reveal" style="transition-delay: {index * 0.1}s" use:reveal>
					<div
						class="h-full rounded-2xl border border-(--sand) bg-white p-8 transition-all duration-300 hover:border-(--azure) hover:shadow-md"
					>
						<div class="mb-4 flex items-center space-x-3">
							<div
								class="{area.color} flex h-12 w-12 items-center justify-center rounded-lg shadow-sm"
							>
								{#if area.icon === MapPin}
									<MapPin class="h-6 w-6 text-white" />
								{:else if area.icon === Waves}
									<Waves class="h-6 w-6 text-white" />
								{:else if area.icon === Heart}
									<Heart class="h-6 w-6 text-white" />
								{/if}
							</div>
							<h3 class="text-xl font-bold text-(--charcoal)">{area.title}</h3>
						</div>
						<p class="mb-4 text-sm leading-relaxed text-(--stone)">
							{area.description}
						</p>
						<Badge class="{area.color} border-0 text-white">{area.badge}</Badge>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
