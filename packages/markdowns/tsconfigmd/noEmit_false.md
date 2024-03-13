If we set `"noEmit": false` or omit it from the `tsconfig.json`, TypeScript will emit JavaScript files during compilation. Let's compile the same TypeScript file (`example.ts`) without `"noEmit": true`:

Suppose we have a TypeScript file named `example.ts` with the following content:

```typescript
// example.ts

const message: string = "Hello, TypeScript!";
console.log(message);
```

Now, let's compile the TypeScript file using the TypeScript compiler (`tsc`) without specifying `"noEmit": true`:

```bash
tsc
```

After running this command, TypeScript will generate a JavaScript output file:

**example.js:**

```javascript
// example.js

var message = "Hello, TypeScript!";
console.log(message);
```

In this case, TypeScript emits the JavaScript file (`example.js`) after compiling the TypeScript source file (`example.ts`). The generated JavaScript file contains the transpiled code from the TypeScript source file. This behavior is the default when `"noEmit"` is not set to `true`.