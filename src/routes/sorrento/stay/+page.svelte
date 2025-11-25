<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Intro from '$lib/components/stay/Intro.svelte';
	import CategoryFilter from '$lib/components/stay/CategoryFilter.svelte';
	import AccommodationGrid from '$lib/components/stay/AccommodationGrid.svelte';
	import NeighborhoodGuide from '$lib/components/stay/NeighborhoodGuide.svelte';
	import BookingTips from '$lib/components/stay/BookingTips.svelte';
	import CTA from '$lib/components/stay/CTA.svelte';
	import type { Accommodation } from '$lib/sanity/queries';

	interface Props {
		data: {
			accommodations: Accommodation[];
		};
	}

	let { data }: Props = $props();

	// Get unique types from accommodations
	const allTypes = $derived(Array.from(new Set(data.accommodations.map((a) => a.type))).sort());
	const types = $derived(['All', ...allTypes]);

	let selectedType = $state('All');

	const filteredAccommodations = $derived(
		selectedType === 'All'
			? data.accommodations
			: data.accommodations.filter((a) => a.type === selectedType)
	);
</script>

<svelte:head>
	<title>Where to Stay in Sorrento - Hotels, B&Bs & Apartments | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Find your perfect accommodation in Sorrento - luxury hotels, boutique B&Bs, and charming apartments with stunning views."
	/>
</svelte:head>

<div class="-mt-24">
	<PageHeader
		title="Where to Stay in Sorrento"
		subtitle="From luxury clifftop hotels to charming family-run B&Bs"
		image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
	/>

	<Intro />

	<CategoryFilter {types} bind:selectedType />

	<AccommodationGrid {filteredAccommodations} {selectedType} />

	<NeighborhoodGuide />

	<BookingTips />

	<CTA />
</div>
