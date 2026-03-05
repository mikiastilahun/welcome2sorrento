<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Intro from '$lib/components/stay/Intro.svelte';
	import CategoryFilter from '$lib/components/stay/CategoryFilter.svelte';
	import AccommodationGrid from '$lib/components/stay/AccommodationGrid.svelte';
	import NeighborhoodGuide from '$lib/components/stay/NeighborhoodGuide.svelte';
	import BookingTips from '$lib/components/stay/BookingTips.svelte';
	import CTA from '$lib/components/stay/CTA.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import FeaturedSection from '$lib/components/FeaturedSection.svelte';
	import type { Accommodation, StayPage } from '$lib/sanity/queries';
	import { priceRangeToNumber, toPlainText } from '$lib/utils';

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

	// Get unique types and locations from accommodations
	const allTypes = $derived(Array.from(new Set(data.accommodations.map((a) => a.type))).sort());
	const types = $derived(['All', ...allTypes]);

	const allLocations = $derived(
		Array.from(new Set(data.accommodations.map((a) => a.location).filter(Boolean))).sort()
	);

	let selectedType = $state('All');
	let selectedLocation = $state('All');
	let sortBy = $state('default');

	const filteredAccommodations = $derived(() => {
		let accommodations = data.accommodations.filter((a) => {
			const matchesType = selectedType === 'All' || a.type === selectedType;
			const matchesLocation =
				selectedLocation === 'All' || (a.location && a.location === selectedLocation);
			return matchesType && matchesLocation;
		});

		// Apply sorting
		if (sortBy === 'price-asc') {
			accommodations = [...accommodations].sort(
				(a, b) => priceRangeToNumber(a.priceRange) - priceRangeToNumber(b.priceRange)
			);
		} else if (sortBy === 'price-desc') {
			accommodations = [...accommodations].sort(
				(a, b) => priceRangeToNumber(b.priceRange) - priceRangeToNumber(a.priceRange)
			);
		}

		return accommodations;
	});

	// Featured accommodations
	const featuredItems = $derived(
		data.accommodations
			.filter((a) => a.featured)
			.map((a) => ({
				name: a.name,
				description: toPlainText(a.description),
				image:
					a.mainImage?.asset?.url ||
					'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
				priceRange: a.priceRange,
				type: a.type
			}))
	);
</script>

<SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} />

<svelte:head>
	<title>{seoTitle}</title>
</svelte:head>

<div class={headerImage ? '-mt-24' : ''}>
	{#if headerImage}
		<PageHeader title={headerTitle} subtitle={headerSubtitle} image={headerImage} />
	{/if}

	<Intro {pageData} />

	<FeaturedSection
		title="Featured Accommodations"
		subtitle="Our top picks"
		items={featuredItems}
		badgeColor="bg-(--azure)"
	/>

	<NeighborhoodGuide {pageData} />

	<CategoryFilter
		{types}
		bind:selectedType
		locations={allLocations}
		bind:selectedLocation
		bind:sortBy
	/>

	<AccommodationGrid filteredAccommodations={filteredAccommodations()} {selectedType} />

	<BookingTips {pageData} />

	<CTA {pageData} />
</div>
