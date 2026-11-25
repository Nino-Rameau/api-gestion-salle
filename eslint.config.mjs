import tseslint from 'typescript-eslint'
import eslintNestJs from "@darraghor/eslint-plugin-nestjs-typed";

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
        ignores: ['dist/**', 'coverage/**']
    },
    {
        files: ['test/**/*.js'],
        rules: { '@typescript-eslint/no-require-imports': 'off' }
    },
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            parser,
            ecmaVersion: 2022,
            sourceType: "module",
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    eslintNestJs.configs.flatRecommended // This is the recommended ruleset for this plugin
);