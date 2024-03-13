The `"skipLibCheck": true` option in TypeScript allows you to skip type checking of declaration files (files with a `.d.ts` extension). This can improve the build performance by avoiding type checking of external library declaration files. Let's create an example to demonstrate the use of this option:

Suppose you have a TypeScript file named `app.ts` and a declaration file `external-library.d.ts` as follows:

**app.ts:**

```typescript
// app.ts

// Using a function from an external library
externalLibraryFunction("Hello from app.ts");

// Function declaration from external library
declare function externalLibraryFunction(message: string): void;

// Using a variable from an external library
const externalLibraryVariable: number = 42;

console.log(externalLibraryVariable);
```

**external-library.d.ts:**

```typescript
// external-library.d.ts

declare var externalLibraryVariable: number;

declare function externalLibraryFunction(message: string): void;
```

In this example, `app.ts` uses a function and a variable declared in `external-library.d.ts`.

Now, let's compile the TypeScript code using the `tsc` (TypeScript compiler) command with `"skipLibCheck": true`:

```bash
tsc --skipLibCheck app.ts
```

After running this command, TypeScript will transpile the code to JavaScript, skipping the type checking of the external library declaration file. You will get an `app.js` file:

**app.js:**

```javascript
// app.js

// Using a function from an external library
externalLibraryFunction("Hello from app.ts");

// Using a variable from an external library
const externalLibraryVariable = 42;

console.log(externalLibraryVariable);
```

In this output, notice that the type checking for the external library declaration file is skipped. This can be beneficial for performance, especially when dealing with large external libraries where the type checking of declaration files might not be necessary for your specific use case.

Keep in mind that using `"skipLibCheck": true` should be done cautiously, and it's generally recommended to keep it disabled to ensure type safety. Use it only when you are confident that the external library declaration files are correct and don't need to be checked every time during the build process.