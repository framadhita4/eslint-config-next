import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint'; // Modern TS setup
import simpleImportSort from "eslint-plugin-simple-import-sort";
import pluginQuery from '@tanstack/eslint-plugin-query';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';
import globals from 'globals';
// @ts-ignore - Prettier recommended often lacks types
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  // 1. Base Configs (JS + TS)
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 2. Your Custom Configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    // Define plugins so rules can reference them
    plugins: {
      'simple-import-sort': simpleImportSort,
      '@tanstack/query': pluginQuery,
      'react': react,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // --- React Rules ---
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react/jsx-filename-extension': [1, {
        extensions: [".tsx", ".jsx"],
      }],
      'react/state-in-constructor': 'off',
      'react/no-array-index-key': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/display-name': 'off',
      'react/require-default-props': 'off',
      'react/function-component-definition': [2, {
        namedComponents: 'arrow-function',
      }],
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-no-undef': ['error', { "allowGlobals": true }],
      'react/self-closing-comp': ['error', {
          "component": true,
          "html": true
      }],

      // --- React Hooks Rules ---
      ...reactHooks.configs.recommended.rules,

      // --- Next.js Rules ---
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,

      // --- TypeScript Rules ---
      // Note: We already extended tseslint.configs.recommended above, 
      // so we only list overrides here.
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",

      // --- Import Sorting ---
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^\\u0000", "^@public"],
            ["^react"],
            ["^next"],
            ["^@mui"],
            ["^@?\\w", "^react-", "^react-icons"],
            ["^@shared", "^@components", "^@constants", "^@lib", "^@/"]
          ]
        }
      ],

      // --- General Rules ---
      "no-plusplus": "off",
      "strict": "off",
      "no-undef": "off", // Typescript handles this, safe to turn off
      "no-undefined": "off",
      "no-console": "warn",
      "no-unused-vars": "warn",
      "object-curly-spacing": ["error", "always"],
      "object-curly-newline": "off",
      "linebreak-style": "off",
      "implicit-arrow-linebreak": "off",
      "func-style": ["error", "expression"],
      "camelcase": "off",
      
      // --- Prettier Overrides ---
      "prettier/prettier": ["error", {
        endOfLine: "auto",
      }],
    },
  },

  // 3. Prettier Config (Always Last)
  prettierRecommended,
]);