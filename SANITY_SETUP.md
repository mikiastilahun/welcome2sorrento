# Sanity CMS Setup Guide

This guide explains how to set up and use Sanity CMS with the Welcome2Sorrento website.

## Prerequisites

1. Sanity account (sign up at https://www.sanity.io)
2. Project created in Sanity
3. Dataset created (usually `production`)

## Environment Variables

Create a `.env` file in the `sorrento-web` directory with the following variables:

```bash
# Public variables (accessible in browser)
PUBLIC_SANITY_PROJECT_ID=your-project-id-here
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-03-15
PUBLIC_SANITY_STUDIO_URL=http://localhost:3333

# Private variables (server-only)
SANITY_API_READ_TOKEN=your-read-token-here
```

### Getting Your Credentials

1. **Project ID**: Found in your Sanity project settings at https://www.sanity.io/manage
2. **Dataset**: Usually `production` (you can create multiple datasets for different environments)
3. **API Token**: Create a read token in your Sanity project settings under API > Tokens

## Studio Setup

The Sanity Studio is located in the `studio` directory at the root level.

### Starting the Studio

```bash
cd studio
pnpm dev
```

The studio will be available at http://localhost:3333

### Deploying the Studio

```bash
cd studio
pnpm deploy
```

This will deploy your studio to Sanity's hosting (e.g., `your-project.sanity.studio`)

## Content Types

The following content types are available in the CMS:

### 1. **Blog Posts** (`blogPost`)
- Full blog posts with rich text content
- Categories: Local Culture, Beaches, Travel Tips, Day Trips, Food & Drink
- Author information
- Featured posts option
- Related posts

### 2. **Restaurants** (`restaurant`)
- Restaurant information
- Categories: Fine Dining, Traditional, Seafood, Casual Dining, Pizzeria
- Price range, ratings, highlights
- Location and contact details
- Image galleries

### 3. **Accommodations** (`accommodation`)
- Hotels, B&Bs, villas
- Star ratings and guest ratings
- Amenities and highlights
- Booking information
- Image galleries

### 4. **Activities** (`activity`)
- Things to do in Sorrento
- Categories: Boat Tours, Beaches, Cooking Classes, Historical Sites, etc.
- Duration, price range, difficulty
- What's included
- Booking information

### 5. **Destinations** (`destination`)
- Nearby destinations (Capri, Amalfi, Naples, etc.)
- Attractions and restaurants
- How to get there information
- Planning tips
- Budget estimates

### 6. **Local Specialties** (`localSpecialty`)
- Food, drinks, and desserts
- History and descriptions
- Where to buy
- Best seasons

### 7. **Testimonials** (`testimonial`)
- Customer reviews
- Ratings
- Service used
- Featured testimonials for homepage

## Usage in SvelteKit Pages

### Example: Fetching Blog Posts

```typescript
// +page.server.ts
import { client } from '$lib/sanity/client';
import { blogPostsQuery } from '$lib/sanity/queries';
import type { BlogPost } from '$lib/sanity/queries';

export async function load() {
  const posts = await client.fetch<BlogPost[]>(blogPostsQuery);
  return { posts };
}
```

### Example: Fetching a Single Item

```typescript
// +page.server.ts
import { client } from '$lib/sanity/client';
import { restaurantQuery } from '$lib/sanity/queries';
import type { Restaurant } from '$lib/sanity/queries';

export async function load({ params }) {
  const restaurant = await client.fetch<Restaurant>(restaurantQuery, {
    slug: params.slug
  });
  return { restaurant };
}
```

### Using Images

```svelte
<script lang="ts">
  import { urlFor } from '$lib/sanity/image';
  import type { Restaurant } from '$lib/sanity/queries';
  
  export let restaurant: Restaurant;
</script>

<img 
  src={urlFor(restaurant.mainImage).width(800).url()} 
  alt={restaurant.name}
/>
```

### Rendering Rich Text (Portable Text)

```svelte
<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import type { BlogPost } from '$lib/sanity/queries';
  
  export let post: BlogPost;
</script>

<PortableText value={post.body} />
```

## Integration with Existing Pages

### Blog Page (`/blog`)
Replace the hardcoded `blogPosts` array with data from Sanity:

```typescript
// src/routes/blog/+page.server.ts
import { client } from '$lib/sanity/client';
import { blogPostsQuery } from '$lib/sanity/queries';

export async function load() {
  const posts = await client.fetch(blogPostsQuery);
  return { posts };
}
```

### Restaurant Page (`/sorrento/eat`)
```typescript
// src/routes/sorrento/eat/+page.server.ts
import { client } from '$lib/sanity/client';
import { restaurantsQuery } from '$lib/sanity/queries';

export async function load() {
  const restaurants = await client.fetch(restaurantsQuery);
  return { restaurants };
}
```

### Similar pattern for:
- `/sorrento/stay` → `accommodationsQuery`
- `/sorrento/do` → `activitiesQuery`
- `/surrounding/*` → `destinationQuery`

## Best Practices

1. **Use Server-Side Loading**: Fetch data in `+page.server.ts` files for better SEO
2. **Cache Strategy**: Sanity uses CDN caching by default for published content
3. **Image Optimization**: Always use the `urlFor()` helper to optimize images
4. **Environment Variables**: Never commit `.env` files to version control
5. **Content Organization**: Use the `order` field to control display order
6. **Featured Content**: Use the `featured` boolean to highlight special content

## Testing

1. Start the studio: `cd studio && pnpm dev`
2. Add some test content in each content type
3. Start the web app: `cd sorrento-web && pnpm dev`
4. Verify that data appears correctly on the pages

## Deployment

### Vercel

Add the environment variables to your Vercel project settings:
- Settings → Environment Variables
- Add all `PUBLIC_SANITY_*` and `SANITY_API_READ_TOKEN` variables

### Studio URL in Production

Update `PUBLIC_SANITY_STUDIO_URL` to your deployed studio URL:
```
PUBLIC_SANITY_STUDIO_URL=https://your-project.sanity.studio
```

## Support

For issues or questions:
- Sanity Documentation: https://www.sanity.io/docs
- Sanity Community: https://www.sanity.io/community
- Project-specific questions: Check the codebase or contact the development team

