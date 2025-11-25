<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from '@lucide/svelte';
</script>

<section class="relative flex h-screen items-center justify-center overflow-hidden pt-24">
	<!-- Single Background Image -->
	<div class="absolute inset-0 z-0">
		<img
			src="https://welcome2sorrento.com/wp-content/uploads/2024/12/Sorrento-gregory-smirnov-2-scaled.jpg"
			alt="Sorrento coastline"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-black/50"></div>
	</div>

	<!-- Hero Content - Centered -->
	<div class="container relative z-10 mx-auto px-4 text-center text-white sm:px-6 lg:px-8">
		<div class="animate-fade-in-up">
			<h1 class="heading-serif mb-6 text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
				Discover Sorrento
			</h1>

			<p class="mx-auto mb-10 max-w-2xl text-lg font-light text-white/95 sm:text-xl lg:text-2xl">
				Experience the magic of Italy's most enchanting coastal paradise
			</p>

			<a href="#explore">
				<Button
					size="lg"
					class="cursor-pointer bg-(--azure) px-8 py-6 text-lg transition-all duration-200 ease-out hover:bg-(--deep-azure) hover:shadow-lg hover:brightness-110"
				>
					<div class="flex items-center space-x-2">
						<span>Explore Sorrento</span>
						<ArrowRight
							class="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
						/>
					</div>
				</Button>
			</a>
		</div>
	</div>
</section>

