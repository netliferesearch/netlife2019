import React from 'react';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { formatPhoneNumber, personLabel } from '../lib/helpers';

const smallHeadingClasses = small =>
  classNames({
    'leading-extra-none': true,
    'text-lg': !small,
    'text-base font-bold': small
  });

export default ({
  name,
  slug,
  email,
  role,
  services,
  phoneNumber,
  image,
  small
}) => (
  <section className="flex -mx-0 md:-mx-4">
    <div className="w-1/4" aria-hidden>
      {image && (
        <>
          {slug ? (
            <a href={`/folka/${slug}`}>
              {typeof image === 'string' && <img src={image} alt="" />}
              {typeof image !== 'string' && (
                <Img fluid={image.asset.fluid} className="w-full" />
              )}
            </a>
          ) : (
            typeof image === 'string' && <img src={image} alt="" />
          )}
        </>
      )}
    </div>
    <div className="w-3/4 ml-4 md:ml-8">
      {name && slug ? (
        <h2 className="mb-2">
          <a href={`/folka/${slug}`} className={smallHeadingClasses(small)}>
            {name}
          </a>
        </h2>
      ) : (
        <strong>{name}</strong>
      )}
      <ul>
        {services && <li>{personLabel(role, services)}</li>}
        {email && (
          <li>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        )}
        {phoneNumber && (
          <li className="mt-1">
            <a href={`tel:+47${phoneNumber}`}>
              {formatPhoneNumber(phoneNumber)}
            </a>
          </li>
        )}
      </ul>
    </div>
  </section>
);
