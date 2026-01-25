<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { StayPage } from '$lib/sanity/queries';

	interface Props {
		pageData?: StayPage | null;
	}

	let { pageData = null }: Props = $props();

	const introText =
		pageData?.introText ||
		"Sorrento offers accommodations to suit every style and budget. Whether you seek five-star luxury with infinity pools and Michelin-starred restaurants, intimate boutique hotels with personalized service, or charming B&Bs where you'll feel like part of the family, you'll find your perfect home away from home.";
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
