<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight, Mail } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative overflow-hidden py-24">
	<div class="absolute inset-0">
		<img
			src="https://welcome2sorrento.com/wp-content/uploads/2024/12/Meta-ricky-johnson-scaled.jpg"
			alt="Sorrento"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-black/70"></div>
	</div>

	<div class="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-3xl text-white" use:reveal>
			<h2 class="heading-serif mb-6 text-4xl font-semibold sm:text-5xl">
				Ready for Your Adventure?
			</h2>
			<p class="mx-auto mb-10 max-w-2xl text-lg font-light text-white/95 sm:text-xl">
				Let us help you plan the perfect trip with our personalized booking service
			</p>

			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a href="/about#services">
					<Button
						size="lg"
						class="group bg-white px-10 py-6 text-lg text-(--charcoal) transition-all duration-200 ease-out hover:bg-(--cream) hover:shadow-lg"
					>
						<div class="flex items-center space-x-2">
							<span>Our Services</span>
							<ArrowRight class="h-5 w-5" />
						</div>
					</Button>
				</a>
				<a href="/contact">
					<Button
						size="lg"
						variant="outline"
						class="border-2 border-white bg-transparent px-10 py-6 text-lg text-white transition-all duration-200 ease-out hover:bg-white hover:text-(--charcoal) hover:shadow-lg"
					>
						<div class="flex items-center space-x-2">
							<Mail class="h-5 w-5" />
							<span>Get in Touch</span>
						</div>
					</Button>
				</a>
			</div>
		</div>
	</div>
</section>

