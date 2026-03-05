<script lang="ts">
	import type {
		BlogPost,
		Destination,
		LocalSpecialty,
		SiteSettings,
		Restaurant,
		Accommodation,
		Activity
	} from '$lib/sanity/queries';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Intro from '$lib/components/home/Intro.svelte';
	import FeaturedSections from '$lib/components/home/FeaturedSections.svelte';
	import FeaturedRecommendations from '$lib/components/home/FeaturedRecommendations.svelte';
	import Destinations from '$lib/components/home/Destinations.svelte';
	import AboutWelcome from '$lib/components/home/AboutWelcome.svelte';
	import Newsletter from '$lib/components/home/Newsletter.svelte';
	import CTA from '$lib/components/home/CTA.svelte';

	interface Props {
		data: {
			featuredPosts: BlogPost[];
			featuredDestinations: Destination[];
			localSpecialties: LocalSpecialty[];
			siteSettings: SiteSettings | null;
			featuredRestaurants: Restaurant[];
			featuredAccommodations: Accommodation[];
			featuredActivities: Activity[];
		};
	}

	let { data }: Props = $props();

	// SEO data from CMS with fallbacks
	const seoTitle =
		data.siteSettings?.homePageSeo?.metaTitle ||
		data.siteSettings?.seo?.metaTitle ||
		'Welcome2Sorrento - Your Ultimate Guide to Sorrento & Amalfi Coast';
	const seoDescription =
		data.siteSettings?.homePageSeo?.metaDescription ||
		data.siteSettings?.seo?.metaDescription ||
		'Discover the magic of Sorrento and the breathtaking Amalfi Coast. Find the best restaurants, hotels, activities, and hidden gems. Expert travel guide by locals.';
	const seoKeywords =
		data.siteSettings?.homePageSeo?.keywords ||
		data.siteSettings?.seo?.keywords ||
		'Sorrento travel guide, Amalfi Coast, Italy tourism, Sorrento restaurants, Sorrento hotels, things to do Sorrento, Capri, Naples to Sorrento';
	const pageTitle = data.siteSettings?.title || 'Welcome2Sorrento';
</script>

<SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} type="website" />

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<div class="relative -mt-24">
	<Hero siteSettings={data.siteSettings} />
	<Intro siteSettings={data.siteSettings} />
	<FeaturedSections siteSettings={data.siteSettings} />
	<FeaturedRecommendations
		featuredRestaurants={data.featuredRestaurants}
		featuredAccommodations={data.featuredAccommodations}
		featuredActivities={data.featuredActivities}
		siteSettings={data.siteSettings}
	/>
	<Destinations featuredDestinations={data.featuredDestinations} siteSettings={data.siteSettings} />
	<AboutWelcome siteSettings={data.siteSettings} />
	<Newsletter siteSettings={data.siteSettings} />
	<CTA siteSettings={data.siteSettings} />
</div>
