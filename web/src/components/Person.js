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
  small,
  inactiveUser
}) => (
  <section className="flex -mx-0 md:-mx-4">
    <div className="w-1/4" aria-hidden>
      {image?.asset ? (
        <>
          {inactiveUser ? (
            <Image image={image} aspectRatio="1:1" alt="" shrinkImage={0.5} />
          ) : (
            <Link slug={slug} tabIndex="-1" className="outline-none">
              <Image image={image} aspectRatio="1:1" alt="" shrinkImage={0.5} />
            </Link>
          )}
        </>
      ) : (
        // Creates a grey block where an image would be
        <div
          className="w-full h-full bg-grey-light"
          style={{ content: '' }}
        ></div>
      )}
    </div>
    <div className="w-3/4 ml-4 md:ml-8">
      <div className="flex flex-col flex-wrap justify-between h-full">
        <div>
          <h2 className={`${small ? 'mb-1 ' : 'mb-2 '}leading-extra-none`}>
            <>
              {inactiveUser ? (
                <span className={`${small ? 'text-sml' : 'text-md'}`}>
                  {name}
                </span>
              ) : (
                <Link
                  slug={slug}
                  className={`${
                    small ? 'text-sml' : 'text-md'
                  } font-lining link`}
                >
                  {name}
                </Link>
              )}
            </>
          </h2>
          <p>{personLabel(role, services)}</p>
        </div>
        <div>
          <ul>
            <li>
              <a href={`mailto:${email}`} className="link">
                {email}
              </a>
            </li>
            {phoneNumber && (
              <li className={`${small ? '' : 'mb-1'}`}>
                <a href={`tel:+47${phoneNumber}`} className="link">
                  {formatPhoneNumber(phoneNumber)}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

Person.defaultProps = {
  slug: '/',
  email: null,
  image: {},
  inactiveUser: false
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string,
  email: PropTypes.string,
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  phoneNumber: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.object,
  small: PropTypes.bool,
  inactiveUser: PropTypes.bool
};

export default Person;
