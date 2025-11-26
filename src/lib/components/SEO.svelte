<script lang="ts">
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config';

	interface Props {
		title?: string;
		description?: string;
		keywords?: string;
		image?: string;
		type?: 'website' | 'article';
		author?: string;
		publishedTime?: string;
		modifiedTime?: string;
	}

	let {
		title = `${siteConfig.name} - Your Ultimate Guide to Sorrento and the Amalfi Coast`,
		description = siteConfig.description,
		keywords = siteConfig.keywords,
		image = siteConfig.ogImage,
		type = 'website',
		author = siteConfig.name,
		publishedTime,
		modifiedTime
	}: Props = $props();

	const siteName = siteConfig.name;
	const twitterHandle = '@welcome2sorrento';

	// Get current URL
	const url = $derived($page.url.href);
	const canonicalUrl = $derived($page.url.origin + $page.url.pathname);

	// Ensure image is absolute URL
	const absoluteImageUrl = $derived(
		image.startsWith('http') ? image : `${$page.url.origin}${image}`
	);
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />

	<!-- Canonical URL -->
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={absoluteImageUrl} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content="en_US" />

	{#if publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}

	{#if modifiedTime}
		<meta property="article:modified_time" content={modifiedTime} />
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={absoluteImageUrl} />
	<meta name="twitter:creator" content={twitterHandle} />
	<meta name="twitter:site" content={twitterHandle} />

	<!-- Additional Meta Tags -->
	<meta name="theme-color" content="#8B5CF6" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-title" content={siteName} />
	<meta name="application-name" content={siteName} />
	<meta name="msapplication-TileColor" content="#8B5CF6" />

	<!-- Geo Tags for Sorrento -->
	<meta name="geo.region" content="IT-72" />
	<meta name="geo.placename" content="Sorrento" />
	<meta name="geo.position" content="40.6263;14.3757" />
	<meta name="ICBM" content="40.6263, 14.3757" />
</svelte:head>
