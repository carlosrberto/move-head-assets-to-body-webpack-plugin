# move-head-assets-to-body-webpack-plugin

Webpack plugin to move assest from head to body

## Usage

webpack.config.js :
```javascript
module.exports = {
    ...
    plugins: {
        new MoveHeadAssetsToBodyWebpackPlugin({
            // defaults to false
            // if true place head assets after body assets 
            // if false place head assets before body assets
            append: false
        }),
        new htmlWebpackAlterAssetPlugin()
    }
    ...
}
```