<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Waves, Mountain, Sparkles, ArrowRight, Ship } from '@lucide/svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const handleScroll = () => {
			const reveals = document.querySelectorAll('.scroll-reveal');
			reveals.forEach((element) => {
				const elementTop = element.getBoundingClientRect().top;
				const elementVisible = 150;
				if (elementTop < window.innerHeight - elementVisible) {
					element.classList.add('revealed');
				}
			});
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>Ischia Travel Guide - Thermal Spas & Beaches | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Discover Ischia island - natural thermal spas, Poseidon Gardens, Aragonese Castle, and beautiful beaches."
	/>
</svelte:head>

<div class="-mt-24">
	<section class="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80"
				alt="Ischia"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>
		<div
			class="animate-fade-in-up relative z-10 container mx-auto px-4 py-32 text-center text-white"
		>
			<h1 class="heading-serif mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">Ischia</h1>
			<p class="text-xl font-light text-white/90 sm:text-2xl">Island of Thermal Spas</p>
		</div>
	</section>

	<section class="relative bg-white py-32">
		<div class="container mx-auto max-w-4xl px-4">
			<div class="animate-fade-in-up">
				<div class="mb-12 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-(--azure)/20 bg-(--azure)/10 px-4 py-2"
					>
						<Sparkles class="h-4 w-4 text-(--azure)" />
						<span class="text-sm font-medium text-(--charcoal)">Wellness Paradise</span>
					</div>
				</div>
				<p class="text-center text-lg leading-relaxed text-gray-600">
					Ischia is a volcanic island renowned for its natural thermal springs, beautiful beaches,
					and lush landscapes. Larger and less crowded than Capri, it offers a perfect blend of
					relaxation, natural beauty, and authentic Italian culture.
				</p>
			</div>
		</div>
	</section>

	<section class="relative bg-(--cream) py-32">
		<div class="container mx-auto px-4">
			<div class="scroll-reveal mb-20 text-center">
				<h2 class="heading-serif mb-6 text-4xl font-bold text-(--deep-azure) sm:text-5xl">
					Top Experiences
				</h2>
			</div>

			<div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
				{#each [{ title: 'Thermal Parks', description: 'Poseidon Gardens and Negombo - natural hot springs and pools', icon: Sparkles }, { title: 'Aragonese Castle', description: 'Medieval fortress on islet connected by bridge', icon: Mountain }, { title: 'Maronti Beach', description: 'Long sandy beach with natural hot springs in the sand', icon: Waves }] as experience, index}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<Card
							class="h-full overflow-hidden border border-(--sand) bg-white transition-all duration-300 hover:border-(--azure) hover:shadow-lg"
						>
							<CardContent class="p-8 text-center">
								<div
									class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--azure) shadow-lg"
								>
									<svelte:component this={experience.icon} class="h-8 w-8 text-white" />
								</div>
								<h3 class="mb-3 text-xl font-bold text-(--charcoal)">
									{experience.title}
								</h3>
								<p class="leading-relaxed text-gray-600">{experience.description}</p>
							</CardContent>
						</Card>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-20 text-center">
					<h2 class="heading-serif mb-6 text-4xl font-bold text-(--deep-azure) sm:text-5xl">
						How to Get There
					</h2>
				</div>

				<div class="scroll-reveal">
					<Card class="overflow-hidden border border-(--sand) bg-white shadow-sm">
						<CardContent class="p-10">
							<div class="mb-8 flex items-start space-x-6">
								<div
									class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-(--azure) shadow-md"
								>
									<Ship class="h-8 w-8 text-white" />
								</div>
								<div class="grow">
									<h3 class="mb-4 text-2xl font-bold text-(--charcoal)">From Sorrento</h3>
									<div class="space-y-4 text-gray-600">
										<p>Ferry to Naples (1 hr), then ferry to Ischia (50 min)</p>
										<p>Total journey: ~2 hours | Cost: €30-40 round trip</p>
										<p>Summer season may have direct ferries - check schedules</p>
									</div>
								</div>
							</div>

							<div class="rounded-xl bg-(--cream) p-6">
								<h4 class="mb-4 flex items-center text-lg font-bold text-(--charcoal)">
									<Ship class="mr-2 h-5 w-5 text-(--azure)" />
									Insider Tips
								</h4>
								<ul class="space-y-3">
									{#each ['Book thermal park tickets online for better prices', 'Bring swimwear and towel for thermal experiences', 'Consider overnight stay to fully explore the island', 'Rent a scooter to explore beaches and villages'] as tip}
										<li class="flex items-start space-x-3 text-sm text-gray-600">
											<div class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--azure)"></div>
											<span>{tip}</span>
										</li>
									{/each}
								</ul>
							</div>
						</CardContent>
					</Card>

					<div class="mt-10 text-center">
						<Button
							size="lg"
							class="bg-(--azure) px-10 py-6 text-lg text-white transition-all duration-300 hover:bg-(--deep-azure) hover:shadow-lg"
						>
							<a href="/contact" class="flex items-center space-x-2">
								<span>Book Ischia Thermal Experience</span>
								<ArrowRight class="h-5 w-5" />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
