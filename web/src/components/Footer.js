import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const query = graphql`
  {
    sanityMenu(name: { eq: "footer" }) {
      items {
        _key
        title
        url
      }
    }
  }
`;

export default () => (
  <StaticQuery
    query={query}
    render={data => {
      const items = data && data.sanityMenu && data.sanityMenu.items;

      return (
        <footer className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <a
              className="font-sans hover:text-green"
              href="mailto:hei@netlife.com"
            >
              hei@netlife.com
            </a>
            <br />
            <a className="font-sans hover:text-green" href="tel:+4722424642">
              22 42 46 42
            </a>
          </div>
          <div className="flex flex-wrap w-full md:w-2/3">
            {items.map(item => (
              <div className="w-full md:w-1/2" key={item._key}>
                <a className="font-sans hover:text-green" href={item.url}>
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </footer>
      );
    }}
  />
);
