<script lang="ts">
	import { VintageButton } from '$lib/components/ui/decorative';
	import { ArrowRight, Mail, Compass, MapPin } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative overflow-hidden py-32">
	<!-- Full-bleed background image with Ken Burns effect -->
	<div class="absolute inset-0">
		<div class="animate-ken-burns h-full w-full">
			<img
				src="https://welcome2sorrento.com/wp-content/uploads/2024/12/Meta-ricky-johnson-scaled.jpg"
				alt="Sorrento"
				class="h-full w-full object-cover"
			/>
		</div>
		<!-- Gradient overlays -->
		<div class="absolute inset-0 bg-gradient-to-r from-[var(--charcoal)]/90 to-[var(--charcoal)]/70"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/80 via-transparent to-[var(--charcoal)]/60"></div>
		
		<!-- Film grain overlay -->
		<div class="film-grain pointer-events-none absolute inset-0"></div>
	</div>

	<!-- Animated compass decoration -->
	<div class="pointer-events-none absolute top-12 right-12 hidden opacity-30 lg:block">
		<div class="animate-compass">
			<Compass class="h-24 w-24 text-white" strokeWidth={1} />
		</div>
	</div>

	<!-- Decorative map pins -->
	<div class="pointer-events-none absolute bottom-20 left-10 opacity-20">
		<MapPin class="h-12 w-12 text-[var(--coral)]" />
	</div>
	<div class="pointer-events-none absolute top-32 left-[20%] opacity-15">
		<MapPin class="h-8 w-8 text-[var(--coral)]" />
	</div>

	<!-- Wave decoration at top -->
	<div class="absolute top-0 right-0 left-0">
		<svg
			class="h-16 w-full"
			viewBox="0 0 1200 60"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0,60 C300,30 600,50 900,20 C1000,10 1100,30 1200,20 L1200,0 L0,0 Z"
				fill="var(--cream)"
			></path>
		</svg>
	</div>

	<div class="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-4xl" use:reveal>
			<!-- Decorative frame -->
			<div
				class="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-16"
				style="box-shadow: 0 0 60px rgba(0,0,0,0.3), inset 0 0 80px rgba(255,255,255,0.02);"
			>
				<!-- Corner decorations -->
				<div class="pointer-events-none absolute top-4 left-4 h-10 w-10 opacity-40">
					<svg viewBox="0 0 40 40" fill="none" class="h-full w-full text-[var(--coral)]">
						<path
							d="M2 2v12M2 2h12"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>
				<div class="pointer-events-none absolute top-4 right-4 h-10 w-10 opacity-40">
					<svg viewBox="0 0 40 40" fill="none" class="h-full w-full text-[var(--coral)]">
						<path
							d="M38 2v12M38 2h-12"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>
				<div class="pointer-events-none absolute bottom-4 left-4 h-10 w-10 opacity-40">
					<svg viewBox="0 0 40 40" fill="none" class="h-full w-full text-[var(--coral)]">
						<path
							d="M2 38v-12M2 38h12"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>
				<div class="pointer-events-none absolute right-4 bottom-4 h-10 w-10 opacity-40">
					<svg viewBox="0 0 40 40" fill="none" class="h-full w-full text-[var(--coral)]">
						<path
							d="M38 38v-12M38 38h-12"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>

				<div class="stagger-reveal text-white">
					<!-- Section label -->
					<div class="mb-6 flex items-center justify-center gap-3">
						<div class="h-px w-12 bg-gradient-to-r from-transparent to-[var(--coral)]"></div>
						<span class="font-serif text-sm tracking-[0.3em] text-[var(--coral)] uppercase"
							>Your Journey Awaits</span
						>
						<div class="h-px w-12 bg-gradient-to-l from-transparent to-[var(--coral)]"></div>
					</div>

					<h2
						class="heading-serif mb-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
					>
						Ready for Your
						<span class="relative inline-block text-[var(--coral)]">
							Adventure?
							<!-- Decorative underline -->
							<svg
								class="absolute -bottom-2 left-0 h-3 w-full"
								viewBox="0 0 200 12"
								preserveAspectRatio="none"
							>
								<path
									d="M0 6 Q50 12, 100 6 T200 6"
									stroke="var(--coral)"
									stroke-width="2"
									fill="none"
									opacity="0.6"
								/>
							</svg>
						</span>
					</h2>

					<p class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-light text-white/90 sm:text-xl">
						Let us help you plan the perfect trip with our personalized booking service. From hidden
						trattorias to breathtaking coastal views, we'll make your Sorrento dreams come true.
					</p>

					<!-- Animated compass pointing to buttons -->
					<div class="mb-8 flex justify-center">
						<div class="animate-gentle-pulse">
							<Compass class="h-8 w-8 text-[var(--coral)]/60" />
						</div>
					</div>

					<div class="flex flex-col justify-center gap-4 sm:flex-row">
						<VintageButton href="/about#services" variant="coral" size="lg">
							<span>Our Services</span>
							<ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
						</VintageButton>

						<a
							href="/contact"
							class="group inline-flex items-center justify-center gap-2 rounded border-2 border-white/40 bg-white/10 px-8 py-4 font-serif text-lg tracking-wider text-white uppercase backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/20"
						>
							<Mail class="h-5 w-5" />
							<span>Get in Touch</span>
						</a>
					</div>

					<!-- Trust indicators -->
					<div class="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60">
						<div class="flex items-center gap-2">
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<span class="text-sm">5-Star Reviews</span>
						</div>
						<div class="hidden h-4 w-px bg-white/30 sm:block"></div>
						<div class="flex items-center gap-2">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							<span class="text-sm">10,000+ Happy Travelers</span>
						</div>
						<div class="hidden h-4 w-px bg-white/30 sm:block"></div>
						<div class="flex items-center gap-2">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
								/>
							</svg>
							<span class="text-sm">Local Experts</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Wave decoration at bottom -->
	<div class="absolute right-0 bottom-0 left-0">
		<svg
			class="h-16 w-full"
			viewBox="0 0 1200 60"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0,0 C200,40 400,20 600,30 C800,40 1000,10 1200,30 L1200,60 L0,60 Z"
				fill="var(--charcoal)"
			></path>
		</svg>
	</div>
</section>
