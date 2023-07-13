import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/main'
import { AppSettingsProvider } from "./service/AppSettingsProvider";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppSettingsProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AppSettingsProvider>
  </React.StrictMode>
);

reportWebVitals();
