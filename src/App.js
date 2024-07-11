import React from 'react';
import Dropdown from './components/Dropdown';

const App = () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option with icon' },
    { value: '3', label: 'Long Long Option 3' },
    { value: '4', label: 'Long Long Long Option 4' },
    { value: '5', label: 'Long Long Long Option 5' },
    { value: '6', label: 'Long Long Long Long Option 6' },
  ];

  const handleSelect = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <div className="App">
      <h1>My React App</h1>
      <Dropdown options={options} onSelect={handleSelect} />
    </div>
  );
};

export default App;