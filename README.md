# Dropdown Component Project

This project demonstrates a customizable dropdown component with various features such as searchable options, portal support, multiple selections, and custom option rendering. The component is built using React, Storybook, and Tailwind CSS.

## Features

- **Searchable Dropdown**: Implement a search feature within the dropdown.
- **Portal Support**: Allow the dropdown to be used with or without a portal.
- **Single or Multiple Selection**: Enable the dropdown to support both single and multiple option selections.
- **Customizable Option Rendering**: Allow customization of how options are rendered.
- **Search Filtering**: Ensure the search can filter a long list of options into a shorter list.
- **Toggle Features**: Allow search feature to be turned on or off.
- **Z-Index Compatibility**: Ensure the floating menu works with elements that have a z-index greater than 1000.

## Tech Stack

- **React**
- **Storybook**
- **Tailwind CSS**
- **React-Select**

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Run Dependencies**:
   ```bash
   npm install

**Running the Project**
To start the Component development server, run the application, Storybook and view the components
This will start Storybook and open it in your default web browser at http://localhost:6006.

```bash
npm run storybook
```

**To Download this package to your react project simply use**
```bash
npm install dropdown-testing-app
```

Then use 
```bash
import Dropdown from 'dropdown-testing-app'
```

Next, create 2 files in your root folder called 
**.babelrc**
```bash
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "ignore": ["/node_modules/(?!dropdown-testing-app)/"]
}
```

**babel.config.js**
```bash
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  ignore: [/node_modules\/(?!dropdown-testing-app)/]
};
```

Then, make sure you are also install rewired and customized-cra
**Rewired**
```bash
npm install --save-dev react-app-rewired
```

**customized-cra**
```bash
npm install --save-dev customize-cra
```

Then, add config-override.js
```bash
const { override, addBabelPreset, babelInclude } = require('customize-cra');
const path = require('path');

module.exports = override(
  addBabelPreset('@babel/preset-react'),
  babelInclude([
    path.resolve('src'),
    path.resolve('node_modules/dropdown-testing-app')
  ])
);
```

Lastly, change the scripts on your package.json to:
```bash
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
```