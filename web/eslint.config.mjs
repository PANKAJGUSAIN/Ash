import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  {
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      // spacing between imports and code
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "always", prev: "*", next: "return" },
      ],
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
