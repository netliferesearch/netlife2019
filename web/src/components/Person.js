import React from 'react';
import Img from 'gatsby-image';
import { formatPhoneNumber } from '../lib/helpers';

export default ({ name, slug, email, roles, phoneNumber, image }) => (
  <section className="flex">
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
          {roles.length > 1
            ? `${roles[0]} og ${roles[1].toLowerCase()}`
            : roles[0]}
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
