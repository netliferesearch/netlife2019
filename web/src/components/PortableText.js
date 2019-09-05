import React from 'react';
import clientConfig from '../../client-config';
import BasePortableText from '@sanity/block-content-to-react';

const PortableText = ({ blocks }) => (
  <BasePortableText
    className="rich-text"
    blocks={blocks}
    // serializers={serializers}
    {...clientConfig.sanity}
  />
);

export default PortableText;