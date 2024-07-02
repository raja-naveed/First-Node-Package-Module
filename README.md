
# Counter and Button Design Package

This is a simple Node package module that provides a counter component and a styled button component for use in React applications. The package is designed to be easy to use and integrate into your existing projects.

## Features

- **Counter Component:** A reusable counter component that increments or decrements a value.
- **Button Component:** A customizable button component with default styles.

## Installation

You can install the package via npm or yarn.

### Using npm

`npm install your-package-name `
## OR 
`yarn add your-package-name`
## Usage

### Counter Component

To use the Counter component, you need to import it from the package and include it in your JSX.
```
{
import React from 'react';
import { Counter } from 'your-package-name';

const App = () => {
  return (
    <div>
      <h1>Counter Example</h1>
      <Counter />
    </div>
  );
};

export default App;

}
```

### Button Component

To use the Button component, import it from the package and pass the `children` prop to customize the button text.


```{import React from 'react';
import { Button } from 'your-package-name';

const App = () => {
  return (
    <div>
      <h1>Button Example</h1>
      <Button>Click Me!</Button>
    </div>
  );
};

export default App;
}
```

### Button Component with Custom Styles

You can override the default styles by passing a `style` prop to the Button component.



```{
{import React from 'react';
import { Button } from 'your-package-name';

const App = () => {
  return (
    <div>
      <h1>Custom Styled Button</h1>
      <Button style={{ backgroundColor: 'green', padding: '15px 30px' }}>
        Custom Button
      </Button>
    </div>
  );
};

export default App;`
}
```
## Components

### Counter

The Counter component manages an internal state to keep track of the count value. It provides buttons to increment and decrement the count.

#### Props

-   `initialValue` (optional): The initial value of the counter. Default is 0.

#### Example


`<Counter initialValue={10} />` 

### Button

The Button component renders a styled button with customizable text.

#### Props

-   `children`: The content to be displayed inside the button.
-   `style` (optional): Custom styles to override the default button styles.

#### Example

`<Button >Click Me!</Button>` 



## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.

## Contact

If you have any questions or need further assistance, please contact me at rajadahri11@gmail.com.
