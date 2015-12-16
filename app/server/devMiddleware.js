import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config';

export default function devMiddleware() {
    const compiler = webpack(webpackConfig);
    return [
        webpackDevMiddleware(compiler, { 
            noInfo: true, 
            publicPath: webpackConfig.output.publicPath })
    ];
}
