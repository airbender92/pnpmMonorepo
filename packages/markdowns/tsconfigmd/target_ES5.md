Certainly! The `"target": "ES5"` option in TypeScript specifies that the TypeScript code should be transpiled to ECMAScript 5 (ES5), which is compatible with a wider range of browsers and environments, including older ones. Here's a simple example to demonstrate the use of `"target": "ES5"`:

Suppose you have a TypeScript file named `example.ts` with the following content:

```typescript
// example.ts

let message: string = "Hello, ES5!";

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("TypeScript"));

// Arrow function with let/const
const addNumbers = (a: number, b: number): number => a + b;

console.log(addNumbers(3, 7));
```

This code uses TypeScript syntax, including type annotations, arrow functions, and let/const declarations. Now, let's compile the TypeScript code using the `tsc` (TypeScript compiler) command with `"target": "ES5"`:

```bash
tsc --target ES5 example.ts
```

After running this command, TypeScript will transpile the code to JavaScript with the specified target ECMAScript version (ES5). You will get a file named `example.js`:

```javascript
// example.js

var message = "Hello, ES5!";

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("TypeScript"));

// Arrow function with let/const
var addNumbers = function (a, b) { return a + b; };

console.log(addNumbers(3, 7));
```

The resulting JavaScript code is written in a way that is compatible with ECMAScript 5, making it suitable for environments that support features up to ES5, including older browsers and systems. This allows the code to run in a broader range of environments while still providing the benefits of TypeScript during development.