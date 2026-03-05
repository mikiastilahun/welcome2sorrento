<script lang="ts">
	import { ChevronDown, ChevronUp } from '@lucide/svelte';

	interface Props {
		text: string;
		maxLength?: number;
		class?: string;
	}

	let { text, maxLength = 300, class: className = '' }: Props = $props();

	let expanded = $state(false);

	const needsTruncation = $derived(text.length > maxLength);
	const displayText = $derived(
		needsTruncation && !expanded ? text.slice(0, maxLength).trim() + '...' : text
	);
</script>

<div class={className}>
	<p class="leading-relaxed">
		{displayText}
	</p>
	{#if needsTruncation}
		<button
			type="button"
			onclick={() => (expanded = !expanded)}
			class="text-(--azure) hover:text-(--deep-azure) mt-2 inline-flex items-center gap-1 text-sm font-medium transition-colors"
		>
			{#if expanded}
				<span>Read less</span>
				<ChevronUp class="h-4 w-4" />
			{:else}
				<span>Read more</span>
				<ChevronDown class="h-4 w-4" />
			{/if}
		</button>
	{/if}
</div>
