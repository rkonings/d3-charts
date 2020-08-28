module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [
                '@babel/react',
                '@babel/typescript',
                ['@babel/env', { modules: false }],
            ],
            plugins: ['@babel/plugin-proposal-optional-chaining'],
        },
    });
    config.module.rules.push({
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
    });
    config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.devtool = 'source-map';
    return config;
};
