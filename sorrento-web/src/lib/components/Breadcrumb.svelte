<script lang="ts">
	import { page } from '$app/stores';
	import { ChevronRight, Home } from '@lucide/svelte';

	// Generate breadcrumb items from current path
	const breadcrumbItems = $derived.by(() => {
		const path = $page.url.pathname;
		if (path === '/') return [];

		const segments = path.split('/').filter(Boolean);
		const items = segments.map((segment, index) => {
			const href = '/' + segments.slice(0, index + 1).join('/');
			// Capitalize and format the segment name
			const label = segment
				.split('-')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');

			return { href, label };
		});

		return items;
	});
</script>

{#if breadcrumbItems.length > 0}
	<nav aria-label="Breadcrumb" class="py-4">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<ol class="flex items-center space-x-2 text-sm">
				<li>
					<a
						href="/"
						class="group flex items-center text-white/70 transition-colors duration-200 hover:text-white"
					>
						<Home class="h-4 w-4 transition-transform group-hover:scale-110" />
					</a>
				</li>
				{#each breadcrumbItems as item, index}
					<li class="flex items-center space-x-2">
						<ChevronRight class="h-4 w-4 text-white/40" />
						{#if index === breadcrumbItems.length - 1}
							<span class="font-medium text-white">
								{item.label}
							</span>
						{:else}
							<a
								href={item.href}
								class="text-white/70 transition-colors duration-200 hover:text-white hover:underline"
							>
								{item.label}
							</a>
						{/if}
					</li>
				{/each}
			</ol>
		</div>
	</nav>
{/if}
