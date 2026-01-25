<script lang="ts">
	import type { Destination, SurroundingPage } from '$lib/sanity/queries';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Intro from '$lib/components/surrounding/Intro.svelte';
	import DestinationsGrid from '$lib/components/surrounding/DestinationsGrid.svelte';
	import CTA from '$lib/components/surrounding/CTA.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { Waves } from '@lucide/svelte';

	interface Props {
		data: {
			destinations: Destination[];
			pageData: SurroundingPage | null;
		};
	}

	let { data }: Props = $props();
	const pageData = data.pageData;

	// SEO from CMS
	const seoTitle =
		pageData?.seo?.metaTitle ||
		'Surrounding Area - Capri, Amalfi Coast, Naples & More | Welcome2Sorrento';
	const seoDescription =
		pageData?.seo?.metaDescription ||
		'Explore destinations near Sorrento - Capri, the Amalfi Coast, Naples, Procida, Ischia, and Salerno. Complete travel guides for day trips.';
	const seoKeywords = pageData?.seo?.keywords || '';

	// Header from CMS
	const headerTitle = pageData?.header?.heading || 'Explore the Surrounding Area';
	const headerSubtitle =
		pageData?.header?.subheading ||
		'World-renowned destinations just a short journey from Sorrento';
	const headerImage = pageData?.header?.heroImage?.asset?.url || '';

	// Map CMS destinations to display format
	const cmsDestinations = data.destinations.map((dest) => ({
		name: dest.name,
		tagline: dest.subtitle || '',
		image: dest.cardImage?.asset?.url || '',
		description: dest.shortDescription || '',
		highlights: dest.attractions?.slice(0, 4).map((a) => a.name) || [],
		link: `/surrounding/${dest.slug.current}`,
		distance: '',
		travelTime: '',
		icon: Waves,
		gradient: 'from-blue-500 to-cyan-500'
	}));

	const destinations = cmsDestinations;
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

	<DestinationsGrid {destinations} />

	<CTA {pageData} />
</div>
