// @ts-check

import eslint from '@eslint/js';
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.mjs', '*.js'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: ['**/**/graphql/types.ts', '/node_modules/**']
  },
  {
    files: ['**/**.ts', "**/**.mjs"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      'sort-imports': 'off',
    }
  }
);
