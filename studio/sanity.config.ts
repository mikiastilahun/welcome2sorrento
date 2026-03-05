import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'

import {schemaTypes} from './schemas'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'welcome2sorrento-studio',
  title: 'Welcome2Sorrento CMS',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singletons
            S.listItem()
              .title('⚙️ Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.listItem()
              .title('📄 About Page')
              .child(
                S.document()
                  .schemaType('aboutPage')
                  .documentId('aboutPage')
              ),
            S.listItem()
              .title('📧 Contact Page')
              .child(
                S.document()
                  .schemaType('contactPage')
                  .documentId('contactPage')
              ),
            S.divider(),
            // Blog
            S.listItem()
              .title('Blog Posts')
              .child(S.documentTypeList('blogPost').title('Blog Posts')),
            S.divider(),
            // Travel Content
            S.listItem()
              .title('Restaurants')
              .child(S.documentTypeList('restaurant').title('Restaurants')),
            S.listItem()
              .title('Accommodations')
              .child(S.documentTypeList('accommodation').title('Accommodations')),
            S.listItem()
              .title('Activities')
              .child(S.documentTypeList('activity').title('Activities')),
            S.divider(),
            S.listItem()
              .title('Destinations')
              .child(S.documentTypeList('destination').title('Destinations')),
            S.divider(),
            // Other Content
            S.listItem()
              .title('Local Specialties')
              .child(S.documentTypeList('localSpecialty').title('Local Specialties')),
            S.listItem()
              .title('Testimonials')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
            S.divider(),
            S.listItem()
              .title('Legacy Posts')
              .child(S.documentTypeList('post').title('Posts')),
          ]),
    }),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:5173',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
