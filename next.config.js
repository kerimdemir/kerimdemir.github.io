// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== "production";

module.exports = {
    exportPathMap: function () { // /Next-React-Components
        return {
            "/": { page: "/" },
            "/ap-grid-layout": { page: "/ap-grid-layout" },
            "/ap-highlight": { page: "/ap-highlight" },
        }
    },
    assetPrefix: !debug ? 'https://kerimdemir.github.io' : '',
    /* webpack: (config, { dev }) => {
      // Perform customizations to webpack config
      // console.log('webpack');
      // console.log(config.module.rules, dev);
      // Important: return the modified config
      return config
    },
    webpackDevMiddleware: (config) => {
      // Perform customizations to webpack dev middleware config
      // console.log('webpackDevMiddleware');
      // console.log(config);
      // Important: return the modified config
      return config
    }, */
}
