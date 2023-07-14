import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {HashRouter, BrowserRouter} from "react-router-dom"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <h1>hello</h1>
 <StrictMode>
  <BrowserRouter>
      < App /> 
  </BrowserRouter>
</StrictMode>
);
