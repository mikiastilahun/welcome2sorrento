<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative overflow-hidden bg-[color:var(--cream)] py-32">
	<div class="scroll-reveal container mx-auto px-4 text-center sm:px-6 lg:px-8" use:reveal>
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-6 text-4xl font-bold text-[color:var(--charcoal)] sm:text-5xl">
				Never Miss a Post
			</h2>
			<p class="mb-10 text-xl text-[color:var(--stone)]">
				Subscribe to our newsletter for the latest travel tips, local insights, and exclusive guides
			</p>
			<a href="/#newsletter">
				<Button
					size="lg"
					class="group bg-[color:var(--azure)] px-10 py-7 text-lg text-white transition-all duration-200 ease-out hover:bg-[color:var(--deep-azure)] hover:shadow-lg hover:brightness-110"
				>
					<div class="flex items-center space-x-2">
						<span>Subscribe Now</span>
						<ArrowRight class="h-5 w-5" />
					</div>
				</Button>
			</a>
		</div>
	</div>
</section>
