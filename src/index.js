import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './Css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


import Sidebar from './Component/Sidebar';
import MainRegion from './Component/MainRegion';
import MyApp from './Component/MyApp';
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(<MyApp/>, document.getElementById('root'));