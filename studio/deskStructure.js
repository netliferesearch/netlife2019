import S from '@sanity/desk-tool/structure-builder';
import MdSettings from 'react-icons/lib/md/settings';
import MdLocalPostOffice from 'react-icons/lib/md/local-post-office';
import MDLocalRestaurant from 'react-icons/lib/md/business';

const hiddenDocTypes = listItem =>
  !['newsletter', 'contact', 'siteSettings'].includes(listItem.getId());

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
        .title('Contact')
        .icon(MDLocalRestaurant)
        .child(
          S.editor()
            .id('contact')
            .schemaType('contact')
            .documentId('contact')
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
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
