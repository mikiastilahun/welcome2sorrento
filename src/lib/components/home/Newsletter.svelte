<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Mail } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	let email = $state('');

	function handleNewsletter(e: Event) {
		e.preventDefault();
		console.log('Newsletter signup:', email);
		email = '';
	}
</script>

<section id="newsletter" class="relative bg-[var(--cream)] py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="scroll-reveal mx-auto max-w-2xl" use:reveal>
			<div class="mb-8 text-center">
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--azure)]"
				>
					<Mail class="h-8 w-8 text-white" />
				</div>
				<h2 class="heading-serif mb-4 text-3xl font-semibold text-[var(--charcoal)] sm:text-4xl">
					Stay Connected
				</h2>
				<p class="mx-auto max-w-xl text-lg text-[var(--stone)]">
					Get exclusive travel tips, insider guides, and special offers delivered to your inbox
				</p>
			</div>

			<form onsubmit={handleNewsletter} class="flex flex-col gap-4 sm:flex-row">
				<Input
					type="email"
					placeholder="Enter your email address"
					bind:value={email}
					required
					class="h-12 flex-1 rounded-lg border-[var(--stone)] text-base transition-colors focus:border-[var(--azure)]"
				/>
				<Button
					type="submit"
					size="lg"
					class="h-12 bg-[var(--azure)] px-8 text-base transition-all duration-200 ease-out hover:bg-[var(--deep-azure)] hover:shadow-lg hover:brightness-110 sm:whitespace-nowrap"
				>
					Subscribe
				</Button>
			</form>

			<p class="mt-4 text-center text-sm text-[var(--stone)]">
				Join 10,000+ travelers. Unsubscribe anytime.
			</p>
		</div>
	</div>
</section>

