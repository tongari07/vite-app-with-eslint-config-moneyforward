import { essentials, react, typescript } from "eslint-config-moneyforward/flat";
import prettier from "eslint-config-prettier";

export default [
  ...essentials,
  ...react,
  ...typescript,
  {
    rules: {
      // Allow JSX props to be spread
      // This is because some components need to accept html element attributes.
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
      "react/jsx-props-no-spreading": "off",
      // Allow the use of extraneous packages
      // This is because the library uses libraries defined in many devDependencies.
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    },
  },
  prettier,
];
