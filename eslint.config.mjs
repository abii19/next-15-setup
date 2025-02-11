import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...compat.config({
    extends: ["next", "prettier"],
  }),
  prettierConfig,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "off", // Disable the base rule
      "@typescript-eslint/no-unused-vars": ["error"],
      // "import/no-anonymous-default-export": "off",
    },
  },
  {
    ignores: ["*.config.js", "*.d.ts", "*.md"],
  },
];

export default eslintConfig;
