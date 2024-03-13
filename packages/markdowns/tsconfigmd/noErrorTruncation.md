The `"noErrorTruncation": true` option in TypeScript prevents the compiler from truncating long error messages. This can be useful when dealing with complex code or error messages, as it allows you to see the full details of any issues without them being cut off.

Let's create an example to demonstrate the use of `"noErrorTruncation": true`:

Suppose you have a TypeScript file named `errorTruncationExample.ts` with intentional errors to generate detailed error messages:

```typescript
// errorTruncationExample.ts

const num: number = "not a number"; // Intentional type error

function add(a: number, b: string): number {
  return a + b; // Intentional type error
}

const result = add(3, "7");
console.log(result);
```

Now, let's compile the TypeScript code using the `tsc` (TypeScript compiler) command with `"noErrorTruncation": true`:

```bash
tsc --noErrorTruncation true errorTruncationExample.ts
```

After running this command, TypeScript will attempt to compile the code and display detailed error messages without truncation.

In the output, you'll see the full error messages for each issue:

```
errorTruncationExample.ts:3:14 - error TS2322: Type 'string' is not assignable to type 'number'.
3 const num: number = "not a number"; // Intentional type error
               ~~~~~~~~~~~~~~~~~~~~~

errorTruncationExample.ts:6:10 - error TS2322: Type 'string' is not assignable to type 'number'.
6   return a + b; // Intentional type error
           ~~~~

errorTruncationExample.ts:9:1 - error TS2322: Type 'string' is not assignable to type 'number'.
9 const result = add(3, "7");
  ~~~~~~
```

In this example, the detailed error messages show the exact locations and descriptions of the type errors without any truncation, thanks to the `"noErrorTruncation": true` option. This can be especially helpful in identifying and resolving issues in more complex codebases.