# Sanity CMS Setup Complete ✅

The Sanity CMS has been successfully integrated into your Welcome2Sorrento project!

## What Was Done

### 1. Created Comprehensive Content Schemas (Studio)

Located in `studio/schemas/`:

- **`restaurant.ts`** - Restaurant listings with categories, pricing, ratings, galleries
- **`accommodation.ts`** - Hotels, B&Bs, villas with amenities and booking info
- **`activity.ts`** - Things to do with categories, duration, pricing
- **`destination.ts`** - Surrounding destinations (Capri, Amalfi, etc.) with travel info
- **`blogPost.ts`** - Blog posts with categories, authors, rich text content
- **`testimonial.ts`** - Customer reviews and testimonials
- **`localSpecialty.ts`** - Local food and drink specialties
- **`blockContent.ts`** - Rich text editor configuration (already existed)
- **`post.ts`** - Legacy post type (kept for reference)

### 2. Updated Studio Configuration

- Updated `studio/schemas/index.ts` to include all new schemas
- Enhanced `studio/sanity.config.ts` with organized content structure
- Added custom structure tool with grouped content sections

### 3. Installed Dependencies (sorrento-web)

Installed the following packages via pnpm:
```
@sanity/client
@sanity/image-url
@sanity/svelte-loader
@sanity/visual-editing
groq
@portabletext/svelte
@portabletext/types
@sanity/types
```

### 4. Created Sanity Client & Utilities (sorrento-web)

Located in `sorrento-web/src/lib/sanity/`:

- **`api.ts`** - Environment variable configuration
- **`client.ts`** - Sanity client initialization
- **`image.ts`** - Image URL builder helper
- **`queries.ts`** - Pre-built GROQ queries and TypeScript types

Located in `sorrento-web/src/lib/server/sanity/`:

- **`api.ts`** - Server-side API token
- **`client.ts`** - Server-side client with authentication

### 5. Created Page Integrations (sorrento-web)

Created server-side load functions for:

- `src/routes/+page.server.ts` - Homepage (featured content)
- `src/routes/blog/+page.server.ts` - Blog listing
- `src/routes/blog/[id]/+page.server.ts` - Individual blog posts
- `src/routes/sorrento/eat/+page.server.ts` - Restaurants
- `src/routes/sorrento/stay/+page.server.ts` - Accommodations
- `src/routes/sorrento/do/+page.server.ts` - Activities
- `src/routes/surrounding/[destination]/+page.server.ts` - Destinations

### 6. Created Helper Components

- `sorrento-web/src/lib/components/PortableTextRenderer.svelte` - Styled rich text renderer

### 7. Documentation

- `sorrento-web/SANITY_SETUP.md` - Complete setup guide
- `sorrento-web/SANITY_INTEGRATION_EXAMPLES.md` - Code examples
- `sorrento-web/.env.example` - Environment variable template

## Next Steps

### 1. Set Up Sanity Project

1. Go to https://www.sanity.io and sign up/log in
2. Create a new project or use existing one
3. Create a dataset (usually named `production`)
4. Get your Project ID from the project settings

### 2. Configure Environment Variables

Create `sorrento-web/.env` file:

```bash
PUBLIC_SANITY_PROJECT_ID=your-project-id-here
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-03-15
PUBLIC_SANITY_STUDIO_URL=http://localhost:3333

SANITY_API_READ_TOKEN=your-token-here
```

**To get your API token:**
1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to API → Tokens
4. Create a new token with "Read" permissions

### 3. Update Studio Configuration

Edit `studio/.env` or add to your shell:

```bash
export SANITY_STUDIO_PROJECT_ID=your-project-id-here
export SANITY_STUDIO_DATASET=production
export SANITY_STUDIO_PREVIEW_URL=http://localhost:5173
```

### 4. Deploy the Studio

```bash
cd studio
pnpm install
pnpm deploy
```

This will deploy your studio to `https://your-project.sanity.studio`

### 5. Add Content

1. Start the studio locally:
   ```bash
   cd studio
   pnpm dev
   ```

2. Open http://localhost:3333

3. Start adding content:
   - **Blog Posts** - Create some blog articles
   - **Restaurants** - Add restaurant listings
   - **Accommodations** - Add hotels and B&Bs
   - **Activities** - Add things to do
   - **Destinations** - Add info about Capri, Amalfi, etc.
   - **Local Specialties** - Add limoncello, local dishes
   - **Testimonials** - Add customer reviews

### 6. Update Frontend Components

The server-side data loading is complete, but you'll need to update your Svelte components to use the data from Sanity instead of hardcoded arrays. 

**Example for Blog Page:**

Before:
```svelte
<script lang="ts">
  const blogPosts = [
    { id: 1, title: "Post 1", ... }
  ];
</script>
```

After:
```svelte
<script lang="ts">
  let { data } = $props();
</script>

{#each data.posts as post}
  <!-- Render post -->
{/each}
```

See `SANITY_INTEGRATION_EXAMPLES.md` for complete examples.

### 7. Test the Integration

1. Start both services:
   ```bash
   # Terminal 1 - Studio
   cd studio
   pnpm dev
   
   # Terminal 2 - Web App
   cd sorrento-web
   pnpm dev
   ```

2. Add test content in the studio
3. Visit http://localhost:5173 and verify data appears

### 8. Deploy to Production

**Vercel Deployment:**

1. Add environment variables in Vercel project settings:
   - `PUBLIC_SANITY_PROJECT_ID`
   - `PUBLIC_SANITY_DATASET`
   - `PUBLIC_SANITY_API_VERSION`
   - `PUBLIC_SANITY_STUDIO_URL` (use your deployed studio URL)
   - `SANITY_API_READ_TOKEN`

2. Deploy:
   ```bash
   cd sorrento-web
   git add .
   git commit -m "Add Sanity CMS integration"
   git push
   ```

## Content Structure Overview

### Blog Posts
- **Purpose**: Travel guides, tips, local insights
- **Categories**: Local Culture, Beaches, Travel Tips, Day Trips, Food & Drink
- **Features**: Rich text, author info, related posts, SEO fields

### Restaurants
- **Purpose**: Where to eat in Sorrento
- **Categories**: Fine Dining, Traditional, Seafood, Casual Dining, Pizzeria
- **Features**: Ratings, price ranges, highlights, galleries, contact info

### Accommodations
- **Purpose**: Where to stay in Sorrento
- **Types**: Luxury Hotels, Boutique Hotels, B&Bs, Private Villas, Resorts
- **Features**: Star ratings, amenities, booking links, galleries

### Activities
- **Purpose**: Things to do in Sorrento
- **Categories**: Boat Tours, Beaches, Cooking Classes, Historical Sites, etc.
- **Features**: Duration, difficulty, pricing, what's included

### Destinations
- **Purpose**: Day trips from Sorrento
- **Examples**: Capri, Amalfi, Positano, Naples, Pompeii
- **Features**: Attractions, restaurants, how to get there, planning tips

### Local Specialties
- **Purpose**: Showcase local food and drinks
- **Types**: Food, Drink, Dessert
- **Features**: History, where to buy, best seasons

### Testimonials
- **Purpose**: Social proof and customer reviews
- **Features**: Ratings, photos, service categories

## Available Queries

Pre-built queries in `src/lib/sanity/queries.ts`:

- `blogPostsQuery` - All blog posts
- `restaurantsQuery` - All restaurants
- `accommodationsQuery` - All accommodations
- `activitiesQuery` - All activities
- `destinationsQuery` - All destinations
- `featuredBlogPostsQuery` - Featured blog posts
- `featuredTestimonialsQuery` - Featured testimonials
- `localSpecialtiesQuery` - All local specialties

Plus individual item queries for detail pages.

## Tips for Success

1. **Start Small**: Begin with 5-10 items per content type to test
2. **Use Featured Flags**: Mark important content as featured for homepage
3. **Set Display Order**: Use the `order` field to control display sequence
4. **Optimize Images**: Upload high-quality images (Sanity will optimize them)
5. **Write Good Descriptions**: Craft compelling descriptions for SEO
6. **Add Metadata**: Fill in SEO fields for better search visibility
7. **Test Mobile**: Ensure images look good on all screen sizes
8. **Keep Updating**: Regularly add new content to keep the site fresh

## Support & Resources

- **Sanity Documentation**: https://www.sanity.io/docs
- **GROQ Query Language**: https://www.sanity.io/docs/groq
- **Sanity Community**: https://www.sanity.io/community
- **Setup Guide**: `sorrento-web/SANITY_SETUP.md`
- **Code Examples**: `sorrento-web/SANITY_INTEGRATION_EXAMPLES.md`

## Troubleshooting

**"Missing environment variable" error:**
- Ensure `.env` file exists in `sorrento-web/`
- Check all required variables are set
- Restart dev server after changing `.env`

**No data appearing:**
- Verify Sanity project ID and dataset are correct
- Check that content is published (not draft) in the studio
- Look at browser console for errors
- Verify API token has read permissions

**Studio won't start:**
- Check `studio/.env` or environment variables
- Run `pnpm install` in studio directory
- Clear cache: `rm -rf node_modules && pnpm install`

**Images not loading:**
- Verify `PUBLIC_SANITY_PROJECT_ID` is correct
- Check image URLs in browser network tab
- Ensure images are uploaded and published in studio

## Migration Strategy

To migrate from hardcoded content to Sanity:

1. **Phase 1**: Set up Sanity and add a few test items
2. **Phase 2**: Update one page at a time (start with blog)
3. **Phase 3**: Migrate all content types
4. **Phase 4**: Remove hardcoded arrays from components
5. **Phase 5**: Add new features (search, filters, pagination)

## What's Next?

Consider adding:
- **Search functionality** using Sanity's search API
- **Content preview** for draft content
- **Multilingual content** (Italian/English)
- **User comments** via Sanity's comment system
- **Analytics** to track popular content
- **Scheduled publishing** for blog posts
- **Image galleries** with lightbox

---

**Status**: ✅ Integration Complete - Ready for Content!

Your Sanity CMS is fully integrated and ready to use. Follow the next steps above to start adding content.

