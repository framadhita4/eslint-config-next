# ESLint Config

A comprehensive ESLint configuration for modern JavaScript, TypeScript, React, and Next.js projects.

## Features

- **JavaScript & TypeScript** - Full support with recommended rules
- **React & React Hooks** - Best practices for React development
- **Next.js** - Optimized for Next.js applications
- **Import Sorting** - Automatic import organization
- **Prettier Integration** - Seamless code formatting
- **TanStack Query** - ESLint rules for React Query

## Installation

Install the package and its peer dependencies:

```bash
npm install --save-dev eslint @framadhita4/eslint-config-next
```

Or with pnpm:

```bash
pnpm add -D eslint @framadhita4/eslint-config-next
```

Or with yarn:

```bash
yarn add -D eslint @framadhita4/eslint-config-next
```

## Usage

### Basic Setup

Create an `eslint.config.mjs` file in your project root:

```javascript
import { defineConfig } from "eslint/config";
import eslintConfigNext from "@framadhita4/eslint-config-next";

export default defineConfig([...eslintConfigNext]);
```

## What's Included

This configuration includes rules and plugins for:

### Core

- **@eslint/js** - ESLint recommended rules
- **typescript-eslint** - TypeScript support and recommended rules
- **Prettier** - Code formatting integration

### React Ecosystem

- **eslint-plugin-react** - React best practices
- **eslint-plugin-react-hooks** - React Hooks rules
- **@next/eslint-plugin-next** - Next.js specific rules

### Utilities

- **eslint-plugin-simple-import-sort** - Automatic import sorting with custom groups
- **@tanstack/eslint-plugin-query** - TanStack Query (React Query) rules

## Import Sorting

This config includes automatic import sorting with the following groups:

1. Side effects and `@public` imports
2. React imports
3. Next.js imports
4. MUI imports
5. Other external packages
6. Internal imports (`@shared`, `@components`, `@constants`, `@lib`, `@/`)

Example of sorted imports:

```javascript
import React from "react";
import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "@mui/material";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { API_ENDPOINTS } from "@constants/api";
import { Header } from "@components/Header";
import { utils } from "@lib/utils";
```

## Key Rules

### TypeScript

- `@typescript-eslint/no-explicit-any`: `off` - Allows `any` type
- `@typescript-eslint/no-unused-vars`: `warn` - Warns on unused variables

### React

- Arrow function components required for named components
- JSX allowed in `.tsx` and `.jsx` files
- Self-closing components enforced
- React in JSX scope not required (modern React)

### Code Style

- Camel case not enforced
- Console statements show warnings
- Object curly spacing required
- Arrow function expressions preferred

## Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Requirements

- **Node.js**: 18.x or higher
- **ESLint**: 9.x

## Peer Dependencies

This package requires ESLint 9.x as a peer dependency. All other dependencies are included.

## License

ISC

## Contributing

Issues and pull requests are welcome!
