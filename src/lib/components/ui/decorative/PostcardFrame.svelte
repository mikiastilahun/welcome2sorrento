<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	interface Props {
		children: Snippet;
		class?: string;
		showStamp?: boolean;
		stampText?: string;
		variant?: 'default' | 'cream' | 'white';
	}

	let {
		children,
		class: className = '',
		showStamp = false,
		stampText = 'SORRENTO',
		variant = 'default'
	}: Props = $props();

	const variantStyles = {
		default: 'bg-[var(--cream)]',
		cream: 'bg-[var(--sand)]',
		white: 'bg-white'
	};
</script>

<div
	class={cn(
		'postcard-container relative rounded-lg p-4 shadow-mediterranean transition-all duration-300',
		variantStyles[variant],
		className
	)}
>
	<!-- Decorative corner flourishes -->
	<div class="pointer-events-none absolute top-2 left-2 h-6 w-6 opacity-20">
		<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--terracotta)]">
			<path d="M3 3v6M3 3h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		</svg>
	</div>
	<div class="pointer-events-none absolute top-2 right-2 h-6 w-6 opacity-20">
		<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--terracotta)]">
			<path d="M21 3v6M21 3h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		</svg>
	</div>
	<div class="pointer-events-none absolute bottom-2 left-2 h-6 w-6 opacity-20">
		<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--terracotta)]">
			<path d="M3 21v-6M3 21h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		</svg>
	</div>
	<div class="pointer-events-none absolute right-2 bottom-2 h-6 w-6 opacity-20">
		<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--terracotta)]">
			<path d="M21 21v-6M21 21h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		</svg>
	</div>

	<!-- Dashed inner border -->
	<div
		class="pointer-events-none absolute inset-3 rounded-sm border border-dashed border-[var(--stone)]/30"
	></div>

	<!-- Optional vintage stamp -->
	{#if showStamp}
		<div
			class="absolute -top-3 -right-3 z-20 animate-stamp rounded bg-[var(--coral)] px-3 py-2 shadow-lg"
			style="transform: rotate(-12deg);"
		>
			<!-- Stamp perforated edge effect -->
			<div class="absolute inset-0 -m-1 opacity-80">
				<svg class="h-full w-full" preserveAspectRatio="none">
					<defs>
						<pattern id="stamp-edge" width="8" height="8" patternUnits="userSpaceOnUse">
							<circle cx="4" cy="4" r="2" fill="var(--cream)" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#stamp-edge)" />
				</svg>
			</div>
			<div class="relative">
				<span
					class="font-serif text-xs font-bold tracking-widest text-white"
					style="font-family: 'Cormorant Garamond', serif;"
				>
					{stampText}
				</span>
				<div class="mt-0.5 text-center text-[0.6rem] text-white/80">ITALIA</div>
			</div>
		</div>
	{/if}

	<!-- Content -->
	<div class="relative z-10">
		{@render children()}
	</div>

	<!-- Subtle paper texture overlay -->
	<div class="texture-paper pointer-events-none absolute inset-0 rounded-lg opacity-50"></div>
</div>

<style>
	.postcard-container {
		box-shadow:
			0 4px 20px rgba(0, 0, 0, 0.08),
			0 0 0 1px rgba(0, 0, 0, 0.04),
			inset 0 0 40px rgba(0, 0, 0, 0.01);
	}

	.postcard-container:hover {
		box-shadow:
			0 8px 30px rgba(0, 0, 0, 0.1),
			0 0 0 1px rgba(0, 0, 0, 0.05),
			inset 0 0 40px rgba(0, 0, 0, 0.02);
	}
</style>

