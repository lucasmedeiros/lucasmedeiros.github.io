import pkg from './package'
// import { REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN } from './config';

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Portfolio - Lucas de Medeiros',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // ['@nuxtjs/apollo'],

    [
      'nuxt-fontawesome', {
        imports: [
         {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
         },
         {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['fab']
         }
       ]
      }
    ]
  ],

  // // Give apollo module options
  // apollo: {
  //   errorHandler (error) {
  //     console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
  //   },

  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: 'https://api.github.com/graphql',
  //       httpLinkOptions: {
  //         headers: {
  //           authorization: `Bearer ${REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
  //         }
  //       }
  //     }
  //   }
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
