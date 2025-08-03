import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageInfo = defineType({
  name: 'pageInfo',
  title: 'page Info',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name:"role", title: "Role", type: "string",
    }),
    defineField({
      name: "heroImage", title: "Image", type: "image",
      options: {
        hotspot:true,
      }
    }),
    defineField({
      name: "backgroundInformation", title:"BackgroundInformation", type:"string",
    }),
    defineField({
      name: "profilePic", title: "ProfilePic", type: "image",
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name:"socials", title: "Socials", type: "array",
      of: [{type: "reference", to: { type: "social" } }],
    }),
  ]
})
