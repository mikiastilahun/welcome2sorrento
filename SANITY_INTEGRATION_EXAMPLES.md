# Sanity Integration Examples

This document provides examples of how to integrate Sanity CMS data into your Svelte components.

## Basic Data Fetching

### Server-Side Loading

The recommended approach is to fetch data in `+page.server.ts` files:

```typescript
// src/routes/blog/+page.server.ts
import { client } from '$lib/sanity/client';
import { blogPostsQuery, type BlogPost } from '$lib/sanity/queries';

export async function load() {
  const posts = await client.fetch<BlogPost[]>(blogPostsQuery);
  return { posts };
}
```

### Using Data in Components

```svelte
<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
  import { urlFor } from '$lib/sanity/image';
  import type { BlogPost } from '$lib/sanity/queries';
  
  interface Props {
    data: { posts: BlogPost[] };
  }
  
  let { data }: Props = $props();
</script>

{#each data.posts as post}
  <article>
    <img 
      src={urlFor(post.mainImage).width(800).height(600).url()} 
      alt={post.title}
    />
    <h2>{post.title}</h2>
    <p>{post.excerpt}</p>
    <a href="/blog/{post.slug.current}">Read more</a>
  </article>
{/each}
```

## Working with Images

### Basic Image

```svelte
<script lang="ts">
  import { urlFor } from '$lib/sanity/image';
  import type { Restaurant } from '$lib/sanity/queries';
  
  let { restaurant }: { restaurant: Restaurant } = $props();
</script>

<img 
  src={urlFor(restaurant.mainImage).width(800).url()} 
  alt={restaurant.name}
/>
```

### Responsive Images

```svelte
<img 
  src={urlFor(restaurant.mainImage).width(400).url()}
  srcset="
    {urlFor(restaurant.mainImage).width(400).url()} 400w,
    {urlFor(restaurant.mainImage).width(800).url()} 800w,
    {urlFor(restaurant.mainImage).width(1200).url()} 1200w
  "
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
  alt={restaurant.name}
  class="w-full h-full object-cover"
/>
```

### Image with Crop and Hotspot

```svelte
<img 
  src={urlFor(restaurant.mainImage)
    .width(800)
    .height(600)
    .fit('crop')
    .crop('focalpoint')
    .url()
  } 
  alt={restaurant.name}
/>
```

## Rendering Rich Text (Portable Text)

### Using the Custom Renderer

```svelte
<script lang="ts">
  import PortableTextRenderer from '$lib/components/PortableTextRenderer.svelte';
  import type { BlogPost } from '$lib/sanity/queries';
  
  let { post }: { post: BlogPost } = $props();
</script>

<article>
  <h1>{post.title}</h1>
  <PortableTextRenderer value={post.body} />
</article>
```

### Custom Portable Text Components

```svelte
<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  
  const customComponents = {
    block: {
      h1: ({ children }) => `<h1 class="text-4xl font-bold mb-4">${children}</h1>`,
      h2: ({ children }) => `<h2 class="text-3xl font-bold mb-3">${children}</h2>`,
    },
    marks: {
      link: ({ children, value }) => 
        `<a href="${value.href}" class="text-blue-500 hover:underline">${children}</a>`
    }
  };
</script>

<PortableText value={content} components={customComponents} />
```

## Filtering and Sorting

### Filter by Category

```typescript
// In component or page
const filteredRestaurants = $derived(
  category === 'All' 
    ? restaurants 
    : restaurants.filter(r => r.category === category)
);
```

### Dynamic Queries with Parameters

```typescript
// src/routes/restaurants/[category]/+page.server.ts
import { client } from '$lib/sanity/client';
import groq from 'groq';

export async function load({ params }) {
  const query = groq`*[_type == "restaurant" && category == $category] | order(rating desc)`;
  const restaurants = await client.fetch(query, { category: params.category });
  return { restaurants };
}
```

## Handling Empty States

```svelte
<script lang="ts">
  let { data } = $props();
</script>

{#if data.posts.length > 0}
  {#each data.posts as post}
    <!-- Render posts -->
  {/each}
{:else}
  <div class="text-center py-12">
    <p class="text-xl text-muted-foreground">No blog posts found.</p>
    <p class="text-sm text-muted-foreground mt-2">
      Check back soon for new content!
    </p>
  </div>
{/if}
```

## Working with Galleries

```svelte
<script lang="ts">
  import { urlFor } from '$lib/sanity/image';
  import type { Restaurant } from '$lib/sanity/queries';
  
  let { restaurant }: { restaurant: Restaurant } = $props();
</script>

{#if restaurant.gallery && restaurant.gallery.length > 0}
  <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
    {#each restaurant.gallery as image, index}
      <img 
        src={urlFor(image).width(400).height(300).url()} 
        alt="{restaurant.name} - Gallery {index + 1}"
        class="rounded-lg object-cover"
      />
    {/each}
  </div>
{/if}
```

## SEO Integration

```svelte
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import type { BlogPost } from '$lib/sanity/queries';
  
  let { post }: { post: BlogPost } = $props();
</script>

<SEO
  title={post.seo?.metaTitle || post.title}
  description={post.seo?.metaDescription || post.excerpt}
  keywords={post.seo?.keywords?.join(', ')}
  type="article"
/>
```

## Real-Time Preview (Optional)

For real-time preview of changes in the studio:

```svelte
<script lang="ts">
  import { enableVisualEditing } from '@sanity/visual-editing';
  import { onMount } from 'svelte';
  
  onMount(() => {
    if (import.meta.env.DEV) {
      enableVisualEditing();
    }
  });
</script>
```

## Error Handling

```typescript
// src/routes/blog/[id]/+page.server.ts
import { client } from '$lib/sanity/client';
import { blogPostQuery } from '$lib/sanity/queries';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const post = await client.fetch(blogPostQuery, { slug: params.id });
    
    if (!post) {
      throw error(404, {
        message: 'Blog post not found'
      });
    }
    
    return { post };
  } catch (err) {
    console.error('Error fetching blog post:', err);
    throw error(500, {
      message: 'Failed to load blog post'
    });
  }
}
```

## Pagination

```typescript
// src/routes/blog/+page.server.ts
import { client } from '$lib/sanity/client';
import groq from 'groq';

export async function load({ url }) {
  const page = parseInt(url.searchParams.get('page') || '1');
  const perPage = 12;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  
  const query = groq`{
    "posts": *[_type == "blogPost"] | order(publishedAt desc) [$start...$end],
    "total": count(*[_type == "blogPost"])
  }`;
  
  const { posts, total } = await client.fetch(query, { start, end });
  
  return {
    posts,
    total,
    page,
    totalPages: Math.ceil(total / perPage)
  };
}
```

## Related Content

```typescript
// Fetching related posts
const query = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  ...,
  "relatedPosts": *[_type == "blogPost" && category == ^.category && _id != ^._id] | order(publishedAt desc) [0...3]
}`;
```

## Tips and Best Practices

1. **Always handle loading states**: Check if data exists before rendering
2. **Use TypeScript types**: Import types from `$lib/sanity/queries` for type safety
3. **Optimize images**: Always specify width/height for better performance
4. **Cache strategy**: Sanity CDN caches published content automatically
5. **Error boundaries**: Wrap data fetching in try-catch blocks
6. **Fallback content**: Provide fallback data for development without Sanity configured
7. **Server-side rendering**: Fetch data in `+page.server.ts` for better SEO
8. **Progressive enhancement**: Ensure pages work even if Sanity is temporarily unavailable

