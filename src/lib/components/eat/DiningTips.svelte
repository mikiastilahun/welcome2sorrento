<script lang="ts">
	import { Clock, Euro, MapPin, Award } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	const tips = [
		{
			title: 'Meal Times',
			description: 'Lunch: 12:30-3pm, Dinner: 7:30pm onwards. Many places close between meals.',
			icon: Clock,
			color: 'bg-(--azure)'
		},
		{
			title: 'Pricing',
			description:
				'€ = Budget (€10-20), €€ = Moderate (€20-40), €€€ = Upscale (€40-70), €€€€ = Fine Dining (€70+)',
			icon: Euro,
			color: 'bg-(--olive)'
		},
		{
			title: 'Reservations',
			description: 'Book ahead for fine dining and popular spots, especially in peak season.',
			icon: MapPin,
			color: 'bg-(--terracotta)'
		},
		{
			title: 'Local Etiquette',
			description:
				"Service charge is usually included. Round up for good service, but tipping isn't mandatory.",
			icon: Award,
			color: 'bg-(--coral)'
		}
	];
</script>

<section class="relative bg-white py-32">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-5xl">
			<div class="scroll-reveal mb-20 text-center" use:reveal>
				<h2 class="heading-serif mb-6 text-4xl font-bold text-(--charcoal) sm:text-5xl">
					Dining Tips
				</h2>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each tips as tip, index}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s" use:reveal>
						<div
							class="h-full rounded-2xl border border-(--sand) bg-white p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-(--azure) hover:shadow-md"
						>
							<div class="flex items-start space-x-4">
								<div
									class="{tip.color} flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg shadow-sm"
								>
									{#if tip.icon === Clock}
										<Clock class="h-6 w-6 text-white" />
									{:else if tip.icon === Euro}
										<Euro class="h-6 w-6 text-white" />
									{:else if tip.icon === MapPin}
										<MapPin class="h-6 w-6 text-white" />
									{:else if tip.icon === Award}
										<Award class="h-6 w-6 text-white" />
									{/if}
								</div>
								<div>
									<h3 class="mb-2 text-lg font-bold text-(--charcoal)">{tip.title}</h3>
									<p class="text-sm leading-relaxed text-(--stone)">{tip.description}</p>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
