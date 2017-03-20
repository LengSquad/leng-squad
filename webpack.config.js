module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/docs/',
        filename: "bundle.js",
        publicPath: "/docs/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                include: __dirname,
                query: {
                    presets: [ 'es2015', 'react' ]
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}