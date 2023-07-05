import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/themes.css';
import './assets/css/App.css';
import './assets/css/index.css';
import './assets/css/bee.css';
import './assets/css/grass.css'


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

reportWebVitals();
