import {defineField, defineType} from 'sanity'

export const quoteType = defineType({
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      type: 'text',
    }),
    defineField({
      name: 'link',
      type: 'object',
      fields: [
        defineField({
          name: 'url',
          type: 'url',
        }),
        defineField({
          name: 'text',
          type: 'string',
        }),
      ],
    }),
  ],
})
