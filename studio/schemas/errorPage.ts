import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'errorPage',
  title: 'Error Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // 404 Error
    defineField({
      name: 'error404',
      title: '404 Not Found',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'message', type: 'text', title: 'Message', rows: 3},
      ],
    }),

    // 500 Error
    defineField({
      name: 'error500',
      title: '500 Server Error',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'message', type: 'text', title: 'Message', rows: 3},
      ],
    }),

    // Default Error
    defineField({
      name: 'errorDefault',
      title: 'Default Error',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'message', type: 'text', title: 'Message', rows: 3},
      ],
    }),

    // Navigation Section
    defineField({
      name: 'navigationTitle',
      title: 'Navigation Section Title',
      type: 'string',
    }),
    defineField({
      name: 'navigationCards',
      title: 'Navigation Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label'},
            {name: 'href', type: 'string', title: 'Link'},
            {name: 'icon', type: 'string', title: 'Icon Name', description: 'Lucide icon name'},
          ],
          preview: {
            select: {title: 'label', subtitle: 'href'},
          },
        },
      ],
    }),

    // Footer Message
    defineField({
      name: 'footerMessage',
      title: 'Footer Message',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
