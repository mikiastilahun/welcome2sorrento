<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { DoPage } from '$lib/sanity/queries';

	interface Props {
		pageData?: DoPage | null;
	}

	let { pageData = null }: Props = $props();

	const introText =
		pageData?.introText ||
		'From exploring ancient ruins to sailing crystal-clear waters, cooking authentic Italian cuisine to hiking coastal trails through fragrant lemon groves, Sorrento offers experiences that create memories to last a lifetime. Discover activities perfect for every interest and pace.';
</script>

<section class="bg-[var(--warm-white)] py-12">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-3xl text-center" use:reveal>
			<p class="text-lg leading-relaxed text-[var(--stone)]">
				{introText}
			</p>
		</div>
	</div>
</section>
