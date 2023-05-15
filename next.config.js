/** @type {import('next').NextConfig} */

const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache.js');
const isProduction = process.env.NODE_ENV === 'production';
const { i18n } = require('./next-i18next.config')

const config = {
  reactStrictMode: false,
  transpilePackages: ['antd'],
  compiler: {
    styledComponents: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { isServer, dev,  ...rest }) => {
    // If you're not using the server side of things this can be removed
    if (isServer) {
      const fontDir = path.join(__dirname, 'public', 'fonts');
      config.module.rules.push({
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: fontDir,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: '/_next/fonts',
          },
        },
      });
    }
    
    if (config.mode === 'development') {
      const { I18NextHMRPlugin } = require('i18next-hmr/plugin');
      config.plugins.push(
        new I18NextHMRPlugin({
          localesDir: path.resolve(__dirname, 'public/locales'),
        })
      );
    }

    return config;
  },
  i18n
}

const nextConfig = withPWA({
  dest: 'public',
  disable: !isProduction,
  runtimeCaching
})(
  config
);

module.exports = nextConfig
