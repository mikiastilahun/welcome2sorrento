<script lang="ts">
	import {
		Facebook,
		Instagram,
		Twitter,
		Mail,
		Phone,
		Heart,
		ExternalLink,
		Send
	} from '@lucide/svelte';
	import Logo from '$lib/components/Logo.svelte';
	import type { SiteSettings } from '$lib/sanity/queries';

	interface Props {
		siteSettings?: SiteSettings | null;
	}

	let { siteSettings = null }: Props = $props();

	let currentYear = new Date().getFullYear();
	let email = $state('');
	let isHovering = $state(false);

	// Get footer content from CMS with fallbacks
	const greeting = siteSettings?.footer?.greeting || 'Ciao!';
	const description =
		siteSettings?.footer?.description ||
		'Your ultimate guide to discovering the magic of Sorrento and the breathtaking Amalfi Coast. Created with passion by locals who know every hidden gem.';
	const madeWithLove = siteSettings?.footer?.madeWithLove || 'in Italia';
	const copyrightText = siteSettings?.footer?.copyrightText || 'Welcome2Sorrento';
	const quickLinksTitle = siteSettings?.footer?.quickLinksTitle || 'Quick Links';
	const servicesTitle = siteSettings?.footer?.servicesTitle || 'Our Services';
	const subscribeTitle = siteSettings?.footer?.subscribeTitle || 'Quick Subscribe';

	// Get contact info from CMS
	const contactEmail = siteSettings?.contactInfo?.email || 'hello@welcome2sorrento.com';
	const contactPhone = siteSettings?.contactInfo?.phone || '+39 123 456 789';
	const contactAvailability = siteSettings?.contactInfo?.availability || 'Available 24/7';

	// Get social links from CMS
	const facebookUrl = siteSettings?.socialMedia?.facebook || '#facebook';
	const instagramUrl = siteSettings?.socialMedia?.instagram || '#instagram';
	const twitterUrl = siteSettings?.socialMedia?.twitter || '#twitter';

	// Get quick links from CMS or use defaults
	const quickLinks =
		siteSettings?.footer?.quickLinks && siteSettings.footer.quickLinks.length > 0
			? siteSettings.footer.quickLinks.map((link) => ({
					name: link.label,
					href: link.href
				}))
			: [
					{ name: 'Home', href: '/' },
					{ name: 'Sorrento Guide', href: '/sorrento' },
					{ name: 'Destinations', href: '/surrounding' },
					{ name: 'Blog', href: '/blog' },
					{ name: 'About Us', href: '/about' }
				];

	// Get services links from CMS or use defaults
	const services =
		siteSettings?.footer?.services && siteSettings.footer.services.length > 0
			? siteSettings.footer.services.map((link) => ({
					name: link.label,
					href: link.href
				}))
			: [
					{ name: 'WhatsApp Booking', href: '/about#services' },
					{ name: 'Accommodations', href: '/sorrento/stay' },
					{ name: 'Restaurants', href: '/sorrento/eat' },
					{ name: 'Activities', href: '/sorrento/do' },
					{ name: 'Contact Us', href: '/contact' }
				];

	function handleQuickSubscribe(e: Event) {
		e.preventDefault();
		// TODO: Implement newsletter subscription
		email = '';
	}
</script>

<footer class="relative bg-[var(--charcoal)]">
	<!-- Decorative wave top border -->
	<div class="absolute -top-px left-0 right-0">
		<svg
			class="h-8 w-full"
			viewBox="0 0 1200 32"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0,32 C150,20 300,32 450,24 C600,16 750,28 900,24 C1050,20 1150,28 1200,24 L1200,0 L0,0 Z"
				fill="var(--charcoal)"
			></path>
		</svg>
	</div>

	<!-- Italian flag stripe -->
	<div class="flex h-1">
		<div class="flex-1 bg-[oklch(0.45_0.12_145)]"></div>
		<div class="flex-1 bg-white"></div>
		<div class="flex-1 bg-[oklch(0.55_0.2_25)]"></div>
	</div>

	<div class="relative">
		<!-- Main Footer Content -->
		<div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
			<div class="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
				<!-- Brand Section (Larger) -->
				<div class="space-y-6 lg:col-span-5">
					<div class="flex items-center space-x-3">
						<a href="/" class="group">
							<Logo class="text-3xl text-white" />
						</a>
					</div>

					<!-- Animated Ciao greeting -->
					<div
						class="inline-flex items-center gap-2"
						role="presentation"
						onmouseenter={() => (isHovering = true)}
						onmouseleave={() => (isHovering = false)}
					>
						<span
							class="font-serif text-2xl font-semibold text-[var(--coral)] {isHovering
								? 'animate-ciao'
								: ''}"
						>
							{greeting}
						</span>
						<span class="text-lg {isHovering ? 'animate-wave' : ''}" role="img" aria-label="wave"
							>👋</span
						>
					</div>

					<p class="max-w-md text-lg leading-relaxed text-white/70">
						{description}
					</p>

					<!-- Contact Info Cards -->
					<div class="space-y-3">
						<a
							href="mailto:{contactEmail}"
							class="hover:border-[var(--azure)]/30 group flex items-center space-x-3 rounded-xl border border-white/10 p-4 transition-all duration-300 ease-out hover:bg-white/5"
						>
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--azure)] to-[var(--deep-azure)] transition-transform duration-300 ease-out group-hover:scale-110"
							>
								<Mail class="h-5 w-5 text-white" />
							</div>
							<div class="flex-1">
								<div class="mb-0.5 text-xs text-white/50">Email Us</div>
								<div class="font-medium text-white/90">{contactEmail}</div>
							</div>
							<ExternalLink
								class="h-4 w-4 text-white/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/90"
							/>
						</a>

						<a
							href="tel:{contactPhone.replace(/\s/g, '')}"
							class="hover:border-[var(--terracotta)]/30 group flex items-center space-x-3 rounded-xl border border-white/10 p-4 transition-all duration-300 ease-out hover:bg-white/5"
						>
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--terracotta)] to-[oklch(0.55_0.15_35)] transition-transform duration-300 ease-out group-hover:scale-110"
							>
								<Phone class="h-5 w-5 text-white" />
							</div>
							<div class="flex-1">
								<div class="mb-0.5 text-xs text-white/50">WhatsApp</div>
								<div class="font-medium text-white/90">{contactAvailability}</div>
							</div>
							<ExternalLink
								class="h-4 w-4 text-white/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/90"
							/>
						</a>
					</div>

					<!-- Social Links with Italian hover animations -->
					<div class="flex space-x-3 pt-4">
						<a
							href={facebookUrl}
							class="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[var(--azure)] to-[var(--deep-azure)] transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							aria-label="Facebook"
						>
							<Facebook class="h-5 w-5 text-white transition-transform group-hover:scale-110" />
						</a>
						<a
							href={instagramUrl}
							class="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[var(--coral)] to-[var(--terracotta)] transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							aria-label="Instagram"
						>
							<Instagram class="h-5 w-5 text-white transition-transform group-hover:scale-110" />
						</a>
						<a
							href={twitterUrl}
							class="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[var(--olive)] to-[oklch(0.45_0.1_125)] transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							aria-label="Twitter"
						>
							<Twitter class="h-5 w-5 text-white transition-transform group-hover:scale-110" />
						</a>
					</div>
				</div>

				<!-- Quick Links -->
				<div class="space-y-6 lg:col-span-2">
					<h4 class="font-serif text-lg font-bold tracking-wider text-white">{quickLinksTitle}</h4>
					<ul class="space-y-3">
						{#each quickLinks as link}
							<li>
								<a
									href={link.href}
									class="group flex items-center text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
								>
									<span
										class="mr-2 h-1 w-0 rounded-full bg-[var(--azure)] transition-all duration-200 group-hover:w-2"
									></span>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Our Services -->
				<div class="space-y-6 lg:col-span-2">
					<h4 class="font-serif text-lg font-bold tracking-wider text-white">{servicesTitle}</h4>
					<ul class="space-y-3">
						{#each services as service}
							<li>
								<a
									href={service.href}
									class="group flex items-center text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
								>
									<span
										class="mr-2 h-1 w-0 rounded-full bg-[var(--terracotta)] transition-all duration-200 group-hover:w-2"
									></span>
									{service.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Quick Subscribe -->
				<div class="space-y-6 lg:col-span-3">
					<div class="pt-6">
						<h5 class="mb-3 font-serif text-sm font-semibold tracking-wider text-white/80">
							{subscribeTitle}
						</h5>
						<form onsubmit={handleQuickSubscribe} class="space-y-3">
							<div class="relative">
								<input
									type="email"
									placeholder="Your email"
									bind:value={email}
									required
									class="focus:border-[var(--azure)]/50 h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 pr-12 text-white outline-none transition-all placeholder:text-white/40 focus:bg-white/10"
								/>
								<button
									type="submit"
									class="absolute bottom-1 right-1 top-1 flex items-center justify-center rounded-lg bg-gradient-to-br from-[var(--azure)] to-[var(--deep-azure)] px-3 transition-all duration-200 ease-out hover:scale-105 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-white"
									aria-label="Subscribe"
								>
									<Send class="h-4 w-4 text-white" />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<!-- Decorative divider with Italian motif -->
			<div class="mb-8 flex items-center">
				<div
					class="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"
				></div>
				<div class="mx-4 flex items-center gap-2">
					<div class="h-2 w-2 rotate-45 bg-[oklch(0.45_0.12_145)]"></div>
					<div class="h-2 w-2 rotate-45 bg-white/50"></div>
					<div class="h-2 w-2 rotate-45 bg-[oklch(0.55_0.2_25)]"></div>
				</div>
				<div
					class="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"
				></div>
			</div>

			<!-- Bottom Bar -->
			<div class="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
				<div class="flex items-center space-x-2 text-sm text-white/60">
					<span>© {currentYear} {copyrightText}.</span>
					<span class="hidden sm:inline">Made with</span>
					<Heart
						class="h-4 w-4 fill-[var(--terracotta)] text-[var(--terracotta)] transition-transform hover:scale-125"
					/>
					<span class="hidden sm:inline">{madeWithLove}</span>
				</div>

				<div class="flex items-center space-x-6">
					<a
						href="/privacy"
						class="text-sm text-white/60 transition-colors duration-200 hover:text-white"
					>
						Privacy Policy
					</a>
					<div class="h-1 w-1 rounded-full bg-white/30"></div>
					<a
						href="/terms"
						class="text-sm text-white/60 transition-colors duration-200 hover:text-white"
					>
						Terms of Service
					</a>
					<div class="h-1 w-1 rounded-full bg-white/30"></div>
					<a
						href="/contact"
						class="text-sm text-white/60 transition-colors duration-200 hover:text-white"
					>
						Contact
					</a>
				</div>
			</div>
		</div>

		<!-- Decorative Sorrento coastline silhouette -->
		<div class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 opacity-[0.03]">
			<svg class="h-full w-full" viewBox="0 0 1200 100" preserveAspectRatio="none" fill="white">
				<path
					d="M0,100 L0,80 C50,75 100,85 150,70 C200,55 250,60 300,50 C350,40 400,45 450,35 C500,25 550,30 600,20 C650,10 700,15 750,25 C800,35 850,30 900,40 C950,50 1000,45 1050,55 C1100,65 1150,60 1200,70 L1200,100 Z"
				/>
			</svg>
		</div>
	</div>
</footer>
