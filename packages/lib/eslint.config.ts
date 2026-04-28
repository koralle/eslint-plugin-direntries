import js from '@eslint/js'
import { importX } from 'eslint-plugin-import-x'
import { defineConfig } from 'eslint/config'
import { configs as tsEslintConfigs, parser as tsEslintParser } from 'typescript-eslint'

export default defineConfig([
  js.configs.recommended,
  tsEslintConfigs.strictTypeChecked,
  tsEslintConfigs.stylisticTypeChecked,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    files: ['src/**/*.ts', 'eslint.config.ts', 'oxfmt.config.ts', 'rolldown.config.ts'],
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        projectService: true,
      },
    },
  },
])
