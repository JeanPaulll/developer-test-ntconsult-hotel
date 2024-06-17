module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
    },
    rules: {
        'vue/multi-word-component-names': 'off', // Desliga a regra de nomes de componentes de várias palavras
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'prettier/prettier': 'error',
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'no-undef': 'off',
            },
        },
    ],
}
