<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="texture-grain relative bg-[var(--warm-white)] py-20">
	<!-- Decorative tile border at top -->
	<div class="absolute top-0 right-0 left-0">
		<div class="mx-auto max-w-4xl px-4">
			<div class="border-tile-decorative"></div>
		</div>
	</div>

	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-4xl" use:reveal>
			<div class="text-center">
				<!-- Section label -->
				<div class="mb-4 flex items-center justify-center gap-3">
					<div class="h-px w-8 bg-[var(--terracotta)]"></div>
					<span class="font-serif text-sm tracking-[0.2em] text-[var(--terracotta)] uppercase">Day Trips</span>
					<div class="h-px w-8 bg-[var(--terracotta)]"></div>
				</div>
				
				<h2 class="heading-serif mb-6 text-3xl font-semibold text-[var(--charcoal)] sm:text-4xl">
					Your Perfect <span class="text-[var(--azure)]">Base</span>
				</h2>
				<p class="text-lg leading-relaxed text-[var(--stone)]">
					Sorrento's prime location makes it the perfect base for exploring some of Italy's most
					iconic destinations. From legendary islands to dramatic coastal drives, ancient ruins to
					vibrant cities, each destination offers unique experiences and unforgettable memories.
				</p>

				<!-- Decorative divider -->
				<div class="mt-8 flex items-center justify-center gap-4">
					<div class="h-px w-16 bg-gradient-to-r from-transparent to-[var(--terracotta)]"></div>
					<div class="h-2 w-2 rotate-45 bg-[var(--terracotta)]"></div>
					<div class="h-px w-16 bg-gradient-to-l from-transparent to-[var(--terracotta)]"></div>
				</div>
			</div>
		</div>
	</div>
</section>
