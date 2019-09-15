import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SpriteAnimator from 'react-sprite-animator';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import Link from '../components/Link';

export default () => {
  const { site, mainMenu } = useStaticQuery(
    graphql`
      query {
        site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
          title
        }
        mainMenu: sanityMenu(name: { eq: "main" }) {
          ...PageLinks
        }
      }
    `
  );

  const siteTitle = site?.title || '';
  const menuItems = mainMenu?.items || [];

  return (
    <>
      <SEO title={siteTitle} />
      <Layout>
        <div className="flex flex-wrap">
          <nav className="w-full md:w-1/2 pt-0 md:pt-8">
            {menuItems.map(item => (
              <div key={item._key}>
                <Link
                  slug={item.internalPage?.slug?.current}
                  href={item.url}
                  className="text-lg link font-lining"
                >
                  {item.text}
                </Link>
              </div>
            ))}
          </nav>
          <div className="flex w-full md:w-1/2 text-left md:text-right flex-col justify-center">
            <div className="md:self-center mt-8 md:mt-0">
              <SpriteAnimator
                shouldAnimate={true}
                fps={10}
                sprite="./home-hand-scroll.svg"
                width={280}
                height={280}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
