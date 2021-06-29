
module.exports = {
  reactStrictMode: true,
}
/*const withLess = require('@zeit/next-less');
module.exports = withLess({
  webpack5: false,
  reactStrictMode: true,
});*/
/*const withLess = require('@zeit/next-less')
module.exports = withLess({
  reactStrictMode: true,
  cssModules: true
})*/
/*const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Webpack 5 is enabled by default
  // You can still use webpack 4 while upgrading to the latest version of Next.js by adding the "webpack5: false" flag
  webpack5: false,
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
}*/
/*
const path = require('path');


const withLess = require('@zeit/next-less');


module.exports = withLess({
  reactStrictMode: true,
  cssModules: true
});

module.exports = {
  lessOptions: {
    includePaths: [path.join(__dirname, './styles')],
  },
}*/