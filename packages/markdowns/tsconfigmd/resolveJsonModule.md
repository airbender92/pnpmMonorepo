The `"resolveJsonModule": false` compiler option in TypeScript controls whether TypeScript should resolve JSON modules. When set to `false`, TypeScript will not allow importing JSON files as modules. Let's demonstrate this with an example:

Suppose you have a TypeScript file named `app.ts` and a JSON file named `data.json` with the following content:

**app.ts:**

```typescript
// app.ts

import jsonData from './data.json';

console.log(jsonData);
```

**data.json:**

```json
// data.json

{
  "name": "John",
  "age": 25,
  "city": "ExampleCity"
}
```

Now, let's create a `tsconfig.json` file with `"resolveJsonModule": false`:

```json
{
  "compilerOptions": {
    "resolveJsonModule": false,
    "outDir": "./dist"
  },
  "include": ["*.ts"]
}
```

In this configuration, `"resolveJsonModule": false` is specified.

Now, run the TypeScript compiler:

```bash
tsc
```

After running this command, TypeScript will generate an error similar to:

```
error TS2742: The resolveJsonModule option requires the moduleResolution strategy to be 'node'.
```

This error occurs because the `"resolveJsonModule": false` option requires the module resolution strategy to be set to `'node'`, and it is not compatible with other module resolution strategies.

If you want to use `"resolveJsonModule": false`, you should also set `"moduleResolution": "node"` in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "resolveJsonModule": false,
    "moduleResolution": "node",
    "outDir": "./dist"
  },
  "include": ["*.ts"]
}
```

After making this adjustment, running `tsc` will compile the TypeScript code successfully, and the import of JSON files will be disallowed.