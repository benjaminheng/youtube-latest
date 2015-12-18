import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header'>
                <div className='title'>YouTube Latest</div>
                <div className='caption'>Explore the wild wild west of YouTube</div>
            </div>
        );
    }
}

