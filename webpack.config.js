var path = require('path');

module.exports = {
    entry: ["./src/index.tsx"],
    output: {
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            {test: /\.ts(x?)$/, loader: "awesome-typescript-loader"}
        ],

        preLoaders: [
            {test: /\.js$/, loader: "source-map-loader"}
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};