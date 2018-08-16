'use strict';

module.exports = class MoveHeadAssetsToBodyWebpackPlugin {
    constructor(options = {}) {
      this.options = {
        append: false,
        ...options,
      };
    }
  
    apply(compiler) {
      compiler.plugin(
        'compilation', compilation => {
          compilation.plugin(
            'html-webpack-plugin-alter-asset-tags',
            (htmlPluginData, callback) => {
  
            if(this.options.append) {
              htmlPluginData.body = [
                ...htmlPluginData.body,
                ...htmlPluginData.head,
              ];
            } else {
              htmlPluginData.body = [
                ...htmlPluginData.head,
                ...htmlPluginData.body,
              ];
            }
  
            htmlPluginData.head = [];
  
            callback(null, htmlPluginData);
          });
      });
  
    }
  }