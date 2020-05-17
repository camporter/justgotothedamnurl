const path = require('path');

module.exports = {
    mode: "production",
    node: false,
    entry: {
        background_scripts: './background_scripts/background.js'
    },
    optimization: {
        minimize: true
    },
    output: {
        filename: '[name]/background.js',
        path: path.resolve(__dirname, 'addon'),
    },
};
