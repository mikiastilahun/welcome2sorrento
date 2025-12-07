<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
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
			link: '/sorrento/eat'
		},
		{
			title: siteSettings?.featuredSections?.stay?.title || 'Stay',
			description:
				siteSettings?.featuredSections?.stay?.description ||
				'Find your perfect accommodation from luxury hotels to charming B&Bs',
			image:
				siteSettings?.featuredSections?.stay?.image?.asset?.url ||
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Hotel-chloe-lefleur-768x1024.jpg',
			link: '/sorrento/stay'
		},
		{
			title: siteSettings?.featuredSections?.do?.title || 'Do',
			description:
				siteSettings?.featuredSections?.do?.description ||
				'Experience unforgettable activities and explore stunning attractions',
			image:
				siteSettings?.featuredSections?.do?.image?.asset?.url ||
				'https://welcome2sorrento.com/wp-content/uploads/2024/12/Clear-Water-large-768x1024.jpeg',
			link: '/sorrento/do'
		}
	];
</script>

<section id="explore" class="bg-[var(--warm-white)] py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mb-12 text-center" use:reveal>
			<h2
				class="heading-serif mb-4 text-3xl font-semibold text-[var(--charcoal)] sm:text-4xl lg:text-5xl"
			>
				Explore Sorrento
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-[var(--stone)]">
				Everything you need for your perfect visit
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each featuredSections as section, index}
				<div class="scroll-reveal" style="transition-delay: {index * 100}ms" use:reveal>
					<a href={section.link} class="group block">
						<div
							class="overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
						>
							<!-- Image -->
							<div class="relative aspect-[3/4] overflow-hidden">
								<img
									src={section.image}
									alt={section.title}
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div
									class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
								></div>

								<!-- Content overlay -->
								<div class="absolute right-0 bottom-0 left-0 p-6 text-white">
									<h3 class="heading-serif mb-2 text-2xl font-semibold">
										{section.title}
									</h3>
									<p class="mb-4 text-sm text-white/90">
										{section.description}
									</p>
									<div
										class="flex items-center text-sm font-medium transition-transform duration-200 group-hover:translate-x-2"
									>
										<span>Explore</span>
										<ArrowRight class="ml-2 h-4 w-4" />
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
