module.exports = {
	entry: './src/app.jsx',
	output: {
		filename: './bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: { loader: 'babel-loader' },
				exclude: /node_modules/,
			},
		],
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
};
