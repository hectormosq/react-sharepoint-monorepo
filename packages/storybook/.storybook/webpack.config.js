const autoprefixer = require('autoprefixer');
// const path = require('path');

const SASSModuleLoader = {
  loader: require.resolve('css-loader'),
  options: {
    modules: true,
    importLoaders: 1,
    localIdentName: "[name]-[local]-[hash:base64:10]",
    sourceMap: true,
    minimize: true
  }
}

const CSSLoader = {
  loader: require.resolve('css-loader'),
  options: {
    sourceMap: true,
    minimize: true
  }
}

const postCSSLoader = {
  loader: require.resolve('postcss-loader'),
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      }),
    ]
  }
}

module.exports = (storybookBaseConfig) => {
  //console.log('storybookBaseConfig', storybookBaseConfig);

  const rules = [
    {
      test: /\.css$/,
      use: [
        require.resolve('style-loader'),
        CSSLoader,
        postCSSLoader
      ],
    },
    {
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      use: [
        require.resolve('style-loader'),
        CSSLoader,
        postCSSLoader,
        require.resolve('sass-loader')]
    },
    {
      test: /\.module\.scss$/,
      use: [
        require.resolve('style-loader'),
        SASSModuleLoader,
        postCSSLoader,
        require.resolve('sass-loader'),
      ]
    },
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          }

        },
        {
          loader: require.resolve("react-docgen-typescript-loader")
        }
      ]
    },
    {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      loader: 'file-loader',
      options: {
        name: "[name].[ext]"
      }
    },
    {
      test: /\.(woff|woff2|ttf)$/,
      loader: 'file-loader?name=[name].[ext]',
    },
    {
      test: /\.md$/,
      loader: 'raw-loader',
    }
  ]

  const extensions = [
    ".tsx", ".ts", ".scss", ".css"
  ]

  /*storybookBaseConfig.config.resolve.alias = {
    "react": path.resolve(__dirname, '../../../node_modules/react'),
    "react-dom": path.resolve(__dirname, '../../../node_modules/react-dom'),
  }*/

  rules.forEach(rule => storybookBaseConfig.config.module.rules.push(rule));
  extensions.forEach(ext => storybookBaseConfig.config.resolve.extensions.push(ext));

  return storybookBaseConfig;
};
