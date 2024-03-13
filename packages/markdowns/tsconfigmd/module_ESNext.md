The `"module": "ESNext"` option in TypeScript specifies the module system for the generated JavaScript code. In this case, it uses ECMAScript modules (ESNext). Let's create a simple example to demonstrate the use of this option:

Suppose you have two TypeScript files named `main.ts` and `moduleExample.ts`:

**moduleExample.ts:**

```typescript
// moduleExample.ts

export const greet = (name: string): string => {
  return `Hello, ${name}!`;
};
```

**main.ts:**

```typescript
// main.ts

import { greet } from "./moduleExample";

const userName: string = "John";
const greeting: string = greet(userName);

console.log(greeting);
```

In this example, `moduleExample.ts` contains a function `greet` that is exported, and `main.ts` imports and uses this function.

Now, let's compile the TypeScript code using the `tsc` (TypeScript compiler) command with `"module": "ESNext"`:

```bash
tsc --module ESNext main.ts
```

After running this command, TypeScript will transpile the code to JavaScript with the specified module system (ESNext). You will get two files, `main.js` and `moduleExample.js`:

**main.js:**

```javascript
// main.js

import { greet } from "./moduleExample";
const userName = "John";
const greeting = greet(userName);
console.log(greeting);
```

**moduleExample.js:**

```javascript
// moduleExample.js

export const greet = (name) => {
    return `Hello, ${name}!`;
};
```

The resulting JavaScript code is written using ECMAScript modules. You can then use these modules in an environment that supports ECMAScript modules, such as modern browsers or Node.js with appropriate flags.

Keep in mind that when using ECMAScript modules, you need to use the `type="module"` attribute in your HTML file if you are running the code in a browser:

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TypeScript Module Example</title>
</head>
<body>
  <script type="module" src="main.js"></script>
</body>
</html>
```

This ensures that the browser treats the script as an ECMAScript module.