Setting `"declaration": true` in TypeScript compiler options instructs the TypeScript compiler to generate declaration files (with the extension `.d.ts`) along with the JavaScript files. Declaration files contain type definitions for TypeScript modules, enabling TypeScript consumers to use the module with type information.

Let's demonstrate the use of `"declaration": true` with an example:

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

Now, let's create a `tsconfig.json` file with `"declaration": true`:

```json
{
  "compilerOptions": {
    "declaration": true,
    "outDir": "./dist"
  },
  "include": ["*.ts"]
}
```

In this configuration, `"declaration": true` is specified.

Now, let's compile the TypeScript file using the TypeScript compiler (`tsc`):

```bash
tsc
```

After running this command, TypeScript will generate JavaScript files along with declaration files in the specified output directory (`dist`).

The generated declaration file (`math.d.ts`) will look like this:

```typescript
// math.d.ts

export declare function add(x: number, y: number): number;
export declare function subtract(x: number, y: number): number;
```

These declaration files provide type information for consumers using the `math` module in TypeScript. They specify the function signatures of `add` and `subtract` functions, allowing TypeScript consumers to import and use these functions with type safety and IntelliSense support.