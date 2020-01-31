import React, { useEffect, useState} from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import Link from '../components/Link';
import Animation from '../components/Animation';

// Hook
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export default ({ location }) => {
  const { site, mainMenu } = useStaticQuery(
    graphql`
      query {
        site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
          title
          description
          _rawHomePageSeo(resolveReferences: { maxDepth: 5 })
        }
        mainMenu: sanityMenu(name: { eq: "main" }) {
          ...PageLinks
        }
      }
    `
  );

  const seo = site?._rawHomePageSeo || null;
  const title = site?.title || '';
  const menuItems = mainMenu?.items || [];

  const [scale, setScale] = useState(1);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 1920) {
      setScale('340px');
    } else if (size.width > 1440) {
      setScale('321px');
    } else if (size.width > 640) {
      setScale('230px');
    }
  }, [size]);

  return (
    <>
      <SEO title={title} description="" seo={seo} location={location} />
      <Layout hideHamburger>
        <div className="flex flex-wrap pt-0 lg:pt-4">
          <nav className="w-full md:w-1/2">
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
            <div className="hidden mt-4 md:flex md:w-4/5 lg:justify-end">
              <div className="bg-black text-center flex justify-center" style={{
                  width: scale,
                  height: scale,
                  borderRadius: '50%',
                }}>
                <p className="text-base text-white self-center">
                  <span className="block">01.02.20</span>
                  <span className="block">Netlife Dialog</span>
                  blir <a className="link font-lining text-white" href="https://bas.no" title="Bas kommunikasjion" rel="nofollow">Bas <span className="block">kommunikasjon</span></a>
                </p>
              </div>
            </div>
          </nav>
          <div className="flex w-full md:w-1/2 text-left md:text-right flex-col justify-center">
            <div className="mr-0 md:ml-12 lg:ml-32 mt-16 md:-mt-12 xl:-mt-10">
              <Animation
                sprite="/hand-scroll.svg"
                baseScale={1}
                height={194}
                width={280}
              />
            </div>
            <div className="md:hidden flex">
              <div className="mt-4 bg-black text-center flex justify-center" style={{
                  width: '231px',
                  height: '231px',
                  borderRadius: '50%',
                }}>
                <p className="text-base text-white self-center">
                  <span className="block">01.02.20</span>
                  <span className="block">Netlife Dialog</span>
                  blir <a className="link font-lining text-white" href="https://bas.no" title="Bas kommunikasjion" rel="nofollow">Bas <span className="block">kommunikasjion</span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
