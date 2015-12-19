import React, { Component } from 'react';

export default class YoutubePlayer extends Component {
    constructor(props) {
        super(props);
        this.iframe = this.createIframeTemplate();
    }

    createIframeTemplate() {
        let iframe = document.createElement('iframe');
        iframe.setAttribute('type', 'text/html');
        iframe.setAttribute('width', '640');
        iframe.setAttribute('height', '390');
        iframe.setAttribute('allowfullscreen', '');
        return iframe;
    }

    componentWillUpdate(nextProps) {
        if (nextProps.url !== undefined) {
            this.replaceIframe(nextProps.url);
        }
    }

    // We replace the entire iframe instead of letting React do its thing and update
    // the src attribute in the virtual DOM so that we don't keep adding to the page
    // history. Updating the src of an iframe will cause the iframe's previous src
    // to be added to the history, making it unpleasant for users to navigate back.
    replaceIframe(url) {
        let iframeWrapper = this.refs.iframeWrapper;
        this.iframe.src = url;
        while (iframeWrapper.firstChild) {
            iframeWrapper.removeChild(iframeWrapper.firstChild);
        }
        iframeWrapper.appendChild(this.iframe);
    }

    render() {
        const { url } = this.props;
        return (
            <div className='youtube-player'>
                <div className='iframe-wrapper' ref='iframeWrapper'>
                </div>
            </div>
        );
    }
}

