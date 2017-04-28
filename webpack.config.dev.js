import path from 'path'
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server')
        ],
        loaders: [ 'react-hot', 'babel' ]
      },
       //CSS
      {
        test:   /\.css$/,
        include: [
          path.resolve(__dirname, "client"),
        ],
        loader: "style-loader!css-loader!postcss-loader"
      },

      //SCSS
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: [
          path.resolve(__dirname, "client"),
        ]
      }
    ]
  },
  resolve: {
    extentions: [ '', '.js' ]
  }
}
