<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PortableTextBlock } from '@portabletext/types';

	interface Props {
		value?: PortableTextBlock[];
	}

	let { value }: Props = $props();

	// Custom components for different block types
	const components = {
		block: {
			normal: ({ children }: { children: any }) =>
				`<p class="mb-4 leading-relaxed text-muted-foreground">${children}</p>`,
			h1: ({ children }: { children: any }) =>
				`<h1 class="mb-6 text-4xl font-bold text-[color:var(--dark)] sm:text-5xl">${children}</h1>`,
			h2: ({ children }: { children: any }) =>
				`<h2 class="mb-4 text-3xl font-bold text-[color:var(--dark)] sm:text-4xl">${children}</h2>`,
			h3: ({ children }: { children: any }) =>
				`<h3 class="mb-3 text-2xl font-bold text-[color:var(--dark)] sm:text-3xl">${children}</h3>`,
			h4: ({ children }: { children: any }) =>
				`<h4 class="mb-2 text-xl font-bold text-[color:var(--dark)] sm:text-2xl">${children}</h4>`,
			blockquote: ({ children }: { children: any }) =>
				`<blockquote class="border-l-4 border-[color:var(--purple-lavender)] bg-[color:var(--off-white)] py-4 pl-6 pr-4 my-6 italic text-lg">${children}</blockquote>`
		},
		marks: {
			strong: ({ children }: { children: any }) => `<strong class="font-bold">${children}</strong>`,
			em: ({ children }: { children: any }) => `<em class="italic">${children}</em>`,
			link: ({ children, value }: { children: any; value: any }) =>
				`<a href="${value.href}" class="text-[color:var(--purple-lavender)] underline hover:text-[color:var(--deep-purple)] transition-colors" target="_blank" rel="noopener noreferrer">${children}</a>`
		},
		list: {
			bullet: ({ children }: { children: any }) => `<ul class="mb-4 ml-6 list-disc space-y-2">${children}</ul>`,
			number: ({ children }: { children: any }) =>
				`<ol class="mb-4 ml-6 list-decimal space-y-2">${children}</ol>`
		},
		listItem: {
			bullet: ({ children }: { children: any }) =>
				`<li class="leading-relaxed text-muted-foreground">${children}</li>`,
			number: ({ children }: { children: any }) =>
				`<li class="leading-relaxed text-muted-foreground">${children}</li>`
		}
	};
</script>

{#if value && value.length > 0}
	<div class="prose prose-lg max-w-none">
		<PortableText {value} {components} />
	</div>
{/if}

