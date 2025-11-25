<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';

	interface Props {
		title: string;
		subtitle?: string;
		image: string;
	}

	let { title, subtitle, image }: Props = $props();
</script>

<section class="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden pt-24">
	<div class="absolute inset-0 z-0">
		<img src={image} alt={title} class="h-full w-full object-cover" />
		<div class="absolute inset-0 bg-(--charcoal)/50"></div>
	</div>

	<div class="relative z-10">
		<Breadcrumb />
	</div>

	<div class="relative z-10 flex grow items-center justify-center">
		<div class="container mx-auto px-4 py-20 text-center text-white sm:px-6 lg:px-8">
			<div class="animate-fade-in-up">
				<h1 class="heading-serif mb-4 text-5xl font-semibold text-white sm:text-6xl lg:text-7xl">
					{title}
				</h1>
				{#if subtitle}
					<p class="mx-auto max-w-3xl text-xl font-light text-white/90 sm:text-2xl">
						{subtitle}
					</p>
				{/if}
			</div>
		</div>
	</div>
</section>

