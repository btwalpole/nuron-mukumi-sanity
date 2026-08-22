import {defineField, defineType} from 'sanity'

export const albumType = defineType({
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'quote',
    }),
    defineField({
      name: 'artwork',
      title: 'Artwork',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
  name: 'supportingInfo',
  title: 'Supporting Information',
  type: 'object',
  fields: [
    defineField({
      name: 'subheader',
      title: 'Subheader',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'link',
        },
      ],
    }),
  ],
})
    
  ],
})