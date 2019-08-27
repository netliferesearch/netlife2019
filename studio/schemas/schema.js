// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import siteSettings from './documents/siteSettings';
import office from './documents/office';
import menu from './documents/menu';
import contact from './documents/contact';
import article from './documents/article';
import person from './documents/person';
import personService from './documents/personService';
import newsletter from './documents/newsletter';

// Object types
import bodyPortableText from './objects/bodyPortableText';
import excerptPortableText from './objects/excerptPortableText';
import mainImage from './objects/mainImage';
import link from './objects/link';
import textImage from './objects/textImage';
import aboutPerson from './objects/aboutPerson';
import socialMedia from './objects/socialMedia';
import contactSection from './objects/contactSection';

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
    office,
    newsletter,
    menu,
    person,
    personService,
    aboutPerson,
    contact,
    article,
    mainImage,
    link,
    socialMedia,
    bodyPortableText,
    excerptPortableText,
    contactSection,
    textImage

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
});
