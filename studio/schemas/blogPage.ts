import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'intro', title: 'Introduction'},
    {name: 'newsletter', title: 'Newsletter CTA'},
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
        {name: 'label', type: 'string', title: 'Label Text', description: 'e.g., "Il Nostro Blog"'},
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
      rows: 6,
    }),

    // Newsletter CTA
    defineField({
      name: 'newsletterCTA',
      title: 'Newsletter CTA',
      type: 'object',
      group: 'newsletter',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'description', type: 'text', title: 'Description', rows: 2},
        {name: 'buttonText', type: 'string', title: 'Button Text'},
        {name: 'placeholderText', type: 'string', title: 'Input Placeholder'},
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
