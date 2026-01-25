<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import { Home, Search, MapPin, ArrowLeft, BookOpen } from '@lucide/svelte';
	import type { ErrorPage } from '$lib/sanity/queries';

	// Get error page data from layout
	const errorPage: ErrorPage | null = $page.data?.errorPage || null;

	// Get the appropriate error content based on status code
	function getErrorContent(status: number) {
		if (status === 404) {
			return {
				heading: errorPage?.error404?.heading || 'Page Not Found',
				message:
					errorPage?.error404?.message ||
					"The page you're looking for seems to have wandered off to explore Capri. Let's get you back on track!"
			};
		} else if (status === 500) {
			return {
				heading: errorPage?.error500?.heading || 'Something Went Wrong',
				message:
					errorPage?.error500?.message ||
					"We're experiencing some technical difficulties. Please try again in a moment."
			};
		}
		return {
			heading: errorPage?.errorDefault?.heading || 'Oops!',
			message:
				errorPage?.errorDefault?.message ||
				"An unexpected error occurred. We're sorry for the inconvenience."
		};
	}

	// Get navigation cards from CMS or use fallbacks
	const defaultNavigationCards = [
		{ label: 'Homepage', href: '/', icon: 'Home', description: 'Start from the beginning' },
		{ label: 'Sorrento Guide', href: '/sorrento', icon: 'MapPin', description: 'Eat, Stay & Do' },
		{
			label: 'Surrounding Area',
			href: '/surrounding',
			icon: 'MapPin',
			description: 'Capri, Amalfi & more'
		},
		{ label: 'Blog', href: '/blog', icon: 'BookOpen', description: 'Travel tips & guides' }
	];

	const navigationCards = errorPage?.navigationCards?.length
		? errorPage.navigationCards
		: defaultNavigationCards;

	const navigationTitle = errorPage?.navigationTitle || 'Where would you like to go?';
	const footerMessage =
		errorPage?.footerMessage ||
		"Lost? We're here to help you navigate Sorrento - both online and in real life!";

	// Icon mapping for CMS icons
	function getIcon(iconName: string | undefined) {
		switch (iconName?.toLowerCase()) {
			case 'home':
				return Home;
			case 'mappin':
			case 'map-pin':
				return MapPin;
			case 'search':
				return Search;
			case 'bookopen':
			case 'book-open':
				return BookOpen;
			default:
				return Home;
		}
	}

	// Color mapping for navigation cards
	const cardColors = [
		'bg-[color:var(--azure)]',
		'bg-[color:var(--terracotta)]',
		'bg-[color:var(--olive)]',
		'bg-[color:var(--deep-azure)]'
	];
</script>

<svelte:head>
	<title>{getErrorContent($page.status || 404).heading} | Welcome2Sorrento</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-[color:var(--warm-white)] px-4 py-16">
	<div class="w-full max-w-3xl text-center">
		<!-- Error Code -->
		<div class="mb-8">
			<div
				class="font-serif text-[120px] font-semibold leading-none text-[color:var(--sand)] sm:text-[180px]"
			>
				{$page.status || 404}
			</div>
		</div>

		<h1 class="mb-6 font-serif text-4xl font-semibold text-[color:var(--charcoal)] sm:text-5xl">
			{getErrorContent($page.status || 404).heading}
		</h1>
		<p class="mx-auto mb-12 max-w-2xl text-lg text-[color:var(--stone)]">
			{getErrorContent($page.status || 404).message}
		</p>

		<!-- Quick Navigation -->
		<Card class="mb-12 border border-[color:var(--sand)] bg-white shadow-sm">
			<CardContent class="p-8 sm:p-10">
				<h2 class="mb-8 font-serif text-2xl font-semibold text-[color:var(--charcoal)]">
					{navigationTitle}
				</h2>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
					{#each navigationCards as card, index}
						{@const IconComponent = getIcon(card.icon)}
						<a href={card.href} class="group">
							<div
								class="rounded-xl border border-[color:var(--sand)] bg-white p-6 transition-all duration-200 hover:border-[color:var(--azure)] hover:shadow-md"
							>
								<div
									class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl {cardColors[
										index % cardColors.length
									]} transition-transform group-hover:scale-105"
								>
									<IconComponent class="h-6 w-6 text-white" />
								</div>
								<div class="mb-2 font-semibold text-[color:var(--charcoal)]">{card.label}</div>
								{#if 'description' in card && card.description}
									<div class="text-sm text-[color:var(--stone)]">{card.description}</div>
								{/if}
							</div>
						</a>
					{/each}
				</div>
			</CardContent>
		</Card>

		<!-- Action Buttons -->
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<Button
				size="lg"
				onclick={() => window.history.back()}
				class="bg-[color:var(--azure)] px-8 py-6 text-white transition-all duration-200 hover:bg-[color:var(--deep-azure)] hover:shadow-md"
			>
				<span class="flex items-center gap-2">
					<ArrowLeft class="h-5 w-5" />
					<span>Go Back</span>
				</span>
			</Button>
			<Button
				size="lg"
				variant="outline"
				class="border-2 border-[color:var(--azure)] px-8 py-6 text-[color:var(--azure)] transition-all duration-200 hover:bg-[color:var(--azure)] hover:text-white"
			>
				<a href="/contact">Contact Us for Help</a>
			</Button>
		</div>

		<!-- Decorative Element -->
		<div class="mt-12 text-[color:var(--stone)]">
			<p>{footerMessage}</p>
		</div>
	</div>
</div>
