import React, { Component } from 'react';

export default class RefreshButton extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        const { clickHandler } = this.props;
        e.preventDefault();
        this.refs.icon.className = 'icon';
        setTimeout(x => {
            this.refs.icon.className += ' spin';
        }, 50);
        clickHandler();
    }

    render() {
        return (
            <div className='refresh-button'>
                <button onClick={e => this.handleClick(e)} >
                    Refresh
                    <span className='icon' ref='icon'>
                        <svg viewBox="0 0 20 20"><path fill="none" d="M19.305 9.61c-.235-.235-.615-.235-.85 0l-1.34 1.34c.046-.312.074-.627.074-.95 0-3.812-3.09-6.9-6.902-6.9-2.213 0-4.177 1.044-5.44 2.663l.897.72C6.798 5.125 8.438 4.25 10.288 4.25c3.176 0 5.75 2.574 5.75 5.75 0 .343-.036.676-.094 1l-1.746-1.39c-.234-.234-.614-.234-.85 0-.234.236-.234.616 0 .85l2.824 2.25c.122.122.282.178.44.173.16.005.32-.05.44-.172l2.25-2.25c.237-.235.237-.615.003-.85zm-9.017 6.142c-3.177 0-5.75-2.575-5.75-5.752 0-.276.024-.547.06-.813l1.204 1.203c.235.234.615.234.85 0 .234-.235.234-.615 0-.85l-2.25-2.25c-.12-.12-.28-.176-.44-.172-.16-.004-.32.05-.442.173L.696 9.54c-.234.236-.234.616 0 .85.235.235.615.235.85 0l1.957-1.558c-.068.38-.117.768-.117 1.168 0 3.812 3.09 6.9 6.902 6.9 2.083 0 3.946-.926 5.212-2.386l-.898-.72c-1.055 1.198-2.594 1.958-4.314 1.958z"/></svg>
                    </span>
                </button>
            </div>
        );
    }
}

