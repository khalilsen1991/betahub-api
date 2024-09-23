/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
	mode: 'development',  // o 'production'
	entry: './src/index.ts',  // Ruta a tu archivo principal de TypeScript
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
}
