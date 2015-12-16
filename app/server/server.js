import Express from 'express';
import apiRoutes from './api/routes';

const app = Express();
const port = 3000;

if (process.env.NODE_ENV !== 'production') {
    const devMiddleware = require('./devMiddleware').default;
    app.use(devMiddleware());
}

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
