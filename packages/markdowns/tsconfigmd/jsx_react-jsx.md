The `"jsx": "react-jsx"` compiler option in TypeScript specifies the JSX factory function to use when targeting React JSX syntax. This option is useful when working with React applications and allows TypeScript to understand and compile JSX syntax according to React's requirements.

Let's demonstrate the use of `"jsx": "react-jsx"` with an example:

Suppose you have a TypeScript file named `app.tsx` with React JSX syntax:

**app.tsx:**

```tsx
// app.tsx

import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
};

export default App;
```

Now, let's create a `tsconfig.json` file with `"jsx": "react-jsx"`:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "outDir": "./dist"
  },
  "include": ["*.tsx"]
}
```

In this configuration, `"jsx": "react-jsx"` is specified to indicate that React JSX syntax will be used.

Assuming you have React installed as a dependency (`react` and `react-dom`), you can compile the TypeScript file using the TypeScript compiler (`tsc`):

```bash
tsc
```

After running this command, TypeScript will transpile the TypeScript file with JSX syntax into JavaScript. The generated JavaScript file will be placed in the specified output directory (`dist`).

The compiled JavaScript output might look similar to this:

**dist/app.js:**

```javascript
// dist/app.js

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var App = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, "Hello, React!")));
};
exports["default"] = App;
```

This demonstrates how `"jsx": "react-jsx"` instructs TypeScript to compile React JSX syntax according to React's requirements, allowing you to use JSX syntax seamlessly in your React applications.