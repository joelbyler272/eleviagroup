import next from 'eslint-config-next/core-web-vitals'

/**
 * ESLint 9 flat config. Next 16 ships native flat configs, so we extend
 * eslint-config-next's core-web-vitals rules directly.
 */
const eslintConfig = [
  ...next,
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
]

export default eslintConfig
