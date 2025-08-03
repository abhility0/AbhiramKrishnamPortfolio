import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const skill = defineType({
    name:"skill", 
    title: "Skill", 
    type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name:"title", title: "title", description: "Title of the skill", type: "string"
    }),
    defineField({
        name:"progress", title: "Progres", type: "number",description: "Progress of skill from 0 to 100%",
        validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
        name:"image", title: "Image", type: "image",
        options: {
            hotspot: true,
        }
    }),
  ]
})
