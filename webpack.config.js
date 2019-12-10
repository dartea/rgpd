const path = require('path');

module.exports = {
  entry: ['./src/art-is-privacy.js','./src/art-is-privacy.scss'],
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'art-is-privacy.min.js'
  },
  	module: {
        rules: [
        	{
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
          	}
        ]
      }
};