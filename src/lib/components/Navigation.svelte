<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Menu, X, ChevronDown } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);
	let hidden = $state(false);
	let lastScroll = $state(0);

	// Advanced scroll handling with hide/show on scroll
	onMount(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;
			scrolled = currentScroll > 50;

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

	const navLinks = [
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
			submenu: [
				{ name: 'Capri', href: '/surrounding/capri' },
				{ name: 'Amalfi Coast', href: '/surrounding/amalfi' },
				{ name: 'Naples', href: '/surrounding/naples' },
				{ name: 'Procida', href: '/surrounding/procida' },
				{ name: 'Ischia', href: '/surrounding/ischia' },
				{ name: 'Salerno', href: '/surrounding/salerno' }
			]
		},
		{ name: 'Blog', href: '/blog' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 bg-white transition-all duration-300 {hidden
		? '-translate-y-full'
		: 'translate-y-0'} {scrolled ? 'shadow-md' : 'shadow-sm'}"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="group flex items-center space-x-2">
				<div class="text-xl font-bold sm:text-2xl">
					<span style="color: var(--azure);">W</span><span style="color: var(--sand);">2</span><span
						style="color: var(--azure);">S</span
					>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center space-x-1 lg:flex">
				{#each navLinks as link}
					{#if link.submenu}
						{@const isActive = $page.url.pathname.startsWith(link.href)}
						<div class="group relative">
							<a
								href={link.href}
								class="group relative flex items-center space-x-1 px-4 py-2 text-[0.95rem] font-medium transition-colors duration-200 {isActive
									? 'text-[color:var(--azure)]'
									: 'text-[color:var(--charcoal)] hover:text-[color:var(--azure)]'}"
							>
								<span>{link.name}</span>
								<ChevronDown
									class="h-4 w-4 transition-transform duration-200 ease-out group-hover:rotate-90"
								/>
								{#if isActive}
									<div
										class="absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 rounded-full"
										style="background-color: var(--azure);"
									></div>
								{/if}
							</a>
							<div
								class="invisible absolute top-full left-0 mt-2 w-56 translate-y-2 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
							>
								<div
									class="overflow-hidden rounded-xl border bg-white p-2 shadow-lg"
									style="border-color: var(--sand);"
								>
									{#each link.submenu as sublink}
										<a
											href={sublink.href}
											class="block rounded-lg px-4 py-3 text-sm transition-colors duration-200 {$page
												.url.pathname === sublink.href
												? 'font-semibold'
												: 'hover:bg-[color:var(--cream)]'}"
											style="color: {$page.url.pathname === sublink.href
												? 'var(--azure)'
												: 'var(--charcoal)'};"
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
							class="group relative px-4 py-2 text-[0.95rem] font-medium transition-colors duration-200 {$page
								.url.pathname === link.href
								? 'text-[color:var(--azure)]'
								: 'text-[color:var(--charcoal)] hover:text-[color:var(--azure)]'}"
						>
							<span>{link.name}</span>
							{#if $page.url.pathname === link.href}
								<div
									class="absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 rounded-full"
									style="background-color: var(--azure);"
								></div>
							{/if}
						</a>
					{/if}
				{/each}

				<!-- CTA Button -->
				<a href="/contact" class="ml-4">
					<Button
						class="rounded-lg px-8 py-3 text-white transition-all duration-200 hover:shadow-md hover:brightness-110"
						style="background-color: var(--azure);"
					>
						Get in Touch
					</Button>
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<button
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				class="rounded-lg p-2 transition-colors duration-200 hover:bg-[color:var(--cream)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--azure)] lg:hidden"
				style="color: var(--charcoal);"
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
			class="border-t bg-white shadow-md animate-in slide-in-from-top-2 fade-in-0 duration-200 lg:hidden"
			style="border-color: var(--sand);"
		>
			<div class="container mx-auto px-4 py-4">
				<div class="space-y-1">
					{#each navLinks as link}
						{#if link.submenu}
							<div class="space-y-1">
								<a
									href={link.href}
									class="block rounded-lg px-4 py-3 font-medium transition-colors duration-200 hover:bg-[color:var(--cream)]"
									style="color: var(--charcoal);"
								>
									{link.name}
								</a>
								<div class="space-y-1 pl-4">
									{#each link.submenu as sublink}
										<a
											href={sublink.href}
											class="block rounded-lg px-4 py-2 text-sm transition-colors duration-200 hover:bg-[color:var(--cream)] {$page
												.url.pathname === sublink.href
												? 'font-semibold'
												: ''}"
											style="color: {$page.url.pathname === sublink.href
												? 'var(--azure)'
												: 'var(--stone)'};"
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
								class="block rounded-lg px-4 py-3 font-medium transition-colors duration-200 hover:bg-[color:var(--cream)] {$page
									.url.pathname === link.href
									? 'font-semibold'
									: ''}"
								style="color: {$page.url.pathname === link.href
									? 'var(--azure)'
									: 'var(--charcoal)'};"
								onclick={() => (mobileMenuOpen = false)}
							>
								{link.name}
							</a>
						{/if}
					{/each}

					<div class="border-t pt-4" style="border-color: var(--sand);">
						<a href="/contact" class="block" onclick={() => (mobileMenuOpen = false)}>
							<Button
								class="w-full rounded-lg px-8 py-3 text-white transition-all duration-200"
								style="background-color: var(--azure);"
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
