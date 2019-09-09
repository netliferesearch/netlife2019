import standardSlugify from 'standard-slugify';

const PARENT_PATH = 'folka';

export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Use the format "Firstname Lastname',
      validation: Rule => Rule.required().max(96)
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Used in the url. Eg. Fredrik Schjold becomes /folka/fredrik-schjold. For conflicting names; use postfix dash number. Eg. /folka/fredrik-schjold-2',
      options: {
        source: doc => `${PARENT_PATH}/${doc.name}/`,
        slugify: input =>
          standardSlugify(input, {
            keepCase: false,
            replacements: {
              '/': '/'
            }
          }),
        maxLength: 120
      },
      validation: Rule => Rule.required()
    },
    {
      type: 'reference',
      title: 'Office',
      name: 'office',
      to: {
        type: 'office'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'inactive',
      title: 'Inactive',
      description:
        'Hides the person including its bio page. It will still show up as author in blog posts.',
      type: 'boolean'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: Rule => Rule.required()
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number',
      description: 'Eight digits, leave the formating to us.',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role'
    },
    {
      name: 'services',
      type: 'array',
      title: 'Services',
      of: [{ type: 'reference', to: { type: 'personService' } }],
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(2)
    },
    {
      name: 'about',
      type: 'aboutPerson'
    },
    {
      name: 'socialMedia',
      type: 'socialMedia'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'office.name',
      media: 'image'
    }
  }
};
