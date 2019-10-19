import React from 'react';
import PropTypes from 'prop-types';
import Image from '../components/Image';
import Link from '../components/Link';

const GridContainer = ({posts}) => (
  <div className="flex flex-wrap -mx-4">
    {posts && posts.map(item => (
      <div key={item.id} className="md:w-1/2 mb-16 px-4">
        {item?.slug && (
          <>
            {item.mainImage?.image?.asset && <Image image={item.mainImage.image} alt={item.mainImage.alt}/>}
            {item.title && (
              <h3 className="mt-4">
                <Link className="font-lining link" slug={item.slug.current} title={item.title}>{item.title}</Link>
              </h3>
            )}
          </>
        )}
      </div>
    ))}
  </div>
);

GridContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()),
};

export default GridContainer;