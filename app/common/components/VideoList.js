import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

export default class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { videos, selectedIndex, onSelect} = this.props;
        const itemClass = 'video-list-item';
        return (
            <div className='video-list'>
                <h2>Recent uploads</h2>
                <div>
                    {videos.map((video, i) => 
                        <VideoListItem key={i} index={i} video={video} selected={i === selectedIndex} onSelect={onSelect}/>
                    )}
                </div>
            </div>
        );
    }
}

