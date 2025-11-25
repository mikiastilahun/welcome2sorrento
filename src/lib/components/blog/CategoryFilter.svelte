<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	interface Props {
		categories: string[];
		selectedCategory: string;
	}

	let { categories, selectedCategory = $bindable() }: Props = $props();
</script>

<section
	class="sticky top-0 z-40 border-b border-[color:var(--sand)] bg-white/95 py-8 shadow-sm backdrop-blur-md"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap justify-center gap-3">
			{#each categories as category}
				<Button
					variant={selectedCategory === category ? 'default' : 'outline'}
					onclick={() => (selectedCategory = category)}
					class={selectedCategory === category
						? 'bg-[color:var(--azure)] text-white transition-all duration-200 ease-out hover:bg-[color:var(--deep-azure)] hover:brightness-110'
						: 'border-2 border-[color:var(--sand)] transition-all duration-200 ease-out hover:border-[color:var(--azure)] hover:text-[color:var(--azure)]'}
				>
					{category}
				</Button>
			{/each}
		</div>
	</div>
</section>

