const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
   mode: NODE_ENV,
   context: __dirname + '/frontend',
   entry: './App.js',
   output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'bundle.js',
      library: '[name]'
   },
   devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : 'none',
   watch: NODE_ENV === 'development',
   watchOptions: {
      ignored: /node_modules/
   },
   module: {
      rules: [{
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
            loader: "babel-loader",
            options: {
               presets: ['@babel/preset-env', "@babel/preset-react"]
            }
         }
      }, {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
      }]
   }
}