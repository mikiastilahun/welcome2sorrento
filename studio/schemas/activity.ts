import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'activity',
  title: 'Activity',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Boat Tours', value: 'boat-tours'},
          {title: 'Beaches', value: 'beaches'},
          {title: 'Cooking Classes', value: 'cooking-classes'},
          {title: 'Historical Sites', value: 'historical-sites'},
          {title: 'Walking Tours', value: 'walking-tours'},
          {title: 'Water Sports', value: 'water-sports'},
          {title: 'Wine Tasting', value: 'wine-tasting'},
          {title: 'Shopping', value: 'shopping'},
          {title: 'Wellness', value: 'wellness'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "2-3 hours", "Full day", "Half day"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priceRange',
      title: 'Price Range',
      type: 'string',
      options: {
        list: [
          {title: 'Free', value: 'free'},
          {title: '€ (Budget)', value: '€'},
          {title: '€€ (Moderate)', value: '€€'},
          {title: '€€€ (Premium)', value: '€€€'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priceDetails',
      title: 'Price Details',
      type: 'string',
      description: 'e.g., "€50 per person", "From €100"',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'included',
      title: "What's Included",
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'meetingPoint',
      title: 'Meeting Point',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'bookingUrl',
      title: 'Booking URL',
      type: 'url',
    }),
    defineField({
      name: 'bestTimeToVisit',
      title: 'Best Time to Visit',
      type: 'string',
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          {title: 'Easy', value: 'easy'},
          {title: 'Moderate', value: 'moderate'},
          {title: 'Challenging', value: 'challenging'},
        ],
      },
    }),
    defineField({
      name: 'additionalInfo',
      title: 'Additional Information',
      type: 'blockContent',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Activity',
      type: 'boolean',
      description: 'Mark as featured to highlight on the main page',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      category: 'category',
      media: 'mainImage',
      priceRange: 'priceRange',
    },
    prepare(selection) {
      const {category, priceRange} = selection
      return {
        ...selection,
        subtitle: `${category} - ${priceRange || ''}`,
      }
    },
  },
})
