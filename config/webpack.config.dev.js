const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			// Add more rules for other file types (e.g., CSS, images) if needed
		],
	},

	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 3000,
	},
};
