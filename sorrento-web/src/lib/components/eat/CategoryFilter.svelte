<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Select from '$lib/components/ui/select';
	import { formatCategory } from '$lib/utils';

	interface Props {
		categories: string[];
		selectedCategory: string;
		locations?: string[];
		selectedLocation?: string;
		sortBy?: string;
	}

	let {
		categories,
		selectedCategory = $bindable(),
		locations = [],
		selectedLocation = $bindable('All'),
		sortBy = $bindable('default')
	}: Props = $props();
</script>

<section
	class="border-(--sand) sticky top-0 z-40 border-b bg-white/95 py-6 shadow-sm backdrop-blur-md"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div
			class="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between lg:justify-center lg:gap-8"
		>
			<!-- Category Buttons -->
			<div class="flex flex-wrap justify-center gap-3">
				{#each categories as category}
					<Button
						variant={selectedCategory === category ? 'default' : 'outline'}
						onclick={() => (selectedCategory = category)}
						class={selectedCategory === category
							? 'bg-(--azure) hover:bg-(--deep-azure) text-white transition-all duration-200 ease-out hover:brightness-110'
							: 'border-(--sand) text-(--charcoal) hover:border-(--azure) hover:text-(--azure) border transition-all duration-200 ease-out'}
					>
						{category === 'All' ? category : formatCategory(category)}
					</Button>
				{/each}
			</div>

			<div class="flex flex-wrap items-center justify-center gap-4">
				<!-- Location Select -->
				{#if locations.length > 0}
					<div class="w-full max-w-xs md:w-48">
						<Select.Root type="single" bind:value={selectedLocation}>
							<Select.Trigger class="border-(--sand) w-full">
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

				<!-- Sort By Select -->
				<div class="w-full max-w-xs md:w-48">
					<Select.Root type="single" bind:value={sortBy}>
						<Select.Trigger class="border-(--sand) w-full">
							{sortBy === 'default'
								? 'Sort By'
								: sortBy === 'price-asc'
									? 'Price: Low to High'
									: 'Price: High to Low'}
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="default">Default</Select.Item>
							<Select.Item value="price-asc">Price: Low to High</Select.Item>
							<Select.Item value="price-desc">Price: High to Low</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
			</div>
		</div>
	</div>
</section>
