<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Intro from '$lib/components/eat/Intro.svelte';
	import CategoryFilter from '$lib/components/eat/CategoryFilter.svelte';
	import RestaurantGrid from '$lib/components/eat/RestaurantGrid.svelte';
	import LocalSpecialties from '$lib/components/eat/LocalSpecialties.svelte';
	import DiningTips from '$lib/components/eat/DiningTips.svelte';
	import CTA from '$lib/components/eat/CTA.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import FeaturedSection from '$lib/components/FeaturedSection.svelte';
	import type { Restaurant, EatPage } from '$lib/sanity/queries';
	import { priceRangeToNumber, toPlainText } from '$lib/utils';

	interface Props {
		data: {
			restaurants: Restaurant[];
			pageData: EatPage | null;
		};
	}

	let { data }: Props = $props();
	const pageData = data.pageData;

	// SEO from CMS
	const seoTitle =
		pageData?.seo?.metaTitle ||
		'Where to Eat in Sorrento - Best Restaurants & Trattorias | Welcome2Sorrento';
	const seoDescription =
		pageData?.seo?.metaDescription ||
		'Discover the best restaurants in Sorrento - from Michelin-starred fine dining to authentic family trattorias and fresh seafood.';
	const seoKeywords = pageData?.seo?.keywords || '';

	// Header from CMS
	const headerTitle = pageData?.header?.heading || 'Where to Eat in Sorrento';
	const headerSubtitle =
		pageData?.header?.subheading ||
		'From Michelin stars to family trattorias, discover culinary excellence';
	const headerImage = pageData?.header?.heroImage?.asset?.url || '';

	// Get unique categories and locations from restaurants
	const allCategories = $derived(
		Array.from(new Set(data.restaurants.map((r) => r.category))).sort()
	);
	const categories = $derived(['All', ...allCategories]);

	const allLocations = $derived(
		Array.from(new Set(data.restaurants.map((r) => r.location).filter(Boolean))).sort()
	);

	let selectedCategory = $state('All');
	let selectedLocation = $state('All');
	let sortBy = $state('default');

	const filteredRestaurants = $derived(() => {
		let restaurants = data.restaurants.filter((r) => {
			const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
			const matchesLocation =
				selectedLocation === 'All' || (r.location && r.location === selectedLocation);
			return matchesCategory && matchesLocation;
		});

		// Apply sorting
		if (sortBy === 'price-asc') {
			restaurants = [...restaurants].sort(
				(a, b) => priceRangeToNumber(a.priceRange) - priceRangeToNumber(b.priceRange)
			);
		} else if (sortBy === 'price-desc') {
			restaurants = [...restaurants].sort(
				(a, b) => priceRangeToNumber(b.priceRange) - priceRangeToNumber(a.priceRange)
			);
		}

		return restaurants;
	});

	// Featured restaurants
	const featuredItems = $derived(
		data.restaurants
			.filter((r) => r.featured)
			.map((r) => ({
				name: r.name,
				description: toPlainText(r.description),
				image:
					r.mainImage?.asset?.url ||
					'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
				priceRange: r.priceRange,
				category: r.category
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
		title="Featured Restaurants"
		subtitle="Our top picks"
		items={featuredItems}
		badgeColor="bg-(--coral)"
	/>

	<LocalSpecialties {pageData} />

	<CategoryFilter
		{categories}
		bind:selectedCategory
		locations={allLocations}
		bind:selectedLocation
		bind:sortBy
	/>

	<RestaurantGrid filteredRestaurants={filteredRestaurants()} {selectedCategory} />

	<DiningTips {pageData} />

	<CTA {pageData} />
</div>
