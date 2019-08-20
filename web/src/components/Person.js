import React from 'react';
import Img from 'gatsby-image';
import { formatPhoneNumber, personLabel } from '../lib/helpers';

export default ({ name, slug, email, role, services, phoneNumber, image }) => (
  <section className="flex -mx-0 md:-mx-4">
    <div className="w-1/4" aria-hidden>
      {image && slug && (
        <a href={`/folka/${slug}`}>
          {typeof image === 'string' && <img src={image} alt="" />}
          {typeof image !== 'string' && (
            <Img fluid={image.asset.fluid} className="w-full" />
          )}
        </a>
      )}
    </div>
    <div className="w-3/4 ml-4 md:ml-8">
      {name && slug && (
        <h2>
          <a href={`/folka/${slug}`} className="text-lg leading-extra-none">
            {name}
          </a>
        </h2>
      )}
      <ul>
        {services && <li className="mt-2">{personLabel(role, services)}</li>}
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
