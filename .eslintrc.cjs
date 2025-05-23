/* eslint-disable no-undef */
module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        "airbnb",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: ["react-refresh"],
    indent: 4,
    rules: {
        "react-refresh/only-export-components": "warn",
    },
};
