<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardDescription from '$lib/components/ui/card/card-description.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { Utensils, Hotel, Sparkles, ArrowRight } from '@lucide/svelte';
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
	<title>Sorrento Guide - Eat, Stay & Do | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Complete guide to Sorrento - discover the best restaurants, accommodations, and activities in this stunning Italian coastal town."
	/>
</svelte:head>

<div class="-mt-24">
	<!-- Hero Section -->
	<section class="relative flex min-h-[60vh] flex-col overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1920&q=80"
				alt="Sorrento panoramic view"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>

		<div class="relative z-10">
			<Breadcrumb />
		</div>

		<div class="relative z-10 flex grow items-center justify-center">
			<div class="container mx-auto px-4 py-20 text-center text-white sm:px-6 lg:px-8">
				<div class="animate-fade-in-up">
					<h1 class="heading-1 mb-4 text-white">Experience Sorrento</h1>
					<p class="heading-serif mx-auto max-w-3xl text-xl font-light text-white/90">
						Your comprehensive guide to the jewel of the Amalfi Coast
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Introduction -->
	<section class="relative bg-[color:var(--warm-white)] py-24">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-5xl">
				<div class="mb-12 text-center">
					<h2 class="heading-2 mb-4 text-[color:var(--charcoal)]">Discover Sorrento</h2>
				</div>

				<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					<div class="group relative overflow-hidden rounded-2xl shadow-lg">
						<img
							src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
							alt="Sorrento coastline"
							class="h-[500px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					</div>

					<div class="space-y-6 text-lg leading-relaxed text-gray-600">
						<p>
							Perched on clifftops overlooking the Bay of Naples with Mount Vesuvius in the
							distance, Sorrento is a town that captivates all who visit. Known for its dramatic
							coastline, fragrant lemon groves, and elegant piazzas, this enchanting destination
							offers the perfect blend of natural beauty, rich history, and authentic Italian
							culture.
						</p>
						<p>
							Whether you're savoring fresh seafood at a family-run trattoria, relaxing in a
							boutique hotel with sweeping coastal views, or exploring ancient ruins and artisan
							workshops, Sorrento promises unforgettable moments at every turn.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Sections -->
	<section class="relative bg-white py-24">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-16 text-center">
				<h2 class="heading-2 mb-4 text-[color:var(--charcoal)]">Plan Your Perfect Visit</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">
					Everything you need for an unforgettable Sorrento experience
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each [{ title: 'Eat', subtitle: 'Authentic Italian Cuisine', description: 'From Michelin-starred restaurants to hidden family trattorias, discover the best places to experience authentic Sorrentine cuisine, fresh seafood, and the famous limoncello.', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80', link: '/sorrento/eat', icon: Utensils, features: ['Traditional Trattorias', 'Fine Dining Experiences', 'Street Food & Markets'] }, { title: 'Stay', subtitle: 'Elegant Accommodations', description: "Find your perfect home away from home. Whether you prefer luxury hotels with infinity pools, charming B&Bs, or private villas, we've curated the finest accommodations in Sorrento.", image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', link: '/sorrento/stay', icon: Hotel, features: ['5-Star Luxury Hotels', 'Boutique B&Bs', 'Private Villas'] }, { title: 'Do', subtitle: 'Unforgettable Experiences', description: 'Create memories that last a lifetime. From boat tours and cooking classes to historical sites and scenic walks, discover activities that showcase the best of Sorrento.', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80', link: '/sorrento/do', icon: Sparkles, features: ['Boat Tours & Beaches', 'Cooking Classes', 'Historical Tours'] }] as section, index}
					{@const Icon = section.icon}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<a href={section.link} class="group block h-full">
							<Card
								class="flex h-full flex-col overflow-hidden border border-(--sand) pt-0 transition-all duration-300 hover:border-(--azure) hover:shadow-lg"
							>
								<div class="relative h-80 overflow-hidden">
									<img
										src={section.image}
										alt={section.title}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>
								<CardHeader>
									<div class="mb-3 flex items-center space-x-3">
										<div
											class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--azure)]"
										>
											<Icon class="h-6 w-6 text-white" />
										</div>
										<div>
											<CardTitle class="text-2xl">{section.title}</CardTitle>
											<CardDescription>{section.subtitle}</CardDescription>
										</div>
									</div>
								</CardHeader>
								<CardContent class="flex grow flex-col">
									<p class="mb-6 grow leading-relaxed text-gray-600">
										{section.description}
									</p>
									<div class="mb-6 space-y-2">
										{#each section.features as feature}
											<div class="flex items-center space-x-2 text-sm text-gray-600">
												<div class="h-1.5 w-1.5 rounded-full bg-(--azure)"></div>
												<span>{feature}</span>
											</div>
										{/each}
									</div>
									<Button class="w-full">
										<span class="flex items-center justify-center space-x-2">
											<span>Explore {section.title}</span>
											<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
										</span>
									</Button>
								</CardContent>
							</Card>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Insider Tips -->
	<section class="relative bg-(--cream) py-24">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-12 text-center">
					<h2 class="heading-2 mb-4 text-(--charcoal)">Insider Tips</h2>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each [{ title: 'Best Time to Visit', description: 'April-June and September-October offer perfect weather with fewer crowds and better prices than peak summer months.' }, { title: 'Getting Around', description: 'The town center is walkable, but comfortable shoes are essential for the hills and cobblestone streets.' }, { title: 'Local Experience', description: 'Visit early morning or evening for a more authentic local atmosphere and the best light for photography.' }, { title: 'Must Try', description: "Don't leave without trying authentic limoncello, fresh seafood pasta, and delizia al limone (lemon delight dessert)." }] as tip, index}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<Card
								class="h-full border border-(--sand) bg-white transition-all duration-300 hover:shadow-md"
							>
								<CardContent class="p-6">
									<h3 class="mb-2 text-lg font-semibold text-(--charcoal)">
										{tip.title}
									</h3>
									<p class="text-sm leading-relaxed text-gray-600">
										{tip.description}
									</p>
								</CardContent>
							</Card>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="relative overflow-hidden bg-(--azure) py-24">
		<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-white">
				<h2 class="heading-2 mb-6 text-white">Need Help Planning Your Visit?</h2>
				<p class="mb-10 text-xl text-white/90">
					Our personalized WhatsApp booking service makes planning your perfect Sorrento experience
					easy
				</p>
				<a href="/contact">
					<Button
						size="lg"
						class="bg-white px-10 py-6 text-lg text-[color:var(--charcoal)] shadow-lg transition-all duration-300 hover:bg-[color:var(--cream)]"
					>
						<div class="flex items-center space-x-2">
							<span>Get in Touch</span>
							<ArrowRight class="h-5 w-5" />
						</div>
					</Button>
				</a>
			</div>
		</div>
	</section>
</div>
