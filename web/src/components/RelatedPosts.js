import React from 'react';
import Link from './Link';
import Image from './Image';
import {
  formatFullDate,
  formatDateVerbose
} from '../lib/formatDates/formatDates';

export default ({ data }) => {
  return (
    <>
      {data.length != 0 && (
        <div className="border-t border-solid border-black border-0 mt-8">
          <div className="mt-8">
            <h2 className="text-md md:float-left">
              Har du fått med deg disse?
            </h2>

            <a
              href="https://www.netlife.com/blogg/"
              className="underline text-sm md:float-right"
            >
              Se flere saker
            </a>
          </div>
          <ul className="flex flex-wrap float-left border-b border-solid border-black border-0 pb-8 justify-between mt-4">
            {data.map(post => (
              <div className="w-full mb-8 md:mb-0 md:w-1/5">
                <li key={post._id}>
                  <div>
                    <div className="" key={post._id}>
                      <div className="">
                        <Link slug={post._rawSlug.current} title={post.title}>
                          <Image
                            image={post.mainImage.image}
                            alt={post.mainImage.alt}
                          />
                        </Link>
                      </div>
                      <div className="text-xs mt-4">
                        {post.serviceCategories[0].title} |{' '}
                        {formatDateVerbose(formatFullDate(post.publishDate))}
                      </div>
                      <Link slug={post._rawSlug.current} title={post.title}>
                        <div className="mt-2 underline">{post.title}</div>
                      </Link>
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
