import React, { Component } from 'react';

export default class RefreshButton extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        const { clickHandler } = this.props;
        e.preventDefault();
        clickHandler();
    }

    render() {
        return (
            <div className='refresh-button'>
                <input type='button' value='Refresh' onClick={e => this.handleClick(e)} />
            </div>
        );
    }
}

