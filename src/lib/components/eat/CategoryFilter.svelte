<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { formatCategory } from '$lib/utils';

	interface Props {
		categories: string[];
		selectedCategory: string;
	}

	let { categories, selectedCategory = $bindable() }: Props = $props();
</script>

<section
	class="sticky top-0 z-40 border-b border-(--sand) bg-white/95 py-8 shadow-sm backdrop-blur-md"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap justify-center gap-3">
			{#each categories as category}
				<Button
					variant={selectedCategory === category ? 'default' : 'outline'}
					onclick={() => (selectedCategory = category)}
					class={selectedCategory === category
						? 'bg-(--azure) text-white transition-all duration-200 ease-out hover:bg-(--deep-azure) hover:brightness-110'
						: 'border border-(--sand) text-(--charcoal) transition-all duration-200 ease-out hover:border-(--azure) hover:text-(--azure)'}
				>
					{category === 'All' ? category : formatCategory(category)}
				</Button>
			{/each}
		</div>
	</div>
</section>

