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
        const { selected, index, video } = this.props;
        let itemClass = 'video-list-item';
        if (selected) {
            itemClass += ' selected';
        }
        return (
            <div className={itemClass} onClick={e => this.handleClick(e, index)}>
                {video.snippet.title}
            </div>
        );
    }
}

