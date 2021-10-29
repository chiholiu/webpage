const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		a:  ["./src/index.js", "./src/_main.scss"]
	},      
	output: {
		filename: 'js/main.js',
		path: path.resolve(__dirname + '/public')
	},
	performance : {
		hints : false
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					"css-loader", "sass-loader"
				]
			}
		]
	},
	// add this line
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "css/main.css"
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from:'src/images', 
					to:'images'
				} 
			],
		}),
		new CleanWebpackPlugin(),
	]
};