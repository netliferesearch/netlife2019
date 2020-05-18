// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import about from './documents/about';
import article from './documents/article';
import blogOverview from './documents/blogOverview';
import blogPost from './documents/blogPost';
import brandbookListing from './documents/brandbookListing';
import brandbookPage from './documents/brandbookPage';
import cases from './documents/cases';
import casesListing from './documents/casesListing';
import contact from './documents/contact';
import event from './documents/event';
import eventListing from './documents/eventListing';
import formPage from './documents/formPage';
import jobAdvert from './documents/jobAdvert';
import jobAdvertListing from './documents/jobAdvertListing';
import menu from './documents/menu';
import newsletter from './documents/newsletter';
import office from './documents/office';
import ourServices from './documents/services';
import peopleOverview from './documents/peopleOverview';
import person from './documents/person';
import personService from './documents/personService';
import service from './documents/service';
import siteSettings from './documents/siteSettings';
import videoMux from './documents/videoMux';

// Object types
import aboutPerson from './objects/aboutPerson';
import articleImage from './objects/articleImage';
import bodyPortableText from './objects/bodyPortableText';
import brandbookContentBlock from './objects/brandbookContentBlock';
import codeBlock from './objects/codeBlock';
import colorBlock from './objects/colorBlock';
import colorBlockInBlocks from './objects/colorBlockInBlocks';
import colorBlocks from './objects/colorBlocks';
import colorPaletteBlock from './objects/colorPaletteBlock';
import colorPaletteBlocks from './objects/colorPaletteBlocks';
import contactPersonsBlock from './objects/contactPersons';
import contactSection from './objects/contactSection';
import customEvent from './objects/customEvent';
import downloadBlock from './objects/downloadBlock';
import downloadBlocks from './objects/downloadBlocks';
import form from './objects/form';
import formFieldSelection from './objects/formFieldSelection';
import formFieldText from './objects/formFieldText';
import imageObject from './objects/imageObject';
import imageX2 from './objects/imageX2';
import link from './objects/link';
import quoteBlock from './objects/ quoteBlock';
import resultColumn from './objects/resultColumn';
import resultsBlock from './objects/resultsBlock';
import richText from './objects/richText';
import richTextLeft from './objects/richTextLeft';
import richTextSection from './objects/richTextSection';
import sectionContent from './objects/sectionContent';
import seo from './objects/seo';
import socialMedia from './objects/socialMedia';
import textImage from './objects/textImage';
import textImageScroll from './objects/textImageScroll';
import video from './objects/video';
import videoObject from './objects/videoObject';
import richTextX4 from './objects/richTextX4'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'site',
  types: [
    ...schemaTypes,
    // Document types which will appear in the studio
    about,
    article,
    blogOverview,
    blogPost,
    brandbookListing,
    brandbookPage,
    cases,
    casesListing,
    contact,
    event,
    eventListing,
    formPage,
    jobAdvert,
    jobAdvertListing,
    menu,
    newsletter,
    office,
    ourServices,
    peopleOverview,
    person,
    personService,
    service,
    siteSettings,
    videoMux,
    // Object types
    aboutPerson,
    articleImage,
    bodyPortableText,
    brandbookContentBlock,
    codeBlock,
    colorBlock,
    colorBlockInBlocks,
    colorBlocks,
    colorPaletteBlock,
    colorPaletteBlocks,
    contactPersonsBlock,
    contactSection,
    customEvent,
    downloadBlock,
    downloadBlocks,
    form,
    formFieldSelection,
    formFieldText,
    imageObject,
    imageX2,
    link,
    quoteBlock,
    resultColumn,
    resultsBlock,
    richText,
    richTextLeft,
    richTextSection,
    sectionContent,
    seo,
    socialMedia,
    textImage,
    textImageScroll,
    video,
    videoObject,
    richTextX4,
  ]
});
