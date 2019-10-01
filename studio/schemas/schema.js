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
import peopleOverview from './documents/peopleOverview';
import jobAdvert from './documents/jobAdvert';
import jobAdvertListing from './documents/jobAdvertListing';
import personService from './documents/personService';
import newsletter from './documents/newsletter';
import blogPost from './documents/blogPost';
import service from './documents/service';
import about from './documents/about';

// Object types
import bodyPortableText from './objects/bodyPortableText';
import imageObject from './objects/imageObject';
import link from './objects/link';
import codeBlock from './objects/codeBlock';
import seo from './objects/seo';
import video from './objects/video';
import richText from './objects/richText';
import textImage from './objects/textImage';
import blockquote from './objects/blockquote';
import articleImage from './objects/articleImage';
import aboutPerson from './objects/aboutPerson';
import socialMedia from './objects/socialMedia';
import contactSection from './objects/contactSection';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'site',
  types: [
    ...schemaTypes,
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    office,
    newsletter,
    menu,
    articleImage,
    person,
    personService,
    aboutPerson,
    contact,
    codeBlock,
    video,
    article,
    richText,
    peopleOverview,
    seo,
    about,
    blogPost,
    service,
    imageObject,
    link,
    jobAdvert,
    jobAdvertListing,
    blockquote,
    socialMedia,
    bodyPortableText,
    contactSection,
    textImage
  ]
});
