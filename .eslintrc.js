module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {"react/jsx-uses-react": "error", "react/jsx-uses-vars": "error"},
};

/*
estas lineas van en el package.json para activar el precommit, para habilitar estandares de hacer un commit aplique los cambios automaticamente, por el momento se desabilita.
"husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
    }
  }
*/
