<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import { Home, Search, MapPin, ArrowLeft } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Page Not Found | Welcome2Sorrento</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-[color:var(--warm-white)] px-4 py-16">
	<div class="w-full max-w-3xl text-center">
		<!-- Error Code -->
		<div class="mb-8">
			<div
				class="font-serif text-[120px] leading-none font-semibold text-[color:var(--sand)] sm:text-[180px]"
			>
				{$page.status || 404}
			</div>
		</div>

		<h1 class="mb-6 font-serif text-4xl font-semibold text-[color:var(--charcoal)] sm:text-5xl">
			{#if $page.status === 404}
				Page Not Found
			{:else if $page.status === 500}
				Something Went Wrong
			{:else}
				Oops!
			{/if}
		</h1>
		<p class="mx-auto mb-12 max-w-2xl text-lg text-[color:var(--stone)]">
			{#if $page.status === 404}
				The page you're looking for seems to have wandered off to explore Capri. Let's get you back
				on track!
			{:else if $page.status === 500}
				We're experiencing some technical difficulties. Please try again in a moment.
			{:else}
				An unexpected error occurred. We're sorry for the inconvenience.
			{/if}
		</p>

		<!-- Quick Navigation -->
		<Card class="mb-12 border border-[color:var(--sand)] bg-white shadow-sm">
			<CardContent class="p-8 sm:p-10">
				<h2 class="mb-8 font-serif text-2xl font-semibold text-[color:var(--charcoal)]">
					Where would you like to go?
				</h2>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<a href="/" class="group">
						<div
							class="rounded-xl border border-[color:var(--sand)] bg-white p-6 transition-all duration-200 hover:border-[color:var(--azure)] hover:shadow-md"
						>
							<div
								class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--azure)] transition-transform group-hover:scale-105"
							>
								<Home class="h-6 w-6 text-white" />
							</div>
							<div class="mb-2 font-semibold text-[color:var(--charcoal)]">Homepage</div>
							<div class="text-sm text-[color:var(--stone)]">Start from the beginning</div>
						</div>
					</a>

					<a href="/sorrento" class="group">
						<div
							class="rounded-xl border border-[color:var(--sand)] bg-white p-6 transition-all duration-200 hover:border-[color:var(--azure)] hover:shadow-md"
						>
							<div
								class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--terracotta)] transition-transform group-hover:scale-105"
							>
								<MapPin class="h-6 w-6 text-white" />
							</div>
							<div class="mb-2 font-semibold text-[color:var(--charcoal)]">Sorrento Guide</div>
							<div class="text-sm text-[color:var(--stone)]">Eat, Stay & Do</div>
						</div>
					</a>

					<a href="/surrounding" class="group">
						<div
							class="rounded-xl border border-[color:var(--sand)] bg-white p-6 transition-all duration-200 hover:border-[color:var(--azure)] hover:shadow-md"
						>
							<div
								class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--olive)] transition-transform group-hover:scale-105"
							>
								<MapPin class="h-6 w-6 text-white" />
							</div>
							<div class="mb-2 font-semibold text-[color:var(--charcoal)]">Surrounding Area</div>
							<div class="text-sm text-[color:var(--stone)]">Capri, Amalfi & more</div>
						</div>
					</a>

					<a href="/blog" class="group">
						<div
							class="rounded-xl border border-[color:var(--sand)] bg-white p-6 transition-all duration-200 hover:border-[color:var(--azure)] hover:shadow-md"
						>
							<div
								class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--deep-azure)] transition-transform group-hover:scale-105"
							>
								<Search class="h-6 w-6 text-white" />
							</div>
							<div class="mb-2 font-semibold text-[color:var(--charcoal)]">Blog</div>
							<div class="text-sm text-[color:var(--stone)]">Travel tips & guides</div>
						</div>
					</a>
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
			<p>Lost? We're here to help you navigate Sorrento – both online and in real life!</p>
		</div>
	</div>
</div>
