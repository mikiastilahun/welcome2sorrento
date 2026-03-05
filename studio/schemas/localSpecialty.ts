import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'localSpecialty',
  title: 'Local Specialty',
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
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Food', value: 'food'},
          {title: 'Drink', value: 'drink'},
          {title: 'Dessert', value: 'dessert'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Image',
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
      name: 'history',
      title: 'History',
      type: 'blockContent',
      description: 'Historical background of this specialty',
    }),
    defineField({
      name: 'whereToBuy',
      title: 'Where to Buy',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of places where this specialty can be found',
    }),
    defineField({
      name: 'bestSeasons',
      title: 'Best Seasons',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Spring', value: 'spring'},
          {title: 'Summer', value: 'summer'},
          {title: 'Autumn', value: 'autumn'},
          {title: 'Winter', value: 'winter'},
          {title: 'Year-round', value: 'year-round'},
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Specialty',
      type: 'boolean',
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
      type: 'type',
      media: 'image',
    },
    prepare(selection) {
      const {title, type} = selection
      return {
        ...selection,
        subtitle: type,
      }
    },
  },
})

