import React from 'react';
import { components } from 'react-select';

const CustomOption = (props) => {
  const { children, selectProps } = props;
  const inputValue = selectProps.inputValue || '';

  const parts = children.split(new RegExp(`(${inputValue})`, 'gi'));
  return (
    <components.Option {...props}>
      {parts.map((part, index) =>
        inputValue && part.toLowerCase() === inputValue.toLowerCase() ? (
          <span key={index} style={{ fontWeight: 'bold' }}>{part}</span>
        ) : (
          part
        )
      )}
    </components.Option>
  );
};

export default CustomOption;