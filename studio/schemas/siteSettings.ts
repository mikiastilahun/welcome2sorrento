import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'general', title: 'General'},
    {name: 'hero', title: 'Hero Section'},
    {name: 'intro', title: 'Intro Section'},
    {name: 'featured', title: 'Featured Sections'},
    {name: 'destinations', title: 'Destinations Section'},
    {name: 'testimonials', title: 'Testimonials Section'},
    {name: 'newsletter', title: 'Newsletter'},
    {name: 'cta', title: 'CTA Section'},
    {name: 'navigation', title: 'Navigation'},
    {name: 'footer', title: 'Footer'},
    {name: 'seo', title: 'SEO & Meta'},
  ],
  fields: [
    // General Settings
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      group: 'general',
      rows: 3,
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      group: 'general',
    }),

    // Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'subheading', type: 'string', title: 'Subheading'},
        {name: 'ctaText', type: 'string', title: 'CTA Button Text'},
        {name: 'ctaLink', type: 'string', title: 'CTA Button Link'},
        {
          name: 'backgroundImage',
          type: 'image',
          title: 'Background Image',
          options: {hotspot: true},
        },
      ],
    }),

    // Intro Section
    defineField({
      name: 'introSection',
      title: 'Intro Section',
      type: 'object',
      group: 'intro',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'description', type: 'text', title: 'Description', rows: 4},
      ],
    }),
    defineField({
      name: 'introCards',
      title: 'Intro Feature Cards',
      type: 'array',
      group: 'intro',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'description', type: 'text', title: 'Description', rows: 2},
            {
              name: 'icon',
              type: 'string',
              title: 'Icon Name',
              description: 'Lucide icon name (e.g., Map, Compass, Star)',
            },
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
    }),

    // Homepage Statistics
    defineField({
      name: 'homepageStats',
      title: 'Homepage Statistics',
      type: 'object',
      group: 'intro',
      fields: [
        {name: 'happyTravelers', type: 'string', title: 'Happy Travelers', initialValue: '5000+'},
        {name: 'partnerHotels', type: 'string', title: 'Partner Hotels', initialValue: '200+'},
        {name: 'localGuides', type: 'string', title: 'Local Guides', initialValue: '50+'},
        {name: 'yearsExperience', type: 'string', title: 'Years Experience', initialValue: '15+'},
      ],
    }),

    // Featured Sections (Eat, Stay, Do)
    defineField({
      name: 'featuredSectionsHeading',
      title: 'Featured Sections Heading',
      type: 'object',
      group: 'featured',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'subheading', type: 'string', title: 'Subheading'},
      ],
    }),
    defineField({
      name: 'featuredSections',
      title: 'Featured Sections',
      type: 'object',
      group: 'featured',
      fields: [
        {
          name: 'eat',
          type: 'object',
          title: 'Eat Section',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'description', type: 'text', title: 'Description'},
            {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
          ],
        },
        {
          name: 'stay',
          type: 'object',
          title: 'Stay Section',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'description', type: 'text', title: 'Description'},
            {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
          ],
        },
        {
          name: 'do',
          type: 'object',
          title: 'Do Section',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'description', type: 'text', title: 'Description'},
            {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
          ],
        },
      ],
    }),

    // Destinations Section
    defineField({
      name: 'destinationsSection',
      title: 'Destinations Section',
      type: 'object',
      group: 'destinations',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'subheading', type: 'string', title: 'Subheading'},
        {name: 'ctaText', type: 'string', title: 'CTA Button Text'},
      ],
    }),

    // Testimonials Section
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      group: 'testimonials',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'subheading', type: 'string', title: 'Subheading'},
      ],
    }),

    // Newsletter Section
    defineField({
      name: 'newsletter',
      title: 'Newsletter Section',
      type: 'object',
      group: 'newsletter',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'description', type: 'text', title: 'Description', rows: 2},
        {name: 'buttonText', type: 'string', title: 'Button Text'},
        {name: 'successMessage', type: 'string', title: 'Success Message'},
        {name: 'placeholderText', type: 'string', title: 'Input Placeholder'},
      ],
    }),

    // Home CTA Section
    defineField({
      name: 'homeCTA',
      title: 'Home Page CTA Section',
      type: 'object',
      group: 'cta',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'description', type: 'text', title: 'Description', rows: 2},
        {name: 'primaryButtonText', type: 'string', title: 'Primary Button Text'},
        {name: 'primaryButtonLink', type: 'string', title: 'Primary Button Link'},
        {name: 'secondaryButtonText', type: 'string', title: 'Secondary Button Text'},
        {name: 'secondaryButtonLink', type: 'string', title: 'Secondary Button Link'},
        {
          name: 'backgroundImage',
          type: 'image',
          title: 'Background Image',
          options: {hotspot: true},
        },
      ],
    }),

    // Navigation
    defineField({
      name: 'navigation',
      title: 'Main Navigation',
      type: 'object',
      group: 'navigation',
      fields: [
        {
          name: 'mainMenu',
          title: 'Main Menu Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'label', type: 'string', title: 'Label'},
                {name: 'href', type: 'string', title: 'Link'},
                {
                  name: 'submenu',
                  title: 'Submenu Items',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {name: 'label', type: 'string', title: 'Label'},
                        {name: 'href', type: 'string', title: 'Link'},
                        {name: 'description', type: 'string', title: 'Description'},
                      ],
                      preview: {
                        select: {title: 'label', subtitle: 'href'},
                      },
                    },
                  ],
                },
              ],
              preview: {
                select: {title: 'label', subtitle: 'href'},
              },
            },
          ],
        },
        {name: 'ctaButtonText', type: 'string', title: 'CTA Button Text'},
        {name: 'ctaButtonLink', type: 'string', title: 'CTA Button Link'},
      ],
    }),

    // Footer
    defineField({
      name: 'footer',
      title: 'Footer Content',
      type: 'object',
      group: 'footer',
      fields: [
        {name: 'greeting', type: 'string', title: 'Greeting Text'},
        {name: 'description', type: 'text', title: 'Description', rows: 3},
        {name: 'madeWithLove', type: 'string', title: 'Made With Love Text'},
        {name: 'copyrightText', type: 'string', title: 'Copyright Text'},
        {
          name: 'quickLinks',
          title: 'Quick Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'label', type: 'string', title: 'Label'},
                {name: 'href', type: 'string', title: 'Link'},
              ],
              preview: {
                select: {title: 'label', subtitle: 'href'},
              },
            },
          ],
        },
        {
          name: 'services',
          title: 'Services Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'label', type: 'string', title: 'Label'},
                {name: 'href', type: 'string', title: 'Link'},
              ],
              preview: {
                select: {title: 'label', subtitle: 'href'},
              },
            },
          ],
        },
        {name: 'quickLinksTitle', type: 'string', title: 'Quick Links Section Title'},
        {name: 'servicesTitle', type: 'string', title: 'Services Section Title'},
        {name: 'subscribeTitle', type: 'string', title: 'Subscribe Section Title'},
      ],
    }),

    // Contact Info (shared across site)
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      group: 'footer',
      fields: [
        {name: 'email', type: 'string', title: 'Email Address'},
        {name: 'phone', type: 'string', title: 'Phone Number'},
        {name: 'whatsapp', type: 'string', title: 'WhatsApp Number'},
        {name: 'address', type: 'text', title: 'Address', rows: 2},
        {name: 'availability', type: 'string', title: 'Availability Text'},
      ],
    }),

    // Social Media
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      group: 'footer',
      fields: [
        {name: 'facebook', type: 'url', title: 'Facebook URL'},
        {name: 'instagram', type: 'url', title: 'Instagram URL'},
        {name: 'twitter', type: 'url', title: 'Twitter/X URL'},
        {name: 'youtube', type: 'url', title: 'YouTube URL'},
        {name: 'tiktok', type: 'url', title: 'TikTok URL'},
      ],
    }),

    // SEO & Meta
    defineField({
      name: 'seo',
      title: 'Default SEO Settings',
      type: 'object',
      group: 'seo',
      fields: [
        {name: 'metaTitle', type: 'string', title: 'Default Meta Title'},
        {name: 'metaDescription', type: 'text', title: 'Default Meta Description', rows: 3},
        {name: 'keywords', type: 'text', title: 'Default Keywords', rows: 2},
        {name: 'ogImage', type: 'image', title: 'Default OG Image', options: {hotspot: true}},
        {name: 'twitterHandle', type: 'string', title: 'Twitter Handle'},
        {name: 'themeColor', type: 'string', title: 'Theme Color (hex)'},
      ],
    }),

    // Home Page SEO (separate from default)
    defineField({
      name: 'homePageSeo',
      title: 'Home Page SEO',
      type: 'object',
      group: 'seo',
      fields: [
        {name: 'metaTitle', type: 'string', title: 'Meta Title'},
        {name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3},
        {name: 'keywords', type: 'text', title: 'Keywords', rows: 2},
      ],
    }),

    // Sorrento Page Settings (kept for backward compatibility)
    defineField({
      name: 'sorrentoPageStats',
      title: 'Sorrento Page Statistics',
      type: 'object',
      group: 'general',
      fields: [
        {name: 'restaurantCount', type: 'number', title: 'Restaurant Count'},
        {name: 'accommodationCount', type: 'number', title: 'Accommodation Count'},
        {name: 'activityCount', type: 'number', title: 'Activity Count'},
      ],
    }),
    defineField({
      name: 'sorrentoIntro',
      title: 'Sorrento Page Introduction',
      type: 'object',
      group: 'general',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'description', type: 'text', title: 'Description', rows: 6},
      ],
    }),
    defineField({
      name: 'insiderTips',
      title: 'Insider Tips',
      type: 'array',
      group: 'general',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Tip Title'},
            {name: 'description', type: 'text', title: 'Tip Description'},
            {name: 'icon', type: 'string', title: 'Icon Name', description: 'Lucide icon name'},
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
