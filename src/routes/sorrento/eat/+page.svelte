<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Intro from '$lib/components/eat/Intro.svelte';
	import CategoryFilter from '$lib/components/eat/CategoryFilter.svelte';
	import RestaurantGrid from '$lib/components/eat/RestaurantGrid.svelte';
	import LocalSpecialties from '$lib/components/eat/LocalSpecialties.svelte';
	import DiningTips from '$lib/components/eat/DiningTips.svelte';
	import CTA from '$lib/components/eat/CTA.svelte';
	import type { Restaurant } from '$lib/sanity/queries';

	interface Props {
		data: {
			restaurants: Restaurant[];
		};
	}

	let { data }: Props = $props();

	// Get unique categories from restaurants
	const allCategories = $derived(
		Array.from(new Set(data.restaurants.map((r) => r.category))).sort()
	);
	const categories = $derived(['All', ...allCategories]);

	let selectedCategory = $state('All');

	const filteredRestaurants = $derived(
		selectedCategory === 'All'
			? data.restaurants
			: data.restaurants.filter((r) => r.category === selectedCategory)
	);
</script>

<svelte:head>
	<title>Where to Eat in Sorrento - Best Restaurants & Trattorias | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Discover the best restaurants in Sorrento - from Michelin-starred fine dining to authentic family trattorias and fresh seafood."
	/>
</svelte:head>

<div class="-mt-24">
	<PageHeader
		title="Where to Eat in Sorrento"
		subtitle="From Michelin stars to family trattorias, discover culinary excellence"
		image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
		label="Mangiare"
	/>

	<Intro />

	<CategoryFilter {categories} bind:selectedCategory />

	<RestaurantGrid {filteredRestaurants} {selectedCategory} />

	<LocalSpecialties />

	<DiningTips />

	<CTA />
</div>
