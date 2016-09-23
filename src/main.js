import "bootstrap/dist/css/bootstrap.css"
import "css/main.css"

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppButton from './AppButton';
import AppButtonCount from './AppButtonCount';

ReactDOM.render(<AppButtonCount/>, document.getElementById('app'))