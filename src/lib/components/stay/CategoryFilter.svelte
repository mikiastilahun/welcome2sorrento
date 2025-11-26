<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { formatType } from '$lib/utils';

	interface Props {
		types: string[];
		selectedType: string;
	}

	let { types, selectedType = $bindable() }: Props = $props();
</script>

<section
	class="sticky top-0 z-40 border-b border-(--sand) bg-white/95 py-8 shadow-sm backdrop-blur-md"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap justify-center gap-3">
			{#each types as type}
				<Button
					variant={selectedType === type ? 'default' : 'outline'}
					onclick={() => (selectedType = type)}
					class={selectedType === type
						? 'bg-(--azure) text-white transition-all duration-200 hover:bg-(--deep-azure)'
						: 'border border-(--sand) text-(--charcoal) transition-all duration-200 hover:border-(--azure) hover:text-(--azure)'}
				>
					{type === 'All' ? type : formatType(type)}
				</Button>
			{/each}
		</div>
	</div>
</section>
