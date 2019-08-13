import React from 'react';
import Img from 'gatsby-image';
import { formatPhoneNumber } from '../lib/helpers';

export default ({ name, slug, email, role, services, phoneNumber, image }) => (
  <section className="flex -mx-0 md:-mx-4">
    <div className="w-1/4">
      {image && slug && (
        <a href={`/folka/${slug}`}>
          <Img fluid={image.asset.fluid} className="w-full" />
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
        <li className="mt-2">
          {role}
          {!role &&
            (services && services.length > 1
              ? `${services[0].name} og ${services[1].name.toLowerCase()}`
              : services[0].name)}
        </li>
        <li>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li className="mt-1">
          <a href={`tel:+47${phoneNumber}`}>{formatPhoneNumber(phoneNumber)}</a>
        </li>
      </ul>
    </div>
  </section>
);
