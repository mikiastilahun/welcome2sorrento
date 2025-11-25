<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	interface Props {
		class?: string;
		variant?: 'lemons' | 'waves' | 'mixed';
		density?: 'sparse' | 'normal' | 'dense';
		opacity?: number;
	}

	let {
		class: className = '',
		variant = 'mixed',
		density = 'normal',
		opacity = 0.6
	}: Props = $props();

	const densityCount = {
		sparse: 4,
		normal: 6,
		dense: 10
	};

	let elements: Array<{
		id: number;
		type: 'lemon' | 'wave' | 'olive' | 'leaf';
		x: number;
		y: number;
		size: number;
		delay: number;
		duration: number;
		rotation: number;
	}> = $state([]);

	onMount(() => {
		const count = densityCount[density];
		const types =
			variant === 'lemons'
				? ['lemon']
				: variant === 'waves'
					? ['wave']
					: ['lemon', 'wave', 'olive', 'leaf'];

		elements = Array.from({ length: count }, (_, i) => ({
			id: i,
			type: types[Math.floor(Math.random() * types.length)] as 'lemon' | 'wave' | 'olive' | 'leaf',
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: 20 + Math.random() * 30,
			delay: Math.random() * 4,
			duration: 5 + Math.random() * 4,
			rotation: Math.random() * 360
		}));
	});
</script>

<div
	class={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
	style="opacity: {opacity};"
>
	{#each elements as element (element.id)}
		<div
			class="absolute animate-float"
			style="
				left: {element.x}%;
				top: {element.y}%;
				animation-delay: {element.delay}s;
				animation-duration: {element.duration}s;
				transform: rotate({element.rotation}deg);
			"
		>
			{#if element.type === 'lemon'}
				<!-- Lemon SVG -->
				<svg
					width={element.size}
					height={element.size}
					viewBox="0 0 64 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="lemon-glow"
				>
					<ellipse cx="32" cy="32" rx="24" ry="18" fill="oklch(0.92 0.15 100)" />
					<ellipse cx="32" cy="32" rx="20" ry="14" fill="oklch(0.88 0.18 95)" />
					<path
						d="M8 32C8 32 12 28 16 32C20 36 24 32 24 32"
						stroke="oklch(0.7 0.1 100)"
						stroke-width="1.5"
						stroke-linecap="round"
						opacity="0.4"
					/>
					<!-- Leaf -->
					<ellipse
						cx="52"
						cy="20"
						rx="6"
						ry="10"
						fill="var(--olive)"
						transform="rotate(30 52 20)"
					/>
					<path d="M52 14V26" stroke="oklch(0.45 0.1 125)" stroke-width="1" />
				</svg>
			{:else if element.type === 'wave'}
				<!-- Wave SVG -->
				<svg
					width={element.size}
					height={element.size * 0.5}
					viewBox="0 0 64 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0 16C8 8 16 24 24 16C32 8 40 24 48 16C56 8 64 24 64 16"
						stroke="var(--azure)"
						stroke-width="3"
						stroke-linecap="round"
						fill="none"
						opacity="0.6"
					/>
				</svg>
			{:else if element.type === 'olive'}
				<!-- Olive SVG -->
				<svg
					width={element.size * 0.6}
					height={element.size}
					viewBox="0 0 24 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<ellipse cx="12" cy="24" rx="8" ry="12" fill="var(--olive)" />
					<ellipse cx="12" cy="24" rx="6" ry="9" fill="oklch(0.5 0.1 125)" />
					<path d="M12 4V14" stroke="oklch(0.4 0.08 125)" stroke-width="2" stroke-linecap="round" />
					<ellipse
						cx="16"
						cy="6"
						rx="4"
						ry="6"
						fill="oklch(0.55 0.1 125)"
						transform="rotate(20 16 6)"
					/>
				</svg>
			{:else if element.type === 'leaf'}
				<!-- Leaf SVG -->
				<svg
					width={element.size}
					height={element.size}
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M24 4C24 4 8 16 8 32C8 40 16 44 24 44C32 44 40 40 40 32C40 16 24 4 24 4Z"
						fill="var(--olive)"
						opacity="0.7"
					/>
					<path
						d="M24 12V40M18 20L24 26M30 20L24 26M18 30L24 36M30 30L24 36"
						stroke="oklch(0.45 0.08 125)"
						stroke-width="1.5"
						stroke-linecap="round"
					/>
				</svg>
			{/if}
		</div>
	{/each}
</div>

