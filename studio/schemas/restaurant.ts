import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
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
          {title: 'Fine Dining', value: 'fine-dining'},
          {title: 'Traditional', value: 'traditional'},
          {title: 'Seafood', value: 'seafood'},
          {title: 'Casual Dining', value: 'casual-dining'},
          {title: 'Pizzeria', value: 'pizzeria'},
          {title: 'Vegan', value: 'vegan'},
          {title: 'Vegetarian', value: 'vegetarian'},
          {title: 'Gluten-free', value: 'gluten-free'},
          {title: 'Kosher', value: 'kosher'},
          {title: 'Halal', value: 'halal'},
          {title: 'Indian', value: 'indian'},
          {title: 'Japanese', value: 'japanese'},
          {title: 'Korean', value: 'korean'},
          {title: 'Mexican', value: 'mexican'},
          {title: 'Thai', value: 'thai'},
          {title: 'Vietnamese', value: 'vietnamese'},
          {title: 'Indian', value: 'indian'},
          {title: 'Japanese', value: 'japanese'},
          {title: 'Korean', value: 'korean'},
          {title: 'Mexican', value: 'mexican'},
          {title: 'Thai', value: 'thai'},
          {title: 'Vietnamese', value: 'vietnamese'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cuisine',
      title: 'Cuisine',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priceRange',
      title: 'Price Range',
      type: 'string',
      options: {
        list: [
          {title: '€ (Budget)', value: '€'},
          {title: '€€ (Moderate)', value: '€€'},
          {title: '€€€ (Upscale)', value: '€€€'},
          {title: '€€€€ (Fine Dining)', value: '€€€€'},
        ],
      },
      validation: (Rule) => Rule.required(),
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
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Full Address',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Restaurant',
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
