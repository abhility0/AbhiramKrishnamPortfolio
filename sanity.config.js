import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { structure } from './sanity/structure'
import { schemaTypes } from './sanity/schemaTypes/schema'
import { apiVersion, dataset, projectId } from './sanity/env'

export default defineConfig({
  basePath: '/studio',  // Next.js mount path (optional)
  projectId:'shq8fhrj',
  dataset:'production',
  schema: {
    types: schemaTypes
  },
  plugins: [
    deskTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion })
  ]
})
