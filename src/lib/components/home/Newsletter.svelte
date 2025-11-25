<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { VintageButton } from '$lib/components/ui/decorative';
	import { Mail, Send, Plane } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	let email = $state('');
	let isSubmitting = $state(false);
	let isSuccess = $state(false);
	let isFocused = $state(false);

	async function handleNewsletter(e: Event) {
		e.preventDefault();
		isSubmitting = true;

		// Simulate submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		isSuccess = true;
		isSubmitting = false;
		email = '';

		// Reset success state after animation
		setTimeout(() => {
			isSuccess = false;
		}, 3000);
	}
</script>

<section id="newsletter" class="texture-grain relative overflow-hidden bg-[var(--cream)] py-24">
	<!-- Decorative wave at top -->
	<div class="absolute top-0 right-0 left-0">
		<svg
			class="h-12 w-full"
			viewBox="0 0 1200 60"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0,60 C300,20 600,50 900,30 C1050,20 1100,40 1200,30 L1200,0 L0,0 Z"
				fill="var(--sand)"
			></path>
		</svg>
	</div>

	<!-- Background decorative elements -->
	<div class="pointer-events-none absolute inset-0">
		<!-- Floating envelopes -->
		<div class="absolute top-20 left-[10%] animate-float opacity-10">
			<Mail class="h-16 w-16 text-[var(--azure)]" />
		</div>
		<div class="absolute top-40 right-[15%] animate-float-delayed opacity-10">
			<Mail class="h-12 w-12 text-[var(--terracotta)]" />
		</div>
		<div class="absolute bottom-32 left-[20%] animate-float-slow opacity-10">
			<Send class="h-10 w-10 text-[var(--olive)]" />
		</div>

		<!-- Postage stamp pattern -->
		<div class="absolute top-10 right-10 opacity-[0.05]">
			<div class="vintage-stamp h-24 w-20 bg-[var(--coral)]"></div>
		</div>
	</div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-2xl" use:reveal>
			<!-- Envelope-style card -->
			<div
				class="relative rounded-2xl border border-[var(--sand)] bg-white p-8 shadow-mediterranean-lg transition-all duration-300 md:p-12"
				class:envelope-open={isFocused}
			>
				<!-- Envelope flap decoration -->
				<div
					class="absolute -top-1 right-0 left-0 h-16 overflow-hidden transition-transform duration-500 origin-bottom"
					class:open-flap={isFocused}
				>
					<div
						class="absolute inset-0 bg-gradient-to-b from-[var(--cream)] to-[var(--sand)]"
						style="clip-path: polygon(0 100%, 50% 20%, 100% 100%);"
					></div>
				</div>

				<div class="text-center">
					<!-- Animated icon -->
					<div class="relative mx-auto mb-6 h-20 w-20">
						{#if isSuccess}
							<!-- Paper airplane animation on success -->
							<div class="animate-paper-airplane absolute inset-0 flex items-center justify-center">
								<Plane class="h-10 w-10 text-[var(--azure)]" />
							</div>
						{:else}
							<div
								class="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--azure)] to-[var(--deep-azure)] shadow-lg transition-transform duration-300"
								class:scale-110={isFocused}
							>
								<Mail class="h-10 w-10 text-white transition-transform duration-300" />
							</div>
						{/if}
					</div>

					<!-- Section label -->
					<div class="mb-4 flex items-center justify-center gap-3">
						<div class="h-px w-8 bg-[var(--azure)]"></div>
						<span class="font-serif text-sm tracking-[0.2em] text-[var(--azure)] uppercase"
							>Newsletter</span
						>
						<div class="h-px w-8 bg-[var(--azure)]"></div>
					</div>

					<h2
						class="heading-serif mb-4 text-3xl font-semibold text-[var(--charcoal)] sm:text-4xl"
					>
						{#if isSuccess}
							<span class="text-[var(--olive)]">Grazie Mille!</span>
						{:else}
							Stay <span class="text-[var(--azure)]">Connected</span>
						{/if}
					</h2>

					<p class="mx-auto mb-8 max-w-xl text-lg text-[var(--stone)]">
						{#if isSuccess}
							You're now part of our travel community. Check your inbox for a welcome surprise!
						{:else}
							Get exclusive travel tips, insider guides, and special offers delivered to your inbox
						{/if}
					</p>

					{#if !isSuccess}
						<form onsubmit={handleNewsletter} class="space-y-4">
							<div class="flex flex-col gap-4 sm:flex-row">
								<div class="relative flex-1">
									<Input
										type="email"
										placeholder="Enter your email address"
										bind:value={email}
										onfocus={() => (isFocused = true)}
										onblur={() => (isFocused = false)}
										required
										disabled={isSubmitting}
										class="h-14 rounded-xl border-[var(--sand)] bg-[var(--warm-white)] px-5 text-base transition-all duration-200 placeholder:text-[var(--stone)]/60 focus:border-[var(--azure)] focus:ring-2 focus:ring-[var(--azure)]/20"
									/>
									<!-- Decorative envelope icon inside input -->
									<div
										class="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[var(--stone)]/30"
									>
										<Mail class="h-5 w-5" />
									</div>
								</div>

								<VintageButton
									type="submit"
									variant="azure"
									size="lg"
									disabled={isSubmitting}
									class="h-14 min-w-[140px] {isSubmitting ? 'animate-pulse' : ''}"
								>
									{#if isSubmitting}
										<span>Sending...</span>
									{:else}
										<span>Subscribe</span>
										<Send class="h-4 w-4" />
									{/if}
								</VintageButton>
							</div>
						</form>

						<p class="mt-6 flex items-center justify-center gap-2 text-sm text-[var(--stone)]">
							<span>Join 10,000+ travelers</span>
							<span class="text-[var(--sand)]">•</span>
							<span>Unsubscribe anytime</span>
						</p>
					{:else}
						<!-- Success animation -->
						<div class="flex items-center justify-center gap-2 text-[var(--olive)]">
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span class="font-medium">Successfully subscribed!</span>
						</div>
					{/if}
				</div>

				<!-- Postage stamp decoration -->
				<div class="absolute -top-4 -right-4 hidden md:block">
					<div
						class="relative rounded bg-[var(--coral)] px-4 py-3 shadow-lg"
						style="transform: rotate(12deg);"
					>
						<div class="absolute -inset-1.5">
							<svg class="h-full w-full" preserveAspectRatio="none">
								<defs>
									<pattern
										id="newsletter-stamp"
										width="10"
										height="10"
										patternUnits="userSpaceOnUse"
									>
										<circle cx="5" cy="5" r="2.5" fill="var(--cream)" />
									</pattern>
								</defs>
								<rect width="100%" height="100%" fill="url(#newsletter-stamp)" opacity="0.3" />
							</svg>
						</div>
						<div class="relative text-center">
							<div class="font-serif text-[0.6rem] font-bold tracking-widest text-white/80">
								POSTA
							</div>
							<div class="font-serif text-sm font-bold tracking-wider text-white">ITALIANA</div>
							<div class="mt-0.5 text-[0.5rem] tracking-wider text-white/70">€ 0.00</div>
						</div>
					</div>
				</div>

				<!-- Decorative corners -->
				<div class="pointer-events-none absolute bottom-4 left-4 h-6 w-6 opacity-20">
					<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--terracotta)]">
						<path
							d="M3 21v-6M3 21h6"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>
				<div class="pointer-events-none absolute right-4 bottom-4 h-6 w-6 opacity-20">
					<svg viewBox="0 0 24 24" fill="none" class="h-full w-full text-[var(--terracotta)]">
						<path
							d="M21 21v-6M21 21h-6"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.open-flap {
		transform: rotateX(-30deg);
		transform-origin: bottom center;
	}
</style>
