<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { StayPage } from '$lib/sanity/queries';
	import { Lightbulb, type Icon } from '@lucide/svelte';

	interface Props {
		pageData?: StayPage | null;
	}

	let { pageData = null }: Props = $props();

	const sectionTitle = pageData?.tipsHeading || 'Booking Tips';

	const defaultTips = [
		{
			title: 'Best Time to Book',
			description:
				'Book 3-6 months ahead for summer (June-August). Spring and fall offer better rates and you can often book 1-2 months in advance.'
		},
		{
			title: 'Room with a View',
			description:
				"Request sea-view rooms when booking. They're worth the premium for sunrise vistas over the Bay of Naples and Mount Vesuvius."
		},
		{
			title: 'Transportation',
			description:
				'Ask about transfer services from Naples airport or train station. Many hotels offer this convenience for a reasonable fee.'
		},
		{
			title: 'Price Guide',
			description:
				'€ = €50-100/night, €€ = €100-200/night, €€€ = €200-400/night, €€€€ = €400+/night. Prices vary by season.'
		}
	];

	const tips =
		pageData?.bookingTips && pageData.bookingTips.length > 0 ? pageData.bookingTips : defaultTips;
</script>

<section class="relative bg-white py-32">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-5xl">
			<div class="scroll-reveal mb-20 text-center" use:reveal>
				<h2 class="heading-serif mb-6 text-4xl font-bold text-(--charcoal) sm:text-5xl">
					{sectionTitle || "Booking Tips"}
				</h2>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each tips as tip, index}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s" use:reveal>
						<div
							class="h-full rounded-2xl border border-(--sand) bg-white p-8 transition-all duration-300 hover:border-(--azure) hover:shadow-md"
						>
							<h3 class="mb-2 text-lg font-bold text-(--charcoal)">{tip.title}</h3>
							<p class="text-sm leading-relaxed text-(--stone)">{tip.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
