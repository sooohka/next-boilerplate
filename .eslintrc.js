/** @type {import("eslint-plugin-import")} */
const importRules = {
  rules: {
    "prefer-default-export": ["error"],
    order: ["error", { groups: ["builtin", "external", "internal"] }],
  },
};

const parsedRules = Object.keys(importRules.rules).reduce((prev, cur) => {
  return { ...prev, [`import/${cur}`]: importRules.rules[cur] };
}, {});

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:import/recommended",
    "eslint-config-prettier",
  ],
  plugins: ["eslint-plugin-import"],
  rules: { ...parsedRules },
  ignorePatterns: [".eslintrc.js"],
};

module.exports = eslintConfig;
