import S from '@sanity/desk-tool/structure-builder';
import MdSettings from 'react-icons/lib/md/settings';
import MdLocalPostOffice from 'react-icons/lib/md/local-post-office';
import MDLocalRestaurant from 'react-icons/lib/md/business';
import MDPeople from 'react-icons/lib/md/people';
import MDPeopleOutline from 'react-icons/lib/md/people-outline';
import MDFingerprint from 'react-icons/lib/md/fingerprint';

const hiddenDocTypes = listItem =>
  ![
    'newsletter',
    'jobAdvertListing',
    'eventListing',
    'peopleOverview',
    'contact',
    'siteSettings',
    'about',
    'ourServices',
    'blogOverview',
    'casesListing',
    'brandbookListing'
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
        .title('Brandbook Listing')
        .icon(MDFingerprint)
        .child(
          S.editor()
            .id('brandbookListing')
            .schemaType('brandbookListing')
            .documentId('brandbookListing')
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
        .title('Services')
        .icon(MDLocalRestaurant)
        .child(
          S.editor()
            .id('ourServices')
            .schemaType('ourServices')
            .documentId('ourServices')
        ),
      S.listItem()
        .title('Blog Overview')
        .icon(MDLocalRestaurant)
        .child(
          S.editor()
            .id('blogOverview')
            .schemaType('blogOverview')
            .documentId('blogOverview')
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
        .title('Cases Listing')
        .icon(MDLocalRestaurant)
        .child(
          S.editor()
            .id('casesListing')
            .schemaType('casesListing')
            .documentId('casesListing')
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
