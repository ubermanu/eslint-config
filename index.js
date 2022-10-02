/* eslint-env node */
module.exports = {
    extends: 'eslint:recommended',
    rules: {
        'no-console': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        curly: ['error', 'all'],
        quotes: ['error', 'single', { 'avoidEscape': true }],
        semi: ['error', 'never'],
    },
}
