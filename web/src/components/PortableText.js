import React from 'react';
import clientConfig from '../../client-config';
import BasePortableText from '@sanity/block-content-to-react';
import Link from './Link';
import Image from './Image';
import CodeBlock from './CodeBlock';
import Video from './Video';

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
              title={props.node.text}
            >
              {props.node.text}
            </Link>
          ),
          articleImage: props => (
            <Image
              image={props.node.image}
              alt={props.node.alt}
              aspectRatio={props.node.aspectRatio}
              shrinkImage={0.75}
            />
          ),
          codeBlock: props => (
            <CodeBlock language={props.node.language}>
              {props.node.code}
            </CodeBlock>
          ),
          video: props => <Video url={props.node.videoUrl} />
        }
      }}
      {...clientConfig.sanity}
    />
  </div>
);

export default PortableText;
