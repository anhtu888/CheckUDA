import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import Indexheader from './components/Website/Header/Index'
import * as serviceWorker from './serviceWorker';
import IndexTrangChu from './components/TrangChu/Index';
import PageRouter from './components/PageRouter';
import App1 from './components/App1';
import IndexAdd from './components/Website/Add/Index'



ReactDOM.render(
    <App1 />
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
