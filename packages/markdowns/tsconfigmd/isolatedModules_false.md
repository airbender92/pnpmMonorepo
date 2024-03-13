If we set `"isolatedModules": false` or do not include it in the `tsconfig.json`, TypeScript will compile the files considering dependencies across modules, allowing the compiler to produce a bundled output if multiple modules are interconnected. Let's compile the same TypeScript files (`file1.ts` and `file2.ts`) without the `"isolatedModules": true` option:

```bash
tsc
```

After running this command, TypeScript will generate a single JavaScript output file that includes both modules. Let's look at the compiled JavaScript file:

**dist/main.js:**

```javascript
// dist/main.js

"use strict";
exports.__esModule = true;
exports.message = void 0;
exports.message = "Hello from File 1!";
console.log(exports.message);
```

In this case, TypeScript has bundled both `file1.ts` and `file2.ts` into a single output file named `main.js`. The `main.js` file includes the code from both modules, and you can see that it exports the `message` variable from `file1.ts` and logs it to the console from `file2.ts`.

This demonstrates the behavior of TypeScript when `"isolatedModules": false` or not specified, where it considers dependencies across modules and generates a bundled output file containing all interconnected modules.