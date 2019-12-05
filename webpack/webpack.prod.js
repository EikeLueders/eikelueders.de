const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');


module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new HtmlWebpackInlineSVGPlugin()
    ]
});
