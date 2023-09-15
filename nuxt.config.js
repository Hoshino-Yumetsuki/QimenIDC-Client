export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'QimenIDC-Client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      { src: 'https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js', type: 'text/javascript', body: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui', // antd
    '@/plugins/axios', // axios
    '@/plugins/vue-github-buttons', // github按钮
    '@/plugins/event-bus', // 事件总线
    '@/plugins/svg-icon', // svg组件
    '@/plugins/echarts', // echarts
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy: true
  },

  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8080/admin',
      pathRewrite: {
        '^/api' : ''
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
  
}