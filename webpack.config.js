const { CheckerPlugin } = require('awesome-typescript-loader');
const { TypewizPlugin } = require('typewiz-webpack');

module.exports = {
    entry: './src/main.ts',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader', 'typewiz-webpack']
            }
        ]
    },

    plugins: [
        new CheckerPlugin(),
        new TypewizPlugin(),
    ],

    devServer: {
        contentBase: 'web',
    },
};
