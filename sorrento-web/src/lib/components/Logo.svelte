<script lang="ts">
	interface Props {
		class?: string;
	}
	let { class: className = '' }: Props = $props();
</script>

<div class="text-xl font-bold sm:text-2xl {className}">
	<span class="text-[var(--azure)]">W</span><span class="text-[var(--sand)]">2</span><span
		class="text-[var(--azure)]">S</span
	>
</div>
