import React from 'react';
import clientConfig from '../../client-config';
import BasePortableText from '@sanity/block-content-to-react';
import Link from '../components/Link';

const PortableText = ({ blocks }) => (
  <div className="rich-text">
    <BasePortableText
      blocks={blocks}
      serializers={{
        types: {
          link: props => (
            <Link
              slug={props.node.internalPage?.slug?.current}
              href={props.node.url}
              noFollow={props.node.nofollow}
            >
              {props.node.text}
            </Link>
          )
        }
      }}
      {...clientConfig.sanity}
    />
  </div>
);

export default PortableText;
