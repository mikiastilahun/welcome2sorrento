<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { Menu, X, ChevronDown } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import type { Destination } from '$lib/sanity/queries';

	interface Props {
		destinations?: Destination[];
	}

	let { destinations = [] }: Props = $props();

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);
	let hidden = $state(false);
	let lastScroll = $state(0);
	let isHeroSection = $state(true);

	// Advanced scroll handling with hide/show on scroll
	onMount(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;
			scrolled = currentScroll > 50;
			isHeroSection = currentScroll < window.innerHeight * 0.8;

			// Hide navbar on scroll down, show on scroll up
			if (currentScroll > lastScroll && currentScroll > 100) {
				hidden = true;
			} else {
				hidden = false;
			}
			lastScroll = currentScroll;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const surroundingSubmenu = destinations.map(dest => ({
		name: dest.name,
		href: `/surrounding/${dest.slug.current}`
	}));

	const navLinks = $derived([
		{ name: 'Home', href: '/' },
		{
			name: 'Sorrento',
			href: '/sorrento',
			submenu: [
				{ name: 'Eat', href: '/sorrento/eat' },
				{ name: 'Stay', href: '/sorrento/stay' },
				{ name: 'Do', href: '/sorrento/do' }
			]
		},
		{
			name: 'Surrounding',
			href: '/surrounding',
			submenu: surroundingSubmenu.length > 0 ? surroundingSubmenu : []
		},
		{ name: 'Blog', href: '/blog' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	]);
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-500 {hidden
		? '-translate-y-full'
		: 'translate-y-0'} {scrolled
		? 'nav-scrolled shadow-mediterranean'
		: isHeroSection
			? 'nav-transparent'
			: 'nav-scrolled shadow-mediterranean'}"
>
	<!-- Decorative top border - only visible when scrolled -->
	{#if scrolled}
		<div class="border-tile-decorative absolute top-0 right-0 left-0"></div>
	{/if}

	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="group flex items-center space-x-2">
				<div class="transition-transform duration-300 group-hover:scale-105">
					<Logo class={scrolled || !isHeroSection ? '' : 'text-white'} />
				</div>
				<!-- Animated lemon on hover - hidden on mobile -->
				<div
					class="ml-2 hidden opacity-0 transition-all duration-300 group-hover:opacity-100 lg:block"
				>
					<svg
						class="h-6 w-6 animate-wave"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<ellipse cx="12" cy="12" rx="8" ry="6" fill="oklch(0.92 0.15 100)" />
						<ellipse
							cx="18"
							cy="7"
							rx="2"
							ry="3"
							fill="var(--olive)"
							transform="rotate(30 18 7)"
						/>
					</svg>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center space-x-1 lg:flex">
				{#each navLinks as link}
					{@const isActive = $page.url.pathname.startsWith(link.href) && link.href !== '/'}
					{@const isExactActive = $page.url.pathname === link.href}
					{@const textColor =
						scrolled || !isHeroSection ? 'text-[var(--charcoal)]' : 'text-white'}
					{@const hoverColor =
						scrolled || !isHeroSection
							? 'hover:text-[var(--azure)]'
							: 'hover:text-[var(--coral)]'}

					{#if link.submenu}
						<div class="group relative">
							<a
								href={link.href}
								class="group relative flex items-center space-x-1 px-4 py-2 text-[0.95rem] font-medium transition-colors duration-200 {isActive
									? scrolled || !isHeroSection
										? 'text-[var(--azure)]'
										: 'text-[var(--coral)]'
									: textColor} {hoverColor}"
							>
								<span>{link.name}</span>
								<ChevronDown
									class="h-4 w-4 transition-transform duration-200 ease-out group-hover:rotate-180"
								/>
								{#if isActive}
									<div
										class="absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 rounded-full {scrolled || !isHeroSection ? 'bg-[var(--azure)]' : 'bg-[var(--coral)]'}"
									></div>
								{/if}
							</a>
							<div
								class="invisible absolute top-full left-0 mt-2 w-56 translate-y-2 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
							>
								<div
									class="overflow-hidden rounded-xl border border-[var(--sand)] bg-white/95 p-2 shadow-mediterranean backdrop-blur-lg"
								>
									{#each link.submenu as sublink}
										<a
											href={sublink.href}
											class="block rounded-lg px-4 py-3 text-sm transition-all duration-200 {$page
												.url.pathname === sublink.href
												? 'bg-[var(--cream)] font-semibold text-[var(--azure)]'
												: 'text-[var(--charcoal)] hover:bg-[var(--cream)] hover:translate-x-1'}"
										>
											{sublink.name}
										</a>
									{/each}
								</div>
							</div>
						</div>
					{:else}
						<a
							href={link.href}
							class="group relative px-4 py-2 text-[0.95rem] font-medium transition-colors duration-200 {isExactActive
								? scrolled || !isHeroSection
									? 'text-[var(--azure)]'
									: 'text-[var(--coral)]'
								: textColor} {hoverColor}"
						>
							<span>{link.name}</span>
							{#if isExactActive}
								<div
									class="absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 rounded-full {scrolled || !isHeroSection ? 'bg-[var(--azure)]' : 'bg-[var(--coral)]'}"
								></div>
							{/if}
						</a>
					{/if}
				{/each}

				<!-- CTA Button -->
				<a href="/contact" class="ml-4">
					<Button
						class="btn-nav rounded-lg px-8 py-3 transition-all duration-200 hover:shadow-md {scrolled || !isHeroSection
							? 'bg-[var(--azure)] text-white hover:brightness-110'
							: 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'}"
					>
						Get in Touch
					</Button>
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<button
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				class="rounded-lg p-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--azure)] lg:hidden {scrolled || !isHeroSection
					? 'text-[var(--charcoal)] hover:bg-[var(--cream)]'
					: 'text-white hover:bg-white/20'}"
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<X class="h-6 w-6" />
				{:else}
					<Menu class="h-6 w-6" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div
			class="animate-in slide-in-from-top-2 fade-in-0 border-t border-[var(--sand)] bg-white/95 shadow-mediterranean backdrop-blur-lg duration-200 lg:hidden"
		>
			<div class="container mx-auto px-4 py-4">
				<div class="space-y-1">
					{#each navLinks as link}
						{#if link.submenu}
							<div class="space-y-1">
								<a
									href={link.href}
									class="block rounded-lg px-4 py-3 font-medium text-[var(--charcoal)] transition-colors duration-200 hover:bg-[var(--cream)]"
									onclick={() => (mobileMenuOpen = false)}
								>
									{link.name}
								</a>
								<div class="space-y-1 pl-4">
									{#each link.submenu as sublink}
										<a
											href={sublink.href}
											class="block rounded-lg px-4 py-2 text-sm transition-colors duration-200 hover:bg-[var(--cream)] {$page
												.url.pathname === sublink.href
												? 'font-semibold text-[var(--azure)]'
												: 'text-[var(--stone)]'}"
											onclick={() => (mobileMenuOpen = false)}
										>
											{sublink.name}
										</a>
									{/each}
								</div>
							</div>
						{:else}
							<a
								href={link.href}
								class="block rounded-lg px-4 py-3 font-medium transition-colors duration-200 hover:bg-[var(--cream)] {$page
									.url.pathname === link.href
									? 'font-semibold text-[var(--azure)]'
									: 'text-[var(--charcoal)]'}"
								onclick={() => (mobileMenuOpen = false)}
							>
								{link.name}
							</a>
						{/if}
					{/each}

					<div class="border-t border-[var(--sand)] pt-4">
						<a href="/contact" class="block" onclick={() => (mobileMenuOpen = false)}>
							<Button
								class="w-full rounded-lg bg-[var(--azure)] px-8 py-3 text-white transition-all duration-200"
							>
								Get in Touch
							</Button>
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</nav>

<!-- Spacer to prevent content from going under fixed nav -->
<div class="h-20"></div>

<style>
	.nav-transparent {
		background: transparent;
	}

	.nav-scrolled {
		background: rgba(255, 255, 255, 0.92);
		backdrop-filter: blur(20px) saturate(180%);
		-webkit-backdrop-filter: blur(20px) saturate(180%);
	}

	/* Subtle texture overlay for nav */
	.nav-scrolled::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
		opacity: 0.015;
		pointer-events: none;
	}
</style>
