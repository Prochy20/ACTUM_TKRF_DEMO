module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
    plugins: [],
    // add your custom rules here
    rules: {
        semi: [2, 'always'],
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/multi-word-component-names': 0,
    },
};
