<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import {
		Utensils,
		Hotel,
		Sparkles,
		MapPin,
		Sun,
		Coffee,
		ArrowRight,
		Clock,
		Users,
		Heart
	} from '@lucide/svelte';
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
	<section class="relative flex min-h-[80vh] flex-col overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1920&q=80"
				alt="Sorrento panoramic view"
				class="h-full w-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-br from-[color:var(--dark)]/80 via-[color:var(--deep-purple)]/60 to-[color:var(--dark)]/80"
			></div>
		</div>

		<div class="relative z-10">
			<Breadcrumb />
		</div>

		<div class="relative z-10 flex flex-grow items-center justify-center">
			<div class="container mx-auto px-4 py-32 text-center text-white sm:px-6 lg:px-8">
				<div class="animate-fade-in-up">
					<div
						class="mx-auto mb-6 flex h-20 w-20 animate-pulse items-center justify-center rounded-3xl bg-gradient-to-br from-[color:var(--purple-lavender)] to-[color:var(--turquoise)] shadow-2xl"
					>
						<Sun class="h-10 w-10 text-white" />
					</div>
					<h1 class="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
						Experience <span class="text-gradient">Sorrento</span>
					</h1>
					<p class="heading-serif mx-auto max-w-3xl text-xl font-light text-white/90 sm:text-2xl">
						Your comprehensive guide to the jewel of the Amalfi Coast
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Quick Stats -->
	<section class="mesh-gradient relative py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal grid grid-cols-2 gap-6 md:grid-cols-4">
				{#each [{ icon: Utensils, value: '50+', label: 'Restaurants', gradient: 'from-orange-500 to-red-500' }, { icon: Hotel, value: '100+', label: 'Accommodations', gradient: 'from-blue-500 to-cyan-500' }, { icon: Sparkles, value: '30+', label: 'Activities', gradient: 'from-green-500 to-teal-500' }, { icon: Sun, value: '300+', label: 'Sunny Days', gradient: 'from-yellow-500 to-amber-500' }] as stat, index}
					{@const Icon = stat.icon}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<div class="group relative overflow-hidden rounded-3xl">
							<div
								class="absolute inset-0 bg-gradient-to-r {stat.gradient} opacity-10 transition-opacity group-hover:opacity-20"
							></div>
							<div
								class="relative rounded-3xl border-2 border-transparent bg-white p-8 text-center transition-all duration-300 group-hover:border-[color:var(--purple-lavender)]"
							>
								<div
									class="mx-auto mb-4 h-14 w-14 rounded-2xl bg-gradient-to-br {stat.gradient} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
								>
									<Icon class="h-7 w-7 text-white" />
								</div>
								<div class="text-gradient mb-2 text-4xl font-bold">{stat.value}</div>
								<div class="text-sm font-medium text-gray-600">{stat.label}</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Introduction -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-5xl">
				<div class="mb-16 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-[color:var(--purple-lavender)]/20 bg-[color:var(--purple-lavender)]/10 px-4 py-2"
					>
						<Heart class="h-4 w-4 text-[color:var(--purple-lavender)]" />
						<span class="text-sm font-medium text-[color:var(--dark)]">Why Sorrento</span>
					</div>
					<h2 class="mb-8 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
						Discover <span class="text-gradient">Sorrento</span>
					</h2>
				</div>

				<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					<div class="group relative overflow-hidden rounded-3xl shadow-2xl">
						<img
							src="https://images.unsplash.com/photo-1563021991-2fa6f3c6b720?w=800&q=80"
							alt="Sorrento coastline"
							class="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-[color:var(--dark)]/60 to-transparent"
						></div>
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
	<section class="relative bg-gradient-to-b from-white via-[color:var(--off-white)] to-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-20 text-center">
				<h2 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
					Plan Your <span class="text-gradient">Perfect Visit</span>
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">
					Everything you need for an unforgettable Sorrento experience
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
				{#each [{ title: 'Eat', subtitle: 'Authentic Italian Cuisine', description: 'From Michelin-starred restaurants to hidden family trattorias, discover the best places to experience authentic Sorrentine cuisine, fresh seafood, and the famous limoncello.', image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80', link: '/sorrento/eat', icon: Utensils, gradient: 'from-orange-500 to-red-500', features: ['Traditional Trattorias', 'Fine Dining Experiences', 'Street Food & Markets'] }, { title: 'Stay', subtitle: 'Elegant Accommodations', description: "Find your perfect home away from home. Whether you prefer luxury hotels with infinity pools, charming B&Bs, or private villas, we've curated the finest accommodations in Sorrento.", image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', link: '/sorrento/stay', icon: Hotel, gradient: 'from-blue-500 to-cyan-500', features: ['5-Star Luxury Hotels', 'Boutique B&Bs', 'Private Villas'] }, { title: 'Do', subtitle: 'Unforgettable Experiences', description: 'Create memories that last a lifetime. From boat tours and cooking classes to historical sites and scenic walks, discover activities that showcase the best of Sorrento.', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80', link: '/sorrento/do', icon: Sparkles, gradient: 'from-green-500 to-teal-500', features: ['Boat Tours & Beaches', 'Cooking Classes', 'Historical Tours'] }] as section, index}
					{@const Icon = section.icon}
					<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
						<a href={section.link} class="group block h-full">
							<Card
								class="flex h-full flex-col overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-[color:var(--purple-lavender)] hover:shadow-2xl"
							>
								<div class="relative h-80 overflow-hidden">
									<img
										src={section.image}
										alt={section.title}
										class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div
										class="absolute inset-0 bg-gradient-to-t from-[color:var(--dark)]/90 via-[color:var(--dark)]/50 to-transparent"
									></div>
									<div class="absolute right-6 bottom-6 left-6 text-white">
										<div
											class="mb-4 h-14 w-14 rounded-2xl bg-gradient-to-br {section.gradient} flex items-center justify-center shadow-lg"
										>
											<Icon class="h-7 w-7 text-white" />
										</div>
										<h3 class="mb-2 text-3xl font-bold">{section.title}</h3>
										<p class="text-white/90">{section.subtitle}</p>
									</div>
								</div>
								<CardContent class="flex flex-grow flex-col p-8">
									<p class="mb-6 flex-grow leading-relaxed text-gray-600">
										{section.description}
									</p>
									<div class="mb-6 space-y-3">
										{#each section.features as feature}
											<div class="flex items-center space-x-2 text-sm">
												<div
													class="h-1.5 w-1.5 rounded-full bg-gradient-to-r {section.gradient}"
												></div>
												<span>{feature}</span>
											</div>
										{/each}
									</div>
									<Button
										class="w-full bg-gradient-to-r {section.gradient} text-white transition-all duration-300 group-hover:scale-105 hover:shadow-lg"
									>
										<span class="flex items-center justify-center space-x-2">
											<span>Explore {section.title}</span>
											<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-2" />
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
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-20 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-[color:var(--turquoise)]/20 bg-[color:var(--turquoise)]/10 px-4 py-2"
					>
						<Sparkles class="h-4 w-4 text-[color:var(--turquoise)]" />
						<span class="text-sm font-medium text-[color:var(--dark)]">Local Knowledge</span>
					</div>
					<h2 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
						<span class="text-gradient-2">Insider</span> Tips
					</h2>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each [{ title: 'Best Time to Visit', description: 'April-June and September-October offer perfect weather with fewer crowds and better prices than peak summer months.', gradient: 'from-blue-500 to-cyan-500', icon: Clock }, { title: 'Getting Around', description: 'The town center is walkable, but comfortable shoes are essential for the hills and cobblestone streets.', gradient: 'from-purple-500 to-pink-500', icon: MapPin }, { title: 'Local Experience', description: 'Visit early morning or evening for a more authentic local atmosphere and the best light for photography.', gradient: 'from-green-500 to-teal-500', icon: Users }, { title: 'Must Try', description: "Don't leave without trying authentic limoncello, fresh seafood pasta, and delizia al limone (lemon delight dessert).", gradient: 'from-orange-500 to-red-500', icon: Coffee }] as tip, index}
						{@const Icon = tip.icon}
						<div class="scroll-reveal" style="transition-delay: {index * 0.1}s">
							<div class="relative h-full overflow-hidden rounded-3xl">
								<div class="absolute inset-0 bg-gradient-to-r {tip.gradient} opacity-5"></div>
								<Card
									class="relative h-full border-2 border-transparent transition-all duration-300 hover:border-[color:var(--turquoise)]"
								>
									<CardContent class="p-8">
										<div class="flex items-start space-x-4">
											<div
												class="h-12 w-12 rounded-xl bg-gradient-to-br {tip.gradient} flex flex-shrink-0 items-center justify-center shadow-lg"
											>
												<Icon class="h-6 w-6 text-white" />
											</div>
											<div>
												<h3 class="mb-2 text-lg font-bold text-[color:var(--dark)]">{tip.title}</h3>
												<p class="text-sm leading-relaxed text-gray-600">
													{tip.description}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="relative overflow-hidden py-32">
		<div
			class="animate-gradient absolute inset-0 bg-gradient-to-br from-[color:var(--purple-lavender)] via-[color:var(--deep-purple)] to-[color:var(--dark)]"
		></div>

		<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-white">
				<h2 class="mb-6 text-4xl font-bold sm:text-5xl">Need Help Planning Your Visit?</h2>
				<p class="mb-10 text-xl text-white/90">
					Our personalized WhatsApp booking service makes planning your perfect Sorrento experience
					easy
				</p>
				<a href="/contact">
					<Button
						size="lg"
						class="bg-white px-10 py-7 text-lg text-[color:var(--dark)] shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-[color:var(--off-white)]"
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
