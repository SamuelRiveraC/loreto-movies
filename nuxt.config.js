export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: `Enlight Distributions' Nova AI`,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `Harness the insight of Nova to refine your film's marketing approach. Submit your script below, and we'll provide detailed marketing insights tailored for your narrative.` },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://enlightstudiosnet.files.wordpress.com/2023/04/cropped-enlight-logo-icon-v2_2-black-outlineartboard-1-8.png' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/marked/marked.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.10.377/build/pdf.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/chart.js@4.2.0/dist/chart.umd.js' },
      { type: 'text/javascript', src: '/js/pdf_viewer.js' },
    ],
  },

  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv', 
    '@nuxtjs/tailwindcss'
  ],

      
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv', 
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  runtimeConfig: {
    OPEN_AI_KEY: process.env.OPEN_AI_KEY,
    PASSWORD: process.env.PASSWORD,
    PASSWORD_PROTECT: process.env.PASSWORD_PROTECT,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
}