import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'stayPage',
  title: 'Stay Page',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'intro', title: 'Introduction'},
    {name: 'neighborhoods', title: 'Neighborhoods'},
    {name: 'tips', title: 'Booking Tips'},
    {name: 'cta', title: 'CTA Section'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      group: 'header',
      validation: (Rule) => Rule.required(),
    }),

    // Header Section
    defineField({
      name: 'header',
      title: 'Page Header',
      type: 'object',
      group: 'header',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'subheading', type: 'string', title: 'Subheading'},
        {name: 'heroImage', type: 'image', title: 'Hero Image', options: {hotspot: true}},
      ],
    }),

    // Introduction
    defineField({
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
      group: 'intro',
      rows: 4,
    }),

    // Neighborhood Guide
    defineField({
      name: 'neighborhoodsHeading',
      title: 'Neighborhoods Section Heading',
      type: 'string',
      group: 'neighborhoods',
    }),
    defineField({
      name: 'neighborhoods',
      title: 'Neighborhood Guide',
      type: 'array',
      group: 'neighborhoods',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Neighborhood Name'},
            {name: 'description', type: 'text', title: 'Description', rows: 3},
            {
              name: 'badge',
              type: 'string',
              title: 'Badge Text',
              description: 'e.g., "Best for Families"',
            },
            {name: 'icon', type: 'string', title: 'Icon Name', description: 'Lucide icon name'},
          ],
          preview: {
            select: {title: 'title', subtitle: 'badge'},
          },
        },
      ],
    }),

    // Booking Tips
    defineField({
      name: 'tipsHeading',
      title: 'Tips Section Heading',
      type: 'string',
      group: 'tips',
    }),
    defineField({
      name: 'bookingTips',
      title: 'Booking Tips',
      type: 'array',
      group: 'tips',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'description', type: 'text', title: 'Description', rows: 3},
            {name: 'icon', type: 'string', title: 'Icon Name', description: 'Lucide icon name'},
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
    }),

    // CTA Section
    defineField({
      name: 'cta',
      title: 'CTA Section',
      type: 'object',
      group: 'cta',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'description', type: 'text', title: 'Description', rows: 2},
        {name: 'buttonText', type: 'string', title: 'Button Text'},
        {name: 'buttonLink', type: 'string', title: 'Button Link'},
        {
          name: 'backgroundImage',
          type: 'image',
          title: 'Background Image',
          options: {hotspot: true},
        },
      ],
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      group: 'seo',
      fields: [
        {name: 'metaTitle', type: 'string', title: 'Meta Title'},
        {name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3},
        {name: 'keywords', type: 'text', title: 'Keywords', rows: 2},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
