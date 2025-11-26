<script lang="ts">
	import type { ContactPage } from '$lib/sanity/queries';
	import { PostcardFrame, VintageButton } from '$lib/components/ui/decorative';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import {
		Mail,
		Phone,
		MapPin,
		MessageCircle,
		Send,
		Facebook,
		Instagram,
		Twitter,
		Clock,
		Sparkles,
		Plane
	} from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		data: {
			contactPage: ContactPage | null;
		};
	}

	let { data }: Props = $props();

	const contactData = data.contactPage || {} as ContactPage;

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
		service: 'general'
	});

	let isSubmitting = $state(false);
	let isSuccess = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		
		// Simulate submission
		await new Promise(resolve => setTimeout(resolve, 1500));
		
		isSuccess = true;
		isSubmitting = false;
		
		// Reset form
		formData = {
			name: '',
			email: '',
			phone: '',
			subject: '',
			message: '',
			service: 'general'
		};
		
		setTimeout(() => {
			isSuccess = false;
		}, 3000);
	}
</script>

<svelte:head>
	<title>{contactData.seo?.metaTitle || 'Contact Us - Get in Touch | Welcome2Sorrento'}</title>
	<meta
		name="description"
		content={contactData.seo?.metaDescription ||
			'Contact Welcome2Sorrento for travel planning, booking assistance, or any questions about Sorrento and the Amalfi Coast.'}
	/>
</svelte:head>

<div class="-mt-24">
	<!-- Hero Section -->
	<PageHeader
		title={contactData.title || 'Get in Touch'}
		subtitle={contactData.subtitle || "We're here to help plan your perfect Sorrento experience"}
		image="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1920&q=80"
		label="Contattaci"
	/>

	<!-- Contact Form & Info -->
	<section class="texture-grain relative bg-[var(--warm-white)] py-24">
		<!-- Decorative tile border -->
		<div class="absolute top-0 right-0 left-0">
			<div class="mx-auto max-w-7xl px-4">
				<div class="border-tile-decorative"></div>
			</div>
		</div>

		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
				<!-- Contact Form -->
				<div class="scroll-reveal lg:col-span-2" use:reveal>
					<Card class="border-[var(--sand)] shadow-mediterranean-lg">
						<CardHeader class="px-8 pt-8 pb-6 sm:px-12 sm:pt-12">
							<!-- Envelope icon with animation -->
							<div class="mb-6 flex items-center gap-4">
								<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--azure)] to-[var(--deep-azure)] shadow-lg">
									{#if isSuccess}
										<Plane class="h-7 w-7 text-white animate-paper-airplane" />
									{:else}
										<Mail class="h-7 w-7 text-white" />
									{/if}
								</div>
								<div>
									<CardTitle class="heading-serif text-3xl text-[var(--charcoal)]">
										{isSuccess ? 'Message Sent!' : 'Send Us a Message'}
									</CardTitle>
									<p class="text-[var(--stone)]">
										{isSuccess ? 'We\'ll get back to you soon' : 'We\'ll respond within 24 hours'}
									</p>
								</div>
							</div>
						</CardHeader>
						<CardContent class="px-8 pb-8 sm:px-12 sm:pb-12">
							{#if !isSuccess}
								<form onsubmit={handleSubmit} class="space-y-6">
									<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
										<div class="space-y-2">
											<Label for="name" class="text-base font-medium text-[var(--charcoal)]">Name *</Label>
											<Input
												id="name"
												type="text"
												placeholder="Your full name"
												bind:value={formData.name}
												required
												class="h-12 rounded-xl border-[var(--sand)] bg-[var(--warm-white)] transition-colors focus-visible:border-[var(--azure)] focus-visible:ring-[var(--azure)]/20"
											/>
										</div>
										<div class="space-y-2">
											<Label for="email" class="text-base font-medium text-[var(--charcoal)]">Email *</Label>
											<Input
												id="email"
												type="email"
												placeholder="your@email.com"
												bind:value={formData.email}
												required
												class="h-12 rounded-xl border-[var(--sand)] bg-[var(--warm-white)] transition-colors focus-visible:border-[var(--azure)] focus-visible:ring-[var(--azure)]/20"
											/>
										</div>
									</div>

									<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
										<div class="space-y-2">
											<Label for="phone" class="text-base font-medium text-[var(--charcoal)]">Phone</Label>
											<Input
												id="phone"
												type="tel"
												placeholder="+1 234 567 8900"
												bind:value={formData.phone}
												class="h-12 rounded-xl border-[var(--sand)] bg-[var(--warm-white)] transition-colors focus-visible:border-[var(--azure)] focus-visible:ring-[var(--azure)]/20"
											/>
										</div>
										<div class="space-y-2">
											<Label for="service" class="text-base font-medium text-[var(--charcoal)]">I'm interested in</Label>
											<select
												id="service"
												bind:value={formData.service}
												class="flex h-12 w-full rounded-xl border border-[var(--sand)] bg-[var(--warm-white)] px-4 py-2 text-base transition-colors focus-visible:border-[var(--azure)] focus-visible:ring-2 focus-visible:ring-[var(--azure)]/20 focus-visible:outline-none"
											>
												<option value="general">General Inquiry</option>
												<option value="booking">Booking Service</option>
												<option value="restaurant">Restaurant Reservations</option>
												<option value="accommodation">Accommodation Help</option>
												<option value="tours">Tours & Activities</option>
												<option value="itinerary">Custom Itinerary</option>
											</select>
										</div>
									</div>

									<div class="space-y-2">
										<Label for="subject" class="text-base font-medium text-[var(--charcoal)]">Subject *</Label>
										<Input
											id="subject"
											type="text"
											placeholder="What can we help you with?"
											bind:value={formData.subject}
											required
											class="h-12 rounded-xl border-[var(--sand)] bg-[var(--warm-white)] transition-colors focus-visible:border-[var(--azure)] focus-visible:ring-[var(--azure)]/20"
										/>
									</div>

									<div class="space-y-2">
										<Label for="message" class="text-base font-medium text-[var(--charcoal)]">Message *</Label>
										<Textarea
											id="message"
											placeholder="Tell us about your travel plans, dates, preferences, or any questions you have..."
											bind:value={formData.message}
											required
											rows={6}
											class="resize-none rounded-xl border-[var(--sand)] bg-[var(--warm-white)] transition-colors focus-visible:border-[var(--azure)] focus-visible:ring-[var(--azure)]/20"
										/>
									</div>

									<VintageButton type="submit" variant="azure" size="lg" class="w-full" disabled={isSubmitting}>
										{#if isSubmitting}
											<span class="animate-pulse">Sending...</span>
										{:else}
											<Send class="h-5 w-5" />
											<span>Send Message</span>
										{/if}
									</VintageButton>

									<p class="text-center text-sm text-[var(--stone)]">
										We respect your privacy. Your information is secure and will never be shared.
									</p>
								</form>
							{:else}
								<div class="py-12 text-center">
									<div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--olive)]/10">
										<svg class="h-10 w-10 text-[var(--olive)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<h3 class="heading-serif mb-2 text-2xl font-semibold text-[var(--charcoal)]">Grazie Mille!</h3>
									<p class="text-[var(--stone)]">Your message has been sent successfully. We'll be in touch soon!</p>
								</div>
							{/if}
						</CardContent>
					</Card>
				</div>

				<!-- Contact Information -->
				<div class="scroll-reveal space-y-6" style="transition-delay: 200ms" use:reveal>
					<!-- Direct Contact -->
					<PostcardFrame showStamp stampText="POSTA">
						<h3 class="heading-serif mb-6 text-xl font-semibold text-[var(--charcoal)]">
							Contact Information
						</h3>
						<div class="space-y-4">
							{#if contactData.contactInfo?.email}
								<a
									href="mailto:{contactData.contactInfo.email}"
									class="group flex items-start space-x-4 rounded-lg p-3 transition-colors duration-200 ease-out hover:bg-[var(--cream)]"
								>
									<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--azure)] to-[var(--deep-azure)] transition-transform duration-200 ease-out group-hover:scale-105">
										<Mail class="h-5 w-5 text-white" />
									</div>
									<div>
										<div class="mb-0.5 text-sm font-semibold text-[var(--charcoal)]">Email</div>
										<span class="text-sm text-[var(--stone)] transition-colors group-hover:text-[var(--azure)]">
											{contactData.contactInfo.email}
										</span>
									</div>
								</a>
							{/if}

							{#if contactData.contactInfo?.phone || contactData.contactInfo?.whatsapp}
								<a
									href="tel:{contactData.contactInfo.whatsapp || contactData.contactInfo.phone}"
									class="group flex items-start space-x-4 rounded-lg p-3 transition-colors duration-200 ease-out hover:bg-[var(--cream)]"
								>
									<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--olive)] to-[oklch(0.45_0.1_125)] transition-transform duration-200 ease-out group-hover:scale-105">
										<Phone class="h-5 w-5 text-white" />
									</div>
									<div>
										<div class="mb-0.5 text-sm font-semibold text-[var(--charcoal)]">WhatsApp</div>
										<span class="text-sm font-medium text-[var(--azure)]">
											{contactData.contactInfo.whatsapp || contactData.contactInfo.phone}
										</span>
									</div>
								</a>
							{/if}

							{#if contactData.contactInfo?.address}
								<div class="flex items-start space-x-4 rounded-lg p-3">
									<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--terracotta)] to-[oklch(0.55_0.15_35)]">
										<MapPin class="h-5 w-5 text-white" />
									</div>
									<div>
										<div class="mb-0.5 text-sm font-semibold text-[var(--charcoal)]">Location</div>
										<p class="text-sm text-[var(--stone)]">{contactData.contactInfo.address}</p>
									</div>
								</div>
							{/if}
						</div>
					</PostcardFrame>

					<!-- Response Time -->
					<Card class="border-[var(--azure)] bg-gradient-to-br from-[var(--azure)] to-[var(--deep-azure)] shadow-lg">
						<CardContent class="p-6 text-white">
							<div class="mb-4 flex items-center space-x-4">
								<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
									<Clock class="h-6 w-6" />
								</div>
								<h3 class="heading-serif text-xl font-semibold">Quick Response</h3>
							</div>
							<p class="leading-relaxed text-white/90">
								We typically respond within 24 hours. For urgent booking requests, WhatsApp is the
								fastest way to reach us.
							</p>
						</CardContent>
					</Card>

					<!-- Social Media -->
					{#if contactData.socialMedia}
						<Card class="border-[var(--sand)] shadow-mediterranean">
							<CardContent class="p-6">
								<h3 class="heading-serif mb-4 text-xl font-semibold text-[var(--charcoal)]">
									Follow Us
								</h3>
								<p class="mb-4 text-sm text-[var(--stone)]">
									Stay updated with the latest Sorrento tips
								</p>
								<div class="flex space-x-3">
									{#if contactData.socialMedia.facebook}
										<a
											href={contactData.socialMedia.facebook}
											target="_blank"
											rel="noopener noreferrer"
											class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--azure)] to-[var(--deep-azure)] text-white shadow-md transition-all duration-200 ease-out hover:scale-110 hover:shadow-lg"
										>
											<Facebook class="h-5 w-5" />
										</a>
									{/if}
									{#if contactData.socialMedia.instagram}
										<a
											href={contactData.socialMedia.instagram}
											target="_blank"
											rel="noopener noreferrer"
											class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--coral)] to-[var(--terracotta)] text-white shadow-md transition-all duration-200 ease-out hover:scale-110 hover:shadow-lg"
										>
											<Instagram class="h-5 w-5" />
										</a>
									{/if}
									{#if contactData.socialMedia.twitter}
										<a
											href={contactData.socialMedia.twitter}
											target="_blank"
											rel="noopener noreferrer"
											class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--olive)] to-[oklch(0.45_0.1_125)] text-white shadow-md transition-all duration-200 ease-out hover:scale-110 hover:shadow-lg"
										>
											<Twitter class="h-5 w-5" />
										</a>
									{/if}
								</div>
							</CardContent>
						</Card>
					{/if}
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="relative bg-white py-24">
		<!-- Wave decoration at top -->
		<div class="absolute top-0 right-0 left-0">
			<svg
				class="h-12 w-full"
				viewBox="0 0 1200 60"
				preserveAspectRatio="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0,60 C200,20 400,50 600,30 C800,10 1000,40 1200,20 L1200,0 L0,0 Z"
					fill="var(--warm-white)"
				></path>
			</svg>
		</div>

		<div class="container mx-auto px-4 pt-8 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl">
				<div class="scroll-reveal mb-12 text-center" use:reveal>
					<div class="mb-4 flex items-center justify-center gap-3">
						<div class="h-px w-8 bg-[var(--terracotta)]"></div>
						<span class="font-serif text-sm tracking-[0.2em] text-[var(--terracotta)] uppercase">FAQ</span>
						<div class="h-px w-8 bg-[var(--terracotta)]"></div>
					</div>
					<h2 class="heading-serif mb-6 text-4xl font-semibold text-[var(--charcoal)] sm:text-5xl">
						Common Questions
					</h2>
					<p class="text-lg text-[var(--stone)]">
						Find quick answers to frequently asked questions
					</p>
				</div>

				<div class="scroll-reveal" use:reveal>
					<Accordion.Root type="single" class="space-y-4">
						{#if contactData.faqs}
							{#each contactData.faqs as faq, index}
								<Accordion.Item
									value="item-{index}"
									class="rounded-xl border border-[var(--sand)] bg-white px-6 shadow-mediterranean transition-all hover:shadow-mediterranean-lg"
								>
									<Accordion.Trigger
										class="py-5 text-left font-semibold text-[var(--charcoal)] transition-colors duration-200 ease-out hover:text-[var(--azure)]"
									>
										{faq.question}
									</Accordion.Trigger>
									<Accordion.Content class="pb-5 leading-relaxed text-[var(--stone)]">
										{faq.answer}
									</Accordion.Content>
								</Accordion.Item>
							{/each}
						{/if}
					</Accordion.Root>
				</div>
			</div>
		</div>
	</section>
</div>
