If we compile TypeScript files with the `"isolatedModules": true` option, TypeScript will generate separate output files for each TypeScript source file, as each file is treated as an isolated module. Let's assume we have the following TypeScript files:

**file1.ts:**

```typescript
// file1.ts

export const message: string = "Hello from File 1!";
```

**file2.ts:**

```typescript
// file2.ts

import { message } from "./file1";

console.log(message);
```

Now, let's compile these TypeScript files using the TypeScript compiler (`tsc`) with `"isolatedModules": true`:

```bash
tsc --isolatedModules
```

After running this command, TypeScript will generate separate JavaScript output files for each TypeScript file. Let's look at the compiled JavaScript files:

**dist/file1.js:**

```javascript
// dist/file1.js

"use strict";
exports.__esModule = true;
exports.message = void 0;
exports.message = "Hello from File 1!";
```

**dist/file2.js:**

```javascript
// dist/file2.js

"use strict";
exports.__esModule = true;
var file1_1 = require("./file1");
console.log(file1_1.message);
```

As you can see, each TypeScript file (`file1.ts` and `file2.ts`) has its corresponding JavaScript output file (`file1.js` and `file2.js`). The `file1.js` file exports the `message` variable, and the `file2.js` file imports and uses the `message` variable from `file1.js`. 

Since each file is treated as an isolated module, there is no bundling or dependency resolution across files, and each file's output is self-contained.