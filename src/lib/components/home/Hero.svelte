<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let scrollY = $state(0);

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section class="relative flex min-h-screen items-center justify-center overflow-hidden">
	<!-- Full-screen Sea Image -->
	<div class="absolute inset-0 z-0">
		<img
			src="https://welcome2sorrento.com/wp-content/uploads/2024/12/Sorrento-gregory-smirnov-2-scaled.jpg"
			alt="Sorrento coastline"
			class="h-full w-full object-cover"
			style="transform: translateY({scrollY * 0.2}px);"
		/>
		<!-- Subtle gradient for text readability -->
		<div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
	</div>

	<!-- Simple Hero Content -->
	<div class="relative z-10 container mx-auto px-4 text-center text-white sm:px-6 lg:px-8">
		<h1
			class="heading-serif mb-6 text-5xl leading-tight font-semibold tracking-tight drop-shadow-lg sm:text-6xl lg:text-7xl"
		>
			Welcome to Sorrento
		</h1>

		<p
			class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-light text-white drop-shadow-md sm:text-xl lg:text-2xl"
		>
			Your gateway to the Amalfi Coast
		</p>

		<a
			href="#explore"
			class="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-serif text-lg tracking-wide text-[var(--charcoal)] shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
		>
			<span>Explore</span>
			<ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
		</a>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform">
		<div class="animate-bounce">
			<svg
				class="h-8 w-8 text-white drop-shadow-lg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</div>
	</div>
</section>
