import React from 'react';
import Dropdown from '../components/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option with icon' },
  { value: '3', label: 'Long Long Option 3' },
  { value: '4', label: 'Long Long Long Option 4' },
  { value: '5', label: 'Long Long Long Option 5' },
  { value: '6', label: 'Long Long Long Long Option 6' },
];

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: options,
  isMulti: false,
  isSearchable: true,
  onChange: (selected) => console.log(selected),
};
