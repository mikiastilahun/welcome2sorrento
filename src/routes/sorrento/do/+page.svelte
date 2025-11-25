<script lang="ts">
	import type { Activity } from '$lib/sanity/queries';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Intro from '$lib/components/do/Intro.svelte';
	import CategoryFilter from '$lib/components/do/CategoryFilter.svelte';
	import ActivityGrid from '$lib/components/do/ActivityGrid.svelte';
	import QuickGuide from '$lib/components/do/QuickGuide.svelte';
	import CTA from '$lib/components/do/CTA.svelte';

	interface Props {
		data: {
			activities: Activity[];
		};
	}

	let { data }: Props = $props();

	// Fallback activities if CMS is not populated yet
	const fallbackActivities = [
		{
			name: 'Boat Tour to Capri',
			category: 'Water Activities',
			duration: 'Full Day',
			image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
			description:
				'Discover the legendary Blue Grotto and circumnavigate the stunning island of Capri.',
			highlights: ['Blue Grotto', 'Faraglioni Rocks', 'Marina Piccola'],
			bestFor: 'Everyone',
			gradient: 'from-blue-500 to-cyan-500'
		},
		{
			name: 'Cooking Class Experience',
			category: 'Culinary',
			duration: '3-4 hours',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
			description: 'Learn to make authentic Italian pasta, pizza, and limoncello with local chefs.',
			highlights: ['Hands-on Cooking', 'Local Recipes', 'Wine Tasting'],
			bestFor: 'Food Lovers',
			gradient: 'from-orange-500 to-red-500'
		},
		{
			name: 'Marina Grande Beach',
			category: 'Beaches',
			duration: 'Half Day',
			image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
			description:
				'Relax at the charming fishing village beach with crystal-clear waters and local restaurants.',
			highlights: ['Beach Clubs', 'Restaurants', 'Swimming'],
			bestFor: 'Beach Lovers',
			gradient: 'from-teal-500 to-green-500'
		},
		{
			name: 'Walk to Punta Campanella',
			category: 'Nature & Hiking',
			duration: '4-5 hours',
			image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
			description:
				'Scenic coastal hike through lemon groves with breathtaking views of the peninsula.',
			highlights: ['Coastal Views', 'Lemon Groves', 'Ancient Ruins'],
			bestFor: 'Active Travelers',
			gradient: 'from-green-500 to-emerald-500'
		},
		{
			name: 'Pompeii & Vesuvius Day Trip',
			category: 'Historical',
			duration: 'Full Day',
			image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80',
			description: 'Explore the ancient ruins of Pompeii and hike to the crater of Mount Vesuvius.',
			highlights: ['Ancient Ruins', 'Volcano Crater', 'Archaeological Site'],
			bestFor: 'History Buffs',
			gradient: 'from-red-500 to-orange-500'
		},
		{
			name: 'Limoncello Tasting Tour',
			category: 'Culinary',
			duration: '2-3 hours',
			image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800&q=80',
			description: 'Visit lemon groves and learn the traditional process of making limoncello.',
			highlights: ['Lemon Groves', 'Tasting Session', 'Local Product'],
			bestFor: 'Everyone',
			gradient: 'from-yellow-500 to-amber-500'
		},
		{
			name: 'Sorrento Cathedral Tour',
			category: 'Cultural',
			duration: '1-2 hours',
			image: 'https://images.unsplash.com/photo-1528187975002-e0f6eb462096?w=800&q=80',
			description: 'Discover the historic cathedral and explore the charming old town streets.',
			highlights: ['Historic Architecture', 'Art & Frescoes', 'Old Town'],
			bestFor: 'Culture Enthusiasts',
			gradient: 'from-purple-500 to-pink-500'
		},
		{
			name: 'Shopping in Corso Italia',
			category: 'Shopping',
			duration: '2-3 hours',
			image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
			description:
				'Browse local artisan shops for ceramics, limoncello, and handcrafted leather goods.',
			highlights: ['Local Crafts', 'Ceramics', 'Limoncello'],
			bestFor: 'Shoppers',
			gradient: 'from-pink-500 to-rose-500'
		},
		{
			name: 'Sunset at Villa Comunale',
			category: 'Views & Relaxation',
			duration: '1-2 hours',
			image: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=800&q=80',
			description: 'Watch the sunset over the Bay of Naples from this beautiful clifftop park.',
			highlights: ['Panoramic Views', 'Gardens', 'Photography'],
			bestFor: 'Photographers',
			gradient: 'from-indigo-500 to-purple-500'
		}
	];

	// Use CMS activities if available, otherwise use fallback
	const displayActivities = data.activities.length > 0 ? data.activities : fallbackActivities;

	// Extract unique categories from activities
	const categoriesFromData = Array.from(
		new Set(displayActivities.map((a: any) => a.category).filter(Boolean))
	).sort();

	const categories = ['All', ...categoriesFromData];
	let selectedCategory = $state('All');

	const filteredActivities = $derived(
		selectedCategory === 'All'
			? displayActivities
			: displayActivities.filter((a: any) => a.category === selectedCategory)
	);
</script>

<svelte:head>
	<title>Things to Do in Sorrento - Activities & Attractions | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Discover the best activities and attractions in Sorrento - boat tours, cooking classes, beaches, hiking, and more."
	/>
</svelte:head>

<div class="-mt-24">
	<PageHeader
		title="Things to Do in Sorrento"
		subtitle="Unforgettable experiences and adventures await"
		image="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1920&q=80"
	/>

	<Intro />

	<CategoryFilter {categories} bind:selectedCategory />

	<ActivityGrid {filteredActivities} />

	<QuickGuide />

	<CTA />
</div>
