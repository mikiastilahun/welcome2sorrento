import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'sorrentoPage',
  title: 'Sorrento Page',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'intro', title: 'Introduction'},
    {name: 'sections', title: 'Sections'},
    {name: 'tips', title: 'Insider Tips'},
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

    // Introduction Section
    defineField({
      name: 'intro',
      title: 'Introduction Section',
      type: 'object',
      group: 'intro',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'description', type: 'text', title: 'Description', rows: 4},
        {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
      ],
    }),

    // Main Sections (Eat, Stay, Do)
    defineField({
      name: 'sections',
      title: 'Main Sections',
      type: 'array',
      group: 'sections',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'subtitle', type: 'string', title: 'Subtitle'},
            {name: 'description', type: 'text', title: 'Description', rows: 3},
            {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
            {name: 'link', type: 'string', title: 'Link URL'},
            {
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
          preview: {
            select: {title: 'title', subtitle: 'subtitle', media: 'image'},
          },
        },
      ],
    }),

    // Insider Tips
    defineField({
      name: 'insiderTips',
      title: 'Insider Tips',
      type: 'array',
      group: 'tips',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Tip Title'},
            {name: 'description', type: 'text', title: 'Tip Description', rows: 2},
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
