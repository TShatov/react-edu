module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'plugins': [
    'react',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'angular': 'readonly',
    'require': 'readonly',
    'ZiggeoApi': 'readonly',
    '$': 'readonly',
    'pdfjsLib': 'readonly',
    'safari': 'readonly',
    'PLUGIN_CLIENT_ID': 'readonly',
    'PLUGIN_CLIENT_SECRET': 'readonly',
    'ROLLBAR_FRONTEND_TOKEN': 'readonly',
    'RAILS_ENV': 'readonly',
    'PLUGIN_REDIRECT_URI': 'readonly',
    'ANDROID_APP_URL': 'readonly',
    'IOS_APP_URL': 'readonly',
    'ZIGGEO_API_TOKEN': 'readonly',
    'Rollbar': 'readonly',
    'APP2_CLIENT_ID': 'readonly',
    'APP2_CLIENT_SECRET': 'readonly',
    'FILESTACK_API_KEY': 'readonly',
    'FILESTACK_WORKFLOW_ID': 'readonly',
    'FILESTACK_CNAME': 'readonly',
    'HOSTNAME': 'readonly',
    'zE': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-console': [
      'error',
      {
        'allow': ['error', 'info']
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        'allowAfterThis': true
      }
    ],
    'comma-dangle': 'off',
    'no-plusplus': 'off',
    'camelcase': 'off',
    'func-names': 'off',
    'import/no-unresolved': 'off',
    'object-shorthand': 'off',
    'no-param-reassign': 'off',
    'vars-on-top': 'off',
    'no-restricted-globals': 'off',
    'prefer-arrow-callback': 'off',
    'global-require': 'off',
    'no-shadow': 'off',
    'no-alert': 'off',
    'no-use-before-define': 'off',
    'prefer-destructuring': 'off',
    'radix': 'off',
    'default-case': 'off',
    'no-new': 'off',
    'no-mixed-operators': 'off',
    'prefer-const': 'off',
    'no-unused-expressions': 'off',
    'consistent-return': 'off',
    'max-len': 'off',
    'no-return-assign': 'off',
    'react/prop-types': 'off'
  },
  'settings': {
    'react': {
      'version': 'detect',
    }
  }
};