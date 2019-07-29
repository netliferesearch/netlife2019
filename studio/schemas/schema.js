// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import author from './documents/author';
import category from './documents/category';
import post from './documents/post';
import siteSettings from './documents/siteSettings';
import office from './documents/office';
import menu from './documents/menu';
import contact from './documents/contact';
import article from './documents/article';
import person from './documents/person';
import newsletter from './documents/newsletter';

// Object types
import bodyPortableText from './objects/bodyPortableText';
import bioPortableText from './objects/bioPortableText';
import excerptPortableText from './objects/excerptPortableText';
import mainImage from './objects/mainImage';
import authorReference from './objects/authorReference';
import pitch from './objects/pitch';
import link from './objects/link';
import aboutPerson from './objects/aboutPerson';
import socialMedia from './objects/socialMedia';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    post,
    category,
    author,
    office,
    newsletter,
    menu,
    person,
    aboutPerson,
    contact,
    article,
    mainImage,
    pitch,
    authorReference,
    link,
    socialMedia,
    bodyPortableText,
    bioPortableText,
    excerptPortableText

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
});
