import React, { Component } from 'react';
import Header from '../components/Header';
import YoutubePlayer from '../components/YoutubePlayer';
import RefreshButton from '../components/RefreshButton';
import GitHubRibbon from '../components/GitHubRibbon';
import fetch from 'isomorphic-fetch';
import ga from 'react-ga';
import config from '../../../config';

class App extends Component {
    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.videos = [];
        this.viewedVideos = [];
        this.showWarning = false;
    }

    componentDidMount() {
        ga.initialize(config.gaTrackingId);
        ga.pageview('/');
        this.refresh();
    }

    updateViewedVideos() {
        const id = this.videos[this.selectedIndex].id.videoId;
        if (this.viewedVideos.indexOf(id) === -1) {
            this.viewedVideos.unshift(id);
            if (this.viewedVideos.length > 50) {
                this.viewedVideos.pop();
            }
        }
    }

    refresh() {
        ga.event({category: 'Video', action: 'Refresh video'});
        fetch('/api/latest')
            .then(response => response.json())
            .then(json => this.processRefresh(json));
    }

    processRefresh(result) {
        const items = result.items;
        this.showWarning = items.length < 20 ? true : false;
        // sort with most recent first
        items.sort((item1, item2) => {
            return item1.snippet.publishedAt < item2.snippet.publishedAt ? 1 : -1;
        });
        if (items.length !== 0) {
            this.videos = items;
            this.selectRandomVideo();
            this.updateViewedVideos();
        }
        this.forceUpdate();
    }

    // Smart randomize to not select videos the user has already viewed
    selectRandomVideo() {
        let unviewed = [];
        for (var i in this.videos) {
            if (this.viewedVideos.indexOf(this.videos[i].id.videoId) === -1) {
                unviewed.push(this.videos[i]);
            }
        }
        if (unviewed.length === 0) {
            unviewed = this.videos;
        }
        const rand = Math.floor(Math.random()*unviewed.length);
        const selectedId = unviewed[rand].id.videoId;
        for (var i in this.videos) {
            if (this.videos[i].id.videoId === selectedId) {
                this.selectedIndex = i;
                break;
            }
        }
    }

    getEmbedUrl(video) {
        if (video) {
            const videoId = video.id.videoId;
            return 'http://www.youtube.com/embed/' + videoId + '?rel=0';
        }
    }

    render() {
        const url = this.getEmbedUrl(this.videos[this.selectedIndex]);
        return (
            <div className='content'>
                <GitHubRibbon />
                <div className='hero'>
                    <Header />
                </div>
                <div className='floating-wrapper'>
                    <YoutubePlayer url={url} />
                    <RefreshButton clickHandler={this.refresh} />
                </div>

                {this.showWarning &&
                    <div className='notification warning'>
                        We've detected some problems with the YouTube API. You may experience issues loading new videos at the moment. Sorry :(
                    </div>
                }
            </div>
        );
    }
}

export default App;

