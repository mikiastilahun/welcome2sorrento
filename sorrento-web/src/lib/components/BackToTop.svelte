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
		class="group fixed right-8 bottom-8 z-40 flex h-12 w-12 animate-in items-center justify-center rounded-full text-white shadow-lg transition-all duration-200 ease-out fade-in-0 slide-in-from-bottom-2 hover:shadow-xl hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
		style="background-color: var(--azure);"
		aria-label="Back to top"
	>
		<ArrowUp
			class="h-5 w-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5"
		/>
	</button>
{/if}
