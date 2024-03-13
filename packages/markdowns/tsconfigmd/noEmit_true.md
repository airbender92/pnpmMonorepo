The `"noEmit": true` compiler option in TypeScript prevents the TypeScript compiler from emitting any JavaScript files during compilation. This can be useful when you only want to check the TypeScript files for errors without generating any output files. Let's demonstrate this with an example:

Suppose we have a TypeScript file named `example.ts` with the following content:

```typescript
// example.ts

const message: string = "Hello, TypeScript!";
console.log(message);
```

Now, let's create a `tsconfig.json` file with `"noEmit": true`:

```json
{
  "compilerOptions": {
    "noEmit": true
  }
}
```

In this configuration, `"noEmit": true` is specified.

Now, let's compile the TypeScript file using the TypeScript compiler (`tsc`):

```bash
tsc
```

After running this command, TypeScript will check the TypeScript file for errors but will not generate any JavaScript output files due to the `"noEmit": true` option.

If there are any errors in the TypeScript code, TypeScript will display them in the terminal or command prompt. If the code is error-free, there will be no output files generated. This can be helpful when you only want to perform type checking or when you want to integrate TypeScript into a larger build process where JavaScript files are generated separately.