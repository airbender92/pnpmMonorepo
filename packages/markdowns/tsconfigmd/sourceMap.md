The `"sourceMap": true` compiler option in TypeScript generates source map files (.map files) during compilation. Source maps provide a mapping between the original TypeScript code and the generated JavaScript code, allowing for easier debugging and error tracing in the browser's developer tools.

Let's demonstrate the use of `"sourceMap": true` with an example:

Suppose you have a TypeScript file named `example.ts` with the following content:

```typescript
// example.ts

function add(x: number, y: number): number {
  return x + y;
}

const result = add(3, 5);
console.log(result);
```

Now, let's create a `tsconfig.json` file with `"sourceMap": true`:

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "./dist"
  },
  "include": ["*.ts"]
}
```

In this configuration, `"sourceMap": true` is specified.

Now, let's compile the TypeScript file using the TypeScript compiler (`tsc`):

```bash
tsc
```

After running this command, TypeScript will generate JavaScript files along with source map files in the specified output directory (`dist`).

The generated files will look like this:

**example.js:**
```javascript
// example.js

function add(x, y) {
    return x + y;
}
var result = add(3, 5);
console.log(result);
```

**example.js.map:**
```json
// example.js.map

{"version":3,"file":"example.js","sourceRoot":"","sources":["example.ts"],"names":[],"mappings":"AAAA,QAAQ,GAAG;AAMC,IAAI,CAAC,GAAG,CAAC,CAAC;AACnB,YAAYC"}
```

The `example.js.map` file contains the mapping information between the original TypeScript file (`example.ts`) and the generated JavaScript file (`example.js`). This mapping is used by browsers' developer tools to map errors and debugging information back to the original TypeScript source code, making debugging easier in development environments.