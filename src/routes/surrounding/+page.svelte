<script lang="ts">
	import type { Destination } from '$lib/sanity/queries';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Intro from '$lib/components/surrounding/Intro.svelte';
	import DestinationsGrid from '$lib/components/surrounding/DestinationsGrid.svelte';
	import CTA from '$lib/components/surrounding/CTA.svelte';
	import { Waves } from '@lucide/svelte';

	interface Props {
		data: {
			destinations: Destination[];
		};
	}

	let { data }: Props = $props();

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

<svelte:head>
	<title>Surrounding Area - Capri, Amalfi Coast, Naples & More | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Explore destinations near Sorrento - Capri, the Amalfi Coast, Naples, Procida, Ischia, and Salerno. Complete travel guides for day trips."
	/>
</svelte:head>

<div class="-mt-24">
	<PageHeader
		title="Explore the Surrounding Area"
		subtitle="World-renowned destinations just a short journey from Sorrento"
		image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
	/>

	<Intro />

	<DestinationsGrid {destinations} />

	<CTA />
</div>
