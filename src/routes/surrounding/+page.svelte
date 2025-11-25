<script lang="ts">
	import type { Destination } from '$lib/sanity/queries';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Intro from '$lib/components/surrounding/Intro.svelte';
	import DestinationsGrid from '$lib/components/surrounding/DestinationsGrid.svelte';
	import TransportationInfo from '$lib/components/surrounding/TransportationInfo.svelte';
	import CTA from '$lib/components/surrounding/CTA.svelte';
	import { Waves, Mountain, Sun, Sparkles, Compass } from '@lucide/svelte';

	interface Props {
		data: {
			destinations: Destination[];
		};
	}

	let { data }: Props = $props();

	// Fallback destinations if CMS is not populated yet
	const fallbackDestinations = [
		{
			name: 'Capri',
			tagline: 'The Jewel of the Mediterranean',
			image: 'https://images.unsplash.com/photo-1566993881472-0e5e8c244e7c?w=1200&q=80',
			description:
				'Legendary island of glamour and natural beauty, home to the famous Blue Grotto, dramatic Faraglioni rocks, and chic Piazzetta.',
			highlights: ['Blue Grotto', 'Gardens of Augustus', 'Villa Jovis', 'Marina Piccola'],
			link: '/surrounding/capri',
			distance: '20 km by ferry',
			travelTime: '20-40 min',
			icon: Waves,
			gradient: 'from-blue-500 to-cyan-500'
		},
		{
			name: 'Amalfi Coast',
			tagline: 'UNESCO World Heritage Wonder',
			image: 'https://images.unsplash.com/photo-1534113414509-0bd4d0ff02a9?w=1200&q=80',
			description:
				'Breathtaking coastal drive featuring picturesque villages like Positano, Amalfi, and Ravello clinging to dramatic cliffs.',
			highlights: ['Positano', 'Amalfi Cathedral', 'Ravello Gardens', 'Path of Gods'],
			link: '/surrounding/amalfi',
			distance: '20-40 km',
			travelTime: '1-1.5 hours',
			icon: Mountain,
			gradient: 'from-purple-500 to-pink-500'
		},
		{
			name: 'Naples',
			tagline: 'Historic Capital of Southern Italy',
			image: 'https://images.unsplash.com/photo-1600875017876-96a047e8d449?w=1200&q=80',
			description:
				'Vibrant city steeped in history, birthplace of pizza, and gateway to Pompeii and Mount Vesuvius.',
			highlights: ['Pompeii', 'Mount Vesuvius', 'Historic Center', 'Pizza Napoletana'],
			link: '/surrounding/naples',
			distance: '50 km',
			travelTime: '1 hour by train',
			icon: Sun,
			gradient: 'from-orange-500 to-red-500'
		},
		{
			name: 'Procida',
			tagline: 'Authentic Island Charm',
			image: 'https://images.unsplash.com/photo-1633859994781-5229a2e46878?w=1200&q=80',
			description:
				'Colorful fishing village and unspoiled island gem, less touristy than Capri with authentic Italian character.',
			highlights: ['Marina Corricella', 'Terra Murata', 'Chiaiolella Beach', 'Local Life'],
			link: '/surrounding/procida',
			distance: '35 km by ferry',
			travelTime: '40 min + 30 min',
			icon: Waves,
			gradient: 'from-teal-500 to-green-500'
		},
		{
			name: 'Ischia',
			tagline: 'Island of Thermal Spas',
			image: 'https://images.unsplash.com/photo-1602002419077-c05bf89d0645?w=1200&q=80',
			description:
				'Volcanic island famous for natural thermal springs, beautiful beaches, and the stunning Aragonese Castle.',
			highlights: ['Thermal Parks', 'Aragonese Castle', 'Maronti Beach', 'Monte Epomeo'],
			link: '/surrounding/ischia',
			distance: '45 km by ferry',
			travelTime: '50 min + 40 min',
			icon: Sparkles,
			gradient: 'from-indigo-500 to-purple-500'
		},
		{
			name: 'Salerno',
			tagline: 'Gateway to Southern Coastline',
			image: 'https://images.unsplash.com/photo-1555992336-fb0d29d8a6e7?w=1200&q=80',
			description:
				'Historic port city with beautiful waterfront promenade, medieval center, and access to Paestum ruins.',
			highlights: ['Lungomare', 'Duomo', 'Paestum Temples', 'Historic Center'],
			link: '/surrounding/salerno',
			distance: '55 km',
			travelTime: '1.5 hours',
			icon: Compass,
			gradient: 'from-pink-500 to-rose-500'
		}
	];

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

	// Use CMS destinations if available, otherwise use fallback
	const destinations = cmsDestinations.length > 0 ? cmsDestinations : fallbackDestinations;
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

	<TransportationInfo />

	<CTA />
</div>
