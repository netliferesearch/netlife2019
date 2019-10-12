import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, value, onClick }) => {
  return (
    <button
      type={type}
      className="px-2 py-2 appearance-none border border-black rounded-none outline-none hover:bg-green focus:bg-green"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const ButtonLink = ({ href, target, value }) => {
  return (
    <a
      href={href}
      className="px-2 py-2 appearance-none border border-black rounded-none outline-none hover:bg-green focus:bg-green"
      title={value}
      target={target}
    >
      {value}
    </a>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => {}
};

ButtonLink.defaultProps = {
  target: ''
};

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  value: PropTypes.string.isRequired
};

export { Button, ButtonLink };
