<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="texture-grain relative bg-[var(--warm-white)] py-16">
	<!-- Decorative tile border at top -->
	<div class="absolute top-0 right-0 left-0">
		<div class="mx-auto max-w-4xl px-4">
			<div class="border-tile-decorative"></div>
		</div>
	</div>

	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-4xl text-center" use:reveal>
			<p class="text-xl leading-relaxed text-[var(--stone)]">
				Sorrento's culinary scene blends centuries of tradition with contemporary innovation. From
				fresh seafood caught in the Bay of Naples to pasta made by hand in family kitchens, every
				meal tells a story of passion, quality, and authentic Italian flavor.
			</p>

			<!-- Decorative divider -->
			<div class="mt-8 flex items-center justify-center gap-4">
				<div class="h-px w-16 bg-gradient-to-r from-transparent to-[var(--terracotta)]"></div>
				<div class="h-2 w-2 rotate-45 bg-[var(--terracotta)]"></div>
				<div class="h-px w-16 bg-gradient-to-l from-transparent to-[var(--terracotta)]"></div>
			</div>
		</div>
	</div>
</section>
