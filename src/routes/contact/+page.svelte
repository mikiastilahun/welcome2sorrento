<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
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
	<title>Contact Us - Get in Touch | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Contact Welcome2Sorrento for travel planning, booking assistance, or any questions about Sorrento and the Amalfi Coast."
	/>
</svelte:head>

<div class="-mt-24">
	<!-- Hero Section -->
	<section class="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24">
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1920&q=80"
				alt="Contact us"
				class="h-full w-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-br from-[color:var(--dark)]/80 via-[color:var(--deep-purple)]/60 to-[color:var(--dark)]/80"
			></div>
		</div>

		<div class="relative z-10 container mx-auto px-4 py-32 text-center text-white sm:px-6 lg:px-8">
			<div class="animate-fade-in-up">
				<div
					class="mx-auto mb-6 flex h-20 w-20 animate-pulse items-center justify-center rounded-3xl bg-gradient-to-br from-[color:var(--purple-lavender)] to-[color:var(--turquoise)] shadow-2xl"
				>
					<MessageCircle class="h-10 w-10 text-white" />
				</div>
				<h1 class="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
					Get in <span class="text-gradient">Touch</span>
				</h1>
				<p class="heading-serif mx-auto max-w-3xl text-xl font-light text-white/90 sm:text-2xl">
					We're here to help plan your perfect Sorrento experience
				</p>
			</div>
		</div>
	</section>

	<!-- Contact Form & Info -->
	<section class="mesh-gradient relative py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
				<!-- Contact Form -->
				<div class="scroll-reveal lg:col-span-2">
					<div class="relative overflow-hidden rounded-3xl">
						<div
							class="animate-gradient absolute inset-0 bg-gradient-to-r from-[color:var(--purple-lavender)] via-[color:var(--turquoise)] to-[color:var(--purple-lavender)]"
						></div>
						<div class="relative m-1 rounded-3xl bg-white">
							<CardHeader class="px-12 pt-12 pb-6">
								<div
									class="mb-6 inline-flex items-center space-x-2 rounded-full border border-[color:var(--purple-lavender)]/20 bg-[color:var(--purple-lavender)]/10 px-4 py-2"
								>
									<Send class="h-4 w-4 text-[color:var(--purple-lavender)]" />
									<span class="text-sm font-medium text-[color:var(--dark)]">Quick Response</span>
								</div>
								<CardTitle class="mb-4 text-3xl sm:text-4xl">Send Us a Message</CardTitle>
								<p class="text-lg text-gray-600">
									Fill out the form below and we'll get back to you within 24 hours
								</p>
							</CardHeader>
							<CardContent class="px-12 pb-12">
								<form onsubmit={handleSubmit} class="space-y-6">
									<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
										<div class="space-y-2">
											<Label for="name" class="text-base">Name *</Label>
											<Input
												id="name"
												type="text"
												placeholder="Your full name"
												bind:value={formData.name}
												required
												class="h-12 border-2 transition-colors focus:border-[color:var(--purple-lavender)]"
											/>
										</div>
										<div class="space-y-2">
											<Label for="email" class="text-base">Email *</Label>
											<Input
												id="email"
												type="email"
												placeholder="your@email.com"
												bind:value={formData.email}
												required
												class="h-12 border-2 transition-colors focus:border-[color:var(--purple-lavender)]"
											/>
										</div>
									</div>

									<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
										<div class="space-y-2">
											<Label for="phone" class="text-base">Phone</Label>
											<Input
												id="phone"
												type="tel"
												placeholder="+1 234 567 8900"
												bind:value={formData.phone}
												class="h-12 border-2 transition-colors focus:border-[color:var(--turquoise)]"
											/>
										</div>
										<div class="space-y-2">
											<Label for="service" class="text-base">I'm interested in</Label>
											<select
												id="service"
												bind:value={formData.service}
												class="flex h-12 w-full rounded-xl border-2 border-input bg-background px-4 py-2 text-base ring-offset-background transition-colors focus-visible:border-[color:var(--turquoise)] focus-visible:outline-none"
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
										<Label for="subject" class="text-base">Subject *</Label>
										<Input
											id="subject"
											type="text"
											placeholder="What can we help you with?"
											bind:value={formData.subject}
											required
											class="h-12 border-2 transition-colors focus:border-[color:var(--purple-lavender)]"
										/>
									</div>

									<div class="space-y-2">
										<Label for="message" class="text-base">Message *</Label>
										<Textarea
											id="message"
											placeholder="Tell us about your travel plans, dates, preferences, or any questions you have..."
											bind:value={formData.message}
											required
											rows={6}
											class="resize-none border-2 transition-colors focus:border-[color:var(--purple-lavender)]"
										/>
									</div>

									<Button
										type="submit"
										size="lg"
										class="h-14 w-full bg-gradient-to-r from-[color:var(--purple-lavender)] to-[color:var(--turquoise)] text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[color:var(--purple-lavender)]/50"
									>
										<span class="flex items-center justify-center space-x-2">
											<Send class="h-5 w-5" />
											<span>Send Message</span>
										</span>
									</Button>

									<p class="text-center text-sm text-gray-600">
										We respect your privacy. Your information is secure and will never be shared.
									</p>
								</form>
							</CardContent>
						</div>
					</div>
				</div>

				<!-- Contact Information -->
				<div class="scroll-reveal space-y-6" style="transition-delay: 0.2s">
					<!-- Direct Contact -->
					<div class="relative overflow-hidden rounded-3xl">
						<div
							class="animate-gradient absolute inset-0 bg-gradient-to-r from-[color:var(--turquoise)] to-[color:var(--light-turquoise)]"
						></div>
						<div class="relative m-1 rounded-3xl bg-white p-8">
							<h3 class="mb-6 text-2xl font-bold text-[color:var(--dark)]">Contact Information</h3>
							<div class="space-y-6">
								<div
									class="group flex cursor-pointer items-start space-x-4 rounded-2xl p-4 transition-colors duration-300 hover:bg-[color:var(--off-white)]"
								>
									<div
										class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--purple-lavender)] to-[color:var(--turquoise)] transition-transform group-hover:scale-110"
									>
										<Mail class="h-6 w-6 text-white" />
									</div>
									<div>
										<div class="mb-1 text-lg font-semibold">Email</div>
										<a
											href="mailto:margheroba@email.com"
											class="text-sm text-gray-600 transition-colors hover:text-[color:var(--purple-lavender)]"
										>
											margheroba@email.com
										</a>
									</div>
								</div>

								<div
									class="group flex cursor-pointer items-start space-x-4 rounded-2xl p-4 transition-colors duration-300 hover:bg-[color:var(--off-white)]"
								>
									<div
										class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--turquoise)] to-[color:var(--light-turquoise)] transition-transform group-hover:scale-110"
									>
										<Phone class="h-6 w-6 text-white" />
									</div>
									<div>
										<div class="mb-1 text-lg font-semibold">WhatsApp</div>
										<p class="mb-1 text-sm text-gray-600">
											Available for booking inquiries
										</p>
										<a
											href="tel:+39123456789"
											class="text-sm font-medium text-[color:var(--turquoise)] hover:underline"
										>
											+39 123 456 789
										</a>
									</div>
								</div>

								<div
									class="group flex items-start space-x-4 rounded-2xl p-4 transition-colors duration-300 hover:bg-[color:var(--off-white)]"
								>
									<div
										class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--deep-purple)] to-[color:var(--purple-lavender)] transition-transform group-hover:scale-110"
									>
										<MapPin class="h-6 w-6 text-white" />
									</div>
									<div>
										<div class="mb-1 text-lg font-semibold">Location</div>
										<p class="text-sm text-gray-600">Based in Sorrento, Italy</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Response Time -->
					<div class="relative overflow-hidden rounded-3xl shadow-lg">
						<div
							class="animate-gradient absolute inset-0 bg-gradient-to-br from-[color:var(--purple-lavender)] via-[color:var(--deep-purple)] to-[color:var(--dark)]"
						></div>
						<div class="relative p-8 text-white">
							<div class="mb-4 flex items-center space-x-4">
								<div
									class="glass flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20"
								>
									<Clock class="h-7 w-7" />
								</div>
								<h3 class="text-2xl font-bold">Quick Response</h3>
							</div>
							<p class="leading-relaxed text-white/90">
								We typically respond within 24 hours. For urgent booking requests, WhatsApp is the
								fastest way to reach us.
							</p>
						</div>
					</div>

					<!-- Social Media -->
					<div class="relative overflow-hidden rounded-3xl">
						<div
							class="animate-gradient absolute inset-0 bg-gradient-to-r from-[color:var(--turquoise)] to-[color:var(--purple-lavender)]"
						></div>
						<div class="relative m-1 rounded-3xl bg-white p-8">
							<h3 class="mb-4 text-2xl font-bold text-[color:var(--dark)]">Follow Us</h3>
							<p class="mb-6 text-gray-600">
								Stay updated with the latest Sorrento tips and travel inspiration
							</p>
							<div class="flex space-x-3">
								<a
									href="#"
									class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--purple-lavender)] to-[color:var(--turquoise)] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
								>
									<Facebook class="h-6 w-6" />
								</a>
								<a
									href="#"
									class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--turquoise)] to-[color:var(--light-turquoise)] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
								>
									<Instagram class="h-6 w-6" />
								</a>
								<a
									href="#"
									class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--deep-purple)] to-[color:var(--purple-lavender)] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
								>
									<Twitter class="h-6 w-6" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Quick Links -->
	<section class="relative bg-white py-32">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-5xl">
				<div class="scroll-reveal mb-20 text-center">
					<div
						class="mb-6 inline-flex items-center space-x-2 rounded-full border border-[color:var(--turquoise)]/20 bg-[color:var(--turquoise)]/10 px-4 py-2"
					>
						<Sparkles class="h-4 w-4 text-[color:var(--turquoise)]" />
						<span class="text-sm font-medium text-[color:var(--dark)]">Quick Answers</span>
					</div>
					<h2 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">
						Common <span class="text-gradient">Questions</span>
					</h2>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each [{ question: "What's included in the booking service?", answer: 'We handle restaurant reservations, accommodation booking, tour arrangements, transportation, and provide real-time support during your trip.', link: '/about#services', linkText: 'Learn more' }, { question: 'How much does the service cost?', answer: 'We charge a fixed, transparent fee based on the complexity of your needs. Contact us for a personalized quote.', link: '/contact', linkText: 'Get a quote' }, { question: 'How far in advance should I book?', answer: 'For peak season (June-August), we recommend 2-3 months. For other times, 3-4 weeks is usually sufficient.' }, { question: 'Do you only help with Sorrento?', answer: 'We cover Sorrento and the entire surrounding area including Capri, the Amalfi Coast, Naples, Pompeii, and more.', link: '/surrounding', linkText: 'Explore destinations' }] as faq, index}
						<div
							class="scroll-reveal group rounded-3xl border-2 border-[color:var(--purple-lavender)]/20 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[color:var(--purple-lavender)] hover:shadow-2xl"
							style="transition-delay: {index * 0.1}s"
						>
							<div class="mb-4 flex items-start space-x-3">
								<div
									class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[color:var(--purple-lavender)] to-[color:var(--turquoise)]"
								>
									<CheckCircle class="h-5 w-5 text-white" />
								</div>
								<h3 class="text-lg font-bold text-[color:var(--dark)]">{faq.question}</h3>
							</div>
							<p class="mb-4 ml-11 leading-relaxed text-gray-600">
								{faq.answer}
							</p>
							{#if faq.link}
								<a
									href={faq.link}
									class="ml-11 inline-flex items-center space-x-1 text-sm font-medium text-[color:var(--purple-lavender)] transition-transform group-hover:translate-x-2 hover:text-[color:var(--turquoise)]"
								>
									<span>{faq.linkText}</span>
									<span>→</span>
								</a>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>
