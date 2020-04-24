import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import { ButtonLink } from '../components/Button';
import path from 'path';
import { showTemplateName } from '../lib/showTemplateNameUtil';
const templateName = path.basename(__filename);

const Newsletter = ({ location, pageContext }) => {
  showTemplateName(templateName);
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
          _rawSeo(resolveReferences: { maxDepth: 5 })
        }
      }
    `
  );

  const { heading, intro, info, _rawSeo } = sanityNewsletter;
  const seo = _rawSeo;

  return (
    <>
      <SEO seo={seo} title={heading} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        {heading && (
          <header className="-mt-2 w-full md:w3/4 mb-8">
            <h1 className="text-lg">{heading}</h1>
          </header>
        )}
        <section>
          <div className="md:flex -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <p className="mb-2">{intro}</p>
              <p className="mb-8">{info}</p>
              <ButtonLink
                href="https://netlife.us1.list-manage.com/subscribe/post?u=b2b7628fe68612e86f36ffcbd&amp;id=fb53d74053"
                value="Meld meg på"
                target={'_blank'}
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

Newsletter.defaultProps = {
  heading: '',
  intro: '',
  info: ''
};

Newsletter.propTypes = {
  heading: PropTypes.string,
  intro: PropTypes.string,
  info: PropTypes.string
};

export default Newsletter;
