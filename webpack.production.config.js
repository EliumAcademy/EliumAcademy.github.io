const devSetUp = require("./webpack.config.js")
var webpack = require('webpack')

ProDetUp ={
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
}

module.exports = Object.assign(devSetUp, ProDetUp)