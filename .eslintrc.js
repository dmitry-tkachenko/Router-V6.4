const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    semi: [ERROR, 'always'],
    quotes: [ERROR, 'single'],
    'no-unused-vars': WARN,
    'no-undef': ERROR,
    'jsx-quotes': [WARN, 'prefer-single'],
    'exhaustive-deps': OFF,
    'quote-props': [ERROR, 'as-needed'],
    'linebreak-style': [ERROR, 'unix'],
    'no-trailing-spaces': OFF,
    'no-return-await': WARN,
    'comma-dangle': [ERROR, {
      arrays: 'only-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    }],
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/jsx-no-undef': ERROR,
    'react/jsx-uses-vars': ERROR,
    'no-console': WARN,
    'require-await': WARN,
    'func-call-spacing': WARN,
    'key-spacing': [WARN, { beforeColon: false, afterColon: true }],
    'newline-before-return': WARN,
    'semi-spacing': WARN,
    'arrow-spacing': WARN,
    'no-const-assign': ERROR,
    'prefer-arrow-callback': [WARN, { allowNamedFunctions: true }],
    'rest-spread-spacing': WARN,
    'react/no-deprecated': WARN,
  },
};
