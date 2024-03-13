Enabling `"strict": true` in TypeScript sets several strict type-checking options to their strictest settings. These options include `"noImplicitAny"`, `"noImplicitThis"`, `"alwaysStrict"`, `"strictNullChecks"`, `"strictFunctionTypes"`, `"strictBindCallApply"`, `"strictPropertyInitialization"`, and `"noUnusedLocals"`. Let's demonstrate the effects of `"strict": true` with an example:

Suppose you have a TypeScript file named `strictExample.ts` with some potentially unsafe code:

**strictExample.ts:**

```typescript
// strictExample.ts

function add(x, y) {
  return x + y;
}

const result: number = add(3, '5'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(result);
```

In this example, the `add` function takes two parameters `x` and `y` and attempts to add them together. However, there is no type annotation on the parameters, which could lead to errors if incorrect types are passed.

Now, let's compile the TypeScript file with `"strict": true`:

```bash
tsc --strict strictExample.ts
```

After running this command, TypeScript will perform strict type-checking according to the `"strict": true` option. In this case, TypeScript will catch the type error where we're trying to add a number and a string together and will report it as follows:

```
strictExample.ts:7:35 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

7 const result: number = add(3, '5'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

This error message indicates that TypeScript has caught the type mismatch and prevented the potentially unsafe operation. Enabling `"strict": true` ensures that TypeScript performs rigorous type-checking, helping to catch errors at compile time and maintain code integrity.






Enabling `"strict": true` in TypeScript activates several strict type-checking options. Let's go through each of these options with a demonstration:

1. **`"noImplicitAny"`**: This option prevents TypeScript from allowing variables to be implicitly typed as `any`.

```typescript
// Example demonstrating "noImplicitAny"

function add(x, y) {
  return x + y; // Error: Implicitly has type 'any'
}
```

2. **`"noImplicitThis"`**: This option ensures that TypeScript does not allow the `this` keyword to have an implicit `any` type within functions.

```typescript
// Example demonstrating "noImplicitThis"

function foo() {
  console.log(this); // Error: 'this' implicitly has type 'any'
}
```

3. **`"alwaysStrict"`**: This option ensures that TypeScript emits code in strict mode by always adding `"use strict";` to each emitted file.

```typescript
// Example demonstrating "alwaysStrict"

function strictModeFunction() {
  console.log("Function running in strict mode.");
}
```

4. **`"strictNullChecks"`**: This option ensures that TypeScript checks for null and undefined values in your code to prevent errors caused by dereferencing null or undefined values.

```typescript
// Example demonstrating "strictNullChecks"

let x: number;
x = null; // Error: Type 'null' is not assignable to type 'number'
```

5. **`"strictFunctionTypes"`**: This option ensures that function types are strictly checked against their signatures, including return types.

```typescript
// Example demonstrating "strictFunctionTypes"

const add: (a: number, b: number) => number = (x: string, y: string) => x + y; // Error: Type 'string' is not assignable to type 'number'
```

6. **`"strictBindCallApply"`**: This option ensures that TypeScript checks that `bind`, `call`, and `apply` methods are called with the correct number of arguments and that the arguments have the correct types.

```typescript
// Example demonstrating "strictBindCallApply"

const obj = {
  foo: function (a: number, b: number) {
    return a + b;
  }
};

const boundFunction = obj.foo.bind(null, "3", "5"); // Error: Argument of type '"3"' is not assignable to parameter of type 'number'
```

7. **`"strictPropertyInitialization"`**: This option ensures that class properties are initialized in the constructor or have definite assignment assertions.

```typescript
// Example demonstrating "strictPropertyInitialization"

class MyClass {
  prop: string; // Error: Property 'prop' has no initializer and is not definitely assigned in the constructor
}
```

8. **`"noUnusedLocals"`**: This option ensures that TypeScript checks for unused local variables.

```typescript
// Example demonstrating "noUnusedLocals"

function unusedVariableDemo() {
  const unused: number = 42; // Error: 'unused' is declared but its value is never read
}
```

By enabling `"strict": true`, all these options are turned on, providing comprehensive type checking and stricter adherence to best practices in your TypeScript codebase.