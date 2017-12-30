const path = require('path');
var webpack = require('webpack');
const webpackTools = require('@ngtools/webpack');
const ROOT = path.resolve(__dirname, './');

module.exports = {
	
    entry: {
        'app': 					'./src/main.ts',
        'polyfills': 			'polyfills.ts'
    },
    output: {
    	path: 					ROOT + '/dist/',
    	publicPath: 			'/dist/' ,
    	filename: 				'[name].min.js',
    	chunkFilename: 			'[id]-chunk.js',
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [
//		new webpack.optimize.UglifyJsPlugin({
//		    output: {
//		      "ascii_only": true
//		    }
//		}),
		new webpackTools.AotPlugin({
	      tsConfigPath: './tsconfig-aot.json',
	    }),
    ],
    module: {    	
    	rules: [
            {
                test: /\.ts$/,
                use: '@ngtools/webpack'
            },
		    {
                test: /\.css$/,
                use: 'raw-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'raw-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
		]
    }

}