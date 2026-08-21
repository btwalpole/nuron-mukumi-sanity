import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',

  fields: [
    defineField({
      name: 'featuredConcert',
      title: 'Featured Concert',
      type: 'reference',
      to: [{ type: 'concert' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
