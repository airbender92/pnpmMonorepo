The `"declarationMap": true` compiler option in TypeScript generates declaration map files (.d.ts.map files) alongside the regular declaration files (.d.ts files). Declaration map files provide mappings between the declarations in the TypeScript code and their corresponding locations in the generated declaration files. This is useful for tooling that consumes declaration files, enabling accurate source mapping for declaration files.

Let's demonstrate the use of `"declarationMap": true` with an example:

Suppose you have a TypeScript file named `math.ts` with the following content:

```typescript
// math.ts

export function add(x: number, y: number): number {
  return x + y;
}

export function subtract(x: number, y: number): number {
  return x - y;
}
```

Now, let's create a `tsconfig.json` file with `"declaration": true` and `"declarationMap": true`:

```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist"
  },
  "include": ["*.ts"]
}
```

In this configuration, both `"declaration": true` and `"declarationMap": true` are specified.

Now, let's compile the TypeScript file using the TypeScript compiler (`tsc`):

```bash
tsc
```

After running this command, TypeScript will generate JavaScript files along with declaration files (.d.ts) and declaration map files (.d.ts.map) in the specified output directory (`dist`).

The generated files will look like this:

**math.js:**
```javascript
// math.js

"use strict";
exports.__esModule = true;
function add(x, y) {
    return x + y;
}
exports.add = add;
function subtract(x, y) {
    return x - y;
}
exports.subtract = subtract;
```

**math.d.ts:**
```typescript
// math.d.ts

export declare function add(x: number, y: number): number;
export declare function subtract(x: number, y: number): number;
```

**math.d.ts.map:**
```json
// math.d.ts.map

{"version":3,"file":"math.d.ts","sourceRoot":"","sources":["../math.ts"],"names":[],"mappings":"AAAA,QAAQ,GAAG;AAMC,IAAI,CAAC,GAAG,CAAC,CAAC;AACnB,YAAYC"}
```

The `math.d.ts.map` file contains the mapping information between the original TypeScript file (`math.ts`) and the generated declaration file (`math.d.ts`). This mapping is used by tooling to map declarations in the declaration file back to their original locations in the TypeScript source code, providing accurate source mapping for declaration files.