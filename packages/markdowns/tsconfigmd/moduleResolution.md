Certainly! The `"moduleResolution": "classic"` option in TypeScript is used to specify the classic module resolution strategy. This strategy looks for modules using Node.js-style resolution based on the `node_modules` directory.

Here's a simple example to demonstrate the use of `"moduleResolution": "classic"`:

Suppose you have a TypeScript file named `app.ts` with the following content:

```typescript
// app.ts

import { greet } from "myModule";

const message: string = greet("TypeScript");

console.log(message);
```

Now, let's create a directory structure and a module file to import:

1. Create a directory structure:

   ```
   project-root/
   ├── src/
   │   └── app.ts
   └── node_modules/
       └── myModule/
           └── index.ts
   ```

2. Create the module file `index.ts` inside `node_modules/myModule`:

   ```typescript
   // node_modules/myModule/index.ts

   export function greet(name: string): string {
     return `Hello, ${name}!`;
   }
   ```

Now, let's create a `tsconfig.json` file with `"moduleResolution": "classic"`:

```json
{
  "compilerOptions": {
    "moduleResolution": "classic",
    "outDir": "./dist"
  },
  "include": ["src/**/*.ts"]
}
```

In this configuration, `"moduleResolution": "classic"` is specified.

Now, run the TypeScript compiler:

```bash
tsc
```

After running this command, TypeScript will transpile the code and generate the output file inside the specified output directory (`dist`):

**dist/app.js:**

```javascript
// dist/app.js

"use strict";
exports.__esModule = true;
var myModule_1 = require("myModule");
var message = myModule_1.greet("TypeScript");
console.log(message);
```

This demonstrates the use of `"moduleResolution": "classic"`, where TypeScript resolves the module import using the classic Node.js-style resolution based on the `node_modules` directory.