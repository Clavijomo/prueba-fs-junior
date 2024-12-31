import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
    {
        files: ['**/*.{js,jsx}'], // Aplica la configuración a archivos .js y .jsx
        languageOptions: {
            globals: { ...globals.browser, ...globals.node }, // Definir globales
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true, // Soporte para JSX
                },
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
        },
        rules: {
            // Reglas para variables e importaciones
            'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
            'no-undef': 'error',
            'no-console': 'warn',
            'no-debugger': 'warn',

            // Reglas de React
            'react/react-in-jsx-scope': 'off', // Desactivar necesidad de React en JSX
            'react/jsx-uses-react': 'off', // Desactivar uso obligatorio de React
            'react/jsx-uses-vars': 'warn', // Marcar advertencias de JSX no usados
            'react-hooks/rules-of-hooks': 'error', // Validar reglas de hooks
            'react-hooks/exhaustive-deps': 'warn', // Validar dependencias de hooks
        },
        ignores: ['node_modules/', 'dist/'], // Ignorar carpetas
    },
];
