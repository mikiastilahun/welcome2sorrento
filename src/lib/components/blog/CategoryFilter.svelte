<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	interface Props {
		categories: string[];
		selectedCategory: string;
	}

	let { categories, selectedCategory = $bindable() }: Props = $props();
</script>

<section class="sticky top-0 z-40 border-b border-[var(--sand)] bg-white/95 py-6 shadow-mediterranean backdrop-blur-md">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section label -->
		<div class="mb-4 flex items-center justify-center gap-3">
			<div class="h-px w-8 bg-[var(--azure)]"></div>
			<span class="font-serif text-xs tracking-[0.2em] text-[var(--azure)] uppercase">Categories</span>
			<div class="h-px w-8 bg-[var(--azure)]"></div>
		</div>

		<div class="flex flex-wrap justify-center gap-3">
			{#each categories as category}
				<Button
					variant={selectedCategory === category ? 'default' : 'outline'}
					onclick={() => (selectedCategory = category)}
					class={selectedCategory === category
						? 'rounded-full bg-[var(--azure)] px-5 text-white shadow-lg transition-all duration-200 ease-out hover:bg-[var(--deep-azure)] hover:shadow-xl'
						: 'rounded-full border-2 border-[var(--sand)] px-5 transition-all duration-200 ease-out hover:border-[var(--azure)] hover:bg-[var(--azure)]/5 hover:text-[var(--azure)]'}
				>
					{category}
				</Button>
			{/each}
		</div>
	</div>
</section>
