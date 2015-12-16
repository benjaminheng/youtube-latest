import React, { Component } from 'react';
import Header from '../components/Header';
import YoutubePlayer from '../components/YoutubePlayer';
import VideoList from '../components/VideoList';
import RefreshButton from '../components/RefreshButton';
import fetch from 'isomorphic-fetch';

class App extends Component {
    constructor(props) {
        super(props);
        this.videos = [];
        this.onSelect = this.onSelect.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        this.refresh();
    }

    onSelect(index) {
        console.log('this.videos -> ' + this);
        if (index >= 0 && index < this.videos.length) {
            this.selectedIndex = index;
            window.scrollTo(0, 0);
            this.forceUpdate();
        }
    }

    refresh() {
        fetch('/api/latest')
            .then(response => response.json())
            .then(json => this.processResult(json));
    }

    processResult(result) {
        const items = result.items;
        // sort in reverse order
        items.sort((item1, item2) => {
            return item1.snippet.publishedAt < item2.snippet.publishedAt ? 1 : -1;
        });
        if (items.length !== 0) {
            this.videos = items;
            // random
            this.selectedIndex = Math.floor(Math.random()*items.length);
            this.forceUpdate();
        }
    }

    getEmbedUrl(video) {
        if (video) {
            const videoId = video.id.videoId;
            return 'http://www.youtube.com/embed/' + videoId;
        }
    }

    render() {
        const url = this.getEmbedUrl(this.videos[this.selectedIndex]);
        return (
            <div>
                <Header />
                <YoutubePlayer url={url} />
                <RefreshButton clickHandler={this.refresh} />
                <VideoList videos={this.videos} selectedIndex={this.selectedIndex} onSelect={this.onSelect} />
            </div>
        );
    }
}

export default App;

