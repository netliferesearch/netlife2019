import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';
import Image from '../components/Image';
import Person from '../components/Person';
import Link from '../components/Link';
import { formatFullDate } from '../lib/formatDates/formatDates';

// Non static query, see $id
export const query = graphql`
  query($id: String!) {
    sanityBlogPost(id: { eq: $id }) {
      title
      publishDate
      slug {
        current
      }
      mainImage {
        image {
          ...ImageFragment
        }
        alt
      }
      serviceCategories {
        name
      }
      _rawArticle(resolveReferences: { maxDepth: 10 })
      _rawSeo(resolveReferences: { maxDepth: 5 })
      author {
        name
        image {
          ...ImageFragment
        }
        services {
          name
        }
        slug {
          current
        }
        role
      }
    }
  }
`;

export default ({ data, pageContext, location }) => {
  const {
    title: title = '',
    mainImage: { image: mainImage = null, alt: mainImageAlt = '' },
    _rawArticle: { textContent: textContent = null } = {},
    _rawSeo: seo = null,
    serviceCategories: serviceCategories = [],
    publishDate: publishDate = '',
    author: persons = []
  } = data?.sanityBlogPost;

  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <div className="w-full max-w-full lg:max-w-lg mx-auto">
          <article>
            <h1 className="text-xl -mt-2 mb-4">{title}</h1>
            <div className="mb-6">
              Publisert:{' '}
              <date timedate={publishDate}>{formatFullDate(publishDate)}</date>
            </div>
            {mainImage?.asset && <Image image={mainImage} alt={mainImageAlt} />}
            <section className="mt-12">
              <PortableText blocks={textContent} />
            </section>
          </article>
          <section className="border-t mt-8">
            {persons.map((person, index) => (
              <div key={person._id} className="px-4 mt-8">
                <Person
                  name={person.name}
                  email={person.email}
                  role={person.role}
                  slug={person.slug.current}
                  services={person.services}
                  phoneNumber={person.phoneNumber}
                  image={person.image}
                />
              </div>
            ))}
          </section>
          <section className="border-t mt-8 pt-8">
            <h2 className="text-lg mb-2">Tjenester vi tilbyr:</h2>
            <ul>
              {serviceCategories.map(service => (
                <li className="list-disc ml-4" key={service}>
                  <Link
                    slug={'/'} // TODO: Make it use a real slug
                    className="font-lining link"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Layout>
    </>
  );
};
