import Express from 'express';
import path from 'path';
import apiRoutes from './api/routes';
import config from '../../config';

const app = Express();
const port = config.port || 3000;

if (!config.apiKey) {
    console.error('[ERROR] API key not set. Specify your API key by setting the YTLATEST_API_KEY environment variable.');
    process.exit(1);
}

if (!config.isProduction) {
    const devMiddleware = require('./devMiddleware').default;
    app.use(devMiddleware());
}

const publicPath = path.join(__dirname, '..', '..', 'dist');
app.use(Express.static(publicPath));

app.use('/api', apiRoutes);
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});
