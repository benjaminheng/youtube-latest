import React, { Component } from 'react';

export default class YoutubePlayer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.url !== undefined) {
            this.updateIframe(nextProps.url);
        }
    }

    // We manually update the iframe's location instead of letting React do its
    // thing and update the src attribute in the virtual DOM, to prevent updates 
    // from adding entries to the browser history.
    updateIframe(url) {
        let iframeWrapper = this.refs.iframeWrapper;
        iframeWrapper.firstChild.contentWindow.location.replace(url);
    }

    render() {
        const { url } = this.props;
        return (
            <div className='youtube-player'>
                <div className='iframe-wrapper' ref='iframeWrapper'>
                    <iframe type="text/html" width="640" height="390" src={url} allowFullScreen ></iframe>
                </div>
            </div>
        );
    }
}

