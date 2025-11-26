<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardDescription from '$lib/components/ui/card/card-description.svelte';
	import { VintageButton } from '$lib/components/ui/decorative';
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
			icon: Utensils,
			number: '01',
			accent: 'var(--terracotta)'
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
			icon: Hotel,
			number: '02',
			accent: 'var(--azure)'
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
			icon: Sparkles,
			number: '03',
			accent: 'var(--olive)'
		}
	];

	// Simple tilt effect on mouse move
	function handleMouseMove(event: MouseEvent, element: HTMLElement) {
		const rect = element.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const rotateX = (y - centerY) / 20;
		const rotateY = (centerX - x) / 20;

		element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
	}

	function handleMouseLeave(element: HTMLElement) {
		element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
	}
</script>

<section class="texture-grain relative overflow-hidden bg-white py-24">
	<!-- Decorative background pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.02]">
		<svg class="h-full w-full">
			<defs>
				<pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
					<path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--charcoal)" stroke-width="1" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#grid-pattern)" />
		</svg>
	</div>

	<div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mb-16 text-center" use:reveal>
			<!-- Section label -->
			<div class="mb-4 flex items-center justify-center gap-3">
				<div class="h-px w-8 bg-[var(--terracotta)]"></div>
				<span class="font-serif text-sm tracking-[0.2em] text-[var(--terracotta)] uppercase"
					>Explore</span
				>
				<div class="h-px w-8 bg-[var(--terracotta)]"></div>
			</div>

			<h2
				class="heading-serif mb-4 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl lg:text-6xl"
			>
				Plan Your Perfect Visit
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-[var(--stone)]">
				Everything you need to make the most of your Sorrento adventure
			</p>
		</div>

		<div class="grid grid-cols-1 gap-10 md:grid-cols-3">
			{#each featuredSections as section, index}
				{@const Icon = section.icon}
				<div class="scroll-reveal" style="transition-delay: {index * 150}ms" use:reveal>
					<a href={section.link} class="group block">
						<Card
							class="tilt-card relative h-full overflow-hidden border-[var(--sand)] pt-0 transition-all duration-300 ease-out"
							onmousemove={(e: MouseEvent) => handleMouseMove(e, e.currentTarget as HTMLElement)}
							onmouseleave={(e: MouseEvent) => handleMouseLeave(e.currentTarget as HTMLElement)}
							style="transition: transform 0.1s ease-out;"
						>
							<!-- Vintage Number Badge -->
							<div
								class="vintage-badge pointer-events-none absolute -top-2 -left-2 z-20 font-serif text-7xl font-bold opacity-10 select-none"
								style="color: {section.accent};"
							>
								{section.number}
							</div>

							<!-- Image with hover zoom effect -->
							<div class="relative h-72 overflow-hidden">
								<img
									src={section.image}
									alt={section.title}
									class="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
								/>
								<!-- Gradient overlay - always visible, intensifies on hover -->
								<div
									class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent transition-all duration-300 group-hover:from-black/50"
								></div>
							</div>

							<CardHeader class="relative">
								<!-- Icon badge -->
								<div
									class="absolute -top-8 left-6 flex h-16 w-16 items-center justify-center rounded-xl shadow-lg transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-xl"
									style="background: {section.accent};"
								>
									<Icon class="h-7 w-7 text-white" />
								</div>

								<div class="pt-6">
									<CardTitle
										class="heading-serif text-2xl text-[var(--charcoal)] transition-colors duration-200 group-hover:text-[var(--azure)]"
									>
										{section.title}
									</CardTitle>
									<CardDescription class="mt-2 text-[var(--stone)]">
										{section.description}
									</CardDescription>
								</div>
							</CardHeader>

							<CardContent class="pb-6">
								<div
									class="flex items-center font-serif tracking-wide text-[var(--azure)] transition-all duration-200 ease-out group-hover:translate-x-2"
								>
									<span>Explore {section.title}</span>
									<ArrowRight
										class="ml-2 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
									/>
								</div>
							</CardContent>

							<!-- Decorative corner -->
							<div
								class="absolute right-0 bottom-0 h-16 w-16 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
								style="background: linear-gradient(135deg, transparent 50%, {section.accent} 50%);"
							></div>
						</Card>
					</a>
				</div>
			{/each}
		</div>

		<!-- Bottom CTA -->
		<div class="scroll-reveal mt-16 text-center" use:reveal>
			<VintageButton href="/sorrento" variant="azure" size="lg">
				<span>View Complete Guide</span>
				<ArrowRight class="h-5 w-5" />
			</VintageButton>
		</div>
	</div>
</section>
