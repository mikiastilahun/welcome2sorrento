<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import { MapPin, Sparkles, Hotel } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative bg-[var(--warm-white)] py-24" id="explore">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-5xl" use:reveal>
			<div class="mb-16 text-center">
				<h2 class="heading-serif mb-6 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
					Welcome to Sorrento
				</h2>
				<p class="mx-auto max-w-3xl text-lg leading-relaxed text-[var(--stone)] sm:text-xl">
					Nestled atop dramatic cliffs overlooking the Bay of Naples, Sorrento captivates visitors
					with its stunning coastal views, vibrant lemon groves, and warm Italian hospitality.
				</p>
			</div>

			<!-- Feature Cards - Simplified -->
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<Card
					class="border-[var(--sand)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
				>
					<CardContent class="p-6">
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--azure)]"
						>
							<MapPin class="h-6 w-6 text-white" />
						</div>
						<h3 class="mb-2 text-xl font-semibold text-[var(--charcoal)]">Local Insights</h3>
						<p class="leading-relaxed text-[var(--stone)]">
							Authentic recommendations from locals who know every hidden gem and secret spot.
						</p>
					</CardContent>
				</Card>

				<Card
					class="border-[var(--sand)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
				>
					<CardContent class="p-6">
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--azure)]"
						>
							<Sparkles class="h-6 w-6 text-white" />
						</div>
						<h3 class="mb-2 text-xl font-semibold text-[var(--charcoal)]">Hidden Gems</h3>
						<p class="leading-relaxed text-[var(--stone)]">
							Discover breathtaking locations and experiences that most tourists never find.
						</p>
					</CardContent>
				</Card>

				<Card
					class="border-[var(--sand)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
				>
					<CardContent class="p-6">
						<div
							class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--azure)]"
						>
							<Hotel class="h-6 w-6 text-white" />
						</div>
						<h3 class="mb-2 text-xl font-semibold text-[var(--charcoal)]">Expert Curation</h3>
						<p class="leading-relaxed text-[var(--stone)]">
							Carefully selected experiences to ensure your trip is absolutely unforgettable.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</section>

