<script lang="ts">
	import type { Testimonial } from '$lib/sanity/queries';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		testimonials: Testimonial[];
	}

	let { testimonials }: Props = $props();

	const displayTestimonials =
		testimonials.length > 0
			? testimonials.map((t) => ({
					text: t.text,
					name: t.name,
					location: 'location' in t ? t.location : '',
					photo: 'photo' in t ? t.photo : null
				}))
			: [];
</script>

{#if displayTestimonials.length > 0}
	<section class="bg-[var(--warm-white)] py-20">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="scroll-reveal mb-12 text-center" use:reveal>
				<h2
					class="heading-serif mb-4 text-3xl font-semibold text-[var(--charcoal)] sm:text-4xl lg:text-5xl"
				>
					What Travelers Say
				</h2>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each displayTestimonials.slice(0, 3) as testimonial, index}
					<div class="scroll-reveal" style="transition-delay: {index * 100}ms" use:reveal>
						<div class="h-full rounded-xl bg-white p-6 shadow-md">
							<blockquote>
								<p class="mb-6 text-lg leading-relaxed text-[var(--charcoal)] italic">
									"{testimonial.text}"
								</p>

								<footer class="flex items-center gap-4">
									{#if testimonial.photo?.asset?.url}
										<img
											src={testimonial.photo.asset.url}
											alt={testimonial.name}
											class="h-12 w-12 rounded-full object-cover"
										/>
									{:else}
										<div
											class="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--azure)] text-lg font-semibold text-white"
										>
											{testimonial.name.charAt(0)}
										</div>
									{/if}
									<div>
										<cite class="font-semibold text-[var(--charcoal)] not-italic">
											{testimonial.name}
										</cite>
										{#if testimonial.location}
											<p class="text-sm text-[var(--stone)]">{testimonial.location}</p>
										{/if}
									</div>
								</footer>
							</blockquote>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}
