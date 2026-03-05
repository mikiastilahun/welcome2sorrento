# Loading Seed Data into Sanity CMS

This guide will help you populate your Sanity CMS with all the content we've prepared.

## Prerequisites

Before running the seed data script, make sure you have:

1. ✅ Sanity Studio set up and running
2. ✅ A Sanity API write token

## Step 1: Get Your Sanity Write Token

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to **API** → **Tokens**
4. Click **Add API token**
5. Name it something like "Seed Data Import"
6. Set permissions to **Editor** or **Administrator**
7. Click **Save** and copy the token

## Step 2: Set Environment Variable

In your terminal, set the token as an environment variable:

```bash
# On Mac/Linux
export SANITY_API_WRITE_TOKEN="your-token-here"

# On Windows Command Prompt
set SANITY_API_WRITE_TOKEN=your-token-here

# On Windows PowerShell
$env:SANITY_API_WRITE_TOKEN="your-token-here"
```

## Step 3: Run the Seed Data Script

Navigate to the studio directory and run the script:

```bash
cd studio
npx sanity exec seed-data.ts --with-user-token
```

## What Gets Created

The seed data script will create:

### Content Documents:
- **6 Blog Posts** - Featured travel guides and tips
- **6 Restaurants** - From pizza to fine dining
- **6 Accommodations** - Hotels, B&Bs, and apartments
- **8 Activities** - Boat tours, cooking classes, hikes, and more
- **3 Destinations** - Capri, Amalfi Coast, Naples
- **3 Testimonials** - Customer reviews
- **4 Local Specialties** - Food and drink specialties

### Singleton Documents:
- **Site Settings** - Homepage stats, featured sections, insider tips
- **About Page** - Complete about page content
- **Contact Page** - Contact info and FAQs

## Expected Output

You should see output like this:

```
Starting seed data import...

Creating blog posts...
✓ Created: 10 Hidden Gems in Sorrento Only Locals Know
✓ Created: A Food Lover's Guide to Sorrento
...

Creating restaurants...
✓ Created: Ristorante Bagni Delfino
✓ Created: Da Emilia
...

Creating accommodations...
✓ Created: Grand Hotel Excelsior Vittoria
...

Creating activities...
✓ Created: Boat Tour to Capri
✓ Created: Cooking Class Experience
...

Creating destinations...
✓ Created: Capri
✓ Created: Amalfi Coast
✓ Created: Naples

Creating testimonials...
✓ Created: Sarah Parker
...

Creating local specialties...
✓ Created: Gnocchi alla Sorrentina
...

Creating site settings...
✓ Created: Site Settings

Creating about page...
✓ Created: About Page

Creating contact page...
✓ Created: Contact Page

✅ Seed data import completed successfully!

📊 Summary:
   • 6 blog posts
   • 6 restaurants
   • 6 accommodations
   • 8 activities
   • 3 destinations
   • 3 testimonials
   • 4 local specialties
   • 1 site settings document
   • 1 about page document
   • 1 contact page document
```

## Step 4: Add Images

After the seed data is loaded:

1. Visit Sanity Studio at `http://localhost:3333`
2. Navigate to each content type
3. Add images where indicated
4. Review and customize the content

### Recommended Images to Add:

**Activities:**
- Boat Tour to Capri - Photo of boat and blue grotto
- Cooking Class - Photo of people cooking
- Path of the Gods - Hiking trail photo
- Each activity should have a main image

**Restaurants:**
- Add exterior or interior photos
- Food plating photos

**Accommodations:**
- Hotel exteriors or rooms
- Pool/amenity photos

**Featured Sections (in Site Settings):**
- Eat section - Pizza or pasta photo
- Stay section - Hotel or room photo  
- Do section - Activity or beach photo

## Step 5: Customize Content

Update the following with your actual information:

### Contact Page:
- Real email address
- Real phone numbers
- Actual WhatsApp number
- Your social media links

### About Page:
- Update the story to match your actual background
- Add team member photos if you want
- Customize services

### Site Settings:
- Adjust statistics if needed
- Update featured section descriptions
- Modify insider tips

## Troubleshooting

### "Missing environment variable" error
Make sure you've set `SANITY_API_WRITE_TOKEN` correctly

### "Permission denied" error
Your API token needs Editor or Administrator permissions

### Content already exists
The script uses `createOrReplace` for singletons, so it's safe to run multiple times. Regular documents will create duplicates if run twice.

### To delete all data and start fresh:
1. Go to Sanity Studio
2. Select content type
3. Select all documents
4. Delete
5. Run seed script again

## Next Steps

Once the seed data is loaded and images are added:

1. ✅ Test the website to see all content displaying
2. ✅ Customize any content that needs adjustment
3. ✅ Add more activities, restaurants, or accommodations as needed
4. ✅ Upload high-quality images for best presentation
5. ✅ Update contact information with your real details

## Need Help?

If you encounter any issues:
1. Check that your Sanity project ID and dataset are correct in `.env`
2. Verify your API token has the right permissions
3. Check the console for specific error messages
4. Make sure you're in the `studio` directory when running the command

---

**Ready to go live?** Once you're happy with the content, your site is ready to deploy! 🚀

