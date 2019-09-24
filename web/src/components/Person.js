import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';
import Link from './Link';
import { formatPhoneNumber, personLabel } from '../lib/helpers';

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
      {image ? (
        <Link slug={slug} tabIndex="-1" className="outline-none">
          <Image image={image} aspectRatio="1:1" alt="" shrinkImage={0.5} />
        </Link>
      ) : (
        // Creates a grey block where an image would be
        <div
          className="w-full h-full bg-grey-light"
          style={{ content: '' }}
        ></div>
      )}
    </div>
    <div className="w-3/4 ml-4 md:ml-8">
      <h2 className="mb-2 leading-extra-none">
        {small ? (
          <span className="text-base font-bold">{name}</span>
        ) : (
          <Link slug={slug} className="text-lg font-lining link">
            {name}
          </Link>
        )}
      </h2>
      <ul>
        <li>{personLabel(role, services)}</li>
        <li>
          <a href={`mailto:${email}`} className="link">
            {email}
          </a>
        </li>
        {phoneNumber && (
          <li className="mt-1">
            <a href={`tel:+47${phoneNumber}`} className="link">
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
  slug: PropTypes.string,
  email: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  phoneNumber: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.object,
  small: PropTypes.bool,
  shrinkImage: PropTypes.number
};

export default Person;
