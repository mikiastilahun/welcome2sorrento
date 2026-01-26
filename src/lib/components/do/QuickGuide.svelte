<script lang="ts">
	import { Waves, ChefHat, Footprints, Church, type Icon } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { DoPage } from '$lib/sanity/queries';

	interface Props {
		pageData?: DoPage | null;
	}

	let { pageData = null }: Props = $props();

	const sectionTitle = pageData?.categoriesHeading || 'Activities by Interest';

	// Icon mapping
	const iconMap: Record<string, typeof Waves> = {
		Waves,
		ChefHat,
		Footprints,
		Church
	};

	const defaultInterests = [
		{
			title: 'Water Lovers',
			description: 'Boat tours, beaches, swimming, snorkeling',
			icon: 'Waves',
			color: 'bg-(--azure)'
		},
		{
			title: 'Food Enthusiasts',
			description: 'Cooking classes, wine tours, market visits',
			icon: 'ChefHat',
			color: 'bg-(--terracotta)'
		},
		{
			title: 'Active Explorers',
			description: 'Hiking trails, bike tours, kayaking',
			icon: 'Footprints',
			color: 'bg-(--olive)'
		},
		{
			title: 'History Buffs',
			description: 'Ancient sites, museums, cultural tours',
			icon: 'Church',
			color: 'bg-(--coral)'
		}
	];

	const accentColors = ['bg-(--azure)', 'bg-(--terracotta)', 'bg-(--olive)', 'bg-(--coral)'];

	const interests =
		pageData?.activityCategories && pageData.activityCategories.length > 0
			? pageData.activityCategories.map((cat, i) => ({
					...cat,
					iconComponent: iconMap[cat.icon || ''] || Church,
					color: accentColors[i % accentColors.length]
				}))
			: defaultInterests.map((interest) => ({
					...interest,
					iconComponent: iconMap[interest.icon] || Church
				}));
</script>

<section class="relative bg-(--cream) py-32">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mb-20 text-center" use:reveal>
			<h2 class="heading-serif mb-6 text-4xl font-bold text-(--charcoal) sm:text-5xl">
				{sectionTitle}
			</h2>
		</div>

		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each interests as interest, index}
				<div class="scroll-reveal" style="transition-delay: {index * 0.1}s" use:reveal>
					<div
						class="h-full rounded-2xl border border-(--sand) bg-white p-8 text-center transition-all duration-300 hover:border-(--azure) hover:shadow-md"
					>
						<div
							class="{interest.color} mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl shadow-sm"
						>
							<interest.iconComponent class="h-8 w-8 text-white" />
						</div>
						<h3 class="mb-3 text-xl font-bold text-(--charcoal)">{interest.title}</h3>
						<p class="text-sm leading-relaxed text-(--stone)">{interest.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
