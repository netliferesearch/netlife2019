const path = require('path');
const webpack = require('webpack');

module.exports = async ({ config, mode }) => {
  const isProduction = mode;
  const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');
  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env')
  ];
  config.module.rules[0].use[0].options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve('@babel/plugin-proposal-class-properties'),
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    require.resolve('babel-plugin-remove-graphql-queries')
  ];

  config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.css$/'
  );

  config.module.rules.push(
    {
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          // may or may not need this line depending on your app's setup
          options: {
            plugins: ['@babel/plugin-transform-react-jsx']
          }
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})]
          }
        }
      ]
    },
    {
      test: /\.(stories|story)\.[tj]sx?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre'
    },
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/
    },
    {
      test: /\.(jpg|png|jpeg|jpg)$/,
      loader: 'file-loader',
      include: path.resolve(__dirname, '../static/')
    },
    {
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        'postcss-loader'
      ],
      include: path.resolve(__dirname, '../src')
    },
    {
      test: /\.module\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true
          }
        },
        'postcss-loader'
      ],
      include: path.resolve(__dirname, '../src')
    }
  );

  // setting NODE_ENV to production so that babel-plugin-remove-graphql-queries, ref https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
  // not sure about the STORYBOOK part, just see it in other projects using gatsby and storybook
  config.plugins.push(
    new webpack.DefinePlugin({
      STORYBOOK: JSON.stringify(true),
      PRODUCTION: JSON.stringify(isProduction)
    })
  );

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main'];
  return config;
};
