import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'form', title: 'Contact Form'},
    {name: 'contact', title: 'Contact Info'},
    {name: 'hours', title: 'Business Hours'},
    {name: 'faq', title: 'FAQ'},
    {name: 'social', title: 'Social Media'},
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

    // Contact Form Options
    defineField({
      name: 'serviceOptions',
      title: 'Service Options (for form dropdown)',
      type: 'array',
      group: 'form',
      of: [{type: 'string'}],
      description: 'Options for the "I\'m interested in" dropdown',
    }),
    defineField({
      name: 'formLabels',
      title: 'Form Labels',
      type: 'object',
      group: 'form',
      fields: [
        {name: 'nameLabel', type: 'string', title: 'Name Field Label'},
        {name: 'emailLabel', type: 'string', title: 'Email Field Label'},
        {name: 'serviceLabel', type: 'string', title: 'Service Field Label'},
        {name: 'messageLabel', type: 'string', title: 'Message Field Label'},
        {name: 'submitButtonText', type: 'string', title: 'Submit Button Text'},
        {name: 'successMessage', type: 'text', title: 'Success Message', rows: 2},
      ],
    }),

    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      group: 'contact',
      fields: [
        {name: 'email', type: 'string', title: 'Email Address'},
        {name: 'phone', type: 'string', title: 'Phone Number'},
        {name: 'whatsapp', type: 'string', title: 'WhatsApp Number'},
        {name: 'address', type: 'text', title: 'Physical Address'},
      ],
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'object',
      group: 'hours',
      fields: [
        {name: 'weekdays', type: 'string', title: 'Weekdays'},
        {name: 'weekends', type: 'string', title: 'Weekends'},
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      group: 'faq',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', type: 'string', title: 'Question'},
            {name: 'answer', type: 'text', title: 'Answer', rows: 4},
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      group: 'social',
      fields: [
        {name: 'facebook', type: 'url', title: 'Facebook URL'},
        {name: 'instagram', type: 'url', title: 'Instagram URL'},
        {name: 'twitter', type: 'url', title: 'Twitter URL'},
        {name: 'linkedin', type: 'url', title: 'LinkedIn URL'},
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
