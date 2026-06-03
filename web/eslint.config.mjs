import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  {
    extends: ["next/core-web-vitals", "next/typescript"],

    rules: {
      "padding-line-between-statements": [
        "error",

        // space after imports
        { blankLine: "always", prev: "import", next: "*" },

        // space before exports
        { blankLine: "always", prev: "*", next: "export" },

        // space before return (optional but useful)
        { blankLine: "always", prev: "*", next: "return" },
      ],
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
