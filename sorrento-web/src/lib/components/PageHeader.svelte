<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';

	interface Props {
		title: string;
		subtitle?: string;
		image: string;
		label?: string;
	}

	let { title, subtitle, image }: Props = $props();
</script>

<section class="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden">
	<!-- Background image -->
	<div class="absolute inset-0 z-0">
		<img src={image} alt={title} class="h-full w-full object-cover" />
		<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
	</div>

	<div class="relative z-10 w-full pt-24">
		<Breadcrumb />
	</div>

	<div class="relative z-10 flex grow items-center justify-center">
		<div class="container mx-auto px-4 py-12 text-center text-white sm:px-6 lg:px-8">
			<h1
				class="heading-serif mb-4 text-4xl font-semibold text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
			>
				{title}
			</h1>
			{#if subtitle}
				<p
					class="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 drop-shadow-md sm:text-xl"
				>
					{subtitle}
				</p>
			{/if}
		</div>
	</div>
</section>
