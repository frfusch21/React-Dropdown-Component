// src/components/Dropdown.js
import React, { useState } from 'react';
import Select from 'react-select';
import ReactDOM from 'react-dom';
import CustomOption from './CustomOption';

const Dropdown = ({ options, isMulti, isSearchable, onChange, usePortal, customOptionRenderer }) => {
  const [selectedOptions, setSelectedOptions] = useState(null);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
    if (onChange) onChange(selected);
  };

  const components = { Option: customOptionRenderer || CustomOption };

  const selectComponent = (
    <Select
      value={selectedOptions}
      onChange={handleChange}
      options={options}
      isMulti={isMulti}
      isSearchable={isSearchable}
      components={components}
      className="z-50"
    />
  );

  if (usePortal) {
    const portalElement = document.getElementById('portal-root') || document.createElement('div');
    if (!document.getElementById('portal-root')) {
      portalElement.id = 'portal-root';
      document.body.appendChild(portalElement);
    }
    return ReactDOM.createPortal(selectComponent, portalElement);
  }

  return selectComponent;
};

export default Dropdown;
