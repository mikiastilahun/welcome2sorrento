<script lang="ts">
	import type { Testimonial } from '$lib/sanity/queries';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		testimonials: Testimonial[];
	}

	let { testimonials }: Props = $props();

	const fallbackTestimonials = [
		{
			text: 'Welcome2Sorrento made our trip absolutely unforgettable. The local recommendations and insider tips helped us discover places we never would have found on our own.',
			name: 'Sarah Parker',
			location: 'London, UK'
		},
		{
			text: 'An incredible resource for planning our Italian adventure. Every restaurant and hidden gem recommendation was spot on. Grazie mille!',
			name: 'Marco Rossi',
			location: 'New York, USA'
		},
		{
			text: 'The attention to detail in their guides is remarkable. We felt like locals exploring Sorrento rather than tourists. Highly recommend!',
			name: 'Emma Chen',
			location: 'Sydney, Australia'
		},
		{
			text: 'From the stunning coastal views to the authentic trattorias, everything was perfectly curated. Our honeymoon was magical thanks to their suggestions.',
			name: 'James & Sophie',
			location: 'Toronto, Canada'
		}
	];

	const displayTestimonials =
		testimonials.length > 0
			? testimonials.map((t) => ({
					text: t.text,
					name: t.name,
					location: 'location' in t ? t.location : '',
					photo: 'photo' in t ? t.photo : null
				}))
			: fallbackTestimonials;

	// Duplicate for seamless infinite scroll
	const marqueeItems = [...displayTestimonials, ...displayTestimonials];
</script>

<section class="relative overflow-hidden bg-[var(--sand)] py-24">
	<!-- Decorative elements -->
	<div class="pointer-events-none absolute inset-0">
		<!-- Large quote marks -->
		<div class="absolute top-10 left-10 opacity-[0.03]">
			<svg class="h-48 w-48" viewBox="0 0 100 100" fill="var(--charcoal)">
				<path
					d="M30 50c-11 0-20-9-20-20s9-20 20-20c6 0 11 2 15 6l-10 14c-2-2-4-3-5-3-3 0-5 2-5 5s2 5 5 5 5 2 5 5v8c0 3-2 5-5 5zm45 0c-11 0-20-9-20-20s9-20 20-20c6 0 11 2 15 6l-10 14c-2-2-4-3-5-3-3 0-5 2-5 5s2 5 5 5 5 2 5 5v8c0 3-2 5-5 5z"
				/>
			</svg>
		</div>
		<div class="absolute right-10 bottom-10 rotate-180 opacity-[0.03]">
			<svg class="h-48 w-48" viewBox="0 0 100 100" fill="var(--charcoal)">
				<path
					d="M30 50c-11 0-20-9-20-20s9-20 20-20c6 0 11 2 15 6l-10 14c-2-2-4-3-5-3-3 0-5 2-5 5s2 5 5 5 5 2 5 5v8c0 3-2 5-5 5zm45 0c-11 0-20-9-20-20s9-20 20-20c6 0 11 2 15 6l-10 14c-2-2-4-3-5-3-3 0-5 2-5 5s2 5 5 5 5 2 5 5v8c0 3-2 5-5 5z"
				/>
			</svg>
		</div>
	</div>

	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mb-12 text-center" use:reveal>
			<!-- Section label -->
			<div class="mb-4 flex items-center justify-center gap-3">
				<div class="h-px w-8 bg-[var(--coral)]"></div>
				<span class="font-serif text-sm tracking-[0.2em] text-[var(--coral)] uppercase"
					>Testimonials</span
				>
				<div class="h-px w-8 bg-[var(--coral)]"></div>
			</div>

			<h2
				class="heading-serif mb-4 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl lg:text-6xl"
			>
				What Travelers <span class="text-[var(--azure)]">Say</span>
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-[var(--stone)]">
				Hear from adventurers who discovered the magic of Sorrento with us
			</p>
		</div>
	</div>

	<!-- Infinite Scroll Marquee -->
	<div class="relative">
		<!-- Gradient fade edges -->
		<div
			class="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r from-[var(--sand)] to-transparent"
		></div>
		<div
			class="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-32 bg-gradient-to-l from-[var(--sand)] to-transparent"
		></div>

		<!-- Marquee track -->
		<div class="flex animate-marquee gap-6 py-4 hover:[animation-play-state:paused]">
			{#each marqueeItems as testimonial, index}
				<div
					class="flex-shrink-0 w-[400px] max-w-[90vw]"
				>
					<div
						class="group relative h-full rounded-xl border border-[var(--sand)] bg-white p-6 shadow-mediterranean transition-all duration-300 hover:-translate-y-1 hover:shadow-mediterranean-lg"
					>
						<!-- Vintage quote decoration -->
						<div
							class="absolute -top-3 -left-2 font-serif text-6xl leading-none text-[var(--azure)] opacity-20"
						>
							"
						</div>

						<!-- Testimonial content -->
						<blockquote class="relative">
							<p
								class="mb-6 font-serif text-lg leading-relaxed text-[var(--charcoal)] italic"
							>
								"{testimonial.text}"
							</p>

							<footer class="flex items-center gap-4">
								{#if testimonial.photo?.asset?.url}
									<img
										src={testimonial.photo.asset.url}
										alt={testimonial.name}
										class="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--sand)]"
									/>
								{:else}
									<div
										class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--azure)] to-[var(--deep-azure)] text-lg font-semibold text-white"
									>
										{testimonial.name.charAt(0)}
									</div>
								{/if}
								<div>
									<cite class="not-italic font-semibold text-[var(--charcoal)]">
										{testimonial.name}
									</cite>
									{#if testimonial.location}
										<p class="text-sm text-[var(--stone)]">{testimonial.location}</p>
									{/if}
								</div>
							</footer>
						</blockquote>

						<!-- Decorative corner -->
						<div class="absolute right-4 bottom-4 opacity-10">
							<svg class="h-8 w-8 text-[var(--terracotta)]" viewBox="0 0 32 32" fill="currentColor">
								<path
									d="M16 2L18 10L26 8L20 14L28 18L20 20L26 28L16 22L6 28L12 20L4 18L12 14L6 8L14 10L16 2Z"
								/>
							</svg>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Featured testimonial highlight -->
	<div class="container mx-auto mt-16 px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal" use:reveal>
			<div
				class="relative mx-auto max-w-4xl rounded-2xl border border-[var(--sand)] bg-white p-8 shadow-mediterranean-lg md:p-12"
			>
				<!-- Large decorative quote -->
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--azure)] to-[var(--deep-azure)]"
				>
					<svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
						/>
					</svg>
				</div>

				<blockquote class="text-center">
					<p
						class="heading-serif mb-8 text-2xl leading-relaxed font-light text-[var(--charcoal)] sm:text-3xl"
					>
						"{displayTestimonials[0].text}"
					</p>

					<footer class="flex items-center justify-center gap-4">
						{#if displayTestimonials[0].photo?.asset?.url}
							<img
								src={displayTestimonials[0].photo.asset.url}
								alt={displayTestimonials[0].name}
								class="h-14 w-14 rounded-xl object-cover ring-2 ring-[var(--sand)]"
							/>
						{:else}
							<div
								class="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--azure)] to-[var(--deep-azure)] text-lg font-semibold text-white"
							>
								{displayTestimonials[0].name.charAt(0)}
							</div>
						{/if}
						<div class="text-left">
							<cite class="not-italic font-semibold text-[var(--charcoal)]">
								{displayTestimonials[0].name}
							</cite>
							{#if displayTestimonials[0].location}
								<p class="text-sm text-[var(--stone)]">{displayTestimonials[0].location}</p>
							{/if}
						</div>
					</footer>
				</blockquote>

				<!-- Decorative corners -->
				<div class="pointer-events-none absolute top-4 left-4 h-8 w-8 opacity-20">
					<svg viewBox="0 0 32 32" fill="none" class="h-full w-full text-[var(--terracotta)]">
						<path
							d="M2 2v10M2 2h10"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>
				<div class="pointer-events-none absolute right-4 bottom-4 h-8 w-8 opacity-20">
					<svg viewBox="0 0 32 32" fill="none" class="h-full w-full text-[var(--terracotta)]">
						<path
							d="M30 30v-10M30 30h-10"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>
