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

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      zIndex: 10000 + ' !important', 
    }),
    menuPortal: (provided) => ({
      ...provided,
      zIndex: 10000 + ' !important', 
    }),
  };

  const selectComponent = (
    <Select
      value={selectedOptions}
      onChange={handleChange}
      options={options}
      isMulti={isMulti}
      isSearchable={isSearchable}
      components={components}
      classNamePrefix="react-select"
      styles={customStyles}
      className="z-10000"
      menuPortalTarget={usePortal ? document.body : null}
    />
  );

  if (usePortal) {
    const iframe = document.getElementById('storybook-preview-iframe');
    const iframeDocument = iframe ? iframe.contentDocument || iframe.contentWindow.document : document;
    let portalElement = iframeDocument.getElementById('portal-root');
    if (!portalElement) {
      portalElement = iframeDocument.createElement('div');
      portalElement.id = 'portal-root';
      iframeDocument.body.appendChild(portalElement);
    }
    return ReactDOM.createPortal(selectComponent, portalElement);
  }

  return selectComponent;
};

export default Dropdown;
