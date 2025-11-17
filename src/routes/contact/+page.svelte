<script lang="ts">
	import type { ContactPage } from '$lib/sanity/queries';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import * as Accordion from '$lib/components/ui/accordion';
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
		CheckCircle
	} from '@lucide/svelte';
	import { onMount } from 'svelte';

	interface Props {
		data: {
			contactPage: ContactPage | null;
		};
	}

	let { data }: Props = $props();

	// Default content for fallback
	const defaultContent = {
		title: 'Get in Touch',
		subtitle: "We're here to help plan your perfect Sorrento experience",
		contactInfo: {
			email: 'margheroba@email.com',
			phone: '+39 123 456 789',
			whatsapp: '+39 123 456 789',
			address: 'Based in Sorrento, Italy'
		},
		faqs: [
			{
				question: "What's included in the booking service?",
				answer:
					'We handle restaurant reservations, accommodation booking, tour arrangements, transportation, and provide real-time support during your trip.'
			},
			{
				question: 'How much does the service cost?',
				answer:
					'We charge a fixed, transparent fee based on the complexity of your needs. Contact us for a personalized quote.'
			},
			{
				question: 'How far in advance should I book?',
				answer:
					'For peak season (June-August), we recommend 2-3 months. For other times, 3-4 weeks is usually sufficient.'
			},
			{
				question: 'Do you only help with Sorrento?',
				answer:
					'We cover Sorrento and the entire surrounding area including Capri, the Amalfi Coast, Naples, Pompeii, and more.'
			}
		]
	};

	const contactData = data.contactPage || defaultContent;

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
		service: 'general'
	});

	onMount(() => {
		const handleScroll = () => {
			const reveals = document.querySelectorAll('.scroll-reveal');
			reveals.forEach((element) => {
				const elementTop = element.getBoundingClientRect().top;
				const elementVisible = 150;
				if (elementTop < window.innerHeight - elementVisible) {
					element.classList.add('revealed');
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Form submitted:', formData);
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
	<section class="relative flex h-[60vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1920&q=80"
				alt="Contact us"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-(--charcoal)/50"></div>
		</div>

		<div class="relative z-10 container mx-auto px-4 text-center text-white sm:px-6 lg:px-8">
			<div class="animate-fade-in-up">
				<h1 class="heading-serif mb-6 text-5xl font-semibold sm:text-6xl lg:text-7xl">
					{contactData.title || 'Get in Touch'}
				</h1>
				<p class="mx-auto max-w-3xl text-xl font-light text-white/90 sm:text-2xl">
					{contactData.subtitle || "We're here to help plan your perfect Sorrento experience"}
				</p>
			</div>
		</div>
	</section>

	<!-- Contact Form & Info -->
	<section class="relative bg-[color:var(--warm-white)] py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
				<!-- Contact Form -->
				<div class="scroll-reveal lg:col-span-2">
					<Card class="border-[color:var(--sand)] shadow-lg">
						<CardHeader class="px-8 pt-8 pb-6 sm:px-12 sm:pt-12">
							<CardTitle
								class="heading-serif mb-4 text-3xl text-[color:var(--charcoal)] sm:text-4xl"
								>Send Us a Message</CardTitle
							>
							<p class="text-lg text-[color:var(--stone)]">
								Fill out the form below and we'll get back to you within 24 hours
							</p>
						</CardHeader>
						<CardContent class="px-8 pb-8 sm:px-12 sm:pb-12">
							<form onsubmit={handleSubmit} class="space-y-6">
								<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
									<div class="space-y-2">
										<Label for="name" class="text-base font-medium text-[color:var(--charcoal)]"
											>Name *</Label
										>
										<Input
											id="name"
											type="text"
											placeholder="Your full name"
											bind:value={formData.name}
											required
											class="h-12 border-[color:var(--stone)] transition-colors focus-visible:border-[color:var(--azure)] focus-visible:ring-[color:var(--azure)]"
										/>
									</div>
									<div class="space-y-2">
										<Label for="email" class="text-base font-medium text-[color:var(--charcoal)]"
											>Email *</Label
										>
										<Input
											id="email"
											type="email"
											placeholder="your@email.com"
											bind:value={formData.email}
											required
											class="h-12 border-[color:var(--stone)] transition-colors focus-visible:border-[color:var(--azure)] focus-visible:ring-[color:var(--azure)]"
										/>
									</div>
								</div>

								<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
									<div class="space-y-2">
										<Label for="phone" class="text-base font-medium text-[color:var(--charcoal)]"
											>Phone</Label
										>
										<Input
											id="phone"
											type="tel"
											placeholder="+1 234 567 8900"
											bind:value={formData.phone}
											class="h-12 border-[color:var(--stone)] transition-colors focus-visible:border-[color:var(--azure)] focus-visible:ring-[color:var(--azure)]"
										/>
									</div>
									<div class="space-y-2">
										<Label for="service" class="text-base font-medium text-[color:var(--charcoal)]"
											>I'm interested in</Label
										>
										<select
											id="service"
											bind:value={formData.service}
											class="flex h-12 w-full rounded-lg border border-[color:var(--stone)] bg-white px-4 py-2 text-base transition-colors focus-visible:border-[color:var(--azure)] focus-visible:ring-2 focus-visible:ring-[color:var(--azure)]/20 focus-visible:outline-none"
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
									<Label for="subject" class="text-base font-medium text-[color:var(--charcoal)]"
										>Subject *</Label
									>
									<Input
										id="subject"
										type="text"
										placeholder="What can we help you with?"
										bind:value={formData.subject}
										required
										class="h-12 border-[color:var(--stone)] transition-colors focus-visible:border-[color:var(--azure)] focus-visible:ring-[color:var(--azure)]"
									/>
								</div>

								<div class="space-y-2">
									<Label for="message" class="text-base font-medium text-[color:var(--charcoal)]"
										>Message *</Label
									>
									<Textarea
										id="message"
										placeholder="Tell us about your travel plans, dates, preferences, or any questions you have..."
										bind:value={formData.message}
										required
										rows={6}
										class="resize-none border-[color:var(--stone)] transition-colors focus-visible:border-[color:var(--azure)] focus-visible:ring-[color:var(--azure)]"
									/>
								</div>

								<Button
									type="submit"
									size="lg"
									class="h-14 w-full bg-[color:var(--azure)] text-lg text-white transition-all duration-200 ease-out hover:bg-[color:var(--deep-azure)] hover:shadow-lg hover:brightness-110"
								>
									<span class="flex items-center justify-center space-x-2">
										<Send class="h-5 w-5" />
										<span>Send Message</span>
									</span>
								</Button>

								<p class="text-center text-sm text-[color:var(--stone)]">
									We respect your privacy. Your information is secure and will never be shared.
								</p>
							</form>
						</CardContent>
					</Card>
				</div>

				<!-- Contact Information -->
				<div class="scroll-reveal space-y-6" style="transition-delay: 0.2s">
					<!-- Direct Contact -->
					<Card class="border-[color:var(--sand)] shadow-lg">
						<CardContent class="p-8">
							<h3 class="heading-serif mb-6 text-2xl font-semibold text-[color:var(--charcoal)]">
								Contact Information
							</h3>
							<div class="space-y-6">
								{#if contactData.contactInfo?.email}
									<div
										class="group flex cursor-pointer items-start space-x-4 rounded-lg p-4 transition-colors duration-200 ease-out hover:bg-[color:var(--cream)]"
									>
										<div
											class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[color:var(--azure)] transition-transform duration-200 ease-out group-hover:scale-105"
										>
											<Mail class="h-6 w-6 text-white" />
										</div>
										<div>
											<div class="mb-1 text-lg font-semibold text-[color:var(--charcoal)]">
												Email
											</div>
											<a
												href="mailto:{contactData.contactInfo.email}"
												class="text-sm text-[color:var(--stone)] transition-colors hover:text-[color:var(--azure)]"
											>
												{contactData.contactInfo.email}
											</a>
										</div>
									</div>
								{/if}

								{#if contactData.contactInfo?.phone || contactData.contactInfo?.whatsapp}
									<div
										class="group flex cursor-pointer items-start space-x-4 rounded-lg p-4 transition-colors duration-200 ease-out hover:bg-[color:var(--cream)]"
									>
										<div
											class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[color:var(--olive)] transition-transform duration-200 ease-out group-hover:scale-105"
										>
											<Phone class="h-6 w-6 text-white" />
										</div>
										<div>
											<div class="mb-1 text-lg font-semibold text-[color:var(--charcoal)]">
												WhatsApp
											</div>
											<p class="mb-1 text-sm text-[color:var(--stone)]">
												Available for booking inquiries
											</p>
											<a
												href="tel:{contactData.contactInfo.whatsapp ||
													contactData.contactInfo.phone}"
												class="text-sm font-medium text-[color:var(--azure)] hover:underline"
											>
												{contactData.contactInfo.whatsapp || contactData.contactInfo.phone}
											</a>
										</div>
									</div>
								{/if}

								{#if contactData.contactInfo?.address}
									<div
										class="group flex items-start space-x-4 rounded-lg p-4 transition-colors duration-200 ease-out hover:bg-[color:var(--cream)]"
									>
										<div
											class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[color:var(--terracotta)] transition-transform duration-200 ease-out group-hover:scale-105"
										>
											<MapPin class="h-6 w-6 text-white" />
										</div>
										<div>
											<div class="mb-1 text-lg font-semibold text-[color:var(--charcoal)]">
												Location
											</div>
											<p class="text-sm text-[color:var(--stone)]">
												{contactData.contactInfo.address}
											</p>
										</div>
									</div>
								{/if}
							</div>
						</CardContent>
					</Card>

					<!-- Response Time -->
					<Card class="border-[color:var(--azure)] bg-[color:var(--azure)] shadow-lg">
						<CardContent class="p-8 text-white">
							<div class="mb-4 flex items-center space-x-4">
								<div class="flex h-14 w-14 items-center justify-center rounded-lg bg-white/20">
									<Clock class="h-7 w-7" />
								</div>
								<h3 class="heading-serif text-2xl font-semibold">Quick Response</h3>
							</div>
							<p class="leading-relaxed text-white/90">
								We typically respond within 24 hours. For urgent booking requests, WhatsApp is the
								fastest way to reach us.
							</p>
						</CardContent>
					</Card>

					<!-- Social Media -->
					{#if contactData.socialMedia}
						<Card class="border-[color:var(--sand)] shadow-lg">
							<CardContent class="p-8">
								<h3 class="heading-serif mb-4 text-2xl font-semibold text-[color:var(--charcoal)]">
									Follow Us
								</h3>
								<p class="mb-6 text-[color:var(--stone)]">
									Stay updated with the latest Sorrento tips and travel inspiration
								</p>
								<div class="flex space-x-3">
									{#if contactData.socialMedia.facebook}
										<a
											href={contactData.socialMedia.facebook}
											target="_blank"
											rel="noopener noreferrer"
											class="flex h-14 w-14 items-center justify-center rounded-lg bg-[color:var(--azure)] text-white shadow-md transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg hover:brightness-110"
										>
											<Facebook class="h-6 w-6" />
										</a>
									{/if}
									{#if contactData.socialMedia.instagram}
										<a
											href={contactData.socialMedia.instagram}
											target="_blank"
											rel="noopener noreferrer"
											class="flex h-14 w-14 items-center justify-center rounded-lg bg-[color:var(--terracotta)] text-white shadow-md transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg hover:brightness-110"
										>
											<Instagram class="h-6 w-6" />
										</a>
									{/if}
									{#if contactData.socialMedia.twitter}
										<a
											href={contactData.socialMedia.twitter}
											target="_blank"
											rel="noopener noreferrer"
											class="flex h-14 w-14 items-center justify-center rounded-lg bg-[color:var(--olive)] text-white shadow-md transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg hover:brightness-110"
										>
											<Twitter class="h-6 w-6" />
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
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl">
				<div class="scroll-reveal mb-12 text-center">
					<h2
						class="heading-serif mb-6 text-4xl font-semibold text-[color:var(--charcoal)] sm:text-5xl"
					>
						Common Questions
					</h2>
					<p class="text-lg text-[color:var(--stone)]">
						Find quick answers to frequently asked questions
					</p>
				</div>

				<div class="scroll-reveal">
					<Accordion.Root type="single" class="space-y-4">
						{#each contactData.faqs || defaultContent.faqs as faq, index}
							<Accordion.Item
								value="item-{index}"
								class="rounded-lg border border-[color:var(--sand)] bg-white px-6 shadow-sm"
							>
								<Accordion.Trigger
									class="py-5 text-left font-semibold text-[color:var(--charcoal)] transition-colors duration-200 ease-out hover:text-[color:var(--azure)]"
								>
									{faq.question}
								</Accordion.Trigger>
								<Accordion.Content class="pb-5 leading-relaxed text-[color:var(--stone)]">
									{faq.answer}
								</Accordion.Content>
							</Accordion.Item>
						{/each}
					</Accordion.Root>
				</div>
			</div>
		</div>
	</section>
</div>
