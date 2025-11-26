<script lang="ts">
	import { UtensilsCrossed, Wine, ChefHat, Coffee } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	const specialties = [
		{
			name: 'Gnocchi alla Sorrentina',
			description: 'Potato dumplings with tomato, mozzarella, and basil',
			icon: UtensilsCrossed,
			color: 'bg-(--terracotta)'
		},
		{
			name: 'Limoncello',
			description: 'Sweet lemon liqueur made from local lemons',
			icon: Wine,
			color: 'bg-(--coral)'
		},
		{
			name: 'Scialatielli ai Frutti di Mare',
			description: 'Fresh pasta with mixed seafood',
			icon: ChefHat,
			color: 'bg-(--azure)'
		},
		{
			name: 'Delizia al Limone',
			description: 'Lemon-flavored sponge cake dessert',
			icon: Coffee,
			color: 'bg-(--olive)'
		}
	];
</script>

<section class="relative bg-(--cream) py-32">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mb-20 text-center" use:reveal>
			<h2 class="heading-serif mb-6 text-4xl font-bold text-(--charcoal) sm:text-5xl">
				Must-Try Local Specialties
			</h2>
		</div>

		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each specialties as dish, index}
				<div class="scroll-reveal group" style="transition-delay: {index * 0.1}s" use:reveal>
					<div
						class="flex h-full flex-col items-center rounded-2xl border border-(--sand) bg-white p-8 text-center transition-all duration-200 ease-out hover:-translate-y-1 hover:border-(--azure) hover:shadow-md"
					>
						<div
							class="{dish.color} mb-6 flex h-16 w-16 items-center justify-center rounded-xl shadow-md transition-transform duration-200 ease-out group-hover:scale-105"
						>
							{#if dish.icon === UtensilsCrossed}
								<UtensilsCrossed class="h-8 w-8 text-white" />
							{:else if dish.icon === Wine}
								<Wine class="h-8 w-8 text-white" />
							{:else if dish.icon === ChefHat}
								<ChefHat class="h-8 w-8 text-white" />
							{:else if dish.icon === Coffee}
								<Coffee class="h-8 w-8 text-white" />
							{/if}
						</div>
						<h3 class="mb-3 text-xl font-bold text-(--charcoal)">{dish.name}</h3>
						<p class="text-sm leading-relaxed text-(--stone)">{dish.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
