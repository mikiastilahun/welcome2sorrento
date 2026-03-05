import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'destination',
  title: 'Destination',
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short tagline for the destination',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'cardImage',
      title: 'Card Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Smaller image for card displays',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Brief description for cards',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'attractions',
      title: 'Attractions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name', validation: (Rule) => Rule.required()},
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
            {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
            {name: 'duration', type: 'string', title: 'Duration'},
            {name: 'entryFee', type: 'string', title: 'Entry Fee'},
          ],
        },
      ],
    }),
    defineField({
      name: 'restaurants',
      title: 'Recommended Restaurants',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name', validation: (Rule) => Rule.required()},
            {name: 'type', type: 'string', title: 'Type'},
            {name: 'cuisine', type: 'string', title: 'Cuisine'},
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
            {name: 'priceRange', type: 'string', title: 'Price Range'},
          ],
        },
      ],
    }),
    defineField({
      name: 'howToGetThere',
      title: 'How to Get There',
      type: 'object',
      fields: [
        {
          name: 'fromSorrento',
          type: 'object',
          title: 'From Sorrento',
          fields: [
            {name: 'description', type: 'text', title: 'Description', rows: 3},
            {
              name: 'options',
              type: 'array',
              title: 'Transport Options',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'type', type: 'string', title: 'Type'},
                    {name: 'duration', type: 'string', title: 'Duration'},
                    {name: 'cost', type: 'string', title: 'Cost'},
                    {name: 'details', type: 'text', title: 'Details', rows: 2},
                  ],
                },
              ],
            },
          ],
        },
        {name: 'tips', type: 'array', title: 'Travel Tips', of: [{type: 'string'}]},
      ],
    }),
    defineField({
      name: 'planningTips',
      title: 'Planning Tips',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required()},
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'bestTimeToVisit',
      title: 'Best Time to Visit',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'estimatedBudget',
      title: 'Estimated Budget',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Destination',
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
      subtitle: 'subtitle',
      media: 'cardImage',
    },
  },
})

