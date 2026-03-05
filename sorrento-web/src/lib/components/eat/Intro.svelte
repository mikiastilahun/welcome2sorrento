<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import ReadMore from '$lib/components/ReadMore.svelte';
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
			<ReadMore text={introText} maxLength={400} class="text-lg text-[var(--stone)]" />
		</div>
	</div>
</section>
