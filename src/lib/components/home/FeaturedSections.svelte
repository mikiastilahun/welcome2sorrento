<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardDescription from '$lib/components/ui/card/card-description.svelte';
	import { ArrowRight, Utensils, Hotel, Sparkles } from '@lucide/svelte';
	import type { SiteSettings } from '$lib/sanity/queries';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		siteSettings: SiteSettings | null;
	}

	let { siteSettings }: Props = $props();

	const featuredSections = [
		{
			title: siteSettings?.featuredSections?.eat?.title || 'Eat',
			description:
				siteSettings?.featuredSections?.eat?.description ||
				'Discover authentic Italian cuisine and hidden culinary gems',
			image:
				siteSettings?.featuredSections?.eat?.image?.asset?.url ||
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Pizza-christian-mackie-768x1024.jpg',
			link: '/sorrento/eat',
			icon: Utensils
		},
		{
			title: siteSettings?.featuredSections?.stay?.title || 'Stay',
			description:
				siteSettings?.featuredSections?.stay?.description ||
				'Find your perfect accommodation from luxury hotels to charming B&Bs',
			image:
				siteSettings?.featuredSections?.stay?.image?.asset?.url ||
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Hotel-chloe-lefleur-768x1024.jpg',
			link: '/sorrento/stay',
			icon: Hotel
		},
		{
			title: siteSettings?.featuredSections?.do?.title || 'Do',
			description:
				siteSettings?.featuredSections?.do?.description ||
				'Experience unforgettable activities and explore stunning attractions',
			image:
				siteSettings?.featuredSections?.do?.image?.asset?.url ||
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Clear-Water-large-768x1024.jpeg',
			link: '/sorrento/do',
			icon: Sparkles
		}
	];
</script>

<section class="relative bg-white py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mb-16 text-center" use:reveal>
			<h2 class="heading-serif mb-4 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
				Plan Your Perfect Visit
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-[var(--stone)]">
				Everything you need to make the most of your Sorrento adventure
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each featuredSections as section, index}
				{@const Icon = section.icon}
				<div class="scroll-reveal" style="transition-delay: {index * 100}ms" use:reveal>
					<a href={section.link} class="group block">
						<Card
							class="h-full overflow-hidden border-[var(--sand)] pt-0 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--azure)] hover:shadow-lg"
						>
							<div class="relative h-64 overflow-hidden">
								<img
									src={section.image}
									alt={section.title}
									class="h-full w-full object-cover transition-transform duration-500 ease-in-out will-change-transform group-hover:scale-[1.04]"
								/>
							</div>
							<CardHeader>
								<div
									class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--azure)] transition-transform duration-200 ease-out group-hover:scale-105"
								>
									<Icon class="h-5 w-5 text-white" />
								</div>
								<CardTitle class="heading-serif text-2xl text-[var(--charcoal)]">
									{section.title}
								</CardTitle>
								<CardDescription class="text-[var(--stone)]">
									{section.description}
								</CardDescription>
							</CardHeader>
							<CardContent class="pb-6">
								<div
									class="flex items-center font-medium text-[var(--azure)] transition-transform duration-200 ease-out group-hover:translate-x-1"
								>
									<span>Explore {section.title}</span>
									<ArrowRight
										class="ml-2 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
									/>
								</div>
							</CardContent>
						</Card>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

