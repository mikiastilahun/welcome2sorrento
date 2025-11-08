<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import { Home, Search, MapPin, ArrowLeft, Sparkles } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Page Not Found | Welcome2Sorrento</title>
</svelte:head>

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-[color:var(--purple-lavender)]/10 via-white to-[color:var(--turquoise)]/10 px-4"
>
	<div class="animate-fade-in-up w-full max-w-3xl text-center">
		<!-- Error Code with Gradient -->
		<div class="relative mb-12">
			<div
				class="bg-gradient-to-r from-[color:var(--purple-lavender)] via-[color:var(--turquoise)] to-[color:var(--purple-lavender)] bg-clip-text text-[200px] leading-none font-bold text-transparent opacity-20 sm:text-[250px]"
			>
				{$page.status || 404}
			</div>
			<div class="absolute inset-0 flex items-center justify-center">
				<div
					class="animate-float flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[color:var(--purple-lavender)] to-[color:var(--turquoise)] shadow-2xl"
				>
					<Sparkles class="h-12 w-12 text-white" />
				</div>
			</div>
		</div>

		<h1 class="mb-6 text-4xl font-bold sm:text-5xl">
			{#if $page.status === 404}
				<span class="text-gradient">Page Not Found</span>
			{:else if $page.status === 500}
				<span class="text-gradient-2">Something Went Wrong</span>
			{:else}
				<span class="text-gradient">Oops!</span>
			{/if}
		</h1>
		<p class="mx-auto mb-12 max-w-2xl text-xl text-gray-600">
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
		<Card
			class="mb-12 overflow-hidden border-2 border-[color:var(--purple-lavender)]/20 transition-colors hover:border-[color:var(--purple-lavender)]"
		>
			<div class="relative">
				<div
					class="absolute inset-0 bg-gradient-to-r from-[color:var(--purple-lavender)]/5 to-[color:var(--turquoise)]/5"
				></div>
				<CardContent class="relative p-10">
					<h2 class="mb-8 text-2xl font-bold text-[color:var(--dark)]">
						Where would you like to go?
					</h2>
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<a href="/" class="group">
							<div
								class="rounded-2xl border-2 border-[color:var(--off-white)] bg-white p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
							>
								<div
									class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg transition-transform group-hover:scale-110"
								>
									<Home class="h-7 w-7 text-white" />
								</div>
								<div class="mb-2 text-lg font-bold">Homepage</div>
								<div class="text-sm text-gray-600">Start from the beginning</div>
							</div>
						</a>

						<a href="/sorrento" class="group">
							<div
								class="rounded-2xl border-2 border-[color:var(--off-white)] bg-white p-6 transition-all duration-300 hover:border-orange-500 hover:shadow-xl"
							>
								<div
									class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg transition-transform group-hover:scale-110"
								>
									<MapPin class="h-7 w-7 text-white" />
								</div>
								<div class="mb-2 text-lg font-bold">Sorrento Guide</div>
								<div class="text-sm text-gray-600">Eat, Stay & Do</div>
							</div>
						</a>

						<a href="/surrounding" class="group">
							<div
								class="rounded-2xl border-2 border-[color:var(--off-white)] bg-white p-6 transition-all duration-300 hover:border-green-500 hover:shadow-xl"
							>
								<div
									class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg transition-transform group-hover:scale-110"
								>
									<MapPin class="h-7 w-7 text-white" />
								</div>
								<div class="mb-2 text-lg font-bold">Surrounding Area</div>
								<div class="text-sm text-gray-600">Capri, Amalfi & more</div>
							</div>
						</a>

						<a href="/blog" class="group">
							<div
								class="rounded-2xl border-2 border-[color:var(--off-white)] bg-white p-6 transition-all duration-300 hover:border-purple-500 hover:shadow-xl"
							>
								<div
									class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg transition-transform group-hover:scale-110"
								>
									<Search class="h-7 w-7 text-white" />
								</div>
								<div class="mb-2 text-lg font-bold">Blog</div>
								<div class="text-sm text-gray-600">Travel tips & guides</div>
							</div>
						</a>
					</div>
				</CardContent>
			</div>
		</Card>

		<!-- Action Buttons -->
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<Button
				size="lg"
				onclick={() => window.history.back()}
				class="bg-gradient-to-r from-[color:var(--purple-lavender)] to-[color:var(--turquoise)] px-10 py-7 text-lg text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl"
			>
				<span class="flex items-center space-x-2">
					<ArrowLeft class="h-5 w-5" />
					<span>Go Back</span>
				</span>
			</Button>
			<Button
				size="lg"
				variant="outline"
				class="border-2 border-[color:var(--purple-lavender)] px-10 py-7 text-lg text-[color:var(--purple-lavender)] transition-all duration-500 hover:bg-[color:var(--purple-lavender)] hover:text-white"
			>
				<a href="/contact">Contact Us for Help</a>
			</Button>
		</div>

		<!-- Decorative Element -->
		<div class="mt-12 text-gray-600">
			<p>Lost? We're here to help you navigate Sorrento – both online and in real life!</p>
		</div>
	</div>
</div>
