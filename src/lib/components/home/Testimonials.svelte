<script lang="ts">
	import type { Testimonial } from '$lib/sanity/queries';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		testimonials: Testimonial[];
	}

	let { testimonials }: Props = $props();

	const fallbackTestimonial = {
		text: 'Welcome2Sorrento made our trip absolutely unforgettable. The local recommendations and insider tips helped us discover places we never would have found on our own.',
		name: 'Sarah Parker',
		location: 'London, UK'
	};

	const activeTestimonial = testimonials.length > 0 ? testimonials[0] : fallbackTestimonial;
</script>

<section class="relative bg-[var(--sand)] py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-4xl text-center" use:reveal>
			<div
				class="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--azure)]"
			>
				<svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
					/>
				</svg>
			</div>

			<blockquote
				class="heading-serif mb-8 text-2xl font-light leading-relaxed text-[var(--charcoal)] sm:text-3xl"
			>
				"{activeTestimonial.text}"
			</blockquote>

			<div class="flex items-center justify-center space-x-4">
				{#if 'photo' in activeTestimonial && activeTestimonial.photo?.asset?.url}
					<img
						src={activeTestimonial.photo.asset.url}
						alt={activeTestimonial.name}
						class="h-14 w-14 rounded-xl object-cover"
					/>
				{:else}
					<div
						class="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--azure)] text-lg font-semibold text-white"
					>
						{activeTestimonial.name.charAt(0)}
					</div>
				{/if}
				<div class="text-left">
					<p class="font-semibold text-[var(--charcoal)]">{activeTestimonial.name}</p>
					{#if 'location' in activeTestimonial}
						<p class="text-sm text-[var(--stone)]">{activeTestimonial.location}</p>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

