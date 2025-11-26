<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	interface Props {
		children: Snippet;
		class?: string;
		wavePosition?: 'top' | 'bottom' | 'both';
		waveColor?: string;
		backgroundColor?: string;
		animated?: boolean;
	}

	let {
		children,
		class: className = '',
		wavePosition = 'top',
		waveColor = 'var(--warm-white)',
		backgroundColor = 'var(--cream)',
		animated = true
	}: Props = $props();
</script>

<section class={cn('relative', className)} style="background-color: {backgroundColor};">
	<!-- Top Wave -->
	{#if wavePosition === 'top' || wavePosition === 'both'}
		<div
			class="absolute top-0 left-0 w-full overflow-hidden leading-none"
			style="transform: rotate(180deg);"
		>
			<svg
				class="relative block h-[60px] w-full"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path
					d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
					style="fill: {waveColor};"
					class={animated ? 'animate-wave' : ''}
				></path>
			</svg>
		</div>
	{/if}

	<!-- Content -->
	<div class="relative z-10">
		{@render children()}
	</div>

	<!-- Bottom Wave -->
	{#if wavePosition === 'bottom' || wavePosition === 'both'}
		<div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
			<svg
				class="relative block h-[60px] w-full"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path
					d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
					style="fill: {waveColor};"
					class={animated ? 'animate-wave' : ''}
				></path>
			</svg>
		</div>
	{/if}
</section>
