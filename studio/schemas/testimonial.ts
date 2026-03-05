import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "London, UK"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'service',
      title: 'Service Used',
      type: 'string',
      options: {
        list: [
          {title: 'Booking Service', value: 'booking-service'},
          {title: 'General Guide', value: 'general-guide'},
          {title: 'Restaurant Reservations', value: 'restaurant-reservations'},
          {title: 'Activity Booking', value: 'activity-booking'},
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Mark as featured to show on homepage',
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
      subtitle: 'location',
      media: 'photo',
      rating: 'rating',
    },
    prepare(selection) {
      const {title, subtitle, rating} = selection
      return {
        ...selection,
        title,
        subtitle: `${subtitle} - ${rating}/5⭐`,
      }
    },
  },
})

