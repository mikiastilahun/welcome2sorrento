<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Select from '$lib/components/ui/select';
	import { formatCategory } from '$lib/utils';

	interface Props {
		categories: string[];
		selectedCategory: string;
		locations?: string[];
		selectedLocation?: string;
	}

	let {
		categories,
		selectedCategory = $bindable(),
		locations = [],
		selectedLocation = $bindable('All')
	}: Props = $props();
</script>

<section
	class="sticky top-0 z-40 border-b border-(--sand) bg-white/95 py-6 shadow-sm backdrop-blur-md"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div
			class="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between lg:justify-center lg:gap-12"
		>
			<!-- Category Buttons -->
			<div class="flex flex-wrap justify-center gap-3">
				{#each categories as category}
					<Button
						variant={selectedCategory === category ? 'default' : 'outline'}
						onclick={() => (selectedCategory = category)}
						class={selectedCategory === category
							? 'bg-(--azure) text-white transition-all duration-200 hover:bg-(--deep-azure)'
							: 'border border-(--sand) text-(--charcoal) transition-all duration-200 hover:border-(--azure) hover:text-(--azure)'}
					>
						{formatCategory(category)}
					</Button>
				{/each}
			</div>

			<!-- Location Select -->
			{#if locations.length > 0}
				<div class="w-full max-w-xs md:w-64">
					<Select.Root type="single" bind:value={selectedLocation}>
						<Select.Trigger class="w-full border-(--sand)">
							{selectedLocation === 'All' ? 'All Locations' : selectedLocation}
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="All">All Locations</Select.Item>
							{#each locations as location}
								<Select.Item value={location}>{location}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
			{/if}
		</div>
	</div>
</section>
