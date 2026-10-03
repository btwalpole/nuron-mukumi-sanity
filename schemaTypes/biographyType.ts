import {defineField, defineType} from 'sanity'

export const biographyType = defineType({
  name: 'biography',
  title: 'Biography',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required().min(1),
    }),
  ],
})
