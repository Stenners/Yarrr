const path = require("path");

module.exports = {
    entry: {
        'yarrr': './client/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map'
};