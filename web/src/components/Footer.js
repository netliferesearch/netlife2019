import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Link from '../components/Link';

export default () => {
  const { sanityMenu } = useStaticQuery(
    graphql`
      {
        sanityMenu(name: { eq: "footer" }) {
          ...PageLinks
        }
      }
    `
  );

  const items = sanityMenu?.items || [];

  return (
    <footer className="flex flex-wrap">
      <div className="w-full md:w-1/3">
        <a className="font-sans link" href="mailto:hei@netlife.com">
          hei@netlife.com
        </a>
        <br />
        <a className="font-sans link" href="tel:+4722424642">
          22 42 46 42
        </a>
      </div>
      <div className="flex flex-wrap w-full md:w-2/3">
        {items.map(item => (
          <div className="w-full md:w-1/2" key={item._key}>
            <Link
              href={item.url}
              slug={item.internalPage?.slug?.current}
              noFollow={item.nofollow}
              className="font-sans link"
            >
              {item.text}
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
};
