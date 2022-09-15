export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Takraf-Webspotlight-Demo',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        bodyAttrs: {
            'data-kontent-project-id': process.env.KONTENT_PROJECT_ID,
            'data-kontent-language-codename': 'default',
        },
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxtjs/ngrok',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/tailwindcss',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    // PUBLIC ENV VARIABLES
    publicRuntimeConfig: {},

    // PRIVATE ENV VARIABLES
    privateRuntimeConfig: {
        KONTENT_PROJECT_ID: process.env.KONTENT_PROJECT_ID,
        KONTENT_PREVIEW_TOKEN: process.env.KONTENT_PREVIEW_TOKEN,
    },

    // NGROK Settings for local dev exposing
    ngrok: {
        auth: process.env.NGROK_AUTH,
        authtoken: process.env.NGROK_AUTHTOKEN,
    },
};
