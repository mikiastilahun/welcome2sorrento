<script lang="ts">
	import type { AboutPage } from '$lib/sanity/queries';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { CheckCircle, ArrowRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		data: {
			aboutPage: AboutPage | null;
		};
	}

	let { data }: Props = $props();

	const aboutData = data.aboutPage || ({} as AboutPage);
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
	<PageHeader
		title={aboutData.title || 'About Welcome2Sorrento'}
		subtitle={aboutData.subtitle ||
			'Sharing our love for Sorrento with travelers from around the world'}
		image="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=1920&q=80"
	/>

	<!-- Our Story -->
	<section class="bg-[var(--warm-white)] py-16">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-6xl" use:reveal>
				<div class="mb-10 text-center">
					<h2 class="heading-serif mb-4 text-3xl font-semibold text-[var(--charcoal)] sm:text-4xl">
						{aboutData.story?.title || 'Our Story'}
					</h2>
				</div>

				<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					<div class="overflow-hidden rounded-xl shadow-lg">
						<img
							src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=80"
							alt="Sorrento"
							class="h-[400px] w-full object-cover"
						/>
					</div>

					<div class="space-y-6 text-lg leading-relaxed text-[var(--stone)]">
						{#if aboutData.story?.content && aboutData.story.content.length > 0}
							{#each aboutData.story.content as block}
								{#if block._type === 'block' && block.children}
									<p>
										{#each block.children as child}
											{#if child._type === 'span'}
												{child.text}
											{/if}
										{/each}
									</p>
								{/if}
							{/each}
						{/if}

						{#if aboutData.mission}
							<p
								class="mt-6 rounded-lg border-l-4 border-[var(--azure)] bg-white p-4 text-[var(--charcoal)] italic"
							>
								"{aboutData.mission}"
							</p>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Our Services -->
	<section class="bg-white py-16" id="services">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mx-auto max-w-6xl" use:reveal>
				<div class="mb-10 text-center">
					<h2 class="heading-serif mb-4 text-3xl font-semibold text-[var(--charcoal)] sm:text-4xl">
						WhatsApp Booking Service
					</h2>
					<p class="mx-auto max-w-2xl text-lg text-[var(--stone)]">
						Personalized travel planning at your fingertips
					</p>
				</div>

				<Card class="overflow-hidden border-[var(--sand)] py-0 shadow-lg">
					<div class="grid grid-cols-1 lg:grid-cols-2">
						<div class="relative h-80 overflow-hidden lg:h-auto">
							<img
								src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
								alt="WhatsApp booking service"
								class="h-full w-full object-cover"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
							<div class="absolute right-6 bottom-6 left-6 text-white">
								<h3 class="heading-serif text-2xl font-semibold">Available 24/7</h3>
								<p class="mt-1 text-white/90">Real-time support throughout your journey</p>
							</div>
						</div>

						<CardContent class="p-8">
							<h3 class="heading-serif mb-4 text-2xl font-semibold text-[var(--charcoal)]">
								Stress-Free Planning
							</h3>
							<p class="mb-6 leading-relaxed text-[var(--stone)]">
								For a fixed, transparent fee, we'll handle every detail of your Sorrento adventure.
							</p>

							<ul class="mb-6 space-y-3">
								{#each ['Restaurant reservations', 'Hotel and accommodation booking', 'Activity and tour arrangements', 'Transportation coordination', 'Customized itinerary planning', 'Real-time WhatsApp support'] as item}
									<li class="flex items-center gap-3">
										<CheckCircle class="h-5 w-5 flex-shrink-0 text-[var(--azure)]" />
										<span class="text-[var(--stone)]">{item}</span>
									</li>
								{/each}
							</ul>

							<a
								href="/contact"
								class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--azure)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--deep-azure)]"
							>
								<span>Get in Touch</span>
								<ArrowRight class="h-5 w-5" />
							</a>
						</CardContent>
					</div>
				</Card>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="relative py-20">
		<div class="absolute inset-0">
			<img
				src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1920&q=80"
				alt="Sorrento coastline"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-black/50"></div>
		</div>

		<div
			class="scroll-reveal relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8"
			use:reveal
		>
			<div class="mx-auto max-w-2xl text-white">
				<h2 class="heading-serif mb-4 text-3xl font-semibold sm:text-4xl">
					Ready to Plan Your Trip?
				</h2>
				<p class="mb-8 text-lg text-white/90">
					Let us help you create unforgettable memories in Sorrento
				</p>
				<a
					href="/contact"
					class="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[var(--charcoal)] transition-all hover:bg-white/90"
				>
					<span>Get in Touch</span>
					<ArrowRight class="h-5 w-5" />
				</a>
			</div>
		</div>
	</section>
</div>
