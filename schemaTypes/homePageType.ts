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
    defineField({
      name: 'featuredAlbum',
      title: 'Featured Album',
      type: 'reference',
      to: [{ type: 'album' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredQuote',
      title: 'Featured Quote',
      type: 'quote',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [{ type: 'link' }],
    })
  ],
})
