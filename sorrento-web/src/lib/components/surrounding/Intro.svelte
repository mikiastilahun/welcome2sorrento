<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { SurroundingPage } from '$lib/sanity/queries';

	interface Props {
		pageData?: SurroundingPage | null;
	}

	let { pageData = null }: Props = $props();

	const introText =
		pageData?.introText ||
		"Sorrento's prime location makes it the perfect base for exploring some of Italy's most iconic destinations. From legendary islands to dramatic coastal drives, ancient ruins to vibrant cities, each destination offers unique experiences and unforgettable memories.";
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
