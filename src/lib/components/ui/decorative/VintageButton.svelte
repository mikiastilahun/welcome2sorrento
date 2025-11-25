<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	interface Props {
		children: Snippet;
		class?: string;
		href?: string;
		variant?: 'terracotta' | 'azure' | 'olive' | 'coral';
		size?: 'sm' | 'md' | 'lg';
		onclick?: (e: MouseEvent) => void;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
	}

	let {
		children,
		class: className = '',
		href,
		variant = 'terracotta',
		size = 'md',
		onclick,
		type = 'button',
		disabled = false
	}: Props = $props();

	const variantStyles = {
		terracotta: {
			bg: 'var(--terracotta)',
			border: 'var(--terracotta)',
			shadow: 'var(--charcoal)',
			hover: 'oklch(0.6 0.15 35)'
		},
		azure: {
			bg: 'var(--azure)',
			border: 'var(--azure)',
			shadow: 'var(--deep-azure)',
			hover: 'var(--deep-azure)'
		},
		olive: {
			bg: 'var(--olive)',
			border: 'var(--olive)',
			shadow: 'oklch(0.35 0.08 125)',
			hover: 'oklch(0.5 0.08 125)'
		},
		coral: {
			bg: 'var(--coral)',
			border: 'var(--coral)',
			shadow: 'oklch(0.5 0.12 25)',
			hover: 'oklch(0.65 0.12 25)'
		}
	};

	const sizeStyles = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg'
	};

	const style = variantStyles[variant];
</script>

{#if href}
	<a
		{href}
		class={cn(
			'vintage-btn group relative inline-flex items-center justify-center font-serif font-semibold tracking-wider text-white uppercase transition-all duration-200',
			sizeStyles[size],
			disabled && 'pointer-events-none opacity-50',
			className
		)}
		style="
			--btn-bg: {style.bg};
			--btn-border: {style.border};
			--btn-shadow: {style.shadow};
			--btn-hover: {style.hover};
		"
	>
		<span class="relative z-10 flex items-center gap-2">
			{@render children()}
		</span>
	</a>
{:else}
	<button
		{type}
		{disabled}
		{onclick}
		class={cn(
			'vintage-btn group relative inline-flex items-center justify-center font-serif font-semibold tracking-wider text-white uppercase transition-all duration-200',
			sizeStyles[size],
			disabled && 'pointer-events-none opacity-50',
			className
		)}
		style="
			--btn-bg: {style.bg};
			--btn-border: {style.border};
			--btn-shadow: {style.shadow};
			--btn-hover: {style.hover};
		"
	>
		<span class="relative z-10 flex items-center gap-2">
			{@render children()}
		</span>
	</button>
{/if}

<style>
	.vintage-btn {
		background: var(--btn-bg);
		border: 2px solid var(--btn-border);
		border-radius: 0.25rem;
		box-shadow:
			4px 4px 0 var(--btn-shadow),
			inset 0 0 0 1px rgba(255, 255, 255, 0.2);
		font-family: 'Cormorant Garamond', serif;
		letter-spacing: 0.08em;
	}

	.vintage-btn:hover {
		transform: translate(-2px, -2px);
		box-shadow:
			6px 6px 0 var(--btn-shadow),
			inset 0 0 0 1px rgba(255, 255, 255, 0.3);
		background: var(--btn-hover);
	}

	.vintage-btn:active {
		transform: translate(2px, 2px);
		box-shadow:
			2px 2px 0 var(--btn-shadow),
			inset 0 0 0 1px rgba(255, 255, 255, 0.2);
	}

	/* Decorative corner accents */
	.vintage-btn::before,
	.vintage-btn::after {
		content: '';
		position: absolute;
		width: 8px;
		height: 8px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		transition: all 0.2s ease;
	}

	.vintage-btn::before {
		top: 4px;
		left: 4px;
		border-right: none;
		border-bottom: none;
	}

	.vintage-btn::after {
		bottom: 4px;
		right: 4px;
		border-left: none;
		border-top: none;
	}

	.vintage-btn:hover::before,
	.vintage-btn:hover::after {
		border-color: rgba(255, 255, 255, 0.5);
	}
</style>

