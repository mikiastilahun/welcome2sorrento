<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { SiteSettings } from '$lib/sanity/queries';

	interface Props {
		siteSettings: SiteSettings | null;
	}

	let { siteSettings }: Props = $props();
</script>

<section class="bg-[var(--warm-white)] py-20">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<!-- Left Column - Heading -->
			<div class="scroll-reveal" use:reveal>
				<h2
					class="heading-serif text-4xl font-bold leading-tight text-[var(--charcoal)] sm:text-5xl lg:text-6xl"
				>
					Your guide to<br />
					<span class="text-[var(--charcoal)]">Sorrento, Italy</span>
				</h2>
			</div>

			<!-- Right Column - Content with left border -->
			<div class="scroll-reveal" style="transition-delay: 100ms" use:reveal>
				<div class="border-l-4 border-[var(--olive)] pl-6 lg:pl-8">
					<h3 class="heading-serif mb-6 text-2xl font-semibold text-[var(--charcoal)] sm:text-3xl">
						Welcome to Sorrento
					</h3>

					<div class="space-y-4 text-lg leading-relaxed text-[var(--charcoal)]">
						<p>
							This is a free guide to Sorrento created and maintained by an Italian/British couple
							who love the Sorrento Peninsula and hope that you will too!
						</p>

						<p>
							Before you start planning your trip, we recommend that you read our short
							<a
								href="/about"
								class="font-medium text-[var(--charcoal)] underline decoration-2 underline-offset-2 transition-colors hover:text-[var(--azure)]"
								>introduction to Sorrento</a
							>
							which provides a brief overview of the Peninsula and what you can expect from a holiday
							in Sorrento.
						</p>

						<p>
							We maintain this travel guide for free and we don't sell hotels or tours. We do offer
							a restaurant/beach booking service for a fixed fee,
							<a
								href="/about#services"
								class="font-medium text-[var(--charcoal)] underline decoration-2 underline-offset-2 transition-colors hover:text-[var(--azure)]"
								>read more about that here</a
							>.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
