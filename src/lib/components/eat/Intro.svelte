<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { EatPage } from '$lib/sanity/queries';

	interface Props {
		pageData?: EatPage | null;
	}

	let { pageData = null }: Props = $props();

	const introText =
		pageData?.introText ||
		"Sorrento's culinary scene blends centuries of tradition with contemporary innovation. From fresh seafood caught in the Bay of Naples to pasta made by hand in family kitchens, every meal tells a story of passion, quality, and authentic Italian flavor.";
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
