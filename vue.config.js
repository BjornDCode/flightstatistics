const path = require('path')
const glob = require('glob-all')
const PurgecssPlugin = require("purgecss-webpack-plugin")

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}


module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        host: '0.0.0.0',
    },
    configureWebpack: {
        plugins: [
            new PurgecssPlugin({
                paths: glob.sync([
                    path.join(__dirname, './**/*.vue'),
                ]),
                extractors: [
                    {
                        extractor: TailwindExtractor,
                        extensions: ["html", "js", "vue"]
                    }
                ],
                whitelistPatterns: [
                    /border/,
                    /bg/
                ]
            })
        ]
    }
}
