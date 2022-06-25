module.exports = {
  parserOptions: { project: "./tsconfig.json" },
  plugins: [
    "simple-import-sort",
    "unused-imports",
    "sort-destructure-keys",
    "import-access",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    // ブロックの中括弧（{}）を省略しない
    curly: "error",
    // console.log をエラーにする
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    // Enum の禁止
    "no-restricted-syntax": [
      "error",
      { selector: "TSEnumDeclaration", message: "Don't declare enums" },
    ],
    // const の使用を強制
    "prefer-const": "error",
    // アロー関数の使用を強制
    "func-style": ["error", "expression"],
    // コールバック関数にアロー関数の使用を強制
    "prefer-arrow-callback": "error",
    // アロー関数で一行省略の禁止
    "arrow-body-style": ["error", "always"],
    // React のデフォルトインポート禁止
    "no-restricted-imports": [
      "error",
      { paths: [{ name: "react", importNames: ["default"] }] },
    ],

    /* react */
    // 分割代入の強制
    "react/destructuring-assignment": ["error", "always"],

    /* import 系 */
    // 要参照: https://github.com/uhyo/eslint-plugin-import-access
    "import-access/jsdoc": "error",
    // インポート時に改行を強制
    "import/newline-after-import": "error",
    // デフォルトエクスポートを禁止
    "import/no-default-export": "error",
    // インポート順序を強制
    "simple-import-sort/imports": "error",
    // エクスポート順序を強制
    "simple-import-sort/exports": "error",
    // 使用していないインポートを禁止
    "unused-imports/no-unused-imports": "error",
    // unused-imports を使うために必要？この設定項目の意義ちょっと分かっていない。
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    /* typescript-eslint */
    // 暗黙的な any を禁止
    "@typescript-eslint/no-explicit-any": "off",
    // var require を禁止
    "@typescript-eslint/no-var-requires": "off",
    // エクスポート関数などの引数・戻り値の型を強制。
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // 型インポートの強制
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" },
    ],
    // 未使用 かつ _ から始まらない変数を禁止
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],

    /* other */
    // 分割代入の順序を強制
    "sort-destructure-keys/sort-destructure-keys": "error",
  },
  overrides: [
    {
      files: ["src/pages/**/*.tsx", "src/pages/api/**/*.ts", "next.config.mjs"],
      rules: {
        /* sort 系 */
        // pages コンポーネントのデフォルトエクスポートを許可
        "import/no-default-export": "off",
      },
    },
  ],
};
