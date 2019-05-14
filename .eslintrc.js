module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", "jest"
    ],
    "rules": {
      "eqeqeq": "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": [
        "error", "always"
      ],
      "arrow-spacing": [
        "error", { "before": true, "after": true }
      ],
      "indent": [
        "error", 2
      ],
      "linebreak-style": [
        "error", "unix"
      ],
      "quotes": [
        "error", "single"
      ],
      "semi": [
        "error", "never"
      ],
      "no-console": 0,
      "react/prop-types": 0
    }
};