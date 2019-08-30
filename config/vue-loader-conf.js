const babelLoaderConf = require('./babel-conf');

module.exports = {
    loaders: {
        js: {
            loader: 'babel-loader',
            options: babelLoaderConf
        }
    }
};
