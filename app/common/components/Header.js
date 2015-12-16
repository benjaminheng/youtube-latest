import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header'>
                <div className='title'>Youtube Latest</div>
                <div className='caption'>Showing you the most recently uploaded videos</div>
            </div>
        );
    }
}

