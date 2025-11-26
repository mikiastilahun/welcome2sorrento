<script lang="ts">
	import { VintageButton, FloatingElements } from '$lib/components/ui/decorative';
	import { ArrowRight, Compass } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let isLoaded = $state(false);
	let scrollY = $state(0);

	onMount(() => {
		isLoaded = true;

		const handleScroll = () => {
			scrollY = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section class="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
	<!-- Ken Burns Animated Background -->
	<div class="absolute inset-0 z-0">
		<div class="animate-ken-burns h-full w-full">
			<img
				src="https://welcome2sorrento.com/wp-content/uploads/2024/12/Sorrento-gregory-smirnov-2-scaled.jpg"
				alt="Sorrento coastline"
				class="h-full w-full object-cover"
				style="transform: translateY({scrollY * 0.3}px);"
			/>
		</div>
		<!-- Gradient Overlays -->
		<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
		<div class="absolute inset-0 bg-gradient-to-r from-[var(--deep-azure)]/20 to-transparent"></div>

		<!-- Film grain effect -->
		<div class="film-grain pointer-events-none absolute inset-0"></div>
	</div>

	<!-- Floating Decorative Elements -->
	<FloatingElements variant="mixed" density="sparse" opacity={0.3} class="z-5" />

	<!-- Decorative Wave Pattern at Bottom -->
	<div class="absolute right-0 bottom-0 left-0 z-10">
		<svg
			class="h-24 w-full"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				fill="var(--warm-white)"
			></path>
		</svg>
	</div>

	<!-- Vintage Stamp Decoration -->
	<div
		class="absolute top-28 right-6 z-20 hidden lg:block"
		class:animate-stamp={isLoaded}
		style="opacity: {isLoaded ? 1 : 0};"
	>
		<div
			class="relative rounded bg-[var(--coral)] px-4 py-3 shadow-lg"
			style="transform: rotate(-12deg);"
		>
			<!-- Perforated edge effect -->
			<div class="absolute -inset-1.5">
				<svg class="h-full w-full" preserveAspectRatio="none">
					<defs>
						<pattern id="hero-stamp" width="10" height="10" patternUnits="userSpaceOnUse">
							<circle cx="5" cy="5" r="2.5" fill="var(--cream)" />
						</pattern>
						<mask id="stamp-mask">
							<rect width="100%" height="100%" fill="url(#hero-stamp)" />
						</mask>
					</defs>
					<rect
						width="100%"
						height="100%"
						fill="var(--coral)"
						mask="url(#stamp-mask)"
						opacity="0.3"
					/>
				</svg>
			</div>
			<div class="relative text-center">
				<div class="font-serif text-xs font-bold tracking-widest text-white">BENVENUTI A</div>
				<div class="font-serif text-lg font-bold tracking-wider text-white">SORRENTO</div>
				<div class="mt-1 text-[0.6rem] tracking-wider text-white/80">ITALIA • 2025</div>
			</div>
		</div>
	</div>

	<!-- Compass Decoration -->
	<div class="absolute bottom-32 left-8 z-20 hidden opacity-60 lg:block">
		<div class="animate-compass">
			<Compass class="h-16 w-16 text-white/40" strokeWidth={1} />
		</div>
	</div>

	<!-- Hero Content - Postcard Style -->
	<div class="relative z-20 container mx-auto px-4 text-center text-white sm:px-6 lg:px-8">
		<div
			class="mx-auto max-w-4xl rounded-xl border border-white/10 bg-black/20 p-8 backdrop-blur-sm md:p-12"
			style="
				box-shadow: 
					0 0 0 1px rgba(255,255,255,0.1),
					0 20px 60px rgba(0,0,0,0.3),
					inset 0 0 80px rgba(255,255,255,0.02);
			"
		>
			<!-- Decorative corner accents -->
			<div class="pointer-events-none absolute top-4 left-4 h-8 w-8 opacity-40">
				<svg viewBox="0 0 32 32" fill="none" class="h-full w-full text-[var(--coral)]">
					<path d="M2 2v10M2 2h10" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				</svg>
			</div>
			<div class="pointer-events-none absolute top-4 right-4 h-8 w-8 opacity-40">
				<svg viewBox="0 0 32 32" fill="none" class="h-full w-full text-[var(--coral)]">
					<path
						d="M30 2v10M30 2h-10"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			</div>
			<div class="pointer-events-none absolute bottom-4 left-4 h-8 w-8 opacity-40">
				<svg viewBox="0 0 32 32" fill="none" class="h-full w-full text-[var(--coral)]">
					<path
						d="M2 30v-10M2 30h10"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			</div>
			<div class="pointer-events-none absolute right-4 bottom-4 h-8 w-8 opacity-40">
				<svg viewBox="0 0 32 32" fill="none" class="h-full w-full text-[var(--coral)]">
					<path
						d="M30 30v-10M30 30h-10"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			</div>

			<div class="stagger-reveal">
				<!-- Decorative line -->
				<div class="mb-6 flex items-center justify-center gap-4">
					<div class="h-px w-12 bg-gradient-to-r from-transparent to-[var(--coral)]"></div>
					<span class="font-serif text-sm tracking-[0.3em] text-[var(--coral)] uppercase"
						>La Dolce Vita</span
					>
					<div class="h-px w-12 bg-gradient-to-l from-transparent to-[var(--coral)]"></div>
				</div>

				<h1
					class="heading-serif mb-6 text-5xl leading-tight font-semibold tracking-tight sm:text-6xl lg:text-7xl"
				>
					Discover
					<span
						class="relative inline-block text-[var(--coral)]"
						style="text-shadow: 2px 2px 20px rgba(0,0,0,0.3);"
					>
						Sorrento
						<!-- Decorative underline -->
						<svg
							class="absolute -bottom-2 left-0 h-3 w-full"
							viewBox="0 0 200 12"
							preserveAspectRatio="none"
						>
							<path
								d="M0 6 Q50 0, 100 6 T200 6"
								stroke="var(--coral)"
								stroke-width="2"
								fill="none"
								opacity="0.6"
							/>
						</svg>
					</span>
				</h1>

				<p
					class="mx-auto mb-10 max-w-2xl font-sans text-lg leading-relaxed font-light text-white/90 sm:text-xl lg:text-2xl"
				>
					Experience the magic of Italy's most enchanting coastal paradise, where lemon groves meet
					azure waters
				</p>

				<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<VintageButton href="#explore" variant="coral" size="lg">
						<span>Begin Your Journey</span>
						<ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
					</VintageButton>

					<a
						href="/about"
						class="group flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-serif text-lg tracking-wide text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
					>
						<span>Our Story</span>
						<ArrowRight
							class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 transform">
		<div class="flex flex-col items-center gap-2">
			<span class="text-xs tracking-widest text-white/60 uppercase">Scroll</span>
			<div class="animate-bounce">
				<svg class="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</div>
	</div>
</section>
