import React from 'react';
import classNames from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import Link from '../components/Link';

const linkClasses = dark =>
  classNames({
    'link font-sans': !dark,
    'font-lining outline-none focus:shadow-outline': dark
  });

export default ({ dark }) => {
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
        <a className={linkClasses(dark)} href="mailto:hei@netlife.com">
          hei@netlife.com
        </a>
        <br />
        <a className={linkClasses(dark)} href="tel:+4722424642">
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
              className={linkClasses(dark)}
            >
              {item.text}
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
};
