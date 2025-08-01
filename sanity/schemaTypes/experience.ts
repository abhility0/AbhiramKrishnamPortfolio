import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageInfo = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name:"jobTitle", title: "JobTitle", type: "string",
    }),
    defineField({
      name:"company Image",title: "Company Image", type: "image",
      options: {
        hotspot:true,
      }
    }),
    defineField({
      name:"company", title: "Company", type: "text",
    }),
    defineField({
      name:"dateStarted", title: "DateStarted", type: "date",
    }),
    defineField({
      name:"dateEnded", title: "DateEnded", type: "date",
    }),
    defineField({
      name: "isCurrentlyWorkingHere", title:"IsCurrent LyWorkingHere",type: "boolean",
    }),
    defineField({
      name: "isCurrentlyWorkingHere", title:"IsCurrent LyWorkingHere",type: "boolean",
    }),
    defineField({
      name: "isCurrentlyWorkingHere", title:"IsCurrent LyWorkingHere",type: "boolean",
    }),
  ]
})
