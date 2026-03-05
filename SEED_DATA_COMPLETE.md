# ✅ Seed Data Setup Complete!

I've created a comprehensive seed data script that will populate your Sanity CMS with all the hardcoded content from the sorrento-web components.

## 📦 What Was Created

### 1. Seed Data Script
**Location**: `studio/seed-data.ts`

This TypeScript script contains all the hardcoded data and will import it into Sanity:
- 6 Blog Posts
- 6 Restaurants
- 6 Accommodations
- 6 Activities
- 3 Destinations (Capri, Amalfi Coast, Naples)
- 3 Testimonials
- 4 Local Specialties

### 2. Instructions Guide
**Location**: `studio/SEED_DATA_INSTRUCTIONS.md`

Complete step-by-step guide on how to:
- Get a Sanity API write token
- Configure environment variables
- Run the seed script
- Add images to content
- Publish content
- Troubleshoot issues

### 3. NPM Script
Added to `studio/package.json`:
```json
"seed": "sanity exec seed-data.ts --with-user-token"
```

### 4. Dependencies
Installed `uuid` package for generating unique IDs.

## 🚀 Quick Start

### Step 1: Get Your API Token

1. Visit https://www.sanity.io/manage
2. Select your "Welcome2Sorrento" project  
3. Go to **API** → **Tokens**
4. Click **Add API Token**
5. Name it "Seed Data Import"
6. Set permissions to **Editor**
7. Copy the token

### Step 2: Configure Environment

Add to `studio/.env`:
```bash
SANITY_API_WRITE_TOKEN="your_token_here"
```

### Step 3: Run the Script

```bash
cd studio
pnpm seed
```

## 📊 What Gets Imported

### Blog Posts (6)
- "10 Hidden Gems in Sorrento Only Locals Know" (featured)
- "A Food Lover's Guide to Sorrento"
- "Best Beaches Near Sorrento"
- "Day Trip to Capri: Complete Guide" (featured)
- "Limoncello: From Grove to Glass"
- "Sunset Spots: Best Views in Sorrento"

**Categories**: travel-tips, food-drink, beaches, day-trips, local-culture

### Restaurants (6)
- Ristorante Bagni Delfino (Seafood, €€€)
- Da Emilia (Traditional, €€)
- L'Antica Trattoria (Traditional, €€€)
- Il Buco (Fine Dining, €€€€, Michelin Star)
- Pizzeria Da Franco (Pizza, €)
- O Parrucchiano La Favorita (Traditional, €€€)

**Categories**: seafood, traditional-italian, fine-dining, pizza

### Accommodations (6)
- Grand Hotel Excelsior Vittoria (Hotel, €€€€)
- Bellevue Syrene (Hotel, €€€€)
- Hotel Maison La Minervetta (Hotel, €€€)
- Casa Astarita B&B (B&B, €€)
- Villa Bohème Luxury Apartments (Apartment, €€€)
- Il Nido Hotel Sorrento (Hotel, €€)

**Types**: hotel, b-and-b, apartment

### Activities (6)
- Boat Tour to Capri (Water Activities, Full Day)
- Cooking Class Experience (Culinary, 3-4 hours)
- Marina Grande Beach (Beaches, Half Day)
- Walk to Punta Campanella (Nature & Hiking, 4-5 hours)
- Cloister of San Francesco (Cultural, 1 hour)
- Corso Italia Shopping (Shopping, 2-3 hours)

**Categories**: water-activities, culinary, beaches, nature-hiking, cultural, shopping

### Destinations (3)
- **Capri** - The Jewel of the Mediterranean
  - Transport: Ferry (20-40 min)
  - Must-see: Blue Grotto, Faraglioni Rocks, Gardens of Augustus
  - 3 visitor tips
  
- **Amalfi Coast** - UNESCO World Heritage Wonder
  - Transport: Bus & Ferry
  - Must-see: Positano, Amalfi Cathedral, Ravello
  - 3 visitor tips
  
- **Naples** - Vibrant Heart of Southern Italy
  - Transport: Train (70 min)
  - Must-see: Historic Center, Archaeological Museum, Pizza
  - 3 visitor tips

### Testimonials (3)
- Sarah Parker (London, UK) - 5 stars (featured)
- Michael Chen (San Francisco, USA) - 5 stars
- Emma Schmidt (Berlin, Germany) - 5 stars

### Local Specialties (4)
- Gnocchi alla Sorrentina (Food)
- Limoncello (Drinks)
- Scialatielli ai Frutti di Mare (Food)
- Delizia al Limone (Desserts)

## 📝 After Import

### 1. Add Images
All content is imported with text only. You'll need to add images in Sanity Studio:

1. Start Studio: `pnpm dev`
2. Visit http://localhost:3333
3. Go through each content type
4. Upload relevant images

**Image Recommendations:**
- Blog posts: 1200x800px featured images
- Restaurants: High-quality food/ambiance photos
- Accommodations: Hotel/room photos
- Activities: Action shots or scenic views
- Destinations: Iconic landmark photos
- Local specialties: Appetizing food photos

### 2. Publish Content
All imported documents are drafts. Click "Publish" on each document in Sanity Studio.

### 3. Test Your Website
```bash
cd ../sorrento-web
pnpm dev
```

Visit http://localhost:5173 and check:
- ✅ Homepage shows featured content
- ✅ Blog page shows all posts with categories
- ✅ Restaurants page shows all listings
- ✅ Accommodations page shows all options
- ✅ Activities page shows all activities
- ✅ Destination pages work with dynamic routes
- ✅ Testimonials appear on homepage

## 🔧 Troubleshooting

### "Missing environment variable"
- Ensure `.env` file exists in `studio/` directory
- Check `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` are set

### "Unauthorized" or "Invalid token"
- Verify `SANITY_API_WRITE_TOKEN` is correct
- Make sure token has Editor or Admin permissions

### "Document already exists"
If you've run the script before, documents may already exist. To re-seed:

```bash
# Option 1: Delete specific content types in Studio
# Option 2: Recreate dataset (WARNING: Deletes ALL data)
pnpm sanity dataset delete production
pnpm sanity dataset create production
pnpm seed
```

## 🎯 Next Steps

1. **Run the seed script** to populate your CMS
2. **Add images** to all content in Sanity Studio
3. **Publish** all documents
4. **Test** all pages on your website
5. **Create more content** as needed
6. **Deploy** to production with environment variables

## 📚 Files Reference

```
studio/
├── seed-data.ts                    # Main seed script
├── SEED_DATA_INSTRUCTIONS.md       # Detailed instructions
└── .env                            # Add your write token here

sorrento-web/
└── CMS_INTEGRATION_COMPLETE.md     # Overall CMS integration guide
```

## 🎉 Benefits

- ✅ **Instant Content**: Your CMS is populated with realistic, ready-to-use content
- ✅ **Consistent Data**: All content follows the same structure and quality
- ✅ **Time Saver**: No need to manually create 34+ documents
- ✅ **Ready for Production**: Just add images and you're good to go!
- ✅ **Easy Updates**: Modify the script to add more seed data anytime

Happy content editing! 🚀

