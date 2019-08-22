import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const updateItems = (changedItem, items) =>
  // Set everything to false.
  // If the item mathces the changedItem, then toggle it
  items.map(item => ({
    ...item,
    checked: item.value === changedItem.value ? !item.checked : false
  }));

const RadioBlock = ({ legend, items, changeItems }) => (
  <fieldset>
    <legend className="sr-only">{legend}</legend>
    {items.map(item => (
      <label
        className={classNames({
          'block md:inline-block px-4 py-2 md:mr-8 mb-4 md:mb-0 border-2 border-black cursor-pointer': true,
          'bg-green': item.checked
        })}
      >
        <input
          type="radio"
          name={legend}
          value={item.value}
          checked={item.checked}
          onChange={() => changeItems(updateItems(item, items))}
          className="hidden"
        />
        {item.label}
      </label>
    ))}
  </fieldset>
);

RadioBlock.propTypes = {
  changeItems: PropTypes.func,
  legend: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      selected: PropTypes.bool
    }).isRequired
  )
};

export default RadioBlock;
