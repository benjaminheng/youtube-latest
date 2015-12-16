import React, { Component } from 'react';

export default class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e, index) {
        const { onSelect } = this.props;
        e.preventDefault();
        onSelect(index);
    }

    render() {
        const { videos, selectedIndex } = this.props;
        return (
            <div className='video-list'>
                <h2>Recent uploads</h2>
                <ul>
                    {videos.map((video, i) => 
                        <li key={i} className={i === selectedIndex ? 'selected' : ''}>
                            <a href='#' onClick={e => this.handleClick(e, i)}>
                                {video.snippet.title}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

