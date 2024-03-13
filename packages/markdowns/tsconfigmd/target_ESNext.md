Certainly! The `"target": "ESNext"` option in TypeScript specifies the ECMAScript version to which TypeScript should transpile the code. Here's a simple example to demonstrate the use of `"target": "ESNext"`:

Suppose you have a TypeScript file named `example.ts` with the following content:

```typescript
// example.ts

const greeting: string = "Hello, ESNext!";

async function asyncExample() {
  return Promise.resolve("Async functions are supported in ESNext!");
}

console.log(greeting);

asyncExample().then((result) => {
  console.log(result);
});
```

In this example, the code uses TypeScript syntax with the `string` type annotation, `async` functions, and the `Promise` API. The `"target": "ESNext"` option ensures that the resulting JavaScript code will be compatible with the latest ECMAScript features.

Now, let's compile the TypeScript code using the `tsc` (TypeScript compiler) command:

```bash
tsc --target ESNext example.ts
```

After running this command, TypeScript will transpile the code to JavaScript with the specified target ECMAScript version (ESNext). You will get a file named `example.js`:

```javascript
// example.js

const greeting = "Hello, ESNext!";

async function asyncExample() {
  return Promise.resolve("Async functions are supported in ESNext!");
}

console.log(greeting);

asyncExample().then((result) => {
  console.log(result);
});
```

The resulting JavaScript code is written in a way that takes advantage of the latest ECMAScript features, making it suitable for environments that support ESNext. This could include modern browsers or Node.js environments with support for ECMAScript features up to the latest standard.