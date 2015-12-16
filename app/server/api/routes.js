import Express from 'express';
import dateformat from 'dateformat';
import fetch from 'isomorphic-fetch';

const router = Express.Router();

router.get('/latest', function(req, res) {
    // current time (in ms) minus 300 seconds
    const after = new Date(currentTimeUTC() - 300*1000);
    // format: 2015-12-16T12:30:10Z
    const afterFormatted = dateformat(after, "yyyy-mm-dd'T'HH:MM:ss'Z'");

    const params = {
        part: 'snippet',
        publishedAfter: afterFormatted,
        type: 'video',
        maxResults: 50,
        safeSearch: 'none',
        key: process.env.YT_LATEST_API_KEY
    }

    const url = buildUrl('https://www.googleapis.com/youtube/v3/search', params);
    fetch(url)
        .then(response => response.json())
        .then(json => res.json(json));
});

function currentTimeUTC() {
    const now = new Date();
    return now.getTime() + now.getTimezoneOffset() * 60000;
}

function buildUrl(url, params) {
    if (Object.keys(params).length === 0) {
        return url;
    }

    const paramString = Object.keys(params).map(key => {
        return key + '=' + encodeURIComponent(params[key]);
    }).join('&');
    return url + '?' + paramString;
}

export default router;
