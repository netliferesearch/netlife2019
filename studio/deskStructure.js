import S from '@sanity/desk-tool/structure-builder';
import MdSettings from 'react-icons/lib/md/settings';
import MdPerson from 'react-icons/lib/md/person';

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings'].includes(listItem.getId());

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
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
