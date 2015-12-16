import dateformat from 'dateformat';
import fetch from 'isomorphic-fetch';

const API_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getLatestVideos() {
    fetch('/api/latest')
        .then(response => response.json())
        .then(json => console.log(json));
}

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

export {
    getLatestVideos
};

