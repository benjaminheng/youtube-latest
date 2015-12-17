import React, { Component } from 'react';

export default class YoutubePlayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { url } = this.props;
        return (
            <div className='youtube-player'>
                <div className='wrapper'>
                    <iframe type="text/html" width="640" height="390" src={url} allowFullScreen ></iframe>
                </div>
            </div>
        );
    }
}

