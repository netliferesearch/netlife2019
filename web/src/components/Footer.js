import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const { sanityMenu } = useStaticQuery(
    graphql`
      {
        sanityMenu(name: { eq: "footer" }) {
          items {
            _key
            title
            url
          }
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
            <a className="font-sans link" href={item.url}>
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};
