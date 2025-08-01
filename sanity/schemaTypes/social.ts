import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageInfo = defineType({
  name:"social",title: "Social", type:"document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name:"title", title: "title", description: "platform for social media", type: "string",
    }),
    defineField({
      name:"url", title: "Url", type: "url",
    }),
  ]
})
