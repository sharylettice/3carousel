import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Swipe from './components/Swipe';

ReactDOM.render(<Swipe />, document.getElementById('root'));
registerServiceWorker();
