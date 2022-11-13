const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const postcssNormalize = require('postcss-normalize');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const webpackEnv = 'development';
const isEnvDevelopment = webpackEnv === 'development';
const isEnvProduction = webpackEnv === 'production';
const getStyleLoaders = (cssOptions, lessOptions, preProcessor) => {
  const loaders = [
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      loader: require.resolve('less-loader'),
      options: lessOptions,
    },
  ];
  // const loaders = [
  //   isEnvDevelopment && require.resolve('style-loader'),
  //   // isEnvProduction && {
  //   //   loader: MiniCssExtractPlugin.loader,
  //   //   // css is located in `static/css`, use '../../' to locate index.html folder
  //   //   // in production `paths.publicUrlOrPath` can be a relative path
  //   //   options: paths.publicUrlOrPath.startsWith('.')
  //   //     ? { publicPath: '../../' }
  //   //     : {},
  //   // },
  //   {
  //     loader: require.resolve('css-loader'),
  //     options: cssOptions,
  //   },
  //   {
  //     loader: require.resolve('less-loader'),
  //     options: lessOptions,
  //   },
  //   {
  //     // Options for PostCSS as we reference these options twice
  //     // Adds vendor prefixing based on your specified browser support in
  //     // package.json
  //     loader: require.resolve('postcss-loader'),
  //     options: {
  //       // Necessary for external CSS imports to work
  //       // https://github.com/facebook/create-react-app/issues/2677
  //       ident: 'postcss',
  //       plugins: () => [
  //         require('postcss-flexbugs-fixes'),
  //         require('postcss-preset-env')({
  //           autoprefixer: {
  //             flexbox: 'no-2009',
  //           },
  //           stage: 3,
  //         }),
  //         // Adds PostCSS Normalize as the reset css with default options,
  //         // so that it honors browserslist config in package.json
  //         // which in turn let's users customize the target behavior as per their needs.
  //         postcssNormalize(),
  //       ],
  //       sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
  //     },
  //   },
  // ].filter(Boolean);
  /// 其他代码
  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve(preProcessor),
        options: cssOptions,
      }
    );
  }
  return loaders;
};
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
const webpackConfigBase = {
  // module此处为loader区域，一般文件内容解析，处理放在此处，如babel，less,postcss转换等
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        // include: [
        //   path.resolve(__dirname, '../src'),
        // ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      // {
      //   test: /\.(css|less)$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'css-loader' },
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         lessOptions: {
      //           javascriptEnabled: true,
      //         },
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('autoprefixer')()
              ],
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
          // 'less-loader',
        ]
      },
      // {
      //   test: /(\.less)$/,
      //   use: [
      //     {
      //       loader: 'style-loader',
      //     },
      //     {
      //       loader: 'css-loader',
      //     },
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         /**
      //          * 解决less报错 错误信息 https://github.com/ant-design/ant-motion/issues/44
      //          */
      //         lessOptions: {
      //           javascriptEnabled: true
      //         }
      //       }
      //     }
      //   ],
      // },
      // {
      //   test: lessRegex,
      //   exclude: lessModuleRegex,
      //   use: getStyleLoaders({
      //     importLoaders: 3,
      //     // modifyVars: {
      //     //   // 'primary-color': '#f9c700'
      //     // },
      //     // modules: true,
      //     sourceMap: isEnvProduction && shouldUseSourceMap,
      //     // javascriptEnabled: true,
      //   },
      //   'less-loader'),
      //   sideEffects: true
      // },
      // // Adds support for CSS Modules, but using SASS
      // // using the extension .module.scss or .module.sass
      // {
      //   test: lessModuleRegex,
      //   use: getStyleLoaders(
      //     {
      //       importLoaders: 3,
      //       // modules: true,
      //       sourceMap: isEnvProduction && shouldUseSourceMap,
      //       modules: {
      //         getLocalIdent: getCSSModuleLocalIdent
      //       },
      //     },
      //     'less-loader'
      //   ),
      // },
      // {
      //   test: lessRegex,
      //   exclude: lessModuleRegex,
      //   use: getStyleLoaders(
      //     {
      //       importLoaders: 3,
      //       modules: {
      //         mode: 'local',
      //         localIdentName: '[path][name]__[local]--[hash:base64:5]',
      //       },
      //       sourceMap: isEnvProduction
      //         ? shouldUseSourceMap
      //         : isEnvDevelopment,
      //     },
      //     'less-loader'
      //   ),
      //   sideEffects: true,
      // },
      // {
      //   test: lessModuleRegex,
      //   use: getStyleLoaders(
      //     {
      //       importLoaders: 3,
      //       sourceMap: isEnvProduction
      //         ? shouldUseSourceMap
      //         : isEnvDevelopment,
      //       modules: {
      //         getLocalIdent: getCSSModuleLocalIdent,
      //       },
      //     },
      //     'less-loader'
      //   ),
      // },
      {
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
        }
      },
    ],
  }
};
module.exports = webpackConfigBase;
