import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'story', title: 'Our Story'},
    {name: 'services', title: 'Services'},
    {name: 'team', title: 'Team'},
    {name: 'values', title: 'Values'},
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
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'header',
      options: {hotspot: true},
    }),
    defineField({
      name: 'story',
      title: 'Our Story',
      type: 'object',
      group: 'story',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'content', type: 'array', of: [{type: 'block'}], title: 'Story Content'},
        {name: 'image', type: 'image', title: 'Story Image', options: {hotspot: true}},
      ],
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      group: 'story',
      rows: 4,
    }),
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      group: 'services',
      fields: [
        {name: 'heading', type: 'string', title: 'Section Heading'},
        {name: 'description', type: 'text', title: 'Section Description', rows: 2},
        {name: 'image', type: 'image', title: 'Services Image', options: {hotspot: true}},
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services List',
      type: 'array',
      group: 'services',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Service Title'},
            {name: 'description', type: 'text', title: 'Service Description'},
            {name: 'icon', type: 'string', title: 'Icon Name', description: 'Lucide icon name'},
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
    }),
    defineField({
      name: 'team',
      title: 'Team Members',
      type: 'array',
      group: 'team',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'role', type: 'string', title: 'Role'},
            {name: 'bio', type: 'text', title: 'Bio'},
            {name: 'image', type: 'image', title: 'Photo', options: {hotspot: true}},
          ],
          preview: {
            select: {title: 'name', subtitle: 'role', media: 'image'},
          },
        },
      ],
    }),
    defineField({
      name: 'values',
      title: 'Our Values',
      type: 'array',
      group: 'values',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Value Title'},
            {name: 'description', type: 'text', title: 'Value Description'},
            {name: 'icon', type: 'string', title: 'Icon Name', description: 'Lucide icon name'},
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
    }),
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
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      group: 'seo',
      fields: [
        {name: 'metaTitle', type: 'string', title: 'Meta Title'},
        {name: 'metaDescription', type: 'text', title: 'Meta Description'},
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
