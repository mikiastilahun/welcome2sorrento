<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Church, ShoppingBag, Train, ArrowRight, Sparkles, Car } from '@lucide/svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const handleScroll = () => {
			const reveals = document.querySelectorAll('.scroll-reveal');
			reveals.forEach((element) => {
				const elementTop = element.getBoundingClientRect().top;
				const elementVisible = 150;
				if (elementTop < window.innerHeight - elementVisible) {
					element.classList.add('revealed');
				}
			});
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>Salerno Travel Guide - Historic Port City | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Discover Salerno - elegant waterfront promenade, medieval center, beautiful cathedral, and gateway to Paestum temples."
	/>
</svelte:head>

<div class="-mt-24">
	<section class="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920&q=80"
				alt="Salerno"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>
		<div
			class="animate-fade-in-up relative z-10 container mx-auto px-4 py-32 text-center text-white"
		>
			<h1 class="heading-serif mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">Salerno</h1>
			<p class="text-xl font-light text-white/90 sm:text-2xl">Gateway to Southern Coastline</p>
		</div>
	</section>

	<section class="relative bg-white py-32">
		<div class="container mx-auto max-w-4xl px-4">
			<div class="animate-fade-in-up">
				<div class="mb-12 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-(--olive)/20 bg-(--olive)/10 px-4 py-2"
					>
						<Sparkles class="h-4 w-4 text-(--olive)" />
						<span class="text-sm font-medium text-(--charcoal)">Hidden Treasure</span>
					</div>
				</div>
				<p class="text-center text-lg leading-relaxed text-gray-600">
					Salerno is an elegant port city often overlooked by tourists, offering authentic Italian
					urban life, a beautiful waterfront promenade, medieval historic center, and easy access to
					the ancient Greek temples of Paestum.
				</p>
			</div>
		</div>
	</section>

	<section class="relative bg-(--cream) py-32">
		<div class="container mx-auto px-4">
			<div class="scroll-reveal mb-20 text-center">
				<h2 class="heading-serif mb-6 text-4xl font-bold text-(--deep-azure) sm:text-5xl">
					What to See
				</h2>
			</div>

			<div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
				{#each [{ title: 'Lungomare Trieste', description: 'Beautiful seafront promenade perfect for evening strolls', icon: ShoppingBag }, { title: 'Salerno Cathedral', description: '11th-century Duomo with beautiful crypt and bell tower', icon: Church }, { title: 'Paestum Temples', description: 'Ancient Greek temples (40 min south) - UNESCO World Heritage', icon: Church }] as sight, index}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<Card
							class="h-full overflow-hidden border border-(--sand) bg-white transition-all duration-300 hover:border-(--azure) hover:shadow-lg"
						>
							<CardContent class="p-8 text-center">
								<div
									class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--olive) shadow-lg"
								>
									<svelte:component this={sight.icon} class="h-8 w-8 text-white" />
								</div>
								<h3 class="mb-3 text-xl font-bold text-(--charcoal)">{sight.title}</h3>
								<p class="leading-relaxed text-gray-600">{sight.description}</p>
							</CardContent>
						</Card>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-20 text-center">
					<h2 class="heading-serif mb-6 text-4xl font-bold text-(--deep-azure) sm:text-5xl">
						How to Get There
					</h2>
				</div>

				<div class="scroll-reveal">
					<Card class="overflow-hidden border border-(--sand) bg-white shadow-sm">
						<CardContent class="p-10">
							<div class="mb-8 flex items-start space-x-6">
								<div
									class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-(--olive) shadow-md"
								>
									<Train class="h-8 w-8 text-white" />
								</div>
								<div class="grow">
									<h3 class="mb-4 text-2xl font-bold text-(--charcoal)">From Sorrento</h3>
									<div class="space-y-6">
										<div
											class="rounded-xl border border-(--sand) bg-(--warm-white) p-6 transition-colors hover:border-(--azure)"
										>
											<div class="flex items-start space-x-4">
												<Train class="mt-1 h-6 w-6 text-(--azure)" />
												<div>
													<div class="mb-2 text-lg font-bold text-(--charcoal)">
														Train from Sorrento
													</div>
													<div class="space-y-1 text-sm text-gray-600">
														<div>Circumvesuviana to Naples, then regional train to Salerno</div>
														<div>Duration: 2-2.5 hours | Cost: €8-12</div>
													</div>
												</div>
											</div>
										</div>

										<div
											class="rounded-xl border border-(--sand) bg-(--warm-white) p-6 transition-colors hover:border-(--azure)"
										>
											<div class="flex items-start space-x-4">
												<Car class="mt-1 h-6 w-6 text-(--azure)" />
												<div>
													<div class="mb-2 text-lg font-bold text-(--charcoal)">SITA Bus</div>
													<div class="space-y-1 text-sm text-gray-600">
														<div>Along Amalfi Coast via Positano & Amalfi</div>
														<div>Duration: 2-3 hours (scenic) | Cost: €10-15</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="rounded-xl bg-(--cream) p-6">
								<h4 class="mb-4 flex items-center text-lg font-bold text-(--charcoal)">
									<Train class="mr-2 h-5 w-5 text-(--azure)" />
									Best For
								</h4>
								<p class="leading-relaxed text-gray-600">
									Day trip combining with Amalfi Coast or Paestum. Less touristy alternative to
									coastal towns with authentic city atmosphere and excellent shopping.
								</p>
							</div>
						</CardContent>
					</Card>

					<div class="mt-10 text-center">
						<Button
							size="lg"
							class="bg-(--olive) px-10 py-6 text-lg text-white transition-all duration-300 hover:bg-(--deep-azure) hover:shadow-lg"
						>
							<a href="/contact" class="flex items-center space-x-2">
								<span>Plan Your Salerno Visit</span>
								<ArrowRight class="h-5 w-5" />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
