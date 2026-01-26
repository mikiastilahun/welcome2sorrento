<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Intro from '$lib/components/stay/Intro.svelte';
	import CategoryFilter from '$lib/components/stay/CategoryFilter.svelte';
	import AccommodationGrid from '$lib/components/stay/AccommodationGrid.svelte';
	import NeighborhoodGuide from '$lib/components/stay/NeighborhoodGuide.svelte';
	import BookingTips from '$lib/components/stay/BookingTips.svelte';
	import CTA from '$lib/components/stay/CTA.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import type { Accommodation, StayPage } from '$lib/sanity/queries';

	interface Props {
		data: {
			accommodations: Accommodation[];
			pageData: StayPage | null;
		};
	}

	let { data }: Props = $props();
	const pageData = data.pageData;

	// SEO from CMS
	const seoTitle =
		pageData?.seo?.metaTitle ||
		'Where to Stay in Sorrento - Hotels, B&Bs & Apartments | Welcome2Sorrento';
	const seoDescription =
		pageData?.seo?.metaDescription ||
		'Find your perfect accommodation in Sorrento - luxury hotels, boutique B&Bs, and charming apartments with stunning views.';
	const seoKeywords = pageData?.seo?.keywords || '';

	// Header from CMS
	const headerTitle = pageData?.header?.heading || 'Where to Stay in Sorrento';
	const headerSubtitle =
		pageData?.header?.subheading || 'From luxury clifftop hotels to charming family-run B&Bs';
	const headerImage = pageData?.header?.heroImage?.asset?.url || '';

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

<SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} />

<svelte:head>
	<title>{seoTitle}</title>
</svelte:head>

<div class="-mt-24">
	{#if headerImage}
		<PageHeader title={headerTitle} subtitle={headerSubtitle} image={headerImage} />
	{/if}

	<Intro {pageData} />

	<NeighborhoodGuide {pageData} />

	<CategoryFilter {types} bind:selectedType />

	<AccommodationGrid {filteredAccommodations} {selectedType} />

	<BookingTips {pageData} />

	<CTA {pageData} />
</div>
