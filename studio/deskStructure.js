import S from '@sanity/desk-tool/structure-builder';
import MdSettings from 'react-icons/lib/md/settings';
import MdLocalPostOffice from 'react-icons/lib/md/local-post-office';
import MDLocalRestaurant from 'react-icons/lib/md/business';
import MDPeople from 'react-icons/lib/md/people';
import MDPeopleOutline from 'react-icons/lib/md/people-outline';

const hiddenDocTypes = listItem =>
  ![
    'newsletter',
    'jobAdvertListing',
    'eventListing',
    'peopleOverview',
    'contact',
    'siteSettings',
    'about'
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('About us')
        .icon(MDLocalRestaurant)
        .child(
          S.editor()
            .id('about')
            .schemaType('about')
            .documentId('about')
        ),
      S.listItem()
        .title('Contact')
        .icon(MDLocalRestaurant)
        .child(
          S.editor()
            .id('contact')
            .schemaType('contact')
            .documentId('contact')
        ),
      S.listItem()
        .title('People Overview')
        .icon(MDPeopleOutline)
        .child(
          S.editor()
            .id('peopleOverview')
            .schemaType('peopleOverview')
            .documentId('peopleOverview')
        ),
      S.listItem()
        .title('Newsletter')
        .icon(MdLocalPostOffice)
        .child(
          S.editor()
            .id('newsletter')
            .schemaType('newsletter')
            .documentId('newsletter')
        ),
      S.listItem()
        .title('Job Advert Listing')
        .icon(MDPeople)
        .child(
          S.editor()
            .id('jobAdvertListing')
            .schemaType('jobAdvertListing')
            .documentId('jobAdvertListing')
        ),
      S.listItem()
        .title('Event Listing')
        .icon(MDPeople)
        .child(
          S.editor()
            .id('eventListing')
            .schemaType('eventListing')
            .documentId('eventListing')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
