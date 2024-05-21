import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["**/node_modules/", ".dist/"],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: "readonly",
      },
    },

    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
      "@typescript-eslint/no-unused-vars": "error",
    },
    globals: {
      process: "readonly",
    },
    env: {
      browser: true,
      es2021: true,
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
