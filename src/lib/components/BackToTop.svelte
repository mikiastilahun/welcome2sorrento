<script lang="ts">
	import { ArrowUp } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let visible = $state(false);

	onMount(() => {
		const handleScroll = () => {
			visible = window.scrollY > 500;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if visible}
	<button
		onclick={scrollToTop}
		class="group animate-fade-in fixed right-8 bottom-8 z-40 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-200 hover:shadow-xl"
		style="background-color: var(--azure);"
		aria-label="Back to top"
	>
		<ArrowUp class="h-5 w-5 transition-transform group-hover:-translate-y-1" />
	</button>
{/if}
