<script lang="ts">
	import type { AboutPage } from '$lib/sanity/queries';
	import { urlFor } from '$lib/sanity/image';
	import PortableTextRenderer from '$lib/components/PortableTextRenderer.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import {
		Heart,
		MessageCircle,
		MapPin,
		Users,
		CheckCircle,
		Phone,
		Globe,
		Star,
		Award,
		Sparkles
	} from '@lucide/svelte';
	import { onMount } from 'svelte';
	import type { PortableTextBlock } from '@portabletext/types';
	interface Props {
		data: {
			aboutPage: AboutPage | null;
		};
	}

	let { data }: Props = $props();

	// Default content for fallback
	const defaultContent = {
		title: 'About Welcome2Sorrento',
		subtitle: 'Sharing our love for Sorrento with travelers from around the world',
		story: {
			title: 'A Love Story with Sorrento',
			paragraphs: [
				'Welcome2Sorrento was born from a simple love story – between two people and between them and this magical corner of Italy. Created and maintained by an Italian/British couple who have made the Sorrento Peninsula their home, this website is our way of sharing the insider knowledge, hidden gems, and authentic experiences that make this region so special.',
				"After years of living here, exploring every beach, dining at countless restaurants, and discovering secret viewpoints known only to locals, we realized we had accumulated a treasure trove of information that could help travelers experience Sorrento the way it's meant to be experienced – authentically, deeply, and memorably.",
				"We're not just guidebook writers or tourism professionals – we're locals who genuinely love this place and want to help you fall in love with it too."
			]
		},
		services: [
			{
				title: 'Local Expertise',
				description:
					'We live here year-round and know Sorrento inside out – from hidden beaches to the best morning cappuccino',
				icon: 'MapPin'
			},
			{
				title: 'Honest Reviews',
				description:
					"No sponsored content or paid placements – just genuine recommendations we'd give our friends",
				icon: 'Heart'
			},
			{
				title: 'Personal Touch',
				description:
					"We're real people who respond to every message and genuinely care about your experience",
				icon: 'Users'
			},
			{
				title: 'Always Updated',
				description:
					'Living here means we know immediately when a new restaurant opens or when things change',
				icon: 'Sparkles'
			}
		],
		seo: {
			metaTitle: 'About Us - Our Story & Services | Welcome2Sorrento',
			metaDescription:
				'Learn about Welcome2Sorrento - created by an Italian/British couple who love the Sorrento Peninsula. Discover our WhatsApp booking service.'
		},
		mission:
			'We are a team of local experts who are passionate about sharing the beauty of Sorrento with the world.'
	};

	// Map icon names to components
	const iconMap: Record<string, any> = {
		MapPin,
		Heart,
		Users,
		Sparkles,
		Phone,
		Globe,
		Star,
		Award
	};

	const aboutData = data.aboutPage || defaultContent;

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
		handleScroll(); // Check on mount

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>{aboutData.seo?.metaTitle || 'About Us - Our Story & Services | Welcome2Sorrento'}</title>
	<meta
		name="description"
		content={aboutData.seo?.metaDescription ||
			'Learn about Welcome2Sorrento - created by an Italian/British couple who love the Sorrento Peninsula. Discover our WhatsApp booking service.'}
	/>
</svelte:head>

<div class="-mt-24">
	<!-- Hero Section -->
	<section class="relative flex h-[60vh] flex-col overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=1920&q=80"
				alt="Sorrento coastline"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>

		<div class="relative z-10">
			<Breadcrumb />
		</div>

		<div class="relative z-10 flex flex-grow items-center justify-center">
			<div class="container mx-auto px-4 text-center text-white sm:px-6 lg:px-8">
				<div class="animate-fade-in-up">
					<h1 class="heading-serif mb-6 text-5xl font-semibold sm:text-6xl lg:text-7xl">
						{aboutData.title || 'About Welcome2Sorrento'}
					</h1>
					<p class="mx-auto max-w-3xl text-xl font-light text-white/90 sm:text-2xl">
						{aboutData.subtitle ||
							'Sharing our love for Sorrento with travelers from around the world'}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Our Story -->
	<section class="relative bg-[color:var(--warm-white)] py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-6xl">
				<div class="mb-16 text-center">
					<h2
						class="heading-serif mb-8 text-4xl font-semibold text-[color:var(--charcoal)] sm:text-5xl"
					>
						{aboutData.story?.title || 'A Love Story with Sorrento'}
					</h2>
				</div>

				<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					<div class="group relative overflow-hidden rounded-lg shadow-lg">
						<img
							src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=80"
							alt="Sorrento"
							class="h-[500px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>

					<div class="space-y-6 text-lg leading-relaxed text-[color:var(--stone)]">
						{#if aboutData.story?.paragraphs}
							<PortableTextRenderer value={aboutData.story.paragraphs as PortableTextBlock[]} />
						{:else if defaultContent.story.paragraphs}
							{#each defaultContent.story.paragraphs as paragraph}
								<p>{paragraph}</p>
							{/each}
						{/if}

						{#if aboutData.mission}
							<p class="mt-8 font-semibold text-[color:var(--charcoal)]">{aboutData.mission}</p>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- What Makes Us Different -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-20 text-center">
				<h2
					class="heading-serif mb-6 text-4xl font-semibold text-[color:var(--charcoal)] sm:text-5xl"
				>
					What Makes Us Different
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-[color:var(--stone)]">
					Authentic local expertise combined with genuine passion
				</p>
			</div>

			<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each aboutData.services || defaultContent.services as service, index}
					{@const colors = ['azure', 'terracotta', 'olive', 'azure']}
					{@const IconComponent = iconMap[service.icon || 'MapPin'] || MapPin}
					<Card
						class="group scroll-reveal border-[color:var(--sand)] p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
						style="transition-delay: {index * 0.1}s"
					>
						<CardContent class="p-0">
							<div
								class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[color:var(--{colors[
									index % 4
								]})] transition-transform duration-200 group-hover:scale-105"
							>
								<svelte:component this={IconComponent} class="h-8 w-8 text-white" />
							</div>
							<h3 class="mb-3 text-center text-xl font-semibold text-[color:var(--charcoal)]">
								{service.title}
							</h3>
							<p class="text-center text-sm leading-relaxed text-[color:var(--stone)]">
								{service.description}
							</p>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</section>

	<!-- Our Services -->
	<section class="relative bg-[color:var(--cream)] py-32" id="services">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-6xl">
				<div class="mb-16 text-center">
					<h2
						class="heading-serif mb-6 text-4xl font-semibold text-[color:var(--charcoal)] sm:text-5xl"
					>
						WhatsApp Booking Service
					</h2>
					<p class="mx-auto max-w-2xl text-xl text-[color:var(--stone)]">
						Personalized travel planning at your fingertips
					</p>
				</div>

				<Card class="overflow-hidden border-[color:var(--sand)] py-0 shadow-lg">
					<div class="grid grid-cols-1 lg:grid-cols-2">
						<div class="relative h-96 overflow-hidden lg:h-auto">
							<img
								src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
								alt="WhatsApp booking service"
								class="h-full w-full object-cover"
							/>
							<div class="absolute inset-0 bg-[color:var(--charcoal)]/30"></div>
							<div class="absolute right-8 bottom-8 left-8 text-white">
								<div
									class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm"
								>
									<Phone class="h-8 w-8" />
								</div>
								<h3 class="heading-serif text-3xl font-semibold">Available 24/7</h3>
								<p class="mt-2 text-white/90">Real-time support throughout your journey</p>
							</div>
						</div>

						<CardContent class="p-8 lg:p-12">
							<h3 class="heading-serif mb-6 text-3xl font-semibold text-[color:var(--charcoal)]">
								Stress-Free Planning
							</h3>
							<p class="mb-8 text-lg leading-relaxed text-[color:var(--stone)]">
								For a fixed, transparent fee, we'll handle every detail of your Sorrento adventure.
								Focus on anticipating your Italian getaway while we take care of the rest.
							</p>

							<h4
								class="mb-4 flex items-center space-x-2 text-xl font-semibold text-[color:var(--charcoal)]"
							>
								<Star class="h-5 w-5 text-[color:var(--azure)]" />
								<span>What We Handle:</span>
							</h4>
							<ul class="mb-8 space-y-4">
								{#each ['Restaurant reservations at the best tables', 'Hotel and accommodation booking assistance', 'Activity and tour arrangements', 'Transportation coordination', 'Customized itinerary planning', 'Real-time support via WhatsApp'] as item}
									<li class="flex items-start space-x-3">
										<div
											class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-[color:var(--azure)]"
										>
											<CheckCircle class="h-4 w-4 text-white" />
										</div>
										<span class="leading-relaxed text-[color:var(--stone)]">{item}</span>
									</li>
								{/each}
							</ul>

							<a href="/contact" class="block">
								<Button
									size="lg"
									class="w-full bg-[color:var(--azure)] text-lg text-white transition-all duration-200 hover:bg-[color:var(--deep-azure)] hover:shadow-lg"
								>
									<div class="flex w-full items-center justify-center space-x-2">
										<MessageCircle class="h-5 w-5" />
										<span>Get in Touch</span>
									</div>
								</Button>
							</a>
						</CardContent>
					</div>
				</Card>
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-20 text-center">
				<h2
					class="heading-serif mb-6 text-4xl font-semibold text-[color:var(--charcoal)] sm:text-5xl"
				>
					What Travelers Say
				</h2>
			</div>

			<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
				{#each [{ name: 'Emma Thompson', location: 'Manchester, UK', text: 'The booking service was a game-changer. They secured us a table at a restaurant that was supposedly fully booked and arranged a private boat tour that was the highlight of our trip.', color: 'azure' }, { name: 'James Chen', location: 'San Francisco, USA', text: 'Having local experts plan our itinerary made such a difference. We experienced Sorrento like locals, not tourists. Worth every penny!', color: 'terracotta' }, { name: 'Sophie Martin', location: 'Paris, France', text: 'The WhatsApp support during our trip was incredible. When our ferry was cancelled, they immediately arranged alternative transport. Highly recommend!', color: 'olive' }] as testimonial, index}
					<Card
						class="scroll-reveal border-[color:var(--sand)] p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
						style="transition-delay: {index * 0.1}s"
					>
						<CardContent class="p-0">
							<div class="mb-4 flex space-x-1">
								{#each Array(5) as _}
									<Star class="h-5 w-5 fill-[color:var(--azure)] text-[color:var(--azure)]" />
								{/each}
							</div>
							<p class="mb-6 leading-relaxed text-[color:var(--stone)] italic">
								"{testimonial.text}"
							</p>
							<div class="flex items-center space-x-3">
								<div
									class="flex h-12 w-12 items-center justify-center rounded-lg bg-[color:var(--{testimonial.color})] font-bold text-white shadow-md"
								>
									{testimonial.name
										.split(' ')
										.map((n) => n[0])
										.join('')}
								</div>
								<div>
									<div class="font-semibold text-[color:var(--charcoal)]">{testimonial.name}</div>
									<div class="text-sm text-[color:var(--stone)]">{testimonial.location}</div>
								</div>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="relative overflow-hidden bg-[color:var(--azure)] py-32">
		<div class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-white">
				<h2 class="heading-serif mb-6 text-4xl font-semibold sm:text-5xl">
					Ready to Plan Your Perfect Trip?
				</h2>
				<p class="mb-10 text-xl text-white/90">
					Let us help you create unforgettable memories in Sorrento and the Amalfi Coast
				</p>
				<a href="/contact">
					<Button
						size="lg"
						class="bg-white px-10 py-7 text-lg text-[color:var(--charcoal)] shadow-lg transition-all duration-200 hover:bg-[color:var(--cream)] hover:shadow-xl"
					>
						<div class="flex items-center space-x-2">
							<span>Get in Touch</span>
							<MessageCircle class="h-5 w-5" />
						</div>
					</Button>
				</a>
			</div>
		</div>
	</section>
</div>
