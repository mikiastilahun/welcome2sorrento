import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'doPage',
  title: 'Do Page',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'intro', title: 'Introduction'},
    {name: 'categories', title: 'Activity Categories'},
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

    // Activity Categories / Quick Guide
    defineField({
      name: 'categoriesHeading',
      title: 'Categories Section Heading',
      type: 'string',
      group: 'categories',
    }),
    defineField({
      name: 'activityCategories',
      title: 'Activity Categories',
      type: 'array',
      group: 'categories',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Category Title'},
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
