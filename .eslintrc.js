module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true
    },
  extends: [
        "prettier",
    ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true
    },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
        },
    ecmaVersion: 2018,
    sourceType: "module"
    },
  plugins: [
        "jsx-a11y",
        "import",
        "prettier"
    ],
  rules: {
        "prettier/prettier": "error",
        "import/prefer-default-export": "off",
        "no-unused-vars": [
            "error",
            { argsIgnorePattern: "^_"
            }
        ],
        "global-require": "off",
        "no-param-reassign": "off",
        "no-underscore-dangle": "off",
    camelcase: "off",
        "no-console": [
            "error",
            { allow: [
                    "tron"
                ]
            }
        ],
    },
  settings: {
        "import/resolver": {
            "babel-plugin-root-import": {
        rootPathSuffix: "src"
            },
        },
    },
};