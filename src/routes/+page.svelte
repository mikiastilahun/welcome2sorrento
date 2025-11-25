<script lang="ts">
	import type {
		BlogPost,
		Destination,
		Testimonial,
		LocalSpecialty,
		SiteSettings
	} from '$lib/sanity/queries';
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Intro from '$lib/components/home/Intro.svelte';
	import FeaturedSections from '$lib/components/home/FeaturedSections.svelte';
	import Destinations from '$lib/components/home/Destinations.svelte';
	import Testimonials from '$lib/components/home/Testimonials.svelte';
	import Newsletter from '$lib/components/home/Newsletter.svelte';
	import CTA from '$lib/components/home/CTA.svelte';

	interface Props {
		data: {
			featuredPosts: BlogPost[];
			featuredDestinations: Destination[];
			testimonials: Testimonial[];
			localSpecialties: LocalSpecialty[];
			siteSettings: SiteSettings | null;
		};
	}

	let { data }: Props = $props();
</script>

<SEO
	title="Welcome2Sorrento - Your Ultimate Guide to Sorrento & Amalfi Coast"
	description="Discover the magic of Sorrento and the breathtaking Amalfi Coast. Find the best restaurants, hotels, activities, and hidden gems. Expert travel guide by locals."
	keywords="Sorrento travel guide, Amalfi Coast, Italy tourism, Sorrento restaurants, Sorrento hotels, things to do Sorrento, Capri day trips, Naples to Sorrento"
	type="website"
/>

<svelte:head>
	<title>Welcome2Sorrento - Your Ultimate Guide to the Jewel of the Amalfi Coast</title>
</svelte:head>

<div class="relative -mt-24">
	<Hero />
	<Intro />
	<FeaturedSections siteSettings={data.siteSettings} />
	<Destinations featuredDestinations={data.featuredDestinations} />
	<Testimonials testimonials={data.testimonials} />
	<Newsletter />
	<CTA />
</div>
