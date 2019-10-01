import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import Button from '../components/Button';

const Newsletter = ({ location, pageContext }) => {

  const { sanityNewsletter } = useStaticQuery(
    graphql`
      {
        sanityNewsletter {
          id
          intro
          info
          heading
          slug {
            current
          }
        }
      }
    `
  );

  const { heading, intro, info } = sanityNewsletter;

  const seo = {
    seoTitle: heading,
    description: intro,
  };

  return (
    <>
      <SEO seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        {heading && (
          <header className="-mt-2 w-full md:w3/4 mb-8">
            <h1 className="text-xl">{heading}</h1>
          </header>
        )}
        <section>
          <div className="md:flex -mx-4">
            <div className="w-full md:w-1/2 px-4">
              {intro && <p className="mb-2">{intro}</p>}
              {info && <p className="mb-8">{info}</p>}
              <form action={`https://netlife.us1.list-manage.com/subscribe/post?u=b2b7628fe68612e86f36ffcbd&amp;id=fb53d74053`} method="post" target="_blank">
                <Button type="submit" value="Meld meg på" />
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
};

export default Newsletter;