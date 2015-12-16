import React from 'react';
import { render } from 'react-dom';
import App from '../common/containers/App';

require('../common/stylesheets/main.scss');

const rootElement = document.getElementById('root');

render(
    <App/>,
    rootElement
);
