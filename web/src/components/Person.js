import React from 'react';
import Img from 'gatsby-image';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { formatPhoneNumber, personLabel } from '../lib/helpers';

const smallHeadingClasses = small =>
  classNames({
    'leading-extra-none': true,
    'text-lg': !small,
    'text-base font-bold': small
  });

const Person = ({
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
      {image && typeof image === 'object' && (
        <a href={`/folka/${slug}`} tabIndex="-1">
          <Img fluid={image.asset.fluid} className="w-full" />
        </a>
      )}
      {image && typeof image === 'string' && (
        <img src={image} alt={name} className="w-full" />
      )}
      {!image && (
        <div
          className="w-full h-full bg-grey-light"
          style={{ content: '' }}
        ></div>
      )}
    </div>
    <div className="w-3/4 ml-4 md:ml-8">
      <h2 className="mb-2 leading-extra-none">
        <a href={`/folka/${slug}`} className={smallHeadingClasses(small)}>
          {name}
        </a>
      </h2>
      <ul>
        <li>{personLabel(role, services)}</li>
        <li>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
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

Person.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  phoneNumber: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.object,
  small: PropTypes.bool
};

export default Person;
